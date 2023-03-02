import React from 'react'
import "./postdetail.css"
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return (
    <main>
    <div className='card'>
        <div className='card-banner-detail'>
            <img
                alt="card-banner"
                src='https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg?auto=compress&cs=tinysrgb&w=600'
            />
        </div>
        <div className='card-content'>
            <button>Data</button>
            <h3>
                <Link to="/">
                    Great database Items
                </Link>
            </h3>
            <p>
            This NoSQL database oriented to documents (by documents like JSON) combines some of the features from
              relational
              databases, easy to use and the multi-platform is the best option for scale up and have fault
              tolerance, load balancing,
              map reduce, etc.
            </p>
            <div className='card-bottom'>
                <div className='user-profile'>
                    <img
                    alt="profile"
                    src="https://images.pexels.com/photos/1493296/pexels-photo-1493296.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </div>
                <div className='card-bottom-content'>
                    <Link to="/">Sam Walker</Link>
                    <p className='sm-text'>
                        <span>Views</span>
                        <span>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default PostDetail