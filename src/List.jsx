import React, { Component } from 'react';

class List extends React.Component{
    render(){
        return(
            <div className="list-container">
                <ul>
                    <li>Cactus</li>
                    <li>Lavender</li>
                    <li>Succulents</li>
                    <li>Ferns</li>
                </ul>
            </div>
        )
    }
}
export default List;