import React,{Component} from 'react'
import {increment,decrement} from "../actions";

class Counter extends Component{
    render(){
        return (
            <div>
                <h1>Value:{this.props.store.getState().counter.value}</h1>
            </div>
        )
    }
}

export default Counter;