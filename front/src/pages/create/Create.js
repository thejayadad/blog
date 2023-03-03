import React from 'react'
import "./create.css"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { request } from '../../utils/fetchApi'



const Create = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState("")
  const [category, setCategory] = useState("")
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)

  const categories = [
    'sports',
    'entertainment',
    'fashion',
    'diy',
    'programming',

  ]

  const onChangeFile = (e) => {
    setImg(e.target.files[0])
  }

  const handleCloseImg = () => {
    setImg(null)
  }

  const handleCreateBlog = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      let filename = null
      if (img) {
        filename = crypto.randomUUID() + img.name
        formData.append("filename", filename)
        formData.append("image", img)

        await fetch(`http://localhost:5001/upload`, {
          method: "POST",
          body: formData
        })
      } else {
        return
      }

      const options = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }

      const body = {
        title,
        desc,
        category,
        photo: filename
      }

      const data = await request('/blog', "POST", options, body)
      navigate(`/updatepost/${data._id}`)


    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main>
        <h2 className='create-header'>Create Post</h2>
        <div className='create-post'>
        <h2 className='post-header'>Whats on your mind?</h2>
       <div className='post-text'>
       <form onSubmit={handleCreateBlog} encType="multipart/form-data">

        <input
        onChange={(e) => setTitle(e.target.value)}
        type="text" placeholder="Title" />
        <input
        onChange={(e) => setDesc(e.target.value)}
        type="text" placeholder="Description" />
        <label>Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {
          categories.map((category) => (
            <option key={crypto.randomUUID()} value={category}>{category}</option>
          ))
        }
        </select>
        <div className='post-icon'>
        <label htmlFor='image' className="labelFileInput">
                Image: <span>Upload here</span>
              </label>
              <input
                id="image"
                type="file"
                className="input"
                onChange={onChangeFile}
                style={{ display: 'none' }}
              />
              {img && <p className="imageName">{img.name} <i onClick={() => handleCloseImg()} class="fas fa-times-octagon"></i></p>}


        <button type='submit'>Submit</button>
        </div>
        </form>

       </div>
      </div>
    </main>
  )
}

export default Create