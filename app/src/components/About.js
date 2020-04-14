import React, { Component } from 'react';
import {store,AddActionCreator} from './../store'

class about extends Component {
    constructor(params){
        super(params)
        this.state = {
            number: store.getState()
        }
        store.subscribe(()=>{
            this.setState({
                number: store.getState()
            })
        })
    }
    add(){
        store.dispatch(AddActionCreator(1))
    }
    render() {
        return (
            <div>
                <span>num:{this.state.number}</span><br/>
                <button onClick={this.add}>点击+1</button>
            </div>
        );
    }
}

export default about;