import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        margin: '50px',
    },

    form:{
        width:'400px',
        borderRadius:'7px',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%, 0)',
        backgroundColor: '#efebe9'
    }
}))

const CalendarReact = () => {
    const classes = useStyles();


    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item md={12}>
            <Calendar
                className={classes.form}
                defaultView='mouth'
                calendarType='ISO 8601'
                onChange={onChange}
                value={date}/>
            </Grid>
            </Grid>
        </div>
    );
}

export default CalendarReact;
