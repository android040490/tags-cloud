import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchTags} from 'redux-store/actions';
import {getFilteredTags, getTags, getLoadingTags} from 'redux-store/selectors';

import Tag from 'components/Tag';
import Preloader from 'components/Preloader';
import SearchForm from 'containers/SearchForm';

const mapStateToProps = state => {
    return {
        tags : getTags(state),
        filteredTags : getFilteredTags(state),
        loading : getLoadingTags(state)
    }
}

const mapDispatchToProps = {
    fetchTags
}
@connect(mapStateToProps, mapDispatchToProps)
class TagsCloud extends Component {
    
    componentWillMount(){
        if(!this.props.tags.length){
            this.props.fetchTags()
        }
    }

    render() {
        let {tags, filteredTags, loading} = this.props
        return (
            <div className="home-page">
                <div className="home-page__header"><SearchForm/></div>
                <div className="home-page__content">
                    <div className="tags-cloud">
                        { loading && !(tags.length) ? 
                            <Preloader/> :
                            filteredTags.map( item => {
                                return <div key={item.id} className="tags-cloud__item"><Tag tag={item}/></div>
                            }) 
                            
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default TagsCloud;