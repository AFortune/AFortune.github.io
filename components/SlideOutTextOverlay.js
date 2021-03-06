import React, {Component} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { action } from '@storybook/addon-actions';
import "./ArriveImageAnimation.css";
import "./ImageOverlays.css";

// So the question remaining here is how to
// apply multiple animations on unmount.

class Toggler extends Component {
    constructor(props) {
	super(props)
	this.state = {show: true}
	this.toggle = this.toggle.bind(this)
    }
    toggle() {
	this.setState((prevState,props) => {
	    prevState.show = !prevState.show
	    return prevState
	})
    }
    render() {
	return <div>
		<button onClick={this.toggle}>Toggle</button>
	    {this.state.show && this.props.children}
	    </div>
    }
}



export const SlideOutTextOverlaySimple  = props => {
	return <div className="complete-image-tile">
	    <div><OverlayTop make={props.make} animationClassName="slide-up"/> 
	     <div className="tile-image-container">
	     <div className="tile-image-background">{props.make}</div>
	<img className="zoom-fade tile-image" src={props.url}/>
	     </div>
	     <OverlayBottom  animationClassName="slide-down"/>
	     </div>
	    </div>;
};
class SlideOutTextOverlay extends Component {
    constructor(props) {
	super(props)
	this.state = {show: true}
	this.toggle = this.toggle.bind(this)
    }
    toggle() {
	this.setState((prevState,props) => {
	    prevState.show = !prevState.show
	    return prevState
	})
    }
    componentDidMount() {
	action('mounted')('yoho')
    }
    componentWillUnmount() {
	action('unmounting')('yoho')
    }
    render() {
	return <div>
	    <button onClick={this.toggle}>Toggle</button>
	    <CSSTransitionGroup
          transitionName="arrive-image"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
	    {this.state.show && <div><OverlayTop make="BONES" animationClassName="slide-up"/> 
	     <div className="tile-image-container">
	     <div className="tile-image-background">BONES</div>
	     <img className="zoom-fade tile-image" src="http://goggles.wedze.com/winter-2017-2018/assets/img/products/goggles/bones-700/bones-700-green-photochromic.png"/>
	     </div>
	     <OverlayBottom  animationClassName="slide-down"/>
	     </div>
	    }
	</CSSTransitionGroup>
	    </div>;
    }
}

export const OverlayTop = props => <div className={props.animationClassName}>
    <div className="photo-title-container">
    <div className="photo-title-text-area">
    <div className="photo-title-title">{props.make}</div>
    <div className="photo-title-sub-title">
    <div className="photo-title-sub-title-line"></div>
    <div className="photo-title-sub-title-text"><span className="bold">300</span> pink</div>
    </div>
    </div>
    </div>
    </div>;

export const OverlayBottom = props => <div className={props.animationClassName}>
    <div className="photo-bottom-container">
    <div className="photo-bottom-button-container">
    <div className="circle-button">🌢</div>
    <div className="circle-button">✻</div>
    <div className="circle-button">⛵</div>
    </div>
    <div className="photo-bottom-price-section">
    <div className="photo-bottom-price-container">$4.00 </div>
    <div className="photo-bottom-price-overlay">$4.00 </div>
    </div>
    </div>
    </div>

export default SlideOutTextOverlay;

