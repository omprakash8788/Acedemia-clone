import './about.css'
import about_img from '../../assets/university-girl.webp'
import { FaRegPlayCircle } from "react-icons/fa";
const About = ({setPlay}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
            <FaRegPlayCircle className='play-icon' onClick={()=>setPlay(true)}/>
        </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Tomorrow Leaders Today</h2>
            <p>At University, we are dedicated to fostering a vibrant community of learners and innovators. Our diverse programs and expert faculty prepare students for success in a rapidly changing world, offering a rich blend of academic excellence, personal growth, and opportunities for meaningful impact.</p>

        </div>
    </div>
  )
}

export default About
