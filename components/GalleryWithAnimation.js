import React,{Component} from 'react';
import {SlideOutTextOverlaySimple} from './SlideOutTextOverlay'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './GalleryWithAnimation.css'
class  GalleryWithAnimation extends Component {
    constructor(props) {
	super(props)
	this.state = {show:false}
	this.toggle = this.toggle.bind(this)
    }

    toggle() {
	this.setState((prevState,props) => {
	    prevState.show = !prevState.show
	    return prevState
	})
    }
    componentDidMount() {
	this.setState({show:true})
    }
    componentWillUnmount() {
	this.setState({show:false})
    }
    render() {
	return (

	    <CSSTransitionGroup
          transitionName="arrive-image"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={100}>
		
	    <button onClick={this.toggle}>Toggle</button>
		{this.state.show &&
		<div className="two-column-gallery">
	    <div className="gallery-column">
	    {this.props.items.map(el => <SlideOutTextOverlaySimple />)}
	    </div>
	    <div className="gallery-column">
	    {this.props.items.map(el => <SlideOutTextOverlaySimple />)}
	    </div>
		 </div>}
		</CSSTransitionGroup>
	);
    }
}


export default GalleryWithAnimation;
