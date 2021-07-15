import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display: 'flex', fontSize:'2rem',height:'80vh',justifyContent:'center',alignItems:'center'}}>
       Pagination project
       <Link to='/1' style={{textDecoration:'none', color:'green', padding:'1rem'}}>Go to posts</Link>
    </div>
  )
}

export default Home
