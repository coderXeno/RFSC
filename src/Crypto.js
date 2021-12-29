import axios from "axios";
import React from "react";
import CryptoContainer from "./Crypto_Container";

//This file is still under development. All crypto related files are under development

export default function Crypto(){
    let crypto_array = []

    axios.get(`https://api2.binance.com/api/v3/ticker/24hr`)
        .then((response)=>{
            crypto_array.push(response.data);
            console.log(crypto_array);
        })
        .catch((err)=>{
            console.log(err);
        })

    let crypto_item = crypto_array.map(item => {
            return(
                <CryptoContainer 
                    symbol = {item.symbol}
                    priceChange = {item.priceChange}
                    priceChangePercent = {item.priceChangePercent}
                    weightedAvgPrice = {item.weightedAvgPrice}
                    prevClosePrice = {item.prevClosePrice}
                    lastPrice = {item.lastPrice}
                    lastQty = {item.lastQty}
                    bidPrice = {item.bidPrice}
                    bidQty = {item.bidQty}
                    askPrice = {item.askPrice}
                    askQty = {item.askQty}
                    openPrice = {item.openPrice}
                    highPrice = {item.highPrice}
                    lowPrice = {item.lowPrice}
                    volume = {item.volume}
                    quoteVolume = {item.quoteVolume}
                />
            )
        })

    return(
        <div className="crpytog">
            {crypto_item}
        </div>
    )
}