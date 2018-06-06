import React from 'react';
import './style.css';

class ListItem extends React.Component {
    render() {
        return (
            <div className="list-group-item">
                <strong>{this.props.name}</strong>
                <div onClick={this.props.onRemove} className="delete-btn">X</div>
            </div>
        );
    }
}

export default ListItem;
