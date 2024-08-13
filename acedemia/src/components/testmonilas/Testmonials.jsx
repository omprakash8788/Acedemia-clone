import "./testmonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testmonials = () => {
    const slider = useRef();
    let tx =0;
    const slideFarward=()=>{
        
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }


  return (
    <div className="testimonials">
      <img src={next_icon} onClick={slideFarward} className="next-btn" alt="" />
      <img src={back_icon} onClick={slideBackward} className="back-btn" alt="" />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Priya</h3>
                  <span>Eatos, India</span>
                </div>
              </div>
              <p>
                An exceptional institution that fosters innovation, critical
                thinking, and a lifelong passion for learning.
              </p>
            </div>
          </li>
          {/* second user  */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Sumitas</h3>
                  <span>Anazoia, India</span>
                </div>
              </div>
              <p>
                An exceptional institution that fosters innovation, critical
                thinking, and a lifelong passion for learning.
              </p>
            </div>
          </li>
          {/* third user  */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Riya</h3>
                  <span>Zoho, India</span>
                </div>
              </div>
              <p>
                An exceptional institution that fosters innovation, critical
                thinking, and a lifelong passion for learning.
              </p>
            </div>
          </li>
          {/* fouth user */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Prakash</h3>
                  <span>Thysse, India</span>
                </div>
              </div>
              <p>
                An exceptional institution that fosters innovation, critical
                thinking, and a lifelong passion for learning.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testmonials;
