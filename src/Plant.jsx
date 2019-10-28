import React, { Component } from 'react';
import Header from './Header';
import List from './List';

class Plant extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <List/>
                
            </div>
        )
    }
}
export default Plant;