import Layout from '@/components/Layout'
import React from 'react'

export default function Home() {
  React.useEffect(() => { document.title = 'Simulador | Inicio' }, [])
  return (
    <Layout>¡Bienvenido al Simulador de Preguntas definitivo! Sumérgete en desafíos de conocimiento que pondrán a prueba tu perspicacia en una variedad de temas. Desde curiosidades generales hasta detalles especializados, esta es tu oportunidad de demostrar tus habilidades. ¿Listo para comenzar? ¡A jugar!</Layout>
  )
}
