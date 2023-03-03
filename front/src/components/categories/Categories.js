import React from 'react'
import "./categories.css"
import { Link } from 'react-router-dom'


const Categories = () => {
  return (
    <section className='categories'>
        <button>Sports</button>
        <button>Sports</button>
        <button>Sports</button>
        <button>Sports</button>
        <button>Sports</button>
        <Link to="/create">Create</Link>
    </section>
  )
}

export default Categories