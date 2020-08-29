import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form:{
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%, 0)'
    }
}))

const CalendarReact = () => {
    const classes = useStyles();

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return (
        <div>
            <Calendar
                className={classes.form}
                defaultView='mouth'
                calendarType='ISO 8601'
                onChange={onChange}
                value={date}/>
        </div>
    );
}

export default CalendarReact;