import React, {Fragment} from 'react';
import Header from './components/Header/header';
import {Route} from 'react-router-dom';
import Home from './components/HomePage/home_page';
import LogOn from './components/LogOn/log';


const App = () => {
  return (
    <Fragment>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/log' component={LogOn}/>
    </Fragment>
  );
}

export default App;
