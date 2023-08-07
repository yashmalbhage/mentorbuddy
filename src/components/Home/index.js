import React from 'react'
import homeimg from '../../assets/images/homepageimg.jpeg'
import { Link } from 'react-router-dom'
import './index.scss'


const Home = () => {
  return (
    <div className="home-page">
      <div className="text-zone">
        <h1> Boost up your aptitude skills with the new way of learning!! </h1>
        <img src={homeimg} alt='developer'/>
        {/* <Link to='/contact'>Get started</Link> */}
      </div>
    </div>
  )
}

export default Home
