import React, {Fragment} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import backgroundImage from '../../src/assets/backup.png';

// https://image.tmdb.org/t/p/w500/khsjdhfjksdhfkjsdhf.jpg
function Cards({movie}) {
    const {title,overview,poster_path,release_date,vote_average} = movie;
    const image = poster_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:backgroundImage
    return (
        <>

            <Card sx={{ maxWidth: 345 }} disableGutters={false}>
                <Link to={`/movie/${movie.id}`}>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={image}
                        title="green iguana"
                    />
                </Link>
                <Typography sx={{bgcolor:"blue",color:'white',border:'rounded' }} color="text.secondary">{release_date} :
                   Release Date
                </Typography>
                <Typography sx={{ bgcolor:"green",color:'white',border:'rounded' }} color="text.secondary"> Ratings :
                    {vote_average*10}% </Typography>
                <CardContent>
                    <Link to={`/movie/${movie.id}`}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    </Link>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {overview.substring(0,200)+"...."}
                        </Typography>

                </CardContent>
                <CardActions>
                    <Button variant={'contained'} sx={{color:'white',bgcolor:'blue'}} size="small">Share</Button>
                    <Link to={`/movie/${movie.id}`}>
                        <Button variant={'contained'} size="small">Learn More</Button>
                    </Link>
                </CardActions>
            </Card>


        </>
    );
}

export default Cards;