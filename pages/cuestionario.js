import Layout from "@/components/Layout";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles'; // Asegúrate de que useTheme esté importado
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; // Asegúrate de que Typography esté importado
import preguntas from '@/components/preguntas'; // Asegúrate de que la ruta sea correcta

export default function Cuestionario() {
  React.useEffect(() => { document.title = 'Simulador | Cuestionario'; }, []);
  const theme = useTheme(); // Asegúrate de definir theme aquí

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, padding: '2rem' }}>
        <Grid container spacing={3} justifyContent="center">
          {preguntas.map((data, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: theme.palette.background.paper, // Aquí se usa theme
                  boxShadow: theme.shadows[3],
                  borderRadius: '12px',
                  padding: '1rem',
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" color="text.primary">
                    Pregunta {index + 1}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ whiteSpace: 'pre-line' }}
                  >
                    {data.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: '1rem' }}>
                    <strong>Respuesta:</strong> {data.opciones.filter((opc) => opc.isCorrect)[0]?.textoRespuesta || "No disponible"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}