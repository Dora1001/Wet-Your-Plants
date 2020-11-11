import React from "react";
import {Calendar} from "../Calendar/calendar";
import {useState, useEffect} from "react";
import Select from "react-select";
import "./signup.scss";



const optionsPlants = [
    {value: 'Geranium', label: 'Geranium 💧'},
    {value: 'Philodendron Pink Princess', label: 'Philodendron Pink Princess 💧💧'},
    {value: 'Philodendron Congo', label: 'Philodendron Congo 💧💧'},
    {value: 'Philodendron Orange', label: 'Philodendron Orange 💧💧'},
    {value: 'Syngonium Arrow', label: 'Syngonium Arrow 💧💧'},
    {value: 'Syngonium White Butterfly', label: 'Syngonium Butterfly 💧💧'},
    {value: 'Syngonium Red Heart', label: 'Syngonium Red Heart 💧💧'},
    {value: 'Hoy Memoria', label: 'Hoya Memoria 💧'}

];

// const useStateLs = localStorageKey => {
//
//     const [value, setValue] = useState(
//         localStorage.getItem(localStorageKey)
//     );
//
//     useEffect(() => {
//         localStorage.setItem(localStorageKey, value);
//         }, [value]);
//   return [value, setValue];
//
// };

export const Signup = ({handleLogout}) => {
    const [value, setValue] = useState(
        null
    );


    useEffect(()=>{
        const savePlants = localStorage.getItem("myPlant");
        if (savePlants) {
            setValue(JSON.parse(savePlants))
        }


    },[])

    useEffect(() => {
        localStorage.setItem("myPlant", JSON.stringify(value));
    }, [value]);
    // return [value, setValue];

    // const [value, setValue] = useStateLs(
    //     "myPlant"
    // );

    return (
        <div className="App-header">
            <div className="App-header-top">
                <h1>Water calendar App</h1>

                    <button className="App-btn-logout" onClick={handleLogout}>Log out</button>
                </div>

            <div className="Signup-cointeiner-box">
            <div className="Signup-box">
                <div className="Signup-box"><span className="Signup-box-span">Add plants for watering</span></div>
                <Select
                    options={optionsPlants}
                    placeholder='Select plants'
                    onChange={setValue}
                    value={value}
                    isMulti
                    className="Signup-box-select"
                />
                <div className="Signup-box"><span className="Signup-box-span">Select the date of the next watering</span></div>
                <Calendar/>
            </div>

        </div>
        </div>


    );
}


export default Signup;
