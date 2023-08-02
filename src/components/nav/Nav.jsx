import './Nav.scss'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiContactsLine } from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const [active, setActive] = useState('#')

  return (
    <nav className='nav'>
      <a href="#home" className={active === '#' ? 'active' : ''} onClick={() => setActive("#")}><AiOutlineHome /></a>
      <a href='#about' className={active === '#about' ? 'active' : ''} onClick={() => setActive("#about")}><AiOutlineUser /></a>
      <a href="#contact" className={active === '#contact' ? 'active' : ''} onClick={() => setActive("#contact")}><RiContactsLine /></a>
    </nav>
  )
}

export default Nav
