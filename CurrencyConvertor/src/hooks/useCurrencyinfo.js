// this below method/Hook is returning the currency

import { useState, useEffect } from "react"

function useCurrencyInfo(currency){
    const [data , setData] =useState({})
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) // here we are fetching the data from the api 
        .then((res)=> res.json()) // the data is being converted to the jason format here
        .then((res)=> setData(res[currency])) // the value of the currency passed above is fetched from here
        console.log(data)
    },[currency])
    return data // output is returned
}

export default useCurrencyInfo; // result exported

