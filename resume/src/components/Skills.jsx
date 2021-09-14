import cppimg from './imgs/c-logo.png';
import javaimg from './imgs/java.png';
import jsimg from './imgs/JavaScript-logo.png';
import reactimg from './imgs/reactimg.png';
import nodeimg from './imgs/node.png';
import mongoimg from './imgs/mongo.png';
import './Skills.css';


const Skills = () => {
    return ( 
        <div className="skills">
            <h2 style={{textAlign: "center"}}>SKILLS</h2>
            <div className="skill-img">
                <img src={cppimg} alt="c++" />
                <img src={javaimg} alt="java" />
                <img src={jsimg} alt="javascript" />
                <img src={reactimg} alt="React" />
                <img src={nodeimg} alt="nodejs" />
                <img src={mongoimg} alt="mongoDb" />
            </div>
        </div>
     );
}
 
export default Skills;