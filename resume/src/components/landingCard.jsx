import React, { Component } from 'react';
import './landingCard.css';
class LandingCard extends Component {
    state = {  }

    scrollDown = () => {

    }
    render() { 
        return ( 
            <div className="landingCard">
                <div className="card-1">
                    <h2>WELCOME</h2>
                    <p>This is <strong>UJWAL</strong>, hope u find everything about me!!!</p>
                </div>
                <div className="card-2">
                    <button onClick={this.scrollDown} className="btn btn-warning btn-lg">EXPLORE</button>
                    <div className="arrow"></div>
                </div>
            </div>
        );
    }
}
 
export default LandingCard;