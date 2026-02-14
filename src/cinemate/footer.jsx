import { Box, Container, Typography, Link } from '@mui/material';

export default function Footer() {
    const links=["Instagram","Facebook","Twitter","Github"]
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
            }}
        >

                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ mb: 2 }}>
                <Typography variant="body1">My Footer Content</Typography>
                <Typography variant="body2" color="text.secondary">
                    {'Copyright © '}
                    <Link color="inherit" href="https://mui.com/">Your Website</Link>{' '}
                    {new Date().getFullYear()}
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    {links.map((link)=><Link key={link} href={link}>{link}</Link>)}
                </Box>
                </Box>

        </Box>
    );
}
