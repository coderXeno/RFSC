import React from "react";
import {Link} from "react-router-dom";

export default function Page(){
    return(
        <div className = "main-div">
            <div className="adder" id="item">
                <h4 className = "headings" id="item-inner">Wanna See something interesting?</h4>
                <p className = "paragraphs" id="item-inner">Add or Delete Items Accordingly</p>
                <button className = "adder-button" id="item-inner"><Link to = "/add" className="redir">Go</Link></button>
            </div>

            <div className = "bored" id="item">
                <h4 className = "headings" id="item-inner">Bored?</h4>
                <p className = "paragraphs" id="item-inner">Get an activity suggested to you with the number of people required</p>
                <button className = "suggest" id="item-inner"><Link to = "/bored" className="redir">Suggest</Link></button>
            </div>
            
            <div className = "namify" id="item">
                <h4 className = "headings" id="item-inner">Namify</h4>
                <p className = "paragraphs" id="item-inner">A fun game to play</p>
                <button className = "play" id="item-inner"><Link to = "/namify" className="redir">Play</Link></button>
            </div>
            
            <div className = "meme" id="item">
                <h4 className = "headings" id="item-inner">Meme</h4>
                <p className = "paragraphs" id="item-inner">Get Popular memes</p>
                <button className = "show" id="item-inner"><Link to = "/meme" className="redir">Show me</Link></button>
            </div>

            <div className = "crypto" id="item">
                <h4 className = "headings" id="item-inner">Quiz!</h4>
                <p className = "paragraphs" id="item-inner">Take a quiz and test your knowledge!</p>
                <button className = "crypto-button" id="item-inner"><Link to = "/quiz-select" className="redir">Let's Go!</Link></button>
            </div>
        </div>
    )
}