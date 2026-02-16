import React from 'react';
import {Route, Routes} from "react-router";
import {MovieList,MovieItem,PageNotFound,Search} from "../cinemate/pages";
function AllRouter() {
    return (
        <>
<Routes>
    <Route path="/" element={<MovieList/>}/>
    <Route path="movie/:id" element={<MovieItem/>}/>
    <Route path="movies/popular" element={<MovieList/>}/>
    <Route path="movies/top" element={<MovieItem/>}/>
    <Route path="movies/upcoming" element={<MovieList/>}/>
    <Route path="search" element={<Search/>}/>
    <Route path="*" element={<PageNotFound/>}/>
</Routes>
        </>
    );
}

export default AllRouter;