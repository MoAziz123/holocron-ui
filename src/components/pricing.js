import React from 'react'

export default class Pricing extends React.Component{

    render(){
        return(
        <div className="pricing">
            <h1 className="title">Choose your plan</h1>
            <div className="pricing-wrapper">
            <div className="payment-box">
                <h3>Basic</h3>
                <ul className="payment-features">
                        <li><i className="fa fa-check"/> Haptic feedback technology</li>
                        <li><i className="fa fa-check"/> Free support offered</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                </ul>
                <p>£249</p>
                <button>buy now</button>
            </div>
            <div className="payment-box">
                <h3>Best</h3>
                <ul className="payment-features">
                        <li><i className="fa fa-check"/> Haptic feedback technology</li>
                        <li><i className="fa fa-check"/> Free support offered</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                </ul>
                <p>£449</p>
                <button>buy now</button>
            </div>
            <div className="payment-box">
                <h3>intermediate</h3>
                <ul className="payment-features">
                        <li><i className="fa fa-check"/> Haptic feedback technology</li>
                        <li><i className="fa fa-check"/> Free support offered</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                </ul>
                <p>£349</p>
                <button>buy now</button>
            </div>
            </div>

            <div className="pricing-wrapper-alt">
            <div className="payment-box">
                <h3>Basic</h3>
                <ul className="payment-features">
                        <li><i className="fa fa-check"/> Haptic feedback technology</li>
                        <li><i className="fa fa-check"/> Free support offered</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                </ul>
                <p>£249</p>
                <button>buy now</button>
            </div>
           
            <div className="payment-box">
                <h3>intermediate</h3>
                <ul className="payment-features">
                        <li><i className="fa fa-check"/> Haptic feedback technology</li>
                        <li><i className="fa fa-check"/> Free support offered</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                </ul>
                <p>£349</p>
                <button>buy now</button>
            </div>
            <div className="payment-box">
                <h3>Best</h3>
                <ul className="payment-features">
                        <li><i className="fa fa-check"/> Haptic feedback technology</li>
                        <li><i className="fa fa-check"/> Free support offered</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                        <li><i className="fa fa-check"/> random thing here</li>
                </ul>
                <p>£449</p>
                <button>buy now</button>
            </div>
            </div>
           
        </div>
    )}
}