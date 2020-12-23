import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";

import "./calendar.scss";
import Select from "react-select";


export const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(
        null
    );


    useEffect(()=> {
        const saveTime = localStorage.getItem("Time");
        if (saveTime) {
            setEndDate(JSON.parse(saveTime))
        }

    },[])

    useEffect(() => {
        localStorage.setItem("Time", JSON.stringify(endDate));
    }, [endDate]);

    const onChange = dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (


        <DatePicker
            selected={startDate}
            onChange={onChange}
            value={endDate}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
        />
    );
};


export default Calendar;