import React, {Component} from 'react'
import './FilterBar.css'

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
  <div className="filter-bar-logo-area">
    <div className="filter-bar-logo">Amanuensis</div>
  </div>
  <div className="filter-bar-container">
    <div className={`filter-bar-closed-section ${this.state.open ? "transparent invisible": ""}`}>
      <div className="filter-bar-filter-area">
	<div className="filter-bar-filter-list">
	  <div className="filter-button-container">
	    <div onClick={this.toggle} className="filter-circle-button" >▼</div>
	    <div className="filter-button-text">FILTERS</div>
	  </div>
	</div>
      </div>
      <div className="filter-bar-notify">
	<div className="filter-bar-notify-button">⋈</div>
	<div className="filter-bar-notify-text">NOTICE</div>
      </div>
    </div>
    <div className={`filter-bar-open-section ${this.state.open ? "opaque visible-flex": ""}`}>
      <div className="filter-bar-selection-title" onClick={this.toggle} >Choose Your Filters</div>
      <div className="filter-bar-selection-title" onClick={this.toggle} >Choose Your Filters</div>
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
