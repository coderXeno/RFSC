import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page from "./Page.js";
import Bored from "./Bored";
import Namify from "./Namify.js";
import Meme from "./Meme.js";
import Add from "./Add.js";
import QuizSelect from "./QuizSelect.js";
import Trivia from "./Trivia.js";

export default function App(){
    return(
        <div className = "app">
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/bored">
                        <Bored />
                    </Route>

                    <Route exact path = "/namify">
                        <Namify />
                    </Route>

                    <Route exact path = "/meme">
                        <Meme />
                    </Route>

                    <Route exact path = "/quiz-select">
                        <QuizSelect />
                    </Route>

                    <Route exact path = "/add">
                        <Add />
                    </Route>

                    <Route exact path="/trivia">
                        <Trivia />
                    </Route>

                    <Route path ="/">
                        <Page />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}