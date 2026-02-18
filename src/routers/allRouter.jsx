import React from 'react';
import {Route, Routes} from "react-router";
import {MovieList,MovieItem,PageNotFound,Search} from "../cinemate/pages";
function AllRouter() {
    return (
        <>
<Routes>
    <Route path="/" element={<MovieList api="movie/now_playing"/>}/>
    <Route path="movie/:id" element={<MovieItem/>}/>
    <Route path="movies/popular" element={<MovieList api="movie/popular"/>}/>
    <Route path="movies/top" element={<MovieList api="movie/top_rated"/>}/>
    <Route path="movies/upcoming" element={<MovieList api="movie/upcoming"/>}/>
    <Route path="search" element={<Search api="search/movie"/>}/>
    <Route path="*" element={<PageNotFound/>}/>
</Routes>
        </>
    );
}

export default AllRouter;