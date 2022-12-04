import Navigation from "../components/navigation"
import Footer from "../components/footer"

const ContactForm = () => {
  return(
    <main className="main-contact-container">
      <Navigation />
      <p className='form-header'>Give me a shout!</p>
      <form className="form-container"
        action="mailto:lvarando@gmail.com"
        method="post" enctype="text/plain">
        <input id="name-input" className="form-input" type="text" placeholder="John Doe" required></input>
        <input id="name-input" className="form-input" type="email" placeholder="jdoe@gmail.com" required></input>
        <textarea id="comment-textarea" className="form-input" type="text"
        placeholder="Something you'd like to say?"></textarea>

        <input id="submit-button" type="submit" value='Send'></input>
      </form>
      <Footer />
    </main>
  )
}

export default ContactForm