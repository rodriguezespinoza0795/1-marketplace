import { Container, Button } from '@mui/material';
import { useEffect } from 'react';
import { characters } from '../../api/characters';
import { HeaderComponent } from '../../components';
import { useNotification } from '../../context/notification.context';

export const HomePage: React.FC<{}> = () => {
    const {getSuccess} = useNotification()
    const handleClick = () => {
        getSuccess("Hola mundo")
    }

    useEffect(()=>{
        characters.getAll({page:2}).then((result)=> {
            console.log('All', result.data.results)
        })
        characters.getById({id:1}).then((result)=> {
            console.log('ID', result.data)
        })
    },[])

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