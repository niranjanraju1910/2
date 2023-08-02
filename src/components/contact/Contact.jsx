import './Contact.scss'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1 className='contactText'>CONTACT ME</h1>
      <div className="contactContainers">
        <div className="contactContainer">
          <AiOutlineMail className='contactIcon' />
          <h3>Gmail</h3>
          <a href="mailto:niranjanraju1910@gmail.com" target='blank'>send message</a>
        </div>
        <div className="contactContainer">
          <AiOutlineWhatsApp className='contactIcon' />
          <h3>WhatsApp</h3>
          <a href="https://api.whatsapp.com/send?phone=9849592791" target='blank'>send message</a>

        </div>
        <div className="contactContainer">
          <CiLinkedin className='contactIcon' />
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com" target='blank'>send message</a>

        </div>
      </div>
    </div>
  )
}

export default Contact
