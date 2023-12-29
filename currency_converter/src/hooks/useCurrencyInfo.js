import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res.currency))
        console.log(data);
        console.log(label)
    },[currency])
    return data;
    
}
export default useCurrencyInfo;

// data ko agar regular variable mein hold karenge to problem hoga wo ui mein kabhi update nahi hoga
// so ye hame useState se value return karvata hai and agar kuch value na aaye to empty obj return hojaye
// so currency ke andar kabhi bhi change ho to value change hoti hai ye ek dependency hai
