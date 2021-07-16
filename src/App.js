import React from 'react';
import './App.css';
import Routes from './routes'
// import Header from './Components/Header/Header'
import { withRouter } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      {/* {props.location.pathname!=='/portal/home' ?
      <Header/> : null} */}
      <Routes/>
    </div>
  );
}

export default withRouter(App);