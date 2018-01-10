import React,{Component} from 'react'
import {merge} from 'ramda'
import { action } from '@storybook/addon-actions';
import "./SliderStyle.css"
// Try this out: https://github.com/voronianski/react-swipe

const styles = {
    BottomSliderContainerParent: {
	padding:0,
	margin:0,
	position:'fixed',
	left:0,
	bottom:0,
	minWidth:"100%",
	height:"120px",
	backgroundColor:'#efefef',
    },
    BottomSliderContainerButtons: {
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
    },
    BottomSliderContainer: {
	padding:0,
	margin:0,
	position:'fixed',
	left:0,
	bottom:0,
	minWidth:"100%",
	height:"80px",
	backgroundColor:'#efefef',
    },
    BottomSlider: {
	padding:0,
	margin:0,
	position:'fixed',
	display:'flex',
	left:0,
	bottom:0,
	minWidth:"100%",
	height:"80px",
	justifyContent:"space-around"
    },
    BottomSliderEventBox: {
	padding:0,
	margin:0,
	position:'fixed',
	//pointerEvents:'none',
	left:0,
	bottom:0,
	width:"100%",
	height:"80px",
    },
    BottomSliderItem: {
	display:'flex',
	border:"0.5px solid #8cffd8",
	color:"#8cffd8",
	fontSize:"30px",
	justifyContent:"center",
	alignItems:"center",
	textAlign:"center",
	height:"80px",
	width:"120px",
	
    }
}
const BottomSliderItem = props => <div className="slider-item" onClick={action('clicky')} style={styles.BottomSliderItem} >{props.text}</div>;


class BottomSlider extends Component {
    constructor(props) {
	super(props)
	this.state = {leftPosition:0, dragInitial:0};
	this.dragOver = this.dragOver.bind(this)
	this.dragStart = this.dragStart.bind(this)
	this.dragEnd = this.dragEnd.bind(this)
    }
    dragOver(e) {
	const event = e.touches ? e.touches[0]: e;
	const { clientX } = event;
	this.setState((prevState,props) => {
	    const xDiff = (clientX - prevState.dragInitial);
	    return merge(prevState,{leftPosition: xDiff})
	})
    }
    dragStart(e) {
	//const event = e;
	const event = e.touches ? e.touches[0]: e;
	const { clientX } = event;
	const emptyDiv = document.createElement('div')
	this.setState((prevState,props) => {
	    const startingPosition = clientX - prevState.leftPosition;
	    if(event.dataTransfer) {
		event.dataTransfer.setDragImage(emptyDiv, -99999, -99999);
	    }
	    return merge(prevState,{dragInitial:startingPosition}) 
	})
    }
    dragEnd(e) {
	const event = e.touches ? e.changedTouches[0]: e;
	console.log(e);
	const { clientX } = event; 
	this.setState((prevState,props) => {
	    return merge(prevState,{dragInitial:clientX})
	})
    }
    componentDidMount() {
	// const eventbox = document.getElementById('drag-eventbox')
	// eventbox.addEventListener('dragstart', this.dragStart,false);
	// eventbox.addEventListener('dragover', this.dragOver,false);
	// eventbox.addEventListener('dragend', this.dragEnd,false);
	const itemContainer = document.getElementById('drag-container')
	itemContainer.addEventListener('dragstart', this.dragStart,false);
	itemContainer.addEventListener('dragover', this.dragOver,false);
	itemContainer.addEventListener('dragend', this.dragEnd,false);
	// itemContainer.addEventListener('dragstart', this.dragStart);
	// itemContainer.addEventListener('dragover', this.dragOver);
	// itemContainer.addEventListener('dragend', this.dragEnd);
	itemContainer.addEventListener("touchstart", this.dragStart, false);
	itemContainer.addEventListener("touchmove", this.dragOver, false);
	itemContainer.addEventListener("touchend", this.dragEnd, false);
    }
    render() {
	if(this.props.buttons) {
	    return <div style={styles.BottomSliderContainerParent}>
		<div style={styles.BottomSliderContainerButtons} ><button>Crop</button><button>Undo</button></div>
		<div id="dragbox" style={styles.BottomSliderContainer}>
	    <div id="drag-container" draggable style={merge(styles.BottomSlider,{left: this.state.leftPosition})}>
	    {this.props.items.map(el=><BottomSliderItem text={el} />)}
	</div>
	</div>
	</div>;

	}
	return <div id="dragbox" style={styles.BottomSliderContainer}>
	    <div id="drag-container" draggable style={merge(styles.BottomSlider,{left: this.state.leftPosition})}>
	    {this.props.items.map(el=><BottomSliderItem text={el} />)}
	</div>
	</div>;

    }
}


	    //<div id="drag-eventbox" draggable style={styles.BottomSliderEventBox}></div>


export default BottomSlider;
