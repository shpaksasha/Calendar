import React, {Fragment} from 'react';
import Header from './components/Header/header';
import {Route} from 'react-router-dom';
import Home from './components/HomePage/home_page';
import LogOn from './components/LogOn/log';
import Faq from './components/Help/faq';


const App = () => {
  return (
    <Fragment>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/log' component={LogOn}/>
      <Route exact path='/faq' component={Faq}/>
    </Fragment>
  );
}

export default App;
