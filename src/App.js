import React, {Fragment} from 'react';
import Header from './components/Header/header';
import {Route} from 'react-router-dom';
import Home from './pages/Home/home_page';
import LogOn from './components/LogOn/log';
import Faq from './components/Help/faq';
import SimpleCard from './components/InfoFirebase/info';


const App = () => {
  return (
    <Fragment>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/log' component={LogOn}/>
      <Route exact path='/faq' component={Faq}/>
      <Route exact path='/info' component={SimpleCard}/>
    </Fragment>
  );
}

export default App;
