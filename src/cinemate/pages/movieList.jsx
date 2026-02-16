import React, {useEffect} from 'react';
import {Box, Container} from "@mui/material";
import {Cards, Header} from "../index.js";
import Card from "@mui/material/Card";


function MovieList() {
    const [movies, setMovies] = React.useState([])
    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzgzYTFhOTM0YzU1MmUzNzc0OTA3YmJhZWRiMTk4YiIsIm5iZiI6MTcwNDUyNDU5OC4xNSwic3ViIjoiNjU5OGZiMzY3ZDU1MDQwMWE3MmYwZGQwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KcVFM8-Q2kUlhmr9_9rzgTsfYVR-M8INXk0K-mhA2zg'
                }
            };

            try {
                const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", options);
                const data = await res.json();
                console.log("TMDB response:", data);
                setMovies(data.results ?? []);
            } catch (err) {
                console.error("TMDB error:", err);
            }
        }
        fetchData();
    }, [])
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