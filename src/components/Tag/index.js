import React, { Component } from 'react';
import {Link} from 'react-router';

class Tag extends Component {
    render() {
        let {tag} = this.props;
        let fontSize = (tag.sentimentScore / 2 ) <= 10 ? 10 : tag.sentimentScore /2
        return (
            <div>
                <Link 
                    className="tag-link"
                    style={{ fontSize : `${fontSize}px`}} 
                    to={`/home/${tag.id}`}
                    title={tag.label}
                    >{tag.label}
                </Link>
            </div>
        );
    }
}

export default Tag;

