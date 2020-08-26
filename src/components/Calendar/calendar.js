import React, {useState} from 'react';
import Calendar from 'react-calendar';

const CalendarReact = () => {
    // state = {
    //     date: new Date(),
    // }
    // onChange = date => this.setState({ date })
    const [date, setDate] = useState([new Date()]);

    
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );

}

export default CalendarReact;