import './About.scss'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="aboutLeft">
        <img src="./asserts/profile.jpg" alt="" />
      </div>
      <div className="aboutRight">
        <h1>ABOUT ME</h1>
        <h3>DO SOME AWESOME</h3>
        <h3>STUFF WITH ME.</h3>
        <h5><span></span>UI /UX Designer & Web Developer</h5>
        <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas facilis illo harum, aliquam ut omnis maiores vitae, veniam itaque voluptate perferendis nostrum odio quisquam error quasi sunt laborum mollitia quidem!</small>
        <a href="Raju Resume.pdf" download>Download CV</a>
      </div>
    </div>
  )
}

export default About
