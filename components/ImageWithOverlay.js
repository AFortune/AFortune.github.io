import React, {Component} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { action } from '@storybook/addon-actions';
import './FadeInAndOutImage.css'

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

	    <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
	    {this.state.show && this.props.children}
	    </CSSTransitionGroup>
	    </div>
    }
}



class FadeInAndOutImageWithToggle extends Component {
    constructor(props) {
	super(props)
    }
    render() {
	return <Toggler>

	    <FadeInAndOutImage />
	    </Toggler>;
    }
}
class FadeInAndOutImage extends Component {
    constructor(props) {
	super(props)
    }
    componentDidMount() {
	action('mounted')('yoho')
    }
    componentWillUnmount() {
	action('unmounting')('yoho')
    }
    render() {
	return <div>
	    <img src="https://source.unsplash.com/random/400x300"/>
	    </div>

          
    }
}


export default FadeInAndOutImageWithToggle;

      
