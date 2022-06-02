import React from "react";
import TypewriterComponent from 'typewriter-effect'; 
import '../../styles/Jumbotron.scss';

function Jumbotron({ children }) {
  return (
    <div>
    <div
      style={{ height: 200, clear: "both", paddingTop: 50, textAlign: "center" }}
    >
      <div className="wrapper">
        <span className="content">
          <h1>Ploom</h1>
          <h1>Ploom</h1>
        </span>
        <span className="text">
          <h3>
            Pharmaceutical <span>
            <TypewriterComponent
            options={{
            strings:["Edibles", "Oils", "Vape Pens"],
            autoStart:true,
            delay:75,
            loop:true
            }}
            />
            </span>
          </h3>
          </span>
        </div>
      {children}
    </div>
    </div>
  );
}

export default Jumbotron;
