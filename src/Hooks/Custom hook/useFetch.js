import {useEffect, useState} from "react";

export function useFetch(url) {
    const [data, setDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setDate(data);
            setLoading(false);
            })
            .catch((err)=>{
                setError(err);
                setLoading(false);
            });
    },[url]);
    return {data,loading,error}
}