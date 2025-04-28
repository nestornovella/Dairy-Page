import { useState, useEffect } from "react";
import JsonData from"../noComestibles.json"

function useGetData() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(JsonData)
    }, [])

    return data;
}

export default useGetData;
