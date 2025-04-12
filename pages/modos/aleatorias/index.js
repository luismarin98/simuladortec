import Layout from "@/components/Layout";
import * as React from 'react';
import preguntas from '@/components/preguntas';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

export default function Aleatorias() {
    React.useEffect(() => {
        document.title = "Preguntas Aleatorias";
        preguntas.sort(() => Math.random() - 0.5); // Mezclar preguntas aleatoriamente
    }, []);

    // Limitar las preguntas a las primeras 100
    const preguntasLimitadas = preguntas.slice(0, 100);

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
                pregunta: preguntasLimitadas[preguntaActual].titulo,
                respuestaUsuario: e.currentTarget.textContent,
                respuestaCorrecta: preguntasLimitadas[preguntaActual].opciones.find((opcion) => opcion.isCorrect)?.textoRespuesta || "No disponible",
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
        if (preguntaActual === preguntasLimitadas.length - 1) {
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
                        <Card variant="outlined" style={{ margin: 5, padding: '1rem', borderRadius: '12px' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" align="center" gutterBottom>
                                    ¡Resultados!
                                </Typography>
                                <Typography variant="body1" color="text.primary" align="center" gutterBottom>
                                    Respuestas correctas: <strong>{puntuacion}</strong>
                                </Typography>
                                <Typography variant="body1" color="text.secondary" align="center">
                                    Respuestas incorrectas: <strong>{erroneas}</strong>
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => (window.location.href = "/modos/aleatorias")}
                                >
                                    Volver a intentar
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        setIsFinish(false);
                                        setAnswerShown(true);
                                    }}
                                >
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
                        {respuestasUsuario.map((respuesta, index) => (
                            <Card key={index} variant="outlined" style={{ margin: 5, padding: '1rem', borderRadius: '12px' }}>
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
                        ))}
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
                                Pregunta {preguntaActual + 1} de {preguntasLimitadas.length}
                            </Typography>
                            <Typography variant="h5" component="div" align="center" gutterBottom>
                                {preguntasLimitadas[preguntaActual].titulo}
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
                            {preguntasLimitadas[preguntaActual].opciones.map((data, index) => (
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