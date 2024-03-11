import "../styles/test.css"




function MainTest({ label }) {
    return <>
        <div className="dataInput">
            <label htmlFor="" >{label}:</label>
            <input type="number"
            />
        </div>
    </>
}

function Details({ label }) {
    return <>
        <h4 className="dataInput">
            <label htmlFor="" >{label}:</label>
            <input type="text" />
        </h4>

    </>
}

function Test() {
    return <>
        <div className="container">

            <div className="detailsInput">
                <Details label={"Enter your name"} />
                <Details label={"Address"} />
                <Details label={"Gender"} />
                <Details label={"Contact Number"} />

            </div>



            <h1>Please enter the following informations:</h1>
            <div className="MainTestInput">
                <MainTest label={"Pregnancies"} />
                <MainTest label={"Glucose"} />
                <MainTest label={"BloodPressure"} />
                <MainTest label={"SkinThickness"} />
                <MainTest label={"Insulin"} />
                <MainTest label={"BMI"} />
                <MainTest label={"DiabetesPedigreeFunction"} />
                <MainTest label={"Age"} />
            </div>
            <div id="btnTest">
                <button className=" btn1 " > <a href="/login2">Logout</a></button>
                <button className="btn1" > <a href="/login2">Test</a></button>
            </div>
        </div>

    </>
}
export default Test;
