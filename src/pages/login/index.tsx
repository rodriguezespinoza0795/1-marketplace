import { Container, Button } from '@mui/material';

export const LoginPage: React.FC<{}> = () => {
    return (
        <Container sx={{mt:9}} maxWidth="xl">
            <Button variant="contained">
                Estamos en Login
            </Button>
        </Container>
    )
}