import React, {Component} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './FilterBar.css'
import {findIndex, difference,propEq} from 'ramda'

const FadeInTimeout = 400;
const FadeOutTimeout = 400;


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
     <div className="filter-list-area">

	      <div className="filter-button-text">FILTERS</div>
     {props.currentFilters.map(filter => <SimpleFilterButton icon={props.filters[filter].icon} /> )}

     {props.currentFilters.length && <div onClick={props.clearFilters} className="filter-button-clear">Clear All</div>}
</div>
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
    </div>;

class FilterBar extends Component {
    constructor(props) {
	super(props)
	this.state = {
	    currentFilters:[],
	    open:false,
	    close:false ,
	    filterData: {
		sections: {
		    byId:  {
			section0 : {
			    title:'Lenses',
			    text: "Lenses are the core of everything we do. They stay clear so you can ski.",
			    filters:['filter0','filter1','filter2']
			},
			section1 : {
			    title:'Anti-fog',
			    text: "Anti-fog to keep you vision always sharp and clear.",
			    filters:['filter3','filter4','filter5']
			},
			section2 : {
			    title:'Glasses',
			    text: "Our goggles can handle all but the most extreme prescriptions.",
			    filters:['filter6','filter7']
			},
		    },
		    allIds:["section0","section1","section2"]
		},
		filters: {
		    byId : {
			filter0:{id:"filter0",icon:'🌢',selected:false},
			filter1:{id:"filter1",icon:'✻',selected:false},
			filter2:{id:"filter2",icon:'⛵',selected:false},
			filter3:{id:"filter3",icon:'🌢',selected:false},
			filter4:{id:"filter4",icon:'✻',selected:false},
			filter5:{id:"filter5",icon:'❌',selected:false},
			filter6:{id:"filter6",icon:'🌢',selected:false},
			filter7:{id:"filter7",icon:'✻',selected:false},
		    },
		    allIds:['filter0','filter1','filter2','filter3','filter4','filter5','filter6','filter7']
		}
	    },
	};
	this.toggle = this.toggle.bind(this)
	this.clearFilters = this.clearFilters.bind(this);
	this.selectFilter = this.selectFilter.bind(this)
    }
    selectFilter(id) { // should work? see if you can understand later
	this.setState((prevState, props) => {
	    prevState.filterData.filters.byId[id].selected = !prevState.filterData.filters.byId[id].selected;
	    if(prevState.filterData.filters.byId[id].selected) {
		prevState.currentFilters = prevState.currentFilters.concat([id]);
	    }
	    else {
		prevState.currentFilters = difference(prevState.currentFilters,[id]);
	    }
	    return prevState;
	})
    }

    clearFilters() {
	this.setState((prevState, props) => {
	    prevState.currentFilters.forEach(filter => {
		prevState.filterData.filters.byId[filter].selected = false;
	    });
	    prevState.currentFilters = [];
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
	    },401)
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
	    },401)
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
		<ClosedSection clearFilters={this.clearFilters} currentFilters={this.state.currentFilters} filters={this.state.filterData.filters.byId} toggle={this.toggle} show={this.state.close} open={this.state.open} />
		<OpenSection toggle={this.toggle} show={this.state.close} open={this.state.open} />
    </div>
  </div>
  <div className={`filter-bar-selection-area ${this.state.open ? "open": ""}`}>
  <div className="filter-bar-selection-content ">
		<FilterBarFilterSection sectionData={this.state.filterData.sections.byId.section0} selectFilter={this.selectFilter} filters={this.state.filterData.filters}/>
		<FilterBarFilterSection sectionData={this.state.filterData.sections.byId.section1} selectFilter={this.selectFilter} filters={this.state.filterData.filters}/>
		<FilterBarFilterSection sectionData={this.state.filterData.sections.byId.section2} selectFilter={this.selectFilter} filters={this.state.filterData.filters}/>
  </div>

		<div onClick={this.toggle} className={`filter-submit-button ${this.state.currentFilters.length > 0? "active": ""}` }>Filter</div>
  </div>
	
</div>
);
    }
}

const FilterBarFilterSection = props => 
      <div className="filter-bar-filter-section">
      <div className="filter-bar-filter-section-title">
      {props.sectionData.title || "LENSES"}
</div>
      <div className="filter-bar-filter-section-buttons">
    {props.sectionData.filters.map(filter => <FancyFilterButton selectFilter={() => props.selectFilter(filter)} icon={props.filters.byId[filter].icon} selected={props.filters.byId[filter].selected}/>)}

</div>
    <div className="filter-bar-filter-section-text">
    {props.sectionData.text}
    </div>
    </div>;

const FancyFilterButton = props =>
    <div className={`filter-circle-button-selector-container ${props.selected ? "selected-filter" :"" } `}>
    <div className="filter-button-border-underlay">
    </div>
    <div onClick={props.selectFilter} className="filter-circle-button filter-circle-button-selector">
    {props.icon}
</div>
    </div>;

const SimpleFilterButton = props =>
    <div className="filter-circle-button ">
    {props.icon}
</div>;




export default FilterBar;

      // <div className="filter-button-tag filter-circle-button"></div>
      // <div lassName="filter-button-tag filter-circle-button"></div>
      // <div className="filter-button-tag filter-circle-button"></div>
      // <div className="filter-button-tag filter-clear">clear all</div>
