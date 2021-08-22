import React from 'react';
import Slider from '../../components/Hocomponents/slider';
import CalendarHome from '../../components/Hocomponents/calendar';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'block',
        flexGrow: 1,
        padding: '0rem 6.25rem',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#ffccbc',
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
