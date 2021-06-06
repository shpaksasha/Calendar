import React from 'react';
import Slider from '../../components/Home_components/slider';
import CalendarHome from '../../components/Home_components/calendar';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 0,
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function Home () {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Slider/>
            <CalendarHome/>
        </div>
    )
}
