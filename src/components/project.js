import projects from '../assets/js/projectData'


function Project(props) {

  return ( 
    projects.map((project, index) => (
      <div className='project-card' key={index}>
        <div className="project-container">
          <p className='project-name'>{project.projectName}</p>
          <a href={project.projectUrl} className='project-link' target="blank">View my work!</a>
        </div>
      </div>
    ))
  )
}

export default Project