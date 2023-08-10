import Layout from "@/components/Layout";
import * as React from 'react';
import preguntas from '@/components/preguntas';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Aleatorias() {

    React.useEffect(() => {
        document.title = "Preguntas Aleatorias";
        preguntas.sort(function () { return Math.random() - 0.5 });
    }, [preguntas]);

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
                                        onClick={() => (window.location.href = "/modos/aleatorias")}
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
                <div style={{ display: 'grid', placeItems: 'center', margin: '5%' }}>
                    <Box sx={{ minWidth: 275 }}>{
                        preguntas.map((data, index) => (
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
                        ))
                    }</Box>
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
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Pregunta: {preguntaActual + 1}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {preguntas[preguntaActual].titulo}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center' }}>
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