import Layout from "@/components/Layout";
import * as React from 'react';
import preguntas from '@/components/preguntas';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Ordenadas() {

    React.useEffect(() => { document.title = "Preguntas ordenadas"; }, []);

    const [preguntaActual, setPreguntaActual] = React.useState(0);
    const [puntuacion, setPuntuacion] = React.useState(0);
    const [erroneas, setErroneas] = React.useState(0);
    const [isFinish, setIsFinish] = React.useState(false);
    const [areDisabled, setAreDisabled] = React.useState(false);
    const [answerShown, setAnswerShown] = React.useState(false);

    const handleAnswerSubmit = (isCorrect, e) => {
        if (isCorrect === true) setPuntuacion(puntuacion + 1);
        if (isCorrect === false) setErroneas(erroneas + 1);

        setAreDisabled(true)

        e.currentTarget.classList.add(isCorrect ? "correct" : "incorrect");
    };

    if (isFinish)
        return (
            <Layout>
                <div style={{ display: 'grid', placeItems: 'center', margin: '5%' }}>
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="contained" style={{ margin: 5 }}>
                            <React.Fragment>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Respuestas correctas: {puntuacion}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Respuestas incorrectas: {erroneas}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                    <Button
                                        variant="contained"
                                        onClick={() => (window.location.href = "/modos/ordenadas")}
                                    >Volver a intentar</Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            setIsFinish(false);
                                            setAnswerShown(true);
                                        }}
                                    >Ver respuestas</Button>
                                </CardActions>
                            </React.Fragment>
                        </Card>
                    </Box>
                </div>

            </Layout>
        );

    if (answerShown)
        return (
            <Layout>
                <div style={{ display: 'grid', placeItems: 'center', margin: '5%', gap: '1rem' }}>
                    <Box sx={{ minWidth: 275 }}>
                        <Grid container spacing={2}>
                            {preguntas.map((data, index) => (
                                <Grid key={index} item xs={6}>
                                    <Item>
                                        <Card variant="contained" style={{ margin: 5 }}>
                                            <React.Fragment>
                                                <CardContent>
                                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                        Pregunta: {index + 1}
                                                    </Typography>
                                                    <Typography variant="h5" component="div">
                                                        {data.titulo}
                                                    </Typography>
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                        Respuesta
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        {data.opciones.filter(opcion => opcion.isCorrect)[0].textoRespuesta}
                                                    </Typography>
                                                </CardContent>
                                            </React.Fragment>
                                        </Card>
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Button variant="contained" href="/modos">Finalizar</Button>
                </div>

            </Layout>
        );

    return (
        <Layout>
            <div style={{ display: 'grid', placeItems: 'center', margin: '5%' }}>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="contained" style={{ margin: 5 }}>
                        <React.Fragment>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center', flexFlow: 'row wrap' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Pregunta: {preguntaActual + 1}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {preguntas[preguntaActual].titulo}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        gap: '1rem'
                                    }}
                                >
                                    {
                                        preguntas[preguntaActual].opciones.map((data, index) => (
                                            <Button
                                                variant="outlined"
                                                key={index}
                                                disabled={areDisabled}
                                                onClick={(e) => { handleAnswerSubmit(data.isCorrect, e) }}
                                            >{data.textoRespuesta}</Button>
                                        ))
                                    }
                                </CardActions>
                            </div>
                        </React.Fragment>
                    </Card>
                </Box>
                <Button
                    variant="contained"
                    onClick={() => {
                        setAreDisabled(false);
                        if (preguntaActual === preguntas.length - 1) {
                            setIsFinish(true);
                        } else {
                            setPreguntaActual(preguntaActual + 1)
                        }
                    }}
                >Siguiente</Button>
            </div>
        </Layout>
    )
}