import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [inProgress,seInProgress] = useState(false);

    useEffect(() => {
        const getData = async () => {
        try {
            seInProgress(true);
            const res = await fetch(url);
            const result = await res.json();
            setData(result);
        } catch(e){
            setError(e)
        }
        finally {
            seInProgress(false);
        }
      };
      getData();
    }, []);

    return {data,error, inProgress};
};