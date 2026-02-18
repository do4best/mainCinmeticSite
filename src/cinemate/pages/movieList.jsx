import React, {useState} from 'react';
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import {Cards, Header} from "../index.js";
import Card from "@mui/material/Card";
import useFetch from "../hooks/useFetch.jsx";
import Button from "@mui/material/Button";


function MovieList({api}) {
    const [currentPage,setCurrentpage]=useState(1);
    const {data:movies,error,loading, totalPages: apiTotalPages} = useFetch(api, currentPage)

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}><CircularProgress /></Box>;
    if (error) return <Typography color="error">Error: {error}</Typography>;
    if (!movies) return <Typography>No data found</Typography>;

    const totalPages = Math.min(apiTotalPages, 500); // TMDB API often limits to 500 pages for some endpoints
    console.log(movies);
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentpage(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentpage(prev => prev - 1);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentpage(pageNumber);
    };

    // Calculate which page numbers to show (optional, but good for many pages)
    // For now, let's keep it simple as it was, but it might create MANY buttons if totalPages is large.
    // Let's show a range of pages.
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);
    const displayedPages = Array.from({ length: endPage - Math.max(1, endPage - 11) + 1 }, (_, i) => Math.max(1, endPage - 4) + i);

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{my: 4, minHeight: '50vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem'}}>
                    {totalPages > 1 && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, gap: 1, flexWrap: 'wrap' }}>
                            <Button variant="contained" onClick={handlePrev} disabled={currentPage === 1}>
                                Previous
                            </Button>

                            {displayedPages.map((pageNum) => (
                                <Button
                                    variant={currentPage === pageNum ? 'outlined' : 'contained'}
                                    key={pageNum}
                                    onClick={() => handlePageClick(pageNum)}
                                >
                                    {pageNum}
                                </Button>
                            ))}

                            <Button variant="contained" onClick={handleNext} disabled={currentPage === totalPages}>
                                Next
                            </Button>
                        </Box>
                    )}
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem'}}>
                        {movies.map((movie) => <Cards key={movie.id} movie={movie}/>)}
                    </Box>

                    {totalPages > 1 && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, gap: 1, flexWrap: 'wrap' }}>
                            <Button variant="contained" onClick={handlePrev} disabled={currentPage === 1}>
                                Previous
                            </Button>

                            {displayedPages.map((pageNum) => (
                                <Button
                                    variant={currentPage === pageNum ? 'outlined' : 'contained'}
                                    key={pageNum}
                                    onClick={() => handlePageClick(pageNum)}
                                >
                                    {pageNum}
                                </Button>
                            ))}

                            <Button variant="contained" onClick={handleNext} disabled={currentPage === totalPages}>
                                Next
                            </Button>
                        </Box>
                    )}
                </Box>
            </Container>
        </>
    );
}

export default MovieList;