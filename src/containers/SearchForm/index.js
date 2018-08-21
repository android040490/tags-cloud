
import React, { Component } from 'react';
import {connect} from 'react-redux';

import {setFilter} from 'redux-store/actions';

const mapDispatchToProps = {
    setFilter
};

@connect(null, mapDispatchToProps)
class SearchForm extends Component {
    constructor (props){
        super(props);
        this.state = {
            value : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.debounce = this.debounce.bind(this);
    };

    search = this.debounce(this.props.setFilter , 500);

    handleChange(event){
        let value = event.target.value;
        this.search(value);
    };

    debounce(f, ms) {
        let timer = null;
      
        return function (...args) {
            const onComplete = () => {
                f.apply(this, args);
                timer = null;
            };

            if (timer) {
                clearTimeout(timer);
            };

            timer = setTimeout(onComplete, ms);
        };
    };

    render() {
        return (
            <div className="search-form wrapper">
                <div><label htmlFor="search">Search tags</label></div>
                <input id="search" type="text" onChange={this.handleChange} placeholder="Search tag"/>
            </div>
        );
    };
};

export default SearchForm;
