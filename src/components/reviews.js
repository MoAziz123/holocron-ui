
import React from 'react'
import ProfilePic from '../assets/images/profile_pic.png'
import ProfilePicWoman from '../assets/images/profile_pic_woman.png'
export default class Reviews extends React.Component{

    constructor(props){
        super(props)
        this.state={
            elements: document.getElementsByClassName("review"),
            counter:0
        }
    }
    componentDidMount(){
        this.state.elements[0].style.display = "block"
    }
    handleLeftClick(){
        if(this.state.counter > 0)
        {
            this.state.elements[this.state.counter].style.display = "none"
            this.state.elements[this.state.counter-1].style.display = "block"
            this.setState({
                counter:this.state.counter-1
            })
        }
        else
        {
            this.state.elements[this.state.counter].style.display = "none";
            this.setState({counter:this.state.elements.length-1})
            this.state.elements[this.state.elements.length-1].style.display = "block";        
        }
    }
    handleRightClick(){
        if(this.state.counter < this.state.elements.length-1)
        {
            this.state.elements[this.state.counter].style.display = "none"
            this.state.elements[this.state.counter+1].style.display = "block"
            this.setState({
                counter:this.state.counter+1
            })
        }
        else
        {
            this.state.elements[this.state.counter].style.display = "none";
            this.setState({counter:0})
            this.state.elements[0].style.display = "block";
        }
    }

    render(){
        return(
            <div className="reviews">
                <h1 className="title">Reviews</h1>

                <div className="review-wrapper">
                    <div className="review-carousel">
                        <button className="review-button" onClick={(e)=>this.handleLeftClick()}><i className="fa fa-3x fa-arrow-left"/></button>
                        <div className="review">
                            <div className="profile-pic">
                                <img src={ProfilePic}/>
                            </div>
                            <i className="fa fa-2x fa-left-quote"/>
                            <div className="review-text">
                                <h2>John Smith</h2>
                                <h3>CEO of Sparky Industries</h3>
                                <p>Lorem ipsum dolor sit amet, vide omnium senserit in nec, ea quas rebum philosophia pro. Ea has vero epicuri probatus, duo facer audire ad, sed ut veniam invidunt tincidunt. Ut doctus eleifend usu. Eam tota tantas inermis in, has ei modo doming, vix adolescens voluptatum elaboraret eu. Has assum vitae accumsan id, ea sit dolore ponderum assueverit, cu tincidunt scriptorem dissentiunt nec. Ea quando deleniti voluptatibus mel, te sint tamquam quo.
</p>
                            </div>
                        </div>
                        <div className="review">
                            <div className="profile-pic">
                                <img src={ProfilePicWoman}/>
                            </div>
                            <i className="fa fa-2x fa-left-quote"/>
                            <div className="review-text">
                                <h2>Kirsty Hansson</h2>
                                <h3>Product Tester</h3>
                                <p>Lorem ipsum dolor sit amet, vide omnium senserit in nec, ea quas rebum philosophia pro. Ea has vero epicuri probatus, duo facer audire ad, sed ut veniam invidunt tincidunt. Ut doctus eleifend usu. Eam tota tantas inermis in, has ei modo doming, vix adolescens voluptatum elaboraret eu. Has assum vitae accumsan id, ea sit dolore ponderum assueverit, cu tincidunt scriptorem dissentiunt nec. Ea quando deleniti voluptatibus mel, te sint tamquam quo.
</p>
                            </div>
                        </div>
                        <button className="review-button" onClick={(e)=>this.handleRightClick()}><i className="fa fa-3x fa-arrow-right"/></button>
                    </div>
                </div>


                <div className="review-wrapper-alt">
                        <div className="review-alt">
                            <div className="profile-pic">
                                <img src={ProfilePic}/>
                            </div>
                            <i className="fa fa-2x fa-left-quote"/>
                            <div className="review-text">
                                <h2>John Smith</h2>
                                <h3>CEO of Sparky Industries</h3>
                                <p>Lorem ipsum dolor sit amet, vide omnium senserit in nec, ea quas rebum philosophia pro. Ea has vero epicuri probatus, duo facer audire ad, sed ut veniam invidunt tincidunt. Ut doctus eleifend usu. Eam tota tantas inermis in, has ei modo doming, vix adolescens voluptatum elaboraret eu. Has assum vitae accumsan id, ea sit dolore ponderum assueverit, cu tincidunt scriptorem dissentiunt nec. Ea quando deleniti voluptatibus mel, te sint tamquam quo.
</p>
                            </div>
                        </div>
                        <div className="review-alt">
                            <div className="profile-pic">
                                <img src={ProfilePicWoman}/>
                            </div>
                            <i className="fa fa-2x fa-left-quote"/>
                            <div className="review-text">
                                <h2>Kirsty Hansson</h2>
                                <h3>Product Tester</h3>
                                <p>Lorem ipsum dolor sit amet, vide omnium senserit in nec, ea quas rebum philosophia pro. Ea has vero epicuri probatus, duo facer audire ad, sed ut veniam invidunt tincidunt. Ut doctus eleifend usu. Eam tota tantas inermis in, has ei modo doming, vix adolescens voluptatum elaboraret eu. Has assum vitae accumsan id, ea sit dolore ponderum assueverit, cu tincidunt scriptorem dissentiunt nec. Ea quando deleniti voluptatibus mel, te sint tamquam quo.
</p>
                            </div>
                        </div>
                    </div>
            </div>
        )       
    }
}