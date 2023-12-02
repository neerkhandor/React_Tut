import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdeliver.net/gh/fawazahmed0/currency-api@/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res.currency))
        console.log(data);
        console.log(label)
    })
    
}