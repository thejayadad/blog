import React from 'react'
import "./updatepost.css"
import {Link} from "react-router-dom"

const UpdatePost = () => {
  return (
    <main>
        <h2 className='create-header'>Update Post</h2>
        <div className='create-post'>
        <h2 className='post-header'>Feeling a little different?</h2>
       <div className='post-text'>

        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <select>
          <option>Category</option>
          <option>one</option>
          <option>one</option>
          <option>one</option>
        </select>
        <div className='post-icon'>
        <Link className='img-link' to="/" >
        Gallery</Link>
        <button type='submit'>Submit</button>
        </div>
       </div>
      </div>
    </main>
  )
}

export default UpdatePost