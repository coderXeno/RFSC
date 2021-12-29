import React from "react";

export default function Add(){
    const [thingsArray, setThingsArray] = React.useState(["Item 1", "Item 2"])
    
    function addItem() {
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Item ${prevThingsArray.length + 1}`]
        })
    }

    function deleteItem(){
        setThingsArray(prevThingsArray => { 
            return prevThingsArray.slice(0, prevThingsArray.length -1)
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing} className="item-adder">{thing}</p>)
    
    return (
        <div className="adder-div">
            <div className="button-container">
                <button onClick={addItem} id="item-adder-button">Add Item</button>
                <button onClick={deleteItem} id="item-adder-button">Delete Item</button>
            </div>
            {thingsElements}
        </div>
    )
}