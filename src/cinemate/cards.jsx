import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import {Box, Chip, Rating, Stack, Typography} from "@mui/material";
import backgroundImage from '../../src/assets/backup.png';

// https://image.tmdb.org/t/p/w500/khsjdhfjksdhfkjsdhf.jpg
function Cards({movie}) {
    const {title,overview,poster_path,release_date,vote_average} = movie;
    const image = poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:backgroundImage
    return (
        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 2 }}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                    sx={{ height: 450 }}
                    image={image}
                    title={title}
                />
            </Link>
            <CardContent sx={{ flexGrow: 1 }}>
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', height: '3.6em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {title}
                    </Typography>
                </Link>
                
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip label={release_date?.split('-')[0]} size="small" color="primary" variant="outlined" />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating value={vote_average / 2} precision={0.1} size="small" readOnly />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                            {vote_average?.toFixed(1)}
                        </Typography>
                    </Box>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                    {overview}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                <Button variant="outlined" size="small">Share</Button>
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="small">Details</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default Cards;