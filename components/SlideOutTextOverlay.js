import React, {Component} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { action } from '@storybook/addon-actions';
import "./SlideOutTextOverlay.css";

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
          transitionName="slide-up"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
	    {this.state.show && <h3> Top Title</h3> }
	</CSSTransitionGroup>
	    <CSSTransitionGroup
          transitionName="slide-down"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
	    {this.state.show && <h3> Bottom Title</h3>}
	</CSSTransitionGroup>
	    <button onClick={this.toggle}>Toggle</button>
	    </div>;
    }
}


export default SlideOutTextOverlay;

      
