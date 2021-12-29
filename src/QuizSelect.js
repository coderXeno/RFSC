import axios from 'axios';
import React from 'react';

export default function QuizSelect(){

    let [questions,setQuestions] = React.useState(null);
    let [category,setCategory] = React.useState(null);
    let [difficulty,setDifficulty] = React.useState(null);
    let [temporary,setTemporary] = React.useState(null);
    let questionArray = [];

    const handleQuestionChange = (event) => {
        setQuestions(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTemporary(questions);

        axios.get(`https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`)
            .then((response)=>{
                for(let i=0;i<questions;i++){
                    return(
                        <p>{response.data.results[i].question}</p>
                    )
                }
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    return(
        <div>
            {questions && category && difficulty && temporary ? <h1>Questions will appear below!</h1> :<div>
                <h1>Choose the quiz details!</h1>
                <p>Until you fill out all the fields, your quiz wont start even if you press the Start Quiz button!</p>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="nqn">Number Of Questions</label>
                    <input type="number" id="nqn" name="nqn" placeholder="Type in the number of questions" onChange={handleQuestionChange} required></input>

                    <label htmlFor="difficulty">Difficulty</label>
                    <select id="difficulty" name="difficulty" onChange={handleDifficultyChange}>
                        <option disabled selected value>--Select A Difficulty--</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" onChange={handleCategoryChange}>
                        <option disabled selected value>--Select A Category--</option>
                        <option value="09">General knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals and Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="31">Entertainment: Japanese Anime and Manga</option>
                        <option value="32">Entertainment: Cartoons and Animation</option>
                        <option value="17">Science and Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="30">Science: Gadgets and Technology</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                    </select>
                
                    <button className="form-button">Start The Quiz</button>
                </form>
            </div>}
            {questions && category && difficulty && temporary && <div>
                <h1>Let's Start!</h1>
                <hr/>
                <p>No of Questions: {questions}</p>
                <p>Category Chosen: {category}</p>
                <p>Difficulty: {difficulty}</p>
                <br/>
            </div>}
        </div>
    )
}