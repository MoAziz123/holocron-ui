import React from 'react'
import MicrosoftLogo from '../assets/images/microsoft-logo.png'

/**
 * @class - Navbar
 * @description - contains main links of website
 * @since 1.0.0
 */

export default class Navbar extends React.Component{
    
    render(){
        return(
            <div className="navbar">
                <div className="logo">
                    <img src={MicrosoftLogo}/>
                </div>
                <div className="links-wrapper">
                    <div className="links">
                        <a className="link">Home</a>
                        <a className="link">About Us</a>
                        <a className="link">Products</a>
                        <a className="link">Contact Us</a>
                    </div>
                </div>
            </div>
        )
    }

}