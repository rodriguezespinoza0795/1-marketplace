import { Container, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { characters } from '../../api/characters';
import { CardComponent, HeaderComponent } from '../../components';
import { useNotification } from '../../context/notification.context';
import { TypeCharacter } from './homa.types';

export const HomePage: React.FC<{}> = () => {
    const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(null)
    const {getSuccess} = useNotification()
    const handleClick = () => {
        getSuccess("Hola mundo")
    }

    useEffect(() => {
      characters.getAll({ page: 1 }).then((r) => {
        setAllCharacters(r.data.results)
      }).catch((e) => {
        console.error(e)
      })
    }, [])

    return (
        <Container maxWidth="xl">
            <HeaderComponent title="Hola Mundo" description="Bienvenido" element={
                <Button variant="contained" onClick={handleClick} fullWidth>
                    Estamos en Home
                </Button>
            }/>
            <div>
                {
                allCharacters?.length !== 0 ? (
                    <Grid container spacing={2} direction="row">
                    {allCharacters?.map((character) => (
                        <Grid item xs={3} key={character.id} >
                            <CardComponent image={character.image} name={character.name} species={character.species} status={character.status} />
                        </Grid>
                    ))}
                    </Grid>
                ) : ""
                }
            </div>
        </Container>
    )
}