import axios from "axios";
import React, { useState } from "react";

export default function Namify(){

    let [age,setAge] = useState(null);
    let [gender,setGender] = useState(null);
    let [genderProb,setGenderProb] = useState(null);
    let [nationalityA,setNationalityA] = useState(null);
    let [nationalityB,setNationalityB] = useState(null);
    let [nationalityC,setNationalityC] = useState(null);
    let [nationProbA, setNationProbA] = useState(null);
    let [nationProbB, setNationProbB] = useState(null);
    let [nationProbC, setNationProbC] = useState(null);
    let [name,setName] = useState(null);

    const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });

    const handleChange = (event) =>{
        setName(event.target.value);
    }

    const handleSubmit = (event) =>{

        event.preventDefault();
        axios.get(`https://api.agify.io?name=${name}`)
            .then((response)=>{
                setAge(response.data.age)
            })
            .catch((err)=>{
                console.log(err)
            })

        axios.get(`https://api.genderize.io?name=${name}`)
            .then((response)=>{
                setGender(response.data.gender)
                setGenderProb(response.data.probability)
            })
            .catch((err)=>{
                console.log(err)
            })

        axios.get(`https://api.nationalize.io?name=${name}`)
            .then((response)=>{
                setNationalityA(response.data.country[0].country_id)
                setNationProbA(response.data.country[0].probability * 100)

                setNationalityB(response.data.country[1].country_id)
                setNationProbB(response.data.country[1].probability * 100)

                setNationalityC(response.data.country[2].country_id)
                setNationProbC(response.data.country[2].probability * 100)
            })
    }

    return(
        <div className="namify-div">
            <p className="namify-p">In the field below, enter any name(real or imaginary)</p>
            <div className="form-container" id="form-item">
                <form onSubmit={handleSubmit}>
                    <input type="text" id="name" name="name" className = "name" onChange={handleChange} defaultValue="Enter Name here"></input>
                    <button id="submit" className="namify-button">Submit</button>
                </form>
            </div>
            <p id="form-item">Click the Submit button and your stats wil be predicted down below, have fun!</p>
            <div>
                {age && <p id="form-item">Your predicted age is: {age}</p>}
                {gender && <p id="form-item">Your predicted gender is: {gender}</p>}
                {gender && <p id="form-item">The probability of you being of the {gender} gender is {genderProb}%</p>}
                {nationalityA && <p id="form-item">Your predicted nationalities are: </p>}
                {nationalityA && <p id="form-item">You are from {nationalityA}({regionNamesInEnglish.of(`${nationalityA}`)}), chances of this being true being {nationProbA}%</p>}
                {nationalityB && <p id="form-item">You are from {nationalityB}({regionNamesInEnglish.of(`${nationalityB}`)}), chances of this being true being {nationProbB}%</p>}
                {nationalityC && <p id="form-item">You are from {nationalityC}({regionNamesInEnglish.of(`${nationalityC}`)}), chances of this being true being {nationProbC}%</p>}
            </div>
        </div>
    )
}