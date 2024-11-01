import React from 'react'
import './Projects.css'
import mywork_data from '../../assets/mywork_data'
const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>My latest work</h1>
      </div>
      <div className="projects-container">
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
      <div className="projects-showmore">
        <p>Show More</p>
        <p>🡢</p>
      </div>
    </div>
  )
}

export default Projects
