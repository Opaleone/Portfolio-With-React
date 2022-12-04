import Project from '../components/project'
import Navigation from '../components/navigation'

const Projects = () => {
  return (
    <main>
      <Navigation />
      <div className='main-project-container'>
        <Project />
      </div>
    </main>
  )
}

export default Projects