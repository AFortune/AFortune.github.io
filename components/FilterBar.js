import React, {Component} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './FilterBar.css'
import {findIndex, propEq} from 'ramda'

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
    {props.show &&
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
	this.state = {
	    currentFilters:[],
	    open:false,
	    close:false ,
	    filterData:{
		section1:[
		    {id:0,icon:'❌',selected:false},
		    {id:1,icon:'❌',selected:false},
		    {id:2,icon:'❌',selected:false},
		],
	    },
	};
	this.toggle = this.toggle.bind(this)
    }
    selectFilter(section, id) { // should work? see if you can understand later
	const findIndexById = (id,data) => findIndex(propEq('id',id),data)
	this.setState((prevState, props) => {
	    const sectionData = prevState[section];
	    const currVal = prevState[section][findIndexById(id,sectionData)].selected;
	    prevState[section][findIndexById(id,sectionData)] = !currVal;
	    return prevState;

	})
    }

    toggle() {
	if (!this.state.open) {
	    this.setState((prevState,props) => {
		prevState.open = !prevState.open
		return prevState
	    })
	    window.setTimeout( () => {
		this.setState((prevState,props) => {
		    prevState.close = !prevState.close
		    return prevState
		})
	    },801)
	}
	else {
	    this.setState((prevState,props) => {
		prevState.close = !prevState.close
		return prevState
	    })
	    window.setTimeout( () => {
		this.setState((prevState,props) => {
		    prevState.open = !prevState.open
		    return prevState
		})
	    },801)
	}
    }

    render() {
	return (
<div className="filter-bar-and-section-wrapper">
  <div className="filter-bar-top-section">
    <div className="filter-bar-logo-area">
      <div className="filter-bar-logo">Amanuensis</div>
    </div>
    <div className="filter-bar-container">
		<ClosedSection toggle={this.toggle} show={this.state.close} open={this.state.open} />
		<OpenSection toggle={this.toggle} show={this.state.close} open={this.state.open} />
    </div>
  </div>
  <div className={`filter-bar-selection-area ${this.state.open ? "open": ""}`}>
		<FilterBarFilterSection selectFilter={this.selectFilter}/>
		<FilterBarFilterSection selectFilter={this.selectFilter}/>
		<FilterBarFilterSection selectFilter={this.selectFilter}/>
  </div>
</div>
);
    }
}

const FilterBarFilterSection = props => 
      <div className="filter-bar-filter-section">
      <div className="filter-bar-filter-section-title">
      {props.title || "LENSES"}
</div>
      <div className="filter-bar-filter-section-buttons">

    <div className={`filter-circle-button-selector-container ${props.selected ? "selected-filter" :"" } `}>
    <div className="filter-button-border-underlay">
    </div>
    <div onClick={props.selectFilter} className="filter-circle-button filter-circle-button-selector">
    ❌
</div>
</div>





	  <div className="filter-circle-button filter-circle-button-selector">❌</div>
	  <div className="filter-circle-button filter-circle-button-selector">❌</div>
</div>
    <div  className="filter-bar-filter-section-text">
    Lenses are really great. The are what let you see things and are the core of goggles.
    </div>
      </div>





export default FilterBar;

      // <div className="filter-button-tag filter-circle-button"></div>
      // <div className="filter-button-tag filter-circle-button"></div>
      // <div className="filter-button-tag filter-circle-button"></div>
      // <div className="filter-button-tag filter-clear">clear all</div>
