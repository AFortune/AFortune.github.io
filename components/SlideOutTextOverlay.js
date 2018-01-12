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
	    <CSSTransitionGroup
          transitionName="arrive-image"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
	    {this.state.show && <div><OverlayTop animationClassName="slide-up"/> 
	     <OverlayBottom  animationClassName="slide-down"/>
	     <img className="zoom-fade" src="https://source.unsplash.com/random/400x300"/>
	     </div>
	    }
	</CSSTransitionGroup>
	    <button onClick={this.toggle}>Toggle</button>
	    </div>;
    }
}

export const OverlayTop = props => <div className={props.animationClassName}>
    <div className="photo-title-container">
    <div className="photo-title-text-area">
    <div className="photo-title-title">BONES</div>
    <div className="photo-title-sub-title">
    <div className="photo-title-sub-title-line"></div>
    <div className="photo-title-sub-title-text"><span className="bold">300</span> pink</div>
    </div>
    </div>
    </div>
    </div>
    export const OverlayBottom = props => <div className={props.animationClassName}>
    <div className="photo-bottom-container">
    <div className="photo-bottom-button-container">
    <div className="circle-button">🌢</div>
    <div className="circle-button">✻</div>
    <div className="circle-button">⛵</div>
    </div>
    <div className="photo-bottom-price-container">$4.00 </div>
    </div>
    </div>

export default SlideOutTextOverlay;

