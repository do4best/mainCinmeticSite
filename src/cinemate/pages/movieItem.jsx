import React, {useEffect, useMemo} from 'react';
import {
    Box,
    CircularProgress,
    Container,
    Grid,
    Stack,
    Chip,
    Rating,
    Divider
} from "@mui/material";
import Typography from '@mui/material/Typography';
import {useParams} from "react-router";

export default function MovieItem() {
    const params = useParams();
    const url = `https://api.themoviedb.org/3/movie/${params.id}`;

    const stableOptions = useMemo(() => ({
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzgzYTFhOTM0YzU1MmUzNzc0OTA3YmJhZWRiMTk4YiIsIm5iZiI6MTcwNDUyNDU5OC4xNSwic3ViIjoiNjU5OGZiMzY3ZDU1MDQwMWE3MmYwZGQwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.KcVFM8-Q2kUlhmr9_9rzgTsfYVR-M8INXk0K-mhA2zg'
        }
    }), []);

    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        if (!url) return;
        async function fetchData() {
            setLoading(true)
            try {
                const res = await fetch(url, stableOptions);
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, stableOptions])

    if (loading) {
        return (
            <Box sx={{ bgcolor: 'background.black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
                <CircularProgress />
            </Box>
        )
    }

    if (!data || data.success === false) {
        return (
            <Box sx={{ bgcolor: 'background.black', display: 'flex', justifyContent: 'center',flexDirection:'row',flexWrap:'wrap', alignItems: 'center', height: '50vh', width: '100%',gap:5 }}>
                <Typography variant="h5" color="error">Movie not found</Typography>
            </Box>
        )
    }

    const image = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : "/static/images/cards/contemplative-reptile.jpg";

    return (
        <Container maxWidth="lg" sx={{  }}>
            <Box sx={{ mb: 4, display:'flex',flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: 4 },
                alignItems: { xs: 'stretch', md: 'center' },
                height: { xs: 'auto', md: '80vh' }, justifyContent:'center',width:'100%' }}>
            {/*<Grid container spacing={0} alignItems="start">*/}
                <Grid item xs={12} md={12}>
                    <Box
                        component="img"
                        src={image}
                        alt={data.title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 2,
                            boxShadow: 3,
                            flexBasis: { xs: '100%', md: '100%' },   // was smaller? increase this
                            maxWidth: { xs: '100%', md: '100%' },

                        }}
                    />
                </Grid>
                <Grid item xs={12} md={12}>


                            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                                {data.title}
                            </Typography>
                            {data.tagline && (
                                <Typography variant="h6" color="text.secondary" fontStyle="italic">
                                    {data.tagline}
                                </Typography>
                            )}



                            {data.genres?.map((genre) => (
                                <Chip key={genre.id} label={genre.name} variant="outlined" />
                            ))}



                            <Rating value={data.vote_average / 2} precision={0.1} readOnly />
                            <Typography variant="body1" color="text.secondary">
                                {data.vote_average?.toFixed(1)} / 10 ({data.vote_count} votes)
                            </Typography>


                        <Box>
                            <Typography variant="h5" gutterBottom>
                                Overview
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                {data.overview}
                            </Typography>
                        </Box>

                        <Divider />

                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Runtime
                                </Typography>
                                <Typography variant="body1">
                                    {data.runtime} min
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Release Date
                                </Typography>
                                <Typography variant="body1">
                                    {data.release_date}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Budget
                                </Typography>
                                <Typography variant="body1">
                                    ${data.budget?.toLocaleString()}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Revenue
                                </Typography>
                                <Typography variant="body1">
                                    ${data.revenue?.toLocaleString()}
                                </Typography>
                            </Grid>
                        </Grid>

                </Grid>
            {/*</Grid>*/}
            </Box>
        </Container>
    );
}
