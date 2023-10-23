import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { useRouter } from "next/router";

const NavbarComponent = () => {
    
    const router = useRouter();
    const pages: { [key: string]: () => void }= {
        'Humans': onHomePageButtonClick
    };

    function onHomePageButtonClick(){
        router.push('/');
    }
  
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button
                        component="a"
                        sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700, letterSpacing: '.3rem', }}
                        onClick={onHomePageButtonClick}
                    >
                        R&M
                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {Object.keys(pages).map((page) => (
                            <Button
                                key={page}
                                onClick={pages[page]}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavbarComponent;