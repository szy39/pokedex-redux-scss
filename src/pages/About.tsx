import React from 'react'
import Wrapper from '../sections/Wrapper'
import rdxthnk from "../assets/rdxthnk.jpg"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
function About() {
  return (
    <div className='profile'>
      <img src={rdxthnk} alt="avatar" 
      className='profile-image'/>
      <h1 className="profile-text">
        Mustafa Eymen Yılmaz
      </h1>
      <h2 className="profile-text">
        Frontend Web Developer
      </h2>
      <h4 className="profile-text">React/Redux Typescript Pokemon Project</h4>
      <div className="profile-links">
        <a href="https://github.com/szy39">
        <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/eyilmaz39">
        <FaLinkedin/>
        </a>
      </div>
    </div>
  )
}

export default Wrapper(About)