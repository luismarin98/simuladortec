import Layout from "@/components/Layout";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import preguntas from "@/components/preguntas";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Cuestionario() {
    React.useEffect(() => { document.title = 'Simulador | Cuestionario ' }, []);
    return <Layout>
        <Box sx={{ flexGrow: 1 }}>
            <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                {preguntas.map((data, index) => (
                    <Grid key={index} item xs={6}>
                        <Card key={index} sx={{ width: '450px' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h7" component="div">Pregunta {index + 1}</Typography>
                                {data.titulo}
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Respuesta:</strong> {data.opciones.filter((opc) => opc.isCorrect)[0]?.textoRespuesta}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </div>
        </Box>
    </Layout>
}