import React, { Component } from 'react';
import ListItem from '../ListItem';

export default class List extends Component {
    render() {
        const { items } = this.props;
        return (
            <div className='list-group'>
                {
                    items.map((item) => {
                        return (
                            <ListItem
                                name={item.name}
                                key={item.id}
                                onRemove={() => { this.props.removeItem(item.id); }}
                            />
                        );
                    })
                }
            </div>
        );
    }
}
