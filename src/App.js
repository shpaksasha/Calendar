import React, {Fragment} from 'react';
import Header from './pages/Header/header';
import {Route} from 'react-router-dom';
import Home from './pages/Home/home_page';
import LogOn from './components/LogOn/log';
import Faq from './pages/Faq/faq';
import SimpleCard from './components/InfoFirebase/info';


const App = () => {
    return (
        <Fragment>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/info' component={SimpleCard}/>
            <Route exact path='/faq' component={Faq}/>
            <Route exact path='/log' component={LogOn}/>
        </Fragment>
    );
}

export default App;
