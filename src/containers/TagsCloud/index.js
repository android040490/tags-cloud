import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchTags} from 'redux-store/actions';
import {getFilteredTags, getTags} from 'redux-store/selectors';

import Tag from 'components/Tag';
import SearchForm from 'containers/SearchForm';

const mapStateToProps = state => {
    return {
        tags : getTags(state),
        filteredTags : getFilteredTags(state)
    }
}

const mapDispatchToProps = {
    fetchTags
}
@connect(mapStateToProps, mapDispatchToProps)
class TagsCloud extends Component {
    
    componentWillMount(){
        this.props.fetchTags()
    }

    render() {
        let {tags, filteredTags} = this.props
        return (
            <div className="home-page">
                <div className="home-page__header"><SearchForm/></div>
                <div className="home-page__content">
                    <div className="tags-cloud">
                        {tags.length && filteredTags.map( item => {
                            return <div key={item.id} className="tags-cloud__item"><Tag tag={item}/></div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default TagsCloud;