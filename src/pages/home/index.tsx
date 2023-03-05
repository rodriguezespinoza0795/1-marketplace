import { Container, Button } from '@mui/material';

export const HomePage: React.FC<{}> = () => {
    return (
        <Container sx={{mt:9}} maxWidth="xl">
            <Button variant="contained">
                Estamos en Home
            </Button>
        </Container>
    )
}