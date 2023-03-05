import { Container, Button } from '@mui/material';
import { useNotification } from '../../context/notification.context';

export const HomePage: React.FC<{}> = () => {
    const {getError} = useNotification()
    const handleClick = () => {
        getError("Hola mundo")
    }
    return (
        <Container sx={{mt:9}} maxWidth="xl">
            <Button variant="contained" onClick={handleClick}>
                Estamos en Home
            </Button>
        </Container>
    )
}