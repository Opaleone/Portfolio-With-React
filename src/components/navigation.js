import { useNavigate } from 'react-router-dom'

function Navigation() {
  
  let navigate = useNavigate()

  const homeNavigate = () => {
    navigate('/')
  }

  const aboutNavigate = () => {
    navigate('/about-me')
  }

  const projectNavigate = () => {
    navigate('/projects')
  }

  const contactNavigate = () => {
    navigate('/contact')
  }

  return (
    <div className='nav-bar'>
      <p className='page-title' onClick={homeNavigate}>Leone Varando</p>
      <ul className='links'>
        <li className='single-link' onClick={aboutNavigate}>About Me</li>
        <li className='single-link' onClick={projectNavigate}>Projects</li>
        <li className='single-link' onClick={contactNavigate}>Contact Me</li>
        
          <a className='nav-anchor' href='https://drive.google.com/file/d/1t0U57fR821nmcQ2H4FRB5KQVD08Be-t7/view' target='blank'>
            <li>Resume
            </li>
          </a>
      </ul>
    </div>
  )
}

export default Navigation