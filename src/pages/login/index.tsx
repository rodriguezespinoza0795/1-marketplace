import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNotification } from '../../context/notification.context';
import { LoginValidate } from '../../utils/validateForm';

type LoginType = {
    username: String
    password: String
}

export const LoginPage: React.FC<{}> = () => {
    const { getSuccess, getError } = useNotification()
    const [loginData, setLoginData] = useState<LoginType>({
        username: "",
        password: "",
    })

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        LoginValidate.validate(loginData).then(()=> {

        }).catch((error)=> {
            getError(error.message)
        })
        getSuccess(JSON.stringify(loginData));
    }

    return (
        <Container maxWidth="sm">
            <Grid 
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh" }}
            >
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
                        Iniciar sesión
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                name="username"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Email"
                                sx={{ mt: 2, mb: 1.5 }}
                                onChange={dataLogin}
                            />
                            <TextField
                                name="password"
                                margin="normal"
                                type="password"
                                fullWidth
                                label="Password"
                                sx={{ mt: 1.5, mb: 1.5 }}
                                onChange={dataLogin}
                            />

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1.5, mb: 3 }}
                            >
                                Iniciar sesión
                            </Button>
                        </Box>
                    </Paper>
                    </Grid>
            </Grid>
        </Container>
    )
}