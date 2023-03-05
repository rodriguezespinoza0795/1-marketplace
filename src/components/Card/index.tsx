import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material"

type CardProps = {
    image: string,
    name: string,
    species: string,
    status: string
}

export const CardComponent: React.FC<CardProps> = ({image, name, species, status}) => {
    return (
        <Card>
            <CardMedia 
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h4" sx={{mb:1.5}}>{name}</Typography>
                <Divider/>
                <Typography sx={{mt:1.5}}>Especie:{species}</Typography>
                <Typography sx={{mt:1.5}}>Estado:{status}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" fullWidth>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )

}