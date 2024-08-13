import "./hero.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Welcome to Academia, where innovation, excellence, and opportunity
          come together to empower your future
        </h1>
        <p>
          At Acedemia, we foster a culture of innovation and excellence,
          providing students with a transformative educational journey. Explore
          your passions, develop your skills, and unlock a future filled with
          possibilities in our dynamic and supportive environment.
        </p>
        <button className="btn">Explore more <FaArrowAltCircleRight/> </button>
      </div>
    </div>
  );
};

export default Hero;
