/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Project.css";
import { details } from "./details";
import Cards from "./Cards";

const Project = () => {
  return (
    <>
      <div className="project section" id="projects">
        <center>
          <div className="project-head">
            <h2>Projects</h2>
            <p>Built Items</p>
          </div>
          
        </center>

        <div className="main-card">

        {details.map((pro)=>{
            return(
                <Cards pro={pro} />
            )
        })}

        </div>

        



      </div>
    </>
  );
};

export default Project;
