import React from 'react';
import Slider from '../../components/Calendar/slider';
import CalendarHome from '../../components/Calendar/calendar';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'block',
        flexGrow: 1,
        padding: '0rem 6.25rem',
        alignItems: 'center',
        textAlign: 'center',
    }
}));

const Home = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Slider/>
            <CalendarHome/>
        </div>
    )
};

export default Home;
