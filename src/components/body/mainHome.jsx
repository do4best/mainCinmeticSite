import * as React from 'react';
import { motion } from "motion/react"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";
import backgroundImage from '../../../src/assets/irfan.jpg';

// import JoinTheEvent from "../Body/joinTheEvent.jsx";
// import OurRecords from "../footer/ourRecords.jsx";
import SocialLinks from "../footer/socialLinks.jsx";
// import theme from "./theme.js";
import Button from "@mui/material/Button";
import JoinTheEvent from "../mediumBody/joinTheEvent.jsx";
// import OurPlayList from "../ourEvents/ourPlayList.jsx";
// import OurNastalgia from "../ourEvents/ourNastalgia.jsx"; // Import your image
 function MainHome() {
    let musicRocks =["80-90 Nostalgia"," . "," Dance Classics "," . "," Party Anthems"]

    return (
        <>
        <Box sx={{
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            color: 'primary',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

        }} >
            <Container fixed={false} sx={{ position: 'relative', zIndex: 1 }}>


                <Box sx={{ mt: 2,display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center',minHeight:'100vh', position: 'relative', zIndex: 1 }} >

                    <Typography variant="h3"  component="div" sx={{mt:"1rem"}} >
                        <motion.h1 initial={{
                            y:15,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:1,ease:"circInOut"}}>Welcome to the amazing world of Irfan</motion.h1>
                    </Typography>
                    <Box sx={{mt:"1rem",display:"flex",flexDirection:"row"}}>
                    {musicRocks.map((index, value)=>(
                        <Typography variant="h5"  component="div" sx={{mt:"1rem"}} key={value}>
                    {index}
                </Typography>
                    ))}
                    </Box>
                    <Box sx={{mt:"1rem",display:"flex",gap:2}}>
                    <Button variant="contained" sx={{mt:"1rem"}}>Join Us</Button>
                    <Button variant="contained" sx={{mt:"1rem"}}>Learn More</Button>
                    </Box>
                </Box>


            </Container>
      <JoinTheEvent/>
            {/*<OurPlayList/>*/}
            {/*<OurNastalgia/>*/}
            {/*<OurRecords/>*/}

        </Box>

        </>
    );
}
export default MainHome