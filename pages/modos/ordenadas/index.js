import Layout from "@/components/Layout";
import * as React from 'react';
import preguntas from '@/components/preguntas';

import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));
export default function Ordenadas() {
    React.useEffect(() => { document.title = "Preguntas ordenadas"; }, []);

    const [preguntaActual, setPreguntaActual] = React.useState(0);
    const [puntuacion, setPuntuacion] = React.useState(0);
    const [erroneas, setErroneas] = React.useState(0);
    const [isFinish, setIsFinish] = React.useState(false);
    const [areDisabled, setAreDisabled] = React.useState(false);
    const [answerShown, setAnswerShown] = React.useState(false);
    const [hasAnswered, setHasAnswered] = React.useState(false);
    const [showWarning, setShowWarning] = React.useState(false);

    // Estado para almacenar las respuestas del usuario
    const [respuestasUsuario, setRespuestasUsuario] = React.useState([]);

    const handleAnswerSubmit = (isCorrect, e) => {
        // Guardar la respuesta seleccionada por el usuario
        setRespuestasUsuario((prev) => [
            ...prev,
            {
                pregunta: preguntas[preguntaActual].titulo,
                respuestaUsuario: e.currentTarget.textContent,
                respuestaCorrecta: preguntas[preguntaActual].opciones.find((opcion) => opcion.isCorrect)?.textoRespuesta || "No disponible",
                esCorrecta: isCorrect,
            },
        ]);

        if (isCorrect === true) setPuntuacion(puntuacion + 1);
        if (isCorrect === false) setErroneas(erroneas + 1);

        setAreDisabled(true);
        setHasAnswered(true);
        setShowWarning(false);
        e.currentTarget.classList.add(isCorrect ? "correct" : "incorrect");
    };

    const handleNextQuestion = () => {
        if (!hasAnswered) {
            setShowWarning(true);
            return;
        }

        setAreDisabled(false);
        setHasAnswered(false);
        if (preguntaActual === preguntas.length - 1) {
            setIsFinish(true);
        } else {
            setPreguntaActual(preguntaActual + 1);
        }
    };

    if (isFinish)
        return (
            <Layout>
                <div style={{ display: 'grid', placeItems: 'center', margin: '5%' }}>
                    <Box sx={{ minWidth: 275 }}>
                        <Card
                            variant="outlined"
                            sx={{
                                margin: '1rem',
                                padding: '1rem',
                                borderRadius: '12px',
                                backgroundColor: theme.palette.background.paper,
                                boxShadow: theme.shadows[3],
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" component="div" align="center" gutterBottom color="text.primary">
                                    ¡Resultados!
                                </Typography>
                                <Typography variant="body1" color="text.primary" align="center" gutterBottom>
                                    Respuestas correctas: <strong>{puntuacion}</strong>
                                </Typography>
                                <Typography variant="body1" color="text.secondary" align="center">
                                    Respuestas incorrectas: <strong>{erroneas}</strong>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <Button variant="contained" color="primary" onClick={() => (window.location.href = "/modos/ordenadas")}>
                                    Volver a intentar
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={() => { setIsFinish(false); setAnswerShown(true); }}>
                                    Ver respuestas
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </div>
            </Layout>
        );

    if (answerShown)
        return (
            <Layout>
                <div style={{ display: 'grid', placeItems: 'center', margin: '5%', gap: '1rem' }}>
                    <Typography variant="h4" component="div" align="center" gutterBottom>
                        Respuestas Correctas
                    </Typography>
                    <Box sx={{ minWidth: 275 }}>
                        <Grid container spacing={2}>
                            {respuestasUsuario.map((respuesta, index) => (
                                <Grid key={index} item xs={12} md={6}>
                                    <Item>
                                        <Card variant="outlined" style={{ margin: 5, padding: '1rem', borderRadius: '12px' }}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Pregunta {index + 1}
                                                </Typography>
                                                <Typography variant="h6" component="div" gutterBottom>
                                                    {respuesta.pregunta}
                                                </Typography>
                                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                    Tu respuesta:
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    color={respuesta.esCorrecta ? "primary" : "error"}
                                                >
                                                    {respuesta.respuestaUsuario}
                                                </Typography>
                                                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                                    Respuesta Correcta:
                                                </Typography>
                                                <Typography variant="body1" color="primary">
                                                    {respuesta.respuestaCorrecta}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/modos"
                        style={{
                            marginTop: '1rem',
                            padding: '0.5rem 2rem',
                            borderRadius: '8px',
                        }}
                    >
                        Finalizar
                    </Button>
                </div>
            </Layout>
        );

    return (
        <Layout>
            <div style={{ display: 'grid', placeItems: 'center', margin: '5%' }}>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined" style={{ margin: 5, padding: '1rem', borderRadius: '12px' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Pregunta {preguntaActual + 1} de {preguntas.length}
                            </Typography>
                            <Typography variant="h5" component="div" align="center" gutterBottom>
                                {preguntas[preguntaActual].titulo}
                            </Typography>
                        </CardContent>
                        <CardActions
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '1rem',
                                padding: '1rem',
                            }}
                        >
                            {preguntas[preguntaActual].opciones.map((data, index) => (
                                <Button
                                    variant="outlined"
                                    key={index}
                                    disabled={areDisabled}
                                    onClick={(e) => { handleAnswerSubmit(data.isCorrect, e) }}
                                    style={{
                                        width: '100%',
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                    }}
                                >
                                    {data.textoRespuesta}
                                </Button>
                            ))}
                        </CardActions>
                    </Card>
                </Box>
                {showWarning && (
                    <Alert severity="warning" style={{ marginBottom: '1rem', width: '80%' }}>
                        Por favor, selecciona una respuesta antes de continuar.
                    </Alert>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextQuestion}
                    style={{
                        marginTop: '1rem',
                        padding: '0.5rem 2rem',
                        borderRadius: '8px',
                    }}
                >
                    Siguiente
                </Button>
            </div>
        </Layout>
    );
}