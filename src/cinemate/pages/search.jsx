import React from 'react';
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import useFetch from "../hooks/useFetch.jsx";
import {Cards} from "../index.js";
import {useSearchParams} from "react-router";

function Search({api}) {
    const [searchParam] = useSearchParams()
    const queryTerm = searchParam.get('q')
    const {data:movies,error,loading} = useFetch(api, 1, undefined, queryTerm)

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}><CircularProgress /></Box>;
    if (error) return <Typography color="error">Error: {error}</Typography>;
    if (!movies) return <Typography>No data found</Typography>;

    return (
        <Container maxWidth="lg">
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem'}}>
                {movies.length === 0 && <Typography textAlign={"center"}>No results found for {queryTerm}</Typography>}
            </Box>
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem'}}>
                {movies.map((movie) => <Cards key={movie.id} movie={movie}/>)}
            </Box>
        </Container>
    );
}

export default Search;