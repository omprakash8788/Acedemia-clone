import "./program.css";
import student1 from "../../assets/student1.webp";
import student2 from "../../assets/student2.webp";
import student3 from "../../assets/student3.jpeg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={student1} alt="studet1" />
        <div className="caption">
          <img className="Img" src={program_icon_1} alt="program1" />
          <p>Gradution Program</p>
        </div>
      </div>

      <div className="program">
        <img src={student2} alt="studet1" />
        <div className="caption">
          <img src={program_icon_2} alt="program1" />
          <p>Master Program</p>
        </div>
      </div>

      <div className="program">
        <img src={student3} alt="studet1" />
        <div className="caption">
          <img src={program_icon_3} alt="program1" />
          <p>PHD Program</p>
        </div>
      </div>

    </div>
  );
};

export default Program;
