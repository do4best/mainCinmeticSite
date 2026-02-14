import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SocialLinks() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3" textAlign={"center"} component="div" sx={{ mt: 1, mb: 1 }}>Our Details</Typography>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <Item><XIcon>Join us at X</XIcon></Item>
                </Grid>
                <Grid size={4}>
                    <Item><YouTubeIcon></YouTubeIcon></Item>
                </Grid>
                <Grid size={4}>
                    <Item><InstagramIcon></InstagramIcon></Item>
                </Grid>

            </Grid>
        </Box>
    );
}
