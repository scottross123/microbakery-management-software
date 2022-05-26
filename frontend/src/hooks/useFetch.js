import { useState, useEffect } from 'react';

function useFetch(url, options) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch(url, options)
                const json = await response.json()
                console.log(JSON.stringify(json))
                setData(json)
                console.log('now data ', data)
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;