import React,{Component} from 'react'
import {decrement, increment} from "../actions";
// class => function
// useReducer
// Redux ==> useSelector,useDispatch
class Button extends Component{
    constructor(props) {
        super(props);
        //이벤트 등록
        this.onIncrement=this.onIncrement.bind(this);
        this.onDecrement=this.onDecrement.bind(this);
    }
    onIncrement(e)
    {
        this.props.store.dispatch(increment())
        // increment => {type:INCREMENT} ==> reducer(state,action)
    }
    onDecrement(e)
    {
        this.props.store.dispatch(decrement())
    }
     render(){
         return (
             <div>
                 <button onClick={this.onIncrement}>+</button>
                 <button onClick={this.onDecrement}>-</button>
             </div>
         )
     }
}

export default Button;