import React from 'react'
import VR from '../assets/images/virtual_reality.png'
import Conference from '../assets/images/conference.png'
import VisionTech from '../assets/images/vision_tech.png'
/**
 * @class - About
 * @description - about section
 */
export default class About extends React.Component{

    componentDidMount(){
        const elements = document.getElementsByClassName("info-section")
        let counter = 0
        window.addEventListener('scroll', ()=>{
            try{
                let element =elements[counter] 
                if(element.getBoundingClientRect().top < 0){
                    element.classList.add("fade-in")
                    counter += 1
                    
                    
                }
            }
            catch{}



        })
    }

    render(){
        return(
            <div className="about">
                <h1 className="title">ABOUT</h1>
                <div className="info-section">
                    <img src={VR}/>
                    <div className="info-para">
                        <h1>Relax with Xbox Gamepass</h1>
                        <p>Kick back and relax with the integration into Xbox Gamepass, a service that allows you to play any Xbox game for a monthly price.</p>
                    </div>
                </div>
               
                <div className="info-section">
                    <img src={VisionTech}/>
                    <div className="info-para">
                        <h1>All-new, all-encompassing</h1>
                        <p>Envision yourself in many places with the latest haptic feedback technology, developed by Microsoft Labs.</p>
                    </div>
                </div>
                <div className="info-section">
                    <img src={Conference}/>
                    <div className="info-para">
                        <h1>For work, and home</h1>
                        <p>With integrations into many Microsoft platforms such as MS Teams and Skype for Business, you can get a truly fine experience. </p>
                    </div>
                </div>
                <div className="info-boxes">
                    <div className="info-box">
                        <i className="fa fa-4x fa-eye"></i>
                        <h4>All immersive, all exclusive</h4>
                        <p>Holocron allows for all-immersive vision, feeding from the environment, straight into your eyes.</p>
                    </div>
                    <div className="info-box">
                        <i className="fa fa-4x fa-headphones"></i>
                        <h4>Feel the sound</h4>
                        <p>An all new surround sound system, with Dolby Digital allows you to hear even the finest details.</p>
                        
                    </div>
                    <div className="info-box">
                        <i className="fa fa-4x fa-street-view"></i>
                        <h4>Feel everything</h4>
                        <p>Immersion to the max. Holocron's exclusive haptic feedback technology allows you to feel everything in VR.</p>
                    </div>
                </div>

                
            </div>
        )

    }
}

/*
 <div className="info-section">
                    <img src={VR}/>
                    <div className="info-para">
                        <h2>Relax with Xbox Gamepass</h2>
                        <p>Kick back and relax with the integration into Xbox Gamepass, a service that allows you to play any Xbox game for a monthly price.</p>
                    </div>
                </div>
               
                <div className="info-section">
                    <img src={VisionTech}/>
                    <div className="info-para">
                        <h2>All-new, all-encompassing</h2>
                        <p>Envision yourself in many places with the latest haptic feedback technology, developed by Microsoft Labs.</p>
                    </div>
                </div>
                <div className="info-section">
                    <img src={Conference}/>
                    <div className="info-para">
                        <h2>For work, and home</h2>
                        <p>With integrations into many Microsoft platforms such as MS Teams and Skype for Business, you can get a truly fine experience. </p>
                    </div>
                </div>--->
*/