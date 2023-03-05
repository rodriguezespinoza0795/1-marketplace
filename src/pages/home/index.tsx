import { Container, Button } from '@mui/material';
import { HeaderComponent } from '../../components';
import { useNotification } from '../../context/notification.context';

export const HomePage: React.FC<{}> = () => {
    const {getSuccess} = useNotification()
    const handleClick = () => {
        getSuccess("Hola mundo")
    }
    return (
        <Container maxWidth="xl">
            <HeaderComponent title="Hola Mundo" description="Bienvenido" element={
                <Button variant="contained" onClick={handleClick} fullWidth>
                    Estamos en Home
                </Button>
            }/>
        </Container>
    )
}