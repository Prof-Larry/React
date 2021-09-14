import './Education.css'
const Education = () => {
    return ( 
        <div className="education">
            <h2 style={{width: "100vw", textAlign: "center"}}>EDUCATION</h2>
            <div className="edu-cards">
                <div className="edu-card edu-card-1">
                    <p className="degree">SSC</p>
                    <p>Indo Public School, Amravati</p>
                    <p>CGPA - 8.4</p>
                </div>
                <div className="edu-card edu-card-2">
                    <p className="degree">HSC</p>
                    <p>Prerna Juniour College, Nagpur</p>
                    <p>Percentage - 80%</p>
                </div>
                <div className="edu-card edu-card-3">
                    <p className="degree">B.Tech</p>
                    <p>Vishwakarma Institute Of Information Technology, Pune</p>
                    <p>TY B.Tech (CGPA) - 9.3</p>
                </div>
            </div>
        </div>
     );
}
 
export default Education;