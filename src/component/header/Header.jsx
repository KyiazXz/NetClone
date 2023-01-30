import React from 'react'
import "./header.css"
import  { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/"><img className='header__icon' src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" ></img></Link>
            <Link to="/movies/popular"  style={{textDecoration:"none"}} ><span>Popular</span></Link>
            <Link to="/movies/top_rated"style={{textDecoration:"none"}} ><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}} ><span>Upcoming</span></Link>
            <Link to="/wish_list" style={{textDecoration:"none"}} ><span> Wish List</span></Link>    
        </div>
    </div>
  )
}
