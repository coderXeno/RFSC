import React, { useState } from "react";
import MemeContainer from "./MemeContainer.js";
import memesrc from "./memes.js";

export default function Meme(){
    const random = Math.floor(Math.random() * memesrc.length);
    const meme = memesrc[random].url;
    const memeName = memesrc[random].name;

    return(
        <div className="meme-card">
            <p id="image-p" className="meme-card-item">Here's a meme for you!</p>
            <MemeContainer 
                img = {meme}
                name = {memeName}
            />
        </div>
    )
}