import './Projects.css';
const Projects = (props) => {
    const {title, img, link, text} = props;
    console.log(img)
    return ( 
        <div className="project">
            <img src={img} alt={title} />
            <h4 className="project-title"><a href={link}>{title}</a></h4>
            <p className="project-description">{text}</p>
        </div>
     );
}
 
export default Projects;