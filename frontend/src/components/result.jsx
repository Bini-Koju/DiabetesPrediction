
import React from "react";

const Result = (props) => {
    console.log(props);
    // Access the data passed from Test.jsx
    // const { location } = props;
    // const { state } = location;
    const {
        Name,
        Gender,
        Address,
        Contact,
        Pregnancies,
        Glucose,
        BloodPressure,
        SkinThickness,
        Insulin,
        BMI,
        DiabetesPedigreeFunction,
        Age,
    } = props.location.state;

    return <>
        <div>
            <h1>Data from Test.jsx:</h1>
            <p>Name: {Name}</p>
            <p>Gender: {Gender}</p>
            <p>Address: {Address}</p>
            <p>Contact: {Contact}</p>
            <p>Pregnancies: {Pregnancies}</p>
            <p>Glucose: {Glucose}</p>
            <p>BloodPressure: {BloodPressure}</p>
            <p>SkinThickness: {SkinThickness}</p>
            <p>Insulin: {Insulin}</p>
            <p>BMI: {BMI}</p>
            <p>DiabetesPedigreeFunction: {DiabetesPedigreeFunction}</p>
            <p>Age: {Age}</p>

        </div>
    </>

};

export default Result;