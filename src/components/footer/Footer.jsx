import './Footer.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/profile' >Profile</NavLink>
      <NavLink to='/projects' >Projects</NavLink>
      <NavLink to='/services' >Services</NavLink>
    </div>
  )
}

export default Footer
