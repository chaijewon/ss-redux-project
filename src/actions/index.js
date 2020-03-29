export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const SET_VALUE='SET_VALUE';
// dispatch(increment()) => reducer(action,state=0)
//                          switch(action,type)
// react-actions
// redux-logger
// redux-thunk
// ===================== redux-saga
/*
        {
            type:ADD_DATA,  ==> reducer
            payload
        }
 */
export function increment(){
    return {
        type:INCREMENT
    }
}
export function decrement(){
    return {
        type:DECREMENT
    }
}
export function setValue(value){
    return {
        type:SET_VALUE,
        diff:value
    }
}

