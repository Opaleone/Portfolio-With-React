import Footer from '../components/footer'
import Navigation from '../components/navigation'

const AboutMe = () => {
  return (
    <main>
      <Navigation />
      <div className="about-me-container">
        <img src="https://avatars.githubusercontent.com/u/106971202?v=4" alt="profile-pic" className="profile-pic"></img>
        <div className='divider'></div>
        <p className='bio'>Hello! My name is Leone Varando. I am a Full Stack Web developer who had experience creating
        projects with HTML-CSS, JavaScript, React.JS, and much more.<br></br><br></br>I have many hobbies outside of my programming career as well. One such hobby is music production. I like to
        create music
        as well as listen to it regularly. Another hobby of mine is FPV drone flying. This is a hobby I have acquired
        recently and
        really enjoy as it makes me feel as though I am flying!<br></br><br></br>
        I've began pursuing coding to jumpstart my career into something that gives me satisfaction in life as well as
        give me the ability
        to connect with others in a special way. I will get to create things for others, inspire others, and teach
        others through a
        medium that will quickly become something everyone will have to have a profiency in at some point.</p>
      </div>
      <Footer />
    </main>
  )
}

export default AboutMe