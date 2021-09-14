import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LandingCard from './components/landingCard';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import hh from './components/imgs/hh.png';
import yelpcamp from './components/imgs/yelpcamp.png';
import Footer from './components/Footer';

class App extends Component {
  state = { 
    name: "Ujwal Shirpurkar",
    age: 20,
    skills: ["JS", "Java", "C++", "Node js", "React", ""],
    projects: [
    {
      title: "Healthy Harvest",
      id: 1,
      img: hh,
      link: "https://mohitbalwani.github.io/Hackathon/",
      text: "India is an agricultural country and one third population depends on the agricultural sector directly or indirectly. As food being essential need of mankind, much emphasis has been on commercializing agricultural production.Agricultural marketing is mainly the buying and selling of agricultural products.India’s ongoing lockdown to control the spread of coronavirus is threatening the agriculture sector as it restricted the movement of farmers across the cities to earn a living.To solve with issue, we came up with an idea to create a platform where people can directly purchase anything from farmers with the comfort from their home."
    },
    {
      title: "YelpCamp",
      id: 2,
      img: yelpcamp,
      link: "https://desolate-brushlands-87934.herokuapp.com/",
      text: "Today India is also known for it's beauty, in this World there are many places which we haven't explored yet, these place are still mysteries, who knows how beautiful these places are. We know you wanted to visit such beautiful places but didn't know how to and where to visit. So, here it is, this app will let you go on such beautiful and wonderful places with few clicks away, check out some newly suggested places and you can also add some new places which you think are worth visiting once in an entire life. There are profits waiting for you just visit the link above.."
    }
  ]
   }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar logo="logo.svg"/>
        <LandingCard />
        <Education />
        <Skills /> 
        <div className="project-container">
          <h2 className="project-heading">Projects</h2>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "80%"}} className="projects">
            {this.state.projects.map(project => {
              return <Projects key={project.id} title={project.title} img={project.img} link={project.link} text={project.text} />
            })}
          </div>
        </div>
        <Footer />
        
      </React.Fragment>
     );
  }
}
 
export default App;
