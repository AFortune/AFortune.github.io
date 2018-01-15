import React, {Component} from 'react'
import './FilterBar.css'


const FilterBar = props => <div className="filter-bar-container">
      <div className="filter-bar-logo-area">
      <div className="filter-bar-logo">Amanuensis</div>
      </div>
      <div className="filter-bar-filter-area">
      <div className="filter-bar-filter-list">
    <div className="filter-button-text">FILTERS</div>
    <div className="filter-circle-button" ></div>
      <div className="filter-button-tag filter-circle-button"></div>
      <div className="filter-button-tag filter-circle-button"></div>
      <div className="filter-button-tag filter-circle-button"></div>
      <div className="filter-button-tag filter-clear">clear all</div>
      </div>
      </div>
    <div className="filter-bar-notify">
    <div className="filter-bar-notify-button"></div>
    <div className="filter-bar-notify-text">NOTICE</div>
    </div>
      </div>;



export default FilterBar;
