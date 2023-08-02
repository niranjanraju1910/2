import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import Home from '../../components/home/Home'
import Nav from '../../components/nav/Nav'
import './Main.scss'

const Main = () => {
  return (
    <div className='main'>
      <Home />
      <Nav />
      <About />
      <Contact />
    </div>
  )
}

export default Main
