import React, {useState} from 'react';
import Calendar from 'react-calendar';

const CalendarReact = () => {

    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={date}/>
        </div>
    );

}

export default CalendarReact;