import React, {Component} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './FilterBar.css'

const showHider = (toggleValue, Component) => toggleValue ? Component : null;

const FadeInTimeout = 800;
const FadeOutTimeout = 800;


const ClosedSection = props =>
      <div className="filter-bar-transition-wrapper">
      <CSSTransitionGroup
                transitionName="filter-bar-fade"
	    	 transitionEnterTimeout={FadeInTimeout}
	    	 transitionLeaveTimeout={FadeOutTimeout}>
    {!props.open &&
     <div key="closed-section" className="wrapper-class">
     <div  className={`filter-bar-closed-section `}>
	<div className="filter-bar-filter-area">
	  <div className="filter-bar-filter-list">
	    <div className="filter-button-container">
	      <div onClick={props.toggle} className="filter-circle-button" >▼</div>
	      <div className="filter-button-text">FILTERS</div>
	    </div>
	  </div>
	</div>
	<div className="filter-bar-notify">
	  <div className="filter-bar-notify-button">⋈</div>
	  <div className="filter-bar-notify-text">NOTICE</div>
	</div>
	</div>
     </div>}
    </CSSTransitionGroup>
    </div>;

const OpenSection = props =>
      <div className="filter-bar-transition-wrapper">
      <CSSTransitionGroup
                transitionName="filter-bar-fade"
	    	 transitionEnterTimeout={FadeInTimeout}
	    	 transitionLeaveTimeout={FadeOutTimeout}>
    {props.open &&
     <div key="open-section" className="wrapper-class">
     <div  className={`filter-bar-open-section  ${props.open ? " ": ""}`}>
	<div className="filter-bar-selection-title" >
	  <div className="filter-bar-selection-title-large">CHOOSE</div>
	  <div className="filter-bar-selection-title-small"> Your Filters</div>
	</div>
	<div className="filter-bar-mask-area">
	  <div className="filter-bar-mask-button">
	  <span className="filter-bar-mask-button-icon">⋈</span> HOW TO CHOOSE A MASK</div>
	  <div onClick={props.toggle} className="filter-bar-close-button filter-circle-button">❌</div>
	  </div>
	  </div>
       </div>}
    </CSSTransitionGroup>
    </div> ;

class FilterBar extends Component {
    constructor(props) {
	super(props)
	this.state = {filters:[], open:false}
	this.toggle = this.toggle.bind(this)
    }
    toggle() {
	this.setState((prevState,props) => {
	    prevState.open = !prevState.open
	    return prevState
	})
    }

    render() {
	return (
<div className="filter-bar-and-section-wrapper">
  <div className="filter-bar-top-section">
    <div className="filter-bar-logo-area">
      <div className="filter-bar-logo">Amanuensis</div>
    </div>
    <div className="filter-bar-container">
		<ClosedSection toggle={this.toggle} open={this.state.open} />
		<OpenSection toggle={this.toggle} open={this.state.open} />
    </div>
  </div>
  <div className={`filter-bar-selection-area ${this.state.open ? "open": ""}`}>
  </div>
</div>
);
    }
}






export default FilterBar;

      // <div className="filter-button-tag filter-circle-button"></div>
      // <div className="filter-button-tag filter-circle-button"></div>
      // <div className="filter-button-tag filter-circle-button"></div>
      // <div className="filter-button-tag filter-clear">clear all</div>
