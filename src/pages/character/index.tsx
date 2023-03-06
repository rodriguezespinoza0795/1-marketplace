import { Box, Container, CircularProgress, Grid, Typography, Divider, Chip } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { characters } from "../../api/characters"
import { TypeCharacter } from "../../types"

const CharacterPage: React.FC<{}> = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState<boolean>(true)
    const [character, setCharacter] = useState<TypeCharacter | null>()
    
    useEffect(()=> {
        characters
            .getById({id})
            .then((data) => {
                setCharacter(data.data);
                setLoading(false);
            })
            .catch((error => console.error(error)))
    },[id])

    return (
        <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
            {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <CircularProgress />
            </Box>
            ) : (
            <Grid sx={{mt:2}} container columnSpacing={2}>
                <Grid item xs={6}>
                    <Typography variant='h1' >{character?.name}</Typography>
                    <Divider/>
                    <Typography variant="h6">{character?.origin.name}</Typography>
                    <Box sx={{mt: 2}}>
                    <Chip color="primary" variant="outlined" label={character?.status} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                <img src={character?.image} style={{width:"100%", borderRadius:"0.5em"}} alt={character?.name} />
                </Grid>
            </Grid>
            )}
        </Container>
        </Box>
    )
}

export default CharacterPage;