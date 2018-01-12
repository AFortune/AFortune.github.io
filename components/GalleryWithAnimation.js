import React,{Component} from 'react';
import {SlideOutTextOverlaySimple} from './SlideOutTextOverlay'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './GalleryWithAnimation.css'
import {repeat} from 'ramda'


const type1 = {make:"BONES", url:"http://goggles.wedze.com/winter-2017-2018/assets/img/products/goggles/bones-700/bones-700-green-photochromic.png"}
const type2 = {make:"SN0W", url:"http://goggles.wedze.com/winter-2017-2018/assets/img/products/goggles/bones-500/bones-500-blue-bad-weather.png"}
const listT1 = repeat(type1,4)
const listT2 = repeat(type2,4)


class  GalleryWithAnimation extends Component {
    constructor(props) {
	super(props)
	this.state = {show:false, items:listT1, oldList:true}
	this.toggle = this.toggle.bind(this)
	this.changeList = this.changeList.bind(this)
    }

    changeList() {
	this.setState((prevState,props) => {
	    if(prevState.oldList) {
		prevState.items = listT2
	    }
	    else {
		prevState.items = listT1
	    }
	    prevState.oldList = !prevState.oldList
	    return prevState
	})
    }

    toggle() {
	this.setState((prevState,props) => {
	    prevState.show = !prevState.show
	    return prevState
	})
    }
    componentDidMount() {
	this.setState((prevState,props) => {
	    prevState.show = true
	    return prevState
	})
    }
    componentWillUnmount() {
	this.setState((prevState,props) => {
	    prevState.show = false
	    return prevState
	})
    }
    render() {
	return (
	    <CSSTransitionGroup
          transitionName="arrive-image"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
		
	    <button onClick={this.toggle}>Toggle</button>
	    <button onClick={this.changeList}>Swap</button>
		{this.state.show &&
		<div className="two-column-gallery">
	    <div className="gallery-column">

	    <CSSTransitionGroup
		 transitionName="arrive-image"
		 transitionEnterTimeout={1000}
		 transitionLeaveTimeout={1000}>
		 {this.state.items.map((el,i) => <SlideOutTextOverlaySimple key={"a"+i+el.make} url={el.url} make={el.make} />)}

		</CSSTransitionGroup>
	    </div>
	    <div className="gallery-column">
	    <CSSTransitionGroup
		 transitionName="arrive-image"
		 transitionEnterTimeout={1000}
		 transitionLeaveTimeout={1000}>
		 {this.state.items.map((el,i) => <SlideOutTextOverlaySimple key={"b"+i+el.make} make={el.make} url={el.url}/>)}
		</CSSTransitionGroup>
	    </div>
		 </div>}
		</CSSTransitionGroup>
	);
    }
}


export default GalleryWithAnimation;
