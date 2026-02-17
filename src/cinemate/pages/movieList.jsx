import React, {useEffect} from 'react';
import {Box, Container} from "@mui/material";
import {Cards, Header} from "../index.js";
import Card from "@mui/material/Card";
import useFetch from "../hooks/useFetch.jsx";


function MovieList({api}) {


  const {data:movies} = useFetch(api)
    console.log(movies);
    return (
        <>
<Container maxWidth="lg">
            <Box sx={{my: 4,minHeight:'50vh',width:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',gap:'1rem'}}>
                {movies.map((movie)=> <Cards key={movie.id} movie={movie}/>)}

            </Box>

</Container>

        </>
    );
}

export default MovieList;