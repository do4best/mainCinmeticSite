import React, {useEffect, useMemo, useState} from 'react';
import {Box, Container} from "@mui/material";
import {Cards} from "../index.js";
const DEFAULT_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzgzYTFhOTM0YzU1MmUzNzc0OTA3YmJhZWRiMTk4YiIsIm5iZiI6MTcwNDUyNDU5OC4xNSwic3ViIjoiNjU5OGZiMzY3ZDU1MDQwMWE3MmYwZGQwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KcVFM8-Q2kUlhmr9_9rzgTsfYVR-M8INXk0K-mhA2zg'
    }
};
function  useFetch(api,options=DEFAULT_OPTIONS ) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = `https://api.themoviedb.org/3/${api}?page=1`;
    const stableOptions = useMemo(() => options, [JSON.stringify(options)]);

    useEffect(() => {
        if (!url) return;

        const controller = new AbortController();

        async function fetchData() {
            setLoading(true);
            setError(null);

       try {
                const mergedOptions = {
                    ...DEFAULT_OPTIONS,
                    ...stableOptions,
                    headers: {
                        ...DEFAULT_OPTIONS.headers,
                        ...(stableOptions?.headers ?? {}),
                    },
                    signal: controller.signal,
                };

                const res = await fetch(url, mergedOptions);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                setData(json.results ?? []);
            } catch (err) {
                if (err.name !== "AbortError") setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;

