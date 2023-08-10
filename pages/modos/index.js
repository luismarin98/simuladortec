import Layout from '@/components/Layout';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function Modos() {
    const [modoAleatorias, setModoAleatorias] = React.useState(false);

    const handCheck = (e) => {
        setModoAleatorias(!modoAleatorias)
    }

    React.useEffect(() => { document.title = 'Simulador | Modos' }, [])

    return (
        <Layout>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography>Seleccionar el modo del simulador</Typography>
                <div style={{ display: 'flex', flexFlow: 'row wrap' }}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={modoAleatorias} onChange={handCheck} />}
                            label="Aleatorias"
                        />
                    </FormGroup>
                    <Button size='small' variant='contained' href={modoAleatorias ? '/modos/aleatorias' : '/modos/ordenadas'}>{modoAleatorias ? 'Comenzar aleatorias' : 'Comenzar ordenadas'}</Button>
                </div>
            </div>
        </Layout>
    )
}