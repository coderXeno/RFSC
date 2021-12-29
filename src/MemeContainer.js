import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.img}`} id="image-container" className="meme-card-item"/>
            <p className="meme-card-item" id="name-container">Name: {props.name}</p>
        </div>
    )
}