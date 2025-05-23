import Layout from '@/components/Layout'
import * as React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles'; // Asegúrate de que useTheme esté importado

export default function Home() {
  React.useEffect(() => { document.title = 'Simulador | Inicio' }, [])
  const theme = useTheme(); // Asegúrate de definir theme aquí
  
  return (
    <Layout>
      <Card sx={{
        width: '450px',
        margin: '2rem auto',
        padding: '1rem',
        borderRadius: '12px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
      }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">Absoluta discreción</Typography>
          <Typography gutterBottom variant="subtitle1" component='div'>Tuto!</Typography>
          <Typography variant="body2" color="text.secondary">
            En la parte izquierda tendras las opciones de un menu para poder hacer uso del simulador, tambien tendras la opciones de escoger modos en donde podras comenzar
            a usar el simulador con preguntas aleatorias y ordenadas y abajo el cuestionario de las preguntas.
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  )
}
