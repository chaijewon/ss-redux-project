import {INCREMENT,DECREMENT,SET_VALUE} from "../actions";
import {combineReducers} from "redux";
/*
     reducer => 영화 => movieReducer
                음악 => musicReducer
                회원가입 => joinReducer
                장바구니 => cartReducer
      const App=combindeReducer({
          movieReducer,
          musicReducer,
          joinReducer,
          cartReducer
      })
 */
// 1. state
const initalState={
    value:0,
    diff:1
}
/*
        var a={b:'a',c:'c'}
        var b={b:'c',d:'d'}

       var c={...a,...b}
       => c={b:'c',c:'c',d:'d'}

       dispatch({액션}) ==> reducer(state,action)

       state=> 읽기전용
         setState({})
         ==========================================
         => this.state={movie:[]} ==> getState()
         => componentDidMount() => state값 갱신

         ========================================== reducer => dispatch
            => render() => 화면 UI
 */
const counter=(state=initalState,action)=>{
    switch (action.type) {
        case INCREMENT:
            /*
                    {
                      ...state,
                      value:state.value+state.diff
                    }
             */
            return Object.assign({},state,{value:state.value+state.diff})
        case DECREMENT:
            return Object.assign({},state,{value:state.value-state.diff})
        case SET_VALUE:
            return Object.assign({},state,{diff:action.diff})
        default:
            return state;
    }
    /*
            old state
            =========       ====> reducer ==> new state
            사용자 : action
     */
}
// 등록
/*
      Redux 동작    (front=> MVC)                  state갱신
      화면 UI =================> reducer ========> store (새로운 state(request)저장)
                  action 전송 (dispatch(액션))
                  ======
                  http://localhost/movie/list.do => Controller => Model => request => View
              <=============================================
 */
const counterApp=combineReducers({
    counter,
});
export default counterApp