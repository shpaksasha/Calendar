import React, {Fragment} from 'react';
import Header from './pages/Header/header';
import {Route} from 'react-router-dom';
import Home from './pages/Home/home_page';
import LogOn from './pages/LogOn/LogOn';
import Faq from './pages/Faq/Faq';
import SimpleCard from './pages/Card/infoCard';


const App = () => {
    return (
        <Fragment>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/card' component={SimpleCard}/>
            <Route exact path='/faq' component={Faq}/>
            <Route exact path='/log' component={LogOn}/>
        </Fragment>
    );
}

export default App;
