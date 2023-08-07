import React from 'react'
import './index.scss'
import {
    faPython,
    faDocker,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,} from '@fortawesome/free-brands-svg-icons'
import sql from '../../assets/images/sql.jpg'
import keras from '../../assets/images/keras.png'
import numpy from '../../assets/images/numpy.png'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'


const About = () => {
  return (
    
    <div className="container about-page">
              <Loader type='square-spin'/>

        <div className="text-zone1">
            <h1>
            CERTIFICATION PROGRAMS OFFERED
            </h1>
            <div className="cert">
                <div className="course">
                    <h2>
                    Artificial Int, Machine Learning & Data Analytics
                    </h2>
                    <p>
                    AI is about smart machines, Machine Learning teaches them how to be smart.

                    </p>
                    <button>Learn More</button>

                </div>
                <div className="course">
                    <h2>
                    Data science and Analytics
                    </h2>
                    <p>
                    Data science extracts insights, analytics interprets for decisions.

                    </p>
                    <button>Learn More</button>
                </div>
                <div className="course">
                    <h2>
                    Cyber Security & Ethical Hacking
                    </h2>
                    <p>
                    Cybersecurity safeguards digital systems, while ethical hacking tests and enhances their defenses.

                    </p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faDocker} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={numpy} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        {/* <Loader type='square-spin'/> */}


    </div>
  )
}

export default About
