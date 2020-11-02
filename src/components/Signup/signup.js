import React from "react";
import {Calendar} from "../Calendar/calendar";
import Select from "react-select";
import "./signup.scss";

const optionsPlants = [
    {value: 'Geranium', label: 'Geranium'},
    {value: 'Syngonium Arrow', label: 'Syngonium Arrow'}

];

export const Signup = ({handleLogout}) => {
    return (
        <div className="App-header">
            <div className="App-logo">
                <h1>Water your plants</h1>
                <div className="App-btn-login">
                    <button onClick={handleLogout}>Log out</button>
                </div>
            </div>
            <div className="Signup-box">
                <div> <h1>Add plants for water</h1></div>
                <Select
                    options={optionsPlants}
                    placeholder='Select plants'
                    isMulti
                    className="Signup-box-select"
                />

                <Calendar/>
            </div>
        </div>


    );
}


export default Signup;
