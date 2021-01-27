import React from 'react'
import HolocronVR from '../assets/images/holocron-vr.png'
/**
 * @class - Hero
 * @description - defines the hero section for viewing
 */

 export default class Hero extends React.Component{
     render(){
         return(
             <div className="hero">
                 <div className="hero-wrapper">
                    <div className="hero-text">
                        <h1>Discover the all-new Holocron VR</h1>
                        <h4>The definitive VR headset from Microsoft.</h4>
                        <button>Learn More</button>
                    </div>
                    <div className="hero-image">
                        <img src={HolocronVR}/>
                    </div>
                 </div>
             </div>
         )
     }
     
 }