import React from 'react'

/**
 * @class - footer
 * @description - contains the footer for the page
 */


export default class Footer extends React.Component{
    render(){
        return(<div className="footer">
            <div className="footer-wrapper">
            <div className="footer-group">
                <h2>Sitemap</h2>
                <a>Home</a>
                <a>About</a>
                <a>Products</a>
                <a>Contact Us</a>
            </div>
            <div className="footer-group">
                <h2>Contact</h2>
                <div className="footer-link">
                    <i className="fa fa-facebook"></i>
                    <a>Facebook</a>
                </div>
                <div className="footer-link">
                    <i className="fa fa-twitter"></i>
                    <a>Twitter</a>
                </div>
                <div className="footer-link">
                    <i className="fa fa-instagram"></i>
                    <a>Instagram</a>
                </div>
            </div>
            </div>
           

            <p>&copy; Microsoft - 2020</p>
        </div>)
    }
}