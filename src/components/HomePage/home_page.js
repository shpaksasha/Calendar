import React from 'react';
import Slider from './slider';
import CalendarReact from '../Calendar/calendar';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyle =makeStyles(theme =>({
    root: {
        flexGrow: 1,
        margin: 0,
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const Home = () =>{
    const classes = useStyle();

    return(
    <div className={classes.root}>
        <Slider/>
        <CalendarReact/>
    </div>
    )
}

export default Home;
