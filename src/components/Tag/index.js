import React, { Component } from 'react';
import {Link} from 'react-router';

class Tag extends Component {
    render() {
        return (
            <div>
                <Link 
                    className="tag-link"
                    style={{ fontSize : `${this.props.tag.sentimentScore /2}px`}} 
                    to={`/home/${this.props.tag.id}`}
                    >{this.props.tag.label}
                </Link>
            </div>
        );
    }
}

export default Tag;