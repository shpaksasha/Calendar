import React, {Fragment} from 'react';
import Header from './components/Header/header';
import {Route} from 'react-router-dom';
import Home from './components/HomePage/home_page';


const App = () =>{
  return (
    <Fragment>
      <Header/>
      <Route exact path='/' component={Home}/>
    </Fragment>
  );
}

export default App;
