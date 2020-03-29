import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Option from './components/Option'
import Counter from './components/Counter'
function App(props) {
  return (
      <React.Fragment>
        <Counter store={props.store}/>
        <Option store={props.store}/>
        <Button store={props.store}/>
      </React.Fragment>
  );
}

export default App;
