import React from "react";

//This file is still under development. All crypto related files are under development

export default function CryptoContainer(props){
    return(
        <div>
            <p>Symbol: {props.symbol}</p>
            <p>Change In Price: {props.priceChange}</p>
            <p>Percentage of Change In Price: {props.priceChangePercent}</p>
            <p>Weighted Average Price: {props.weightedAvgPrice}</p>
            <p>Previous Close Price: {props.prevClosePrice}</p>
            <p>Last Price: {props.lastPrice}</p>
            <p>Last Quantity: {props.lastQty}</p>
            <p>Bid Price: {props.bidPrice}</p>
            <p>Bid Quantity: {props.bidQty}</p>
            <p>Ask Price: {props.askPrice}</p>
            <p>Ask Quantity: {props.askQty}</p>
            <p>Open Price: {props.openPrice}</p>
            <p>High Price: {props.highPrice}</p>
            <p>Low Price: {props.lowPrice}</p>
            <p>Volume: {props.volume}</p>
            <p>Quote Volume: {props.quoteVolume}</p>
        </div>
    )
}