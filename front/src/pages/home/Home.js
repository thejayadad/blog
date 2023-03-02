import React from 'react'
import "./home.css"
import Categories from '../../components/categories/Categories'
import Post from '../../components/post/Post'

const Home = () => {
  return (
    <div>
        <main>
          <Categories />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>


    </div>
  )
}

export default Home