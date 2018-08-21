import React, { Component } from 'react';
import {Link} from 'react-router';

import {connect} from 'react-redux';

import {getParamItemId, getTagById} from 'redux-store/selectors';

import leftArrow  from '../../assets/baseline-keyboard_arrow_left-24px.svg';
import ReactSVG from 'react-svg';

const mapStateToProps = (state, ownProps) => {
    return {
        tag : getTagById(state, getParamItemId(ownProps))
    }
}
@connect(mapStateToProps)
class TagPage extends Component {

    render() {
        let {tag} = this.props;
        return (
            <div className="tag-page wrapper">
                <div className="tag-page__sidebar">
                    <Link to ='/home' className="home-btn">
                        <div><ReactSVG className="home-btn__icon" path={leftArrow}/></div>
                        <div>Home</div>
                    </Link>
                </div>
                <div className="tag-page__content">
                    <h2 className="tag-page__title">{tag.label}</h2>
                    <div className="tag-page__data">
                        <ul className="list-data">
                            <li className="list-data__item">Total Mentions : {tag.volume || 0}</li>
                            <li className="list-data__item">Positive Mentions : {tag.sentiment.positive || 0}</li>
                            <li className="list-data__item">Neutral Mentions : {tag.sentiment.neutral || 0}</li>
                            <li className="list-data__item">Negative Mentions : {tag.sentiment.negative || 0}</li>
                            <li className="list-data__item">Page types  
                                <ul>{Object.keys(tag.pageType).map((item, index) => {
                                    return <li key={item + tag.pageType.item}>{item} : {tag.pageType[item]}</li> 
                                    }   
                                )}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TagPage;