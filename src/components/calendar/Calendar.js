import React from 'react';
//import EventCalendar from './EventCalendar';
//import Test from './Test';
import Test2 from './Test2';
import SearchBox from './SearchBox';
import './Calendar.scss';

const Calendar = () => {
    return (
        <div className="calendar">
            {/* <EventCalendar/> */}
            {/* <Test /> */}
            <div>
                <SearchBox />
            </div>
            <div>
                <Test2 />
            </div>
        </div>
    )
}

export default Calendar;