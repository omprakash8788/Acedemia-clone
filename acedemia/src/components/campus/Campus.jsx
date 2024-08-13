import './campus.css'
import cci from '../../assets/cci1.webp'
import cci1 from '../../assets/cci2.jpeg'
import cci2 from '../../assets/cci3.jpeg'
import cci3 from '../../assets/cci4.webp'
import { FaArrowCircleRight } from "react-icons/fa";

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
        <img src={cci} alt="" />
        <img src={cci1} alt="" />
        <img src={cci2} alt="" />
        <img src={cci3} alt="" />

        </div>
        <button className='btn dark-btn'>See more here <FaArrowCircleRight/>  </button>
    </div>
  )
}

export default Campus
