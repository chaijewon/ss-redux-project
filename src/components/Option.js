import React,{Component} from "react";
import {setValue} from "../actions";

class Option extends Component{
    constructor(props) {
        super(props);
        this.onChange=this.onChange.bind(this);
    }
    onChange(e){
        this.props.store.dispatch(setValue(parseInt(e.target.value)))
    }
    render(){
        return (
            <div>
                <input type={"text"} size={20} onChange={this.onChange}/>
            </div>
        )
    }
}

export default Option;