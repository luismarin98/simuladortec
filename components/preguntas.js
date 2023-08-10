import { fabClasses } from "@mui/material";

const preguntas = [
    {
        titulo: <div>
            <h3>Verdadero o falso</h3>
            <p>
                ¿La química orgánica es una rama dentro de la física que se ocupa de estudiar una variada y cuantiosa clase de
                moléculas que disponen de carbono y que no conforman enlaces covalentes de carbono y carbono, carbono e
                hidrógeno y otros heteroátomos?
            </p>
        </div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: true,
            }
        ]
    },
    {
        titulo: <div>
            En el año de 1828 el químico Alemán Friedrich Wöhler qué logro sintetizar a partir de la orina de
            los animales con la intervención de organismos vivos.
        </div>,
        opciones: [
            {
                textoRespuesta: 'Cal',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Urea',
                isCorrect: true,
            },
            {
                textoRespuesta: 'cebada',
                isCorrect: false,
            },
            {
                textoRespuesta: 'arroz',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿A qué hidrocarburo pertenece esta fórmula CH4 y resuelva?</div>,
        opciones: [
            {
                textoRespuesta: 'Etano',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Propano',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Metano',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Dióxido',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Por qué los alcanos son hidrocarburos saturados?</div>,
        opciones: [
            {
                textoRespuesta: 'Sus enlaces covalentes son sencillos o simples',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Porque tienen enlace triple',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Consiguen enlace doble',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se les coloca mucho peso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuál es el compuesto más sencillo de la serie homóloga de los alquenos, encierre el correcto?</div>,
        opciones: [
            {
                textoRespuesta: 'Metano',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Eteno',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Propileno',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Butano',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿De qué es responsable el etileno, encierre las respuestas correctas?</div>,
        opciones: [
            {
                textoRespuesta: 'la fitohormona responsable de los procesos de estrés en las plantas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'la maduración de los frutos',
                isCorrect: true,
            },
            {
                textoRespuesta: 'responsable que la fruta se mantenga verde',
                isCorrect: false,
            },
            {
                textoRespuesta: 'senescencia de hojas y flores y de la abscisión del fruto',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Verdadero o falso
            ¿Los alquinos son hidrocarburos alifáticos con al menos un Triple enlace?
        </div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuál es el alquino más simple, marque lo correcto?</div>,
        opciones: [
            {
                textoRespuesta: 'Acetileno',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Metano',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Etileno',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Carbono',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Que estudia la química?</div>,
        opciones: [
            {
                textoRespuesta: 'Estudia el universo. ',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Estudia todo lo que nos rodea',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Estudia las sustancias, sus propiedades y las transformaciones que experimentan al convertirse en otras sustancias.',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>Filtración es una operación: </div>,
        opciones: [
            {
                textoRespuesta: 'Química',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Físico-química',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Física',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>Una de las propiedades del átomo, es que es de naturaleza----:</div>,
        opciones: [
            {
                textoRespuesta: 'Continua',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Gaseosa',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Discontinua',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>El descubridor de los rayos catódicos, y por lo tanto del electrón fue:</div>,
        opciones: [
            {
                textoRespuesta: 'Dalton',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Thomson',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Bohr',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Indique cuál de los siguientes incisos define la clasificación de los elementos como:</div>,
        opciones: [
            {
                textoRespuesta: 'Homogéneos y heterogéneos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Metales y no metales',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Puras y mezclas.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Moléculas y átomos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>De los siguientes ejemplos de notación electrónica, indica cuál es un isótopo:</div>,
        opciones: [
            {
                textoRespuesta: '178 X, 1810 X',
                isCorrect: false,
            },
            {
                textoRespuesta: ')17 9 X, 18 8 X',
                isCorrect: false,
            },
            {
                textoRespuesta: '16 8 X, 16 7 X',
                isCorrect: false,
            },
            {
                textoRespuesta: '1 1 X, 2 1 X, 3 1X',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>¿Cuál de las siguientes definiciones es correcta?</div>,
        opciones: [
            {
                textoRespuesta: 'El primer nivel de energía contiene solamente orbitales tipo s y p ',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Cada conjunto de orbitales tipo f contiene 7 electrones',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Todos los orbitales tipo s tienen forma esférica',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Todos los orbitales tipo d pueden tener máximo 14 electrones',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuál es la configuración electrónica del Radón (Rn), según las opciones en literales abajo dados?</div>,
        opciones: [
            {
                textoRespuesta: '[Xe]5d^8',
                isCorrect: false,
            },
            {
                textoRespuesta: '[Xe]6s^2 4f^14 5d^10 6p^6',
                isCorrect: true,
            },
            {
                textoRespuesta: '[Xe]5s^2 5p^6',
                isCorrect: false,
            },
            {
                textoRespuesta: '[Rn]6s^2 6p^6',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La zootecnia general estudia</div>,
        opciones: [
            {
                textoRespuesta: 'Aspectos generales, comunes a todas las especies (temperatura, crecimiento, desarrollo, medio ambiente, clima, etc.)',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Las distintas especies, respectivas producciones',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Aquella que estudia las particularidades de cada especie y todo lo referente a su alojamiento, crianza, alimentación, reproducción, cuidado y manejo, así como también los aspectos de comercialización de las mismas y sus productos.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Qué importancia tiene la zootecnia para el desarrollo de la ganadería en el país?</div>,
        opciones: [
            {
                textoRespuesta: 'Ganadería de nuestro país es mejorar la calidad de la carne, leche y subproductos. Así podemos manejar las características que deseemos en cada uno de los animales de acuerdo al fin que se desea',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se puede mejorar la genética para crear especies que ofrezcan las mejores características como producción de carne, mejor producción de leche, adaptabilidad, longevidad, estacionalidad reproductiva, porcentaje de parición',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Las dos anteriores',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>La zootecnia es importante porque permite</div>,
        opciones: [
            {
                textoRespuesta: 'Contribuye con el mejoramiento de animales sin tomar en cuenta el bienestar animal ante todo y si estos serán útiles al hombre con la finalidad de obtener el máximo rendimiento, administrando los recursos adecuadamente bajo criterios de sostenibilidad del ambiente.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se obtienen animales que sean más productivos por medio de la mejora en la crianza de los mismos generando mejores condiciones de rentabilidad y de higiene.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se ocupa del estudio de la producción de animales, así como de sus derivados (carne, huevo, leche, piel, etc.), teniendo en cuenta el bienestar animal; fijándose como objetivo la obtención del óptimo rendimiento de las explotaciones pecuaria de tu abono',
                isCorrect: false,
            },
            {
                textoRespuesta: 'B y c',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Todas las anteriores',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Se hace referencia a la reproducción asexual cuando su descendencia proviene de:</div>,
        opciones: [
            {
                textoRespuesta: 'Dos progenitores y no hay gametos sexuales',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Un solo progenitor y hay gametos sexuales',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Dos progenitores y si hay gametos sexuales ',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Un solo progenitor y no hay gametos sexuales',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Se hace referencia a la reproducción como mecanismo que permite:</div>,
        opciones: [
            {
                textoRespuesta: 'el crecimiento de las especies',
                isCorrect: false,
            },
            {
                textoRespuesta: 'el movimiento de las especies',
                isCorrect: false,
            },
            {
                textoRespuesta: 'perpetuar la especie',
                isCorrect: true,
            },
            {
                textoRespuesta: 'reaccionar ante un estímulo',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Qué diferencias notorias existen entre Bos indicus y Bos Taurus en cuanto a su conformación</div>,
        opciones: [
            {
                textoRespuesta: 'Bos taurusson corpulentos, musculosos, sin grasa subcutánea y sin grasa abundante. Esqueleto de huesos largos y finos, índices de fortaleza física.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Bos indicus voluminosos y con abundante carne y grasa. Esqueleto de huesos cortos y gruesos, signos de gran precocidad',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El manejo sanitario está encaminado a prevenir, detectar oportunamente y curar las enfermedades
            que se presentan en el hato. Se consideran factores de riesgo sanitario, el ingreso de animales nuevos
            al hato o el contacto de animales del hato con animales de procedencia y status sanitario desconocido
            y el uso de toros para la reproducción sin cuarentena.</div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Entre los principales componentes contemplados para la sanidad de la explotación están la
            vacunación y la desparasitación periódica, la pronta detección y el tratamiento de animales enfermos,
            la higiene de los implementos y de los sitios de alojamiento y las prácticas de manejo y alimentación
            preventivas</div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Cuáles son las enfermedades en bovinos relacionadas con la alimentación</div>,
        opciones: [
            {
                textoRespuesta: 'Cetosis, babesia y anaplasma, fiebre de leche, retención de placenta, acidosis, edema de ubre',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Brucelosis, tuberculosis, cetosis, anaplasma',
                isCorrect: false,
            },
            {
                textoRespuesta: 'diarrea viral bovina, mastitis, tuberculosis',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En la acidosis el rumiante tiene una necesidad fisiológica de fibra en su dieta. La carencia de la
            cantidad mínima de fibra necesaria, le enferma. La acidez se presenta cuando la capacidad del rumen
            para neutralizar los ácidos, es excedida por su producción. Este exceso de ácido, tiene efectos sobre
            el animal y sobre la flora del rumen.</div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La leche de cada raza presenta una composición promedia característica, pero condiciones como la
            alimentación, el metabolismo, la fisiología y las enfermedades crean variaciones de este parámetro
            entre vacas. Existe también un efecto estadístico pequeño de edad, en la disminución de contenidos
            de sólidos totales hasta el quinto parto. La menor proporción de sólidos en la leche lo presenta la raza
            Holstein y el mayor para la Jersey.</div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Mencione dos ventajas de la Explotación Porcina</div>,
        opciones: [
            {
                textoRespuesta: 'Se puede entrar y salir del negocio rápidamente',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Se adapta bien a las fincas diversificadas y especializadas',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>Mencione dos desventajas de la explotación porcina</div>,
        opciones: [
            {
                textoRespuesta: 'Pérdidas por enfermedades bacterianas y virales',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Requiere programas bien diseñados para la higiene y alimentación animal',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            El bienestar de un animal queda garantizado cuando se cumplen cinco requisitos:
            <ul>
                <li>1) Nutrición adecuada</li>
                <li>2) Sanidad adecuada</li>
                <li>3) Ausencia de incomodidad física y térmica</li>
                <li>4) Ausencia de miedo, dolor y estrés</li>
                <li>5) Capacidad para mostrar la mayoría de conductas propias de su especie.</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Una adecuada densidad animal en alojamientos permite que el animal disminuya el estrés, expresando
            libremente los hábitos que lo caracterizan como echarse, dar vueltas, extender las alas, caminar, rascar,
            picotear el suelo, etc.</div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Las características que se buscan en líneas de carne:
            <ul>
                <li>1) Gran velocidad de crecimiento</li>
                <li>2) Alta conversión de alimento a carne</li>
                <li>3) Buena conformación</li>
                <li>4) Alto rendimiento de canal</li>
                <li>5) Baja incidencia de enfermedades</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En las aves se habla de líneas genéticas más que de razas, debido a que éstas son híbridos y el nombre
            corresponde al de la empresa que las produce. La obtención de las líneas broiler están basadas en el
            cruzamiento de razas diferentes, utilizándose normalmente las razas White Plymouth Rock o New
            Hampshire en las líneas madres y la Raza White Cornish en las líneas padres. La línea padre aporta
            las características de conformación típicas de un animal de carne: tórax ancho y profundo, patas
            separadas, buen rendimiento de canal, alta velocidad de crecimiento, etc. En la línea madre se
            concentran las características reproductivas de fertilidad y producción de huevos.</div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Los alevines generalmente son despachados en bolsas de plástico. Las bolsas deben ser depositadas
            en el agua para aclimatar, abriendo las bolsas y mezclando el agua que está en ellas, con la del
            estanque en un periodo no menor a 30 minutos. Esto se hace con el fin de evitar el estrés en los peces
            sembrados.</div>,
        opciones: [
            {
                textoRespuesta: 'verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuáles son los aspectos más importantes en la producción piscícola
            <ul>
                <li>Evaluación del lugar y del medio</li>
                <li>Requisitos ambientales</li>
                <li>Abastecimiento de agua</li>
                <li>Grado y tipo de condición agroecológica</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: 'Todas las anteriores',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>Con el fin de hallar el ancho de un rio se ha medido una base AC de 350m a lo largo de una de
            sus orillas. Sobre la orilla opuesta se toma un punto b tal que CB sea perpendicular a AC.
            También se ha medido el ángulo CAB y resulta ser de 52o
            12’.
            Hállese el ancho del rio.
        </div>,
        opciones: [
            {
                textoRespuesta: '23m',
                isCorrect: false,
            },
            {
                textoRespuesta: '45m ',
                isCorrect: false,
            },
            {
                textoRespuesta: '451,2m',
                isCorrect: true,
            },
            {
                textoRespuesta: '20m^2',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Un solar de forma triangular tiene dos lados de longitudes 140,4 m y 170,6 m, y el ángulo opuesto
            al primero es de 40º.
            ¿Hallar la longitud de una cerca que lo rodea completamente?</div>,
        opciones: [
            {
                textoRespuesta: '200m',
                isCorrect: false,
            },
            {
                textoRespuesta: '529,36m',
                isCorrect: true,
            },
            {
                textoRespuesta: '218,36m',
                isCorrect: false,
            },
            {
                textoRespuesta: '51,35m',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Marque verdadero (V) o falso (F) las siguientes aseveraciones.
            <ul>
                <li>La función cosecante (csc) es igual a hipotenusa sobre lado adyacente.</li>
                <li>La ley de senos señala que, los lados de un triángulo son proporcionales a los cosenos de los ángulos opuestos.</li>
                <li>La suma de los ángulos internos de un triángulo es igual a 360º.</li>
                <li>De acuerdo con la clasificación de los triángulos según sus ángulos, triángulo acutángulo se caracteriza porque
                    sus tres ángulos internos son agudos.</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: 'Falso, Falso, Falso, Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso, Verdadero, Verdadero, Falso',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Verdadero, Falso, Falso, Falso',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Verdadero, Falso, Falso, Verdadero',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Marque verdadero (V) o falso (F) las siguientes aseveraciones.
            <ul>
                <li> Azimut es el ángulo horizontal medido desde el norte (magnético o geográfico) en sentido contrario al
                    movimiento de las manecillas del reloj y está comprendido 0o –
                    360o.
                </li>
                <li>Error por catenaria en medición con cinta, ocurre cuando la cinta por su peso y la falta de tensión el peso
                    de la cinta cuando la cinta es tensionada a una fuerza mayor a la de calibración, generando un estiramiento
                    de la misma.
                </li>
                <li>
                    El Sistema Centesimal de medidas angulares, tiene como unidad el 1o
                    y subunidades los 1’ y 1’’
                </li>
                <li>
                    Se entiende por levantamiento topográfico al conjunto de operaciones de campo y gabinete que, abarcando
                    grandes extensiones del terreno consideran la curvatura terrestre para la determinación de coordenadas y
                    puntos sobre el terreno.
                </li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: 'Falso, Falso, Falso, Verdadero',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Verdadero, Verdadero, Verdadero, Falso',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Falso, Falso, Falso, Falso',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Verdadero, Falso, Verdadero, Falso',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Por medio del uso de la brújula se ha medido el azimut de un vértice de un terreno el cual ha sido de 40°.
            A cuantos rad equivalen los 40°</div>,
        opciones: [
            {
                textoRespuesta: '𝜋𝑟𝑎d',
                isCorrect: false
            },
            {
                textoRespuesta: '2/9𝜋𝑟𝑎d',
                isCorrect: true
            },
            {
                textoRespuesta: '𝜋𝑟𝑎d',
                isCorrect: false
            },
            {
                textoRespuesta: '2/5𝜋𝑟𝑎d',
                isCorrect: false
            }
        ]
    },
    {
        titulo: <div>
            Se desea conocer el área de un terreno, para ello, por medio de un GPS navegador, se han tomado las
            coordenadas de los vértices, resultando los puntos: A (1000 E, 1000 N), B (1324 E, 1400 N), C (1526 E,
            1621 N), D (1131 E, 1540 N).
            ¿Hallar el área del terreno?
        </div>,
        opciones: [
            {
                textoRespuesta: '100000 m^2',
                isCorrect: false
            },
            {
                textoRespuesta: '1287 m',
                isCorrect: false
            },
            {
                textoRespuesta: '96.746,5 m^2',
                isCorrect: true
            },
            {
                textoRespuesta: '10000 m^2',
                isCorrect: false
            }
        ]
    },
    {
        titulo: <div>
            El ancho real de una autovía es de 24 metros. Si la carta topográfica en el que se encuentra dibujada
            está a escala 1:5000.
            ¿Cuántos milímetros tendrá de ancho la vía en la carta topográfica?
        </div>,
        opciones: [
            {
                textoRespuesta: '5 cm',
                isCorrect: false
            },
            {
                textoRespuesta: '4,8 mm',
                isCorrect: true
            },
            {
                textoRespuesta: '3cm2',
                isCorrect: false
            },
            {
                textoRespuesta: '9,6 mm',
                isCorrect: false
            }
        ]
    },
    {
        titulo: <div>
            En la carta topográfica 1:10000 se ha podido identificar un potrero rectangular de dimensiones a= 2,5cm
            y b=1,7cm.
            ¿Cuál es el área real del potrero?
        </div>,
        opciones: [
            {
                textoRespuesta: '10m2',
                isCorrect: false
            },
            {
                textoRespuesta: '4,8 mm',
                isCorrect: true
            },
            {
                textoRespuesta: '3cm2',
                isCorrect: false
            },
            {
                textoRespuesta: '42.500 m2',
                isCorrect: false
            }
        ]
    },
    {
        titulo: <div>Los procesos bioquímicos y fisiológicos básicos relacionados con la síntesis,
            transporte y degradación de sustancias en las plantas están influenciados por
            la temperatura, por el grado de relación que éstas poseen con la cinética de las
            reacciones bioquímicas y el mantenimiento de la integridad de las membranas.
            ¿Cuál de los siguientes enunciados es el correcto en función de la figura?</div>,
        opciones: [
            {
                textoRespuesta: 'Todos los procesos fisiológicos de la planta ocurren más rápidamente a medida que la temperatura aumenta, hasta su temperatura óptima. A medida que desciende la temperatura el crecimiento se hace más lento',
                isCorrect: true
            },
            {
                textoRespuesta: 'La temperatura influye solo en la fase de fotosíntesis, absorción de nutrientes y agua',
                isCorrect: false
            },
            {
                textoRespuesta: 'La temperatura no influye directamente en la tasa de desarrollo de la planta a través de sus distintas fases y la producción de hojas, tallos y todos los procesos fisiológicos de la planta',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            El potencial de crecimiento y producción de los pastos está en dependencia de la vía metabólica utilizada
            para llevar a cabo la fotosíntesis, así como de su vínculo con la respiración. De ahí que la productividad
            de los pastizales dependa de la eficiencia de conversión que realicen del CO2 atmosférico, de los
            nutrientes, de la humedad de los suelos y la energía solar.
            ¿Según la figura como es la tasa de crecimiento en función de las etapas fenológicas de un pasto?
        </div>,
        opciones: [
            {
                textoRespuesta: 'En la emergencia el crecimiento lento, mientras que el desarrollo vegetativo el crecimiento es rápido, el pasto alcanza su madurez, en la floración se ralentiza, luego de esto se suspende el crecimiento hasta llegar a su madurez fisiológica',
                isCorrect: true
            },
            {
                textoRespuesta: 'En la emergencia el crecimiento se paraliza, el pasto alcanza su madurez, en la floración continúa creciendo rápidamente, luego de esto se suspende el crecimiento hasta llegar a su madurez fisiológica.',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Para garantizar la productividad y estabilidad de las especies que formarán la pastura es importante
            tomar las siguientes consideraciones</div>,
        opciones: [
            {
                textoRespuesta: 'Iniciación, planeamiento, ejecución y seguimiento',
                isCorrect: false
            },
            {
                textoRespuesta: 'Selección del terreno, preparación del suelo, selección de la especie a establecer, época de siembra, siembra, fertilización, manejo adecuado. ',
                isCorrect: true
            },
            {
                textoRespuesta: 'Riego, fertilización, labores culturales, control de plagas',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Para un buen establecimiento y manejo de pastos y forrajes, con el fin de suministrar al ganado un
            alimento más abundante y de buena calidad, se debe considerar varios aspectos:</div>,
        opciones: [
            {
                textoRespuesta: 'Analizar el suelo donde se va a establecer el pasto para determinar las necesidades de fertilizantes. Las gramíneas son exigentes especialmente en nitrógeno y fósforo y las leguminosas en calcio y fósforo. ',
                isCorrect: false
            },
            {
                textoRespuesta: 'Preparar bien el suelo y disponer de un buen sistema de drenaje.',
                isCorrect: false
            },
            {
                textoRespuesta: 'Aplicar los correctivos al momento de la siembra de acuerdo con el análisis del suelo y las recomendaciones.Aplicar los correctivos al momento de la siembra de acuerdo con el análisis del suelo y las recomendaciones.',
                isCorrect: false
            },
            {
                textoRespuesta: 'Todas las anteriores',
                isCorrect: true
            }
        ]
    },
    {
        titulo: <div>
            Cuando se ha elegido la resiembra como la mejor opción, es necesario evaluar las condiciones del sitio
            a resembrar para identificar las practicas necesarias.
            <ul>
                <li>a)Limpia selectiva del terreno</li>
                <li>b) Preparación de la cama de siembra</li>
                <li>c) Prácticas para la conservación de la humedad</li>
                <li>d) Fecha de siembra</li>
                <li>e) Densidad de siembra</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: 'Todas las anteriores ',
                isCorrect: true
            },
            {
                textoRespuesta: 'a y b',
                isCorrect: false
            },
            {
                textoRespuesta: ' c y d',
                isCorrect: false
            },
            {
                textoRespuesta: 'e y f',
                isCorrect: false
            }
        ]
    },
    {
        titulo: <div>
            En la finca ganadera La Esperanza, se tiene problemas debido al sobrepastoreo y lo que se quiere hacer
            es aliviar a las praderas del abuso efectuado por el pisoteo de los animales y disminuir la compactación
            del suelo, para facilitar una mayor penetración del aire e incrementar la capacidad de infiltración del
            agua al suelo. Como ingeniero agrónomo ha sido contratado para dar solución a este problema, cuál
            sería su recomendación en función de las ventajas y desventajas de cada sistema de pastoreo, escoja
            una opción y fundaméntela
        </div>,
        opciones: [
            {
                textoRespuesta: 'Pastoreo continuo',
                isCorrect: false
            },
            {
                textoRespuesta: 'Pastoreo alterno',
                isCorrect: false
            },
            {
                textoRespuesta: 'Pastoreo rotacional',
                isCorrect: false
            },
            {
                textoRespuesta: 'Pastoreo en franjas',
                isCorrect: false
            },
            {
                textoRespuesta: 'Pastoreo rotacional intensivo',
                isCorrect: true
            }
        ]
    },
    {
        titulo: <div>¿Qué es física?</div>,
        opciones: [
            {
                textoRespuesta: 'Ciencia que estudia las propiedades de la materia y de la energía y establece las leyes que explican los fenómenos naturales, excluyendo los que modifican la estructura molecular de los cuerpos',
                isCorrect: true
            },
            {
                textoRespuesta: 'Ciencia que estudia las propiedades de la materia y de la energía y establece las leyes que no explican los fenómenos naturales, excluyendo los que modifican la estructura molecular de los cuerpos',
                isCorrect: false
            },
            {
                textoRespuesta: 'Ciencia que estudia la naturaleza y establece las leyes',
                isCorrect: false
            },
            {
                textoRespuesta: 'Ciencia que estudia las propiedades de la materia y de la energía y establece las leyes, incluyendo los que modifican la estructura molecular de los cuerpos.',
                isCorrect: false
            }
        ]
    },
    {
        titulo: <div>La Física Clásica se divide en:</div>,
        opciones: [
            {
                textoRespuesta: 'Mecánica, Acústica, Óptica, Electromagnetismo y Termodinámica',
                isCorrect: true
            },
            {
                textoRespuesta: 'Acústica, Óptica, Dinámica, Cinemática y Atómica',
                isCorrect: false
            },
            {
                textoRespuesta: 'Óptica, Electromagnetismo, Termodinámica, Nuclear y Moderna',
                isCorrect: false
            },
            {
                textoRespuesta: 'Mecánica, Electromagnetismo, Nuclear, Óptica y Dinámica',
                isCorrect: false
            },
            {
                textoRespuesta: 'Ninguna es correcta',
                isCorrect: false
            }
        ]
    },
    {
        titulo: <div>¿Convierta 4 km a m?</div>,
        opciones: [
            {
                textoRespuesta: '4km -> 1m/1km = 4km',
                isCorrect: false
            },
            {
                textoRespuesta: '4km -> 1000m/1km = 4000m',
                isCorrect: true
            },
            {
                textoRespuesta: '4km -> 1𝑚/1𝑘𝑚 = 4m',
                isCorrect: false
            },
            {
                textoRespuesta: '4km -> 100𝑚/1𝑘𝑚 = 400𝑘m',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Convertir 372 litros a m^3</div>,
        opciones: [
            {
                textoRespuesta: '0,0372 m3',
                isCorrect: false
            },
            {
                textoRespuesta: '37200 m3',
                isCorrect: false
            },
            {
                textoRespuesta: '0,03722 m3',
                isCorrect: false
            },
            {
                textoRespuesta: '0,372 m3',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>Indique cuales de las siguientes opciones son magnitudes escalares.</div>,
        opciones: [
            {
                textoRespuesta: 'La temperatura de un lugar: 25°C',
                isCorrect: true
            },
            {
                textoRespuesta: 'La posición de un objeto: (14 í) m',
                isCorrect: false
            },
            {
                textoRespuesta: 'La masa de un cuerpo: 62 km/h',
                isCorrect: true
            },
            {
                textoRespuesta: 'El tiempo empleado: 18 s',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>De un triángulo rectángulo ABC, se conocen a = 415 m y b = 280 m. Resolver el triángulo</div>,
        opciones: [
            {
                textoRespuesta: '390',
                isCorrect: false
            },
            {
                textoRespuesta: '400',
                isCorrect: false
            },
            {
                textoRespuesta: '316',
                isCorrect: true
            },
            {
                textoRespuesta: '459',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>¿Qué es cinemática?</div>,
        opciones: [
            {
                textoRespuesta: 'Ciencia que estudia las propiedades de la materia y de la energía y establece las leyes que explican los fenómenos naturales, excluyendo los que modifican la estructura molecular de los cuerpos.',
                isCorrect: true
            },
            {
                textoRespuesta: 'Ciencia que estudia las propiedades de la materia y de la energía y establece las leyes que no explican los fenómenos naturales, excluyendo los que modifican la estructura molecular de los cuerpo',
                isCorrect: false
            },
            {
                textoRespuesta: 'Ciencia que estudia la naturaleza y establece las leyes',
                isCorrect: false
            },
            {
                textoRespuesta: 'Ciencia que estudia las propiedades de la materia y de la energía y establece las leyes, incluyendo los que modifican la estructura molecular de los cuerpos',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Un carro circula a 25m/s ¿Cuánto tiempo tarda en recorrer 10 km?</div>,
        opciones: [
            {
                textoRespuesta: 'T=400',
                isCorrect: true
            },
            {
                textoRespuesta: 'T=200',
                isCorrect: false
            },
            {
                textoRespuesta: 'T=100',
                isCorrect: false
            },
            {
                textoRespuesta: 'T=240',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Un taxi circula a 30m/s durante 3 horas ¿Cuántos kilómetros habrá recorrido?</div>,
        opciones: [
            {
                textoRespuesta: '400km',
                isCorrect: false
            },
            {
                textoRespuesta: '200km',
                isCorrect: false
            },
            {
                textoRespuesta: '100km',
                isCorrect: false
            },
            {
                textoRespuesta: '324km',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>
            Un avión de pasajeros vuela rectilíneamente (45 km 17o
            ), en 25 minutos, luego (180 Km N 18oO) en
            12 minutos, y finalmente (-285i -43j) Km en 20 minutos. Determinar:
            ¿Cuàl es la velocidad media del segundo desplazamiento?
        </div>,
        opciones: [
            {
                textoRespuesta: 'Vm2 = (855,95i-278,10j) Km/h',
                isCorrect: true
            },
            {
                textoRespuesta: 'Vm2 =(1024,62i-313,26j) Km/h',
                isCorrect: false
            },
            {
                textoRespuesta: 'Vm2= (-278,10i + 855,95j) Km/h',
                isCorrect: false
            },
            {
                textoRespuesta: 'Vm2=(-473,34i+374,53j) km/h',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Analice los enunciados presentados e identifique dos correctos.
            <ul>
                <li>a) El desplazamiento realizado por una partícula depende de la posición inicial y final.</li>
                <li>b) Un sistema de referencia inercial es un sistema que no está en reposo y se mueve von velocidad constante</li>
                <li>
                    c) El peso es la cantidad de materia de los cuerpos mientras la masa es la fuerza que ejerce la gravedad sobre una
                    masa.
                </li>
                <li>
                    d) La fuerza de rozamiento es toda fuerza que va en la misma dirección al movimiento la cual se manifiesta
                    cuando ambos cuerpos que se mueven al mismo tiempo en el mismo sentido
                </li>
                <li>e) La distancia recorrida entre dos puntos depende de la trayectoria</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: 'a y c',
                isCorrect: false
            },
            {
                textoRespuesta: 'b y c',
                isCorrect: false
            },
            {
                textoRespuesta: 'b y d',
                isCorrect: true
            },
            {
                textoRespuesta: 'a y e',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>¿Qué sucede con la energía potencial gravitatoria de un objeto en movimiento si el trabajo realizado
            por la fuerza gravitatoria es negativo?</div>,
        opciones: [
            {
                textoRespuesta: 'La energía potencial aumenta',
                isCorrect: false
            },
            {
                textoRespuesta: 'La energía potencial disminuye',
                isCorrect: true
            },
            {
                textoRespuesta: 'La energía potencial permanece igual',
                isCorrect: false
            },
            {
                textoRespuesta: 'La energía potencial es cero',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>La Segunda ley de Newton viene definida por la ecuación:</div>,
        opciones: [
            {
                textoRespuesta: 'F=m. d',
                isCorrect: false
            },
            {
                textoRespuesta: 'F=m. w',
                isCorrect: false
            },
            {
                textoRespuesta: 'F=m. g',
                isCorrect: false
            },
            {
                textoRespuesta: 'F=m. a',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>El concepto de extensión agraria hace referencia a la………. de la investigación científica y los
            nuevos…….. en las prácticas agrarias a través de la………… agrícola y ganadera.</div>,
        opciones: [
            {
                textoRespuesta: 'extensión – aplicación - conocimientos',
                isCorrect: false
            },
            {
                textoRespuesta: 'conocimientos - educación - aplicación',
                isCorrect: false
            },
            {
                textoRespuesta: 'aplicación – conocimientos - educación',
                isCorrect: true
            },
            {
                textoRespuesta: 'educación y extensión',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Existen cuatro posibles combinaciones, cada una de las cuales representa un paradigma diferente,
            Cuál es el correspondiente a la Transferencia de Tecnología:
            <ul>
                <li>Persuasivo</li>
                <li>Persuasivo</li>
                <li>Paternalista</li>
                <li>Participativo</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: 'Si 2 y 3 son correctas',
                isCorrect: false
            },
            {
                textoRespuesta: 'Si 1 y 3 son correctas',
                isCorrect: true
            },
            {
                textoRespuesta: 'Si 1 y 2 son correctas',
                isCorrect: false
            },
            {
                textoRespuesta: 'Si 2 y 4 son correctas',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>“Un servicio o sistema que mediante procedimientos educativos ayuda a la población rural a mejorar los
            métodos y técnicas agrícolas, aumentar la productividad y los ingresos, mejorar su nivel de vida y elevar
            las normas educativas y sociales de la vida rural.”</div>,
        opciones: [
            {
                textoRespuesta: 'Transferencia de Tecnología',
                isCorrect: false
            },
            {
                textoRespuesta: 'Transferencia de Tecnología',
                isCorrect: false
            },
            {
                textoRespuesta: 'Extensión agrícola según la FAO',
                isCorrect: true
            },
            {
                textoRespuesta: 'Farmer Field Schools                ',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Una de las buenas prácticas de la extensión agrícola expresa que…… Promueve un mayor acceso
            al……… logrando establecer canales de comercialización bajo condiciones de…………. Aplicación del
            enfoque de cadena de valor para el ……….agrícola.</div>,
        opciones: [
            {
                textoRespuesta: 'Equidad – mercado - desarrollo',
                isCorrect: false
            },
            {
                textoRespuesta: 'Equidad – mercado - desarrollo',
                isCorrect: false
            },
            {
                textoRespuesta: 'Mercado – desarrollo - equidad',
                isCorrect: false
            },
            {
                textoRespuesta: 'Mercado – equidad – desarrollo',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>
            Entre los principales enfoques que se registran se pueden mencionar: el enfoque general de la extensión
            agrícola, el enfoque especializado en función de los productos, el enfoque de capacitación y visita, el
            enfoque de la extensión agrícola basado en la participación, el enfoque por proyectos, el enfoque de
            desarrollo de los sistemas agrícolas
        </div>,
        opciones: [
            {
                textoRespuesta: 'Enfoque de capacitación y visitas ',
                isCorrect: false
            },
            {
                textoRespuesta: 'Enfoque del gobierno nacional ',
                isCorrect: true
            },
            {
                textoRespuesta: 'Enfoque por Proyectos',
                isCorrect: false
            },
            {
                textoRespuesta: 'Enfoque del desarrollo de sistemas agrícolas',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Tanto el sustantivo……..…, como el verbo comunicar, tiene su origen en la palabra………, raíz
            castellana de la palabra………, la cual significa la participación o relación que se da entre individuos.
        </div>,
        opciones: [
            {
                textoRespuesta: 'Comunidad – comunicación - comunis',
                isCorrect: false
            },
            {
                textoRespuesta: 'Comunicación – comunis - comunidad ',
                isCorrect: true
            },
            {
                textoRespuesta: 'Comunis – comunicación - comunidad',
                isCorrect: false
            },
            {
                textoRespuesta: 'Comunis – comunidad – comunicación',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Las Escuelas de Campo (ECAs) en su constitución, deben seguir cierto orden lógico, el mismo que
            consiste en:
            <ul>
                <li>a) Acercamiento</li>
                <li>b) Identificación</li>
                <li>c) Evaluación</li>
                <li>d) Formación</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '3, 1, 2',
                isCorrect: false
            },
            {
                textoRespuesta: '4, 2, 1',
                isCorrect: true
            },
            {
                textoRespuesta: '2, 1, 4',
                isCorrect: false
            },
            {
                textoRespuesta: '1, 4, 2',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            La escalera metodológica está estructurada de la siguiente manera:
            <ul>
                <li>1. Seguimiento y graduación</li>
                <li>2. Establecimiento de parcelas</li>
                <li>3. Establecimiento del grupo </li>
                <li>4. Desarrollo de las actividades de aprendizaje</li>
                <li>5. Determinación del contenido de capacitación</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1, 2, 4, 5, 3',
                isCorrect: false
            },
            {
                textoRespuesta: '5, 3, 4, 2, 1',
                isCorrect: false
            },
            {
                textoRespuesta: '3, 5, 2, 4, 1',
                isCorrect: true
            },
            {
                textoRespuesta: '2, 1, 5, 4, 3',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Según la metodología de las ECAs, el ciclo de aprendizaje sobre un problema sigue cierto orden:
            <ul>
                <li>1. Aplicación</li>
                <li>2. Nueva información</li>
                <li>3. Reflexión</li>
                <li>4. Experiencia</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1, 4, 2, 3',
                isCorrect: false
            },
            {
                textoRespuesta: '3, 2, 1, 4',
                isCorrect: true
            },
            {
                textoRespuesta: '2, 1, 4, 3',
                isCorrect: false
            },
            {
                textoRespuesta: '3, 4, 1, 2',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Texto De La Pregunta
            1) Capacitación tradicional 2) Escuelas de campo ECAs
            <ul>
                <li>a. Responde a una planificación prediseñada</li>
                <li>b. El capacitador es un facilitador que explora las habilidades intrínsecas del grupo</li>
                <li>c. Se trabaja con grupos grandes, los agricultores observan</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1c; 2a; 2b',
                isCorrect: false
            },
            {
                textoRespuesta: '2a; 1b; 1c',
                isCorrect: false
            },
            {
                textoRespuesta: '1b; 1c; 2a',
                isCorrect: false
            },
            {
                textoRespuesta: '1a; 2b: 1c',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>
            Los científicos de la ciencia del suelo clasifican a los cinco factores de formación del suelo como:
            factores activos y factores pasivos. El …………. y la ………. se identifican como los factores activos de la
            formación del suelo, debido a que su influencia sobre el desarrollo del suelo puede observarse
            directamente; Por ejemplo: lluvia, altas y bajas temperaturas, viento, microrganismos (algas y hongos),
            lombrices de tierra y animales excavadores. Por otra parte, los factores pasivos son el ………., la ……….
            y el ………….., porque sus efectos no se observan directamente.
        </div>,
        opciones: [
            {
                textoRespuesta: 'clima, biota, tiempo, topografía, y material parental',
                isCorrect: true
            },
            {
                textoRespuesta: 'tiempo, topografía, clima, biota y material parental',
                isCorrect: false
            },
            {
                textoRespuesta: 'material parental, topografía, clima, biota, tiempo',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>La ………………… efectiva de un suelo es el espacio en el que las raíces de las plantas comunes
            pueden penetrar sin mayores obstáculos, con vistas a conseguir el agua y los nutrimentos indispensables.
            Tal información resulta ser de suma importancia para el crecimiento de las plantas.</div>,
        opciones: [
            {
                textoRespuesta: 'profundidad',
                isCorrect: true
            },
            {
                textoRespuesta: 'humedad',
                isCorrect: false
            },
            {
                textoRespuesta: 'capacidad de intercambio catiónico',
                isCorrect: false
            },
            {
                textoRespuesta: 'roca madre',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            La materia orgánica contribuye al crecimiento vegetal mediante sus efectos en las propiedades
            físicas, químicas y biológicas del suelo. Tiene función …………. la que sirve como fuente de N, P para el
            desarrollo vegetal. Función …………… la que afecta profundamente las actividades de organismos de
            microflora y microfauna. Función ………. y ……………. la que promueve una buena estructura del
            suelo, por lo tanto, mejorando la labranza, aireación y retención de humedad e incrementando la
            capacidad amortiguadora y de intercambio de los suelos.
        </div>,
        opciones: [
            {
                textoRespuesta: 'física, biológica, físico- química, nutricional',
                isCorrect: false
            },
            {
                textoRespuesta: 'nutricional, biológica, física, físico- química',
                isCorrect: true
            },
            {
                textoRespuesta: 'biológica, física, nutricional, físico- química',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            La……………es una medida de cantidad de cargas negativas presentes en las superficies de los
            minerales y componentes orgánicos del suelo (arcilla, materia orgánica o sustancias húmicas) y
            representa la cantidad de cationes que las superficies pueden retener (Ca, Mg, Na, K, NH4 etc.). Estos
            serán intercambiados por otros cationes o iones de hidrogeno presentes en la solución del suelo y liberados
            por las raíces
        </div>,
        opciones: [
            {
                textoRespuesta: 'acidez',
                isCorrect: false
            },
            {
                textoRespuesta: 'temperatura',
                isCorrect: true
            },
            {
                textoRespuesta: 'salinidad',
                isCorrect: false
            },
            {
                textoRespuesta: 'capacidad de intercambio catiónico',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Doña Juana López es una productora de granos básicos. La cosecha la utiliza para el consumo de su
            familia. En los cultivos, ha tenido problemas de encharcamiento obteniendo bajos rendimientos. ¿Qué
            prácticas de conservación de suelo puede recomendar que le ayuden a solucionar esta problemática?
        </div>,
        opciones: [
            {
                textoRespuesta: 'curvas a nivel',
                isCorrect: false
            },
            {
                textoRespuesta: 'barreras muertas',
                isCorrect: false
            },
            {
                textoRespuesta: 'diques',
                isCorrect: false
            },
            {
                textoRespuesta: 'terrazas',
                isCorrect: false
            },
            {
                textoRespuesta: 'zanjas de drenaje',
                isCorrect: true
            }
        ]
    },
    {
        titulo: <div>
            La profundidad del muestreo está determinada por el tipo de cultivo (desarrollo radicular) y el
            propósito del análisis de suelo. En el caso de los cultivos, los resultados de los análisis de suelos se
            utilizan para gestionar el manejo de la fertilización, basados en la oferta nutricional del suelo y la
            demanda de los cultivos, según CORPOICA (2012) cuales son las profundidades de muestreo por
            cultivos.
        </div>,
        opciones: [
            {
                textoRespuesta: '0 a 10 cm pastos de pastoreo, 0 a 25cm para cultivos comerciales o pastos de corte, a 25 y 25 a 50 para frutales y especies forestales',
                isCorrect: true
            },
            {
                textoRespuesta: '0 a 10 cm pastos de pastoreo, 0 a 30 cm para cultivos comerciales o pastos de corte, a 25 y 20 a 70 para frutales y especies forestales',
                isCorrect: false
            },
            {
                textoRespuesta: '0 a 15 cm pastos de pastoreo, 0 a 25cm para cultivos comerciales o pastos de corte, a 25 y 25 a 50 para frutales y especies forestales',
                isCorrect: false
            },
            {
                textoRespuesta: '0 a 10 cm pastos de pastoreo, 0 a 25cm para cultivos comerciales o pastos de corte, 0 a 25 y 25 a 60 para frutales y especies forestales',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>En las clases de experimento cual nos permite detectar las diferencias más pequeñas entre tratamientos:</div>,
        opciones: [
            {
                textoRespuesta: 'Preliminar',
                isCorrect: false
            },
            {
                textoRespuesta: 'Crítico',
                isCorrect: true
            },
            {
                textoRespuesta: 'Demostrativo',
                isCorrect: false
            },
            {
                textoRespuesta: 'Regional',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>La desviación típica de la muestra esta representa por el símbolo:</div>,
        opciones: [
            {
                textoRespuesta: 'S',
                isCorrect: true
            },
            {
                textoRespuesta: 'S^2x^-',
                isCorrect: false
            },
            {
                textoRespuesta: 'Sx^-',
                isCorrect: false
            },
            {
                textoRespuesta: 'H^0',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            En el método científico sugiere que el planeamiento de experimentación se debe tomar en cuenta las
            siguientes etapas, ordene los cuatro primeros pasos a seguir:
            <ul>
                <li>. Recolección de datos</li>
                <li>2. Definir el problema</li>
                <li>3. Ejecución del experimento</li>
                <li>4. Planeamiento y diseño del experimento</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '2,4,3,1',
                isCorrect: true
            },
            {
                textoRespuesta: '1,3,2,4',
                isCorrect: false
            },
            {
                textoRespuesta: '1,2,3,4',
                isCorrect: false
            },
            {
                textoRespuesta: '1,4,2,3',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            En la definición del problema que elementos debemos tomar en cuenta para la planeación del
            experimento:
            <ul>
                <li>1. Antecedentes</li>
                <li>2. Lugar de ejecución del experimento</li>
                <li>3. Importancia</li>
                <li>4. Objetivos</li>
                <li>5. Tamaño de la parcela</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1,3,4',
                isCorrect: false
            },
            {
                textoRespuesta: '1,3,4',
                isCorrect: true
            },
            {
                textoRespuesta: '2,3,5',
                isCorrect: false
            },
            {
                textoRespuesta: '2,4,5',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Cuando se trata de establecer el grado de relación entre dos variables se calcula mediante</div>,
        opciones: [
            {
                textoRespuesta: 'Coeficiente de correlación',
                isCorrect: true
            },
            {
                textoRespuesta: 'Regresión',
                isCorrect: false
            },
            {
                textoRespuesta: 'Varianza de la muestra',
                isCorrect: false
            },
            {
                textoRespuesta: 'Desviación típica de la muestra',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Los experimentos demostrativos tratan de:</div>,
        opciones: [
            {
                textoRespuesta: 'Un gran número de tratamientos',
                isCorrect: false
            },
            {
                textoRespuesta: 'Detectar diferencias pequeñas entre tratamientos',
                isCorrect: false
            },
            {
                textoRespuesta: 'Demostrar al agricultor las ventajas de una nueva variedad',
                isCorrect: false
            },
            {
                textoRespuesta: 'Confirmar los resultados fuera de la estación experimental',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>
            Cuál es el orden de cálculo en B.C.A. para el obtener la suma de cuadrados del error:
            <ul>
                <li>1. Suma de cuadrados de las repeticiones</li>
                <li>2. Suma de cuadrados de los tratamientos</li>
                <li>3. Suma de cuadrados totales</li>
                <li>4. Factor de Corrección</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '3,1,2,4',
                isCorrect: false
            },
            {
                textoRespuesta: '4,3,1,2',
                isCorrect: true
            },
            {
                textoRespuesta: '1,2,3,4',
                isCorrect: false
            },
            {
                textoRespuesta: '1,4,2,3',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Cuáles son las ventajas del uso de la DMS
            <ul>
                <li>1. Valor fácil de calcular y de simple utilización</li>
                <li>2. No se necesita el valor de F</li>
                <li>3. Resulta satisfactorio cuando se compara cada una de las medias con el testigo</li>
                <li>4. Permite comparar todas las medias entre sí, sin restricciones</li>
                <li>5. Prueba válida cuando se hacen comparaciones planeadas</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1,3,5',
                isCorrect: true
            },
            {
                textoRespuesta: '1,2,4',
                isCorrect: false
            },
            {
                textoRespuesta: '2,3,5',
                isCorrect: false
            },
            {
                textoRespuesta: '2,4,5',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Variable cualitativa se refiera a:</div>,
        opciones: [
            {
                textoRespuesta: 'Datos numéricos',
                isCorrect: false
            },
            {
                textoRespuesta: 'Medida',
                isCorrect: false
            },
            {
                textoRespuesta: 'Peso',
                isCorrect: false
            },
            {
                textoRespuesta: 'Datos no numéricos',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>Si S^2 = 19.13 y X es 32.04 cuál es el coeficiente de variación</div>,
        opciones: [
            {
                textoRespuesta: '14%',
                isCorrect: true
            },
            {
                textoRespuesta: '16%',
                isCorrect: false
            },
            {
                textoRespuesta: '15%',
                isCorrect: false
            },
            {
                textoRespuesta: '18%',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Si tenemos:
            <table style={{ borderCollapse: 'collapse', border: '1px solid', margin: '5px', width: '100%' }}>
                <tbody>
                    <tr>
                        <th>Valores para medias</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                    <tr>
                        <th>RMD</th>
                        <th>3.01</th>
                        <th>3.16</th>
                        <th>3.25</th>
                        <th>3.31</th>
                    </tr>
                </tbody>
            </table>
            Y un valor de S x de 3.83 cuál sería el valor de RMS para 2, 3, 4 y 5 medias
            <ul>
                <li>12.10</li>
                <li>12.45</li>
                <li>11.53</li>
                <li>12.68</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '3,1,2,4',
                isCorrect: false
            },
            {
                textoRespuesta: '1,3,2,4',
                isCorrect: false
            },
            {
                textoRespuesta: '3,1,2,4',
                isCorrect: true
            },
            {
                textoRespuesta: '1,4,2,3',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Si tenemos cuatro experimentos de adaptación de 6 variedades de frejol con 4 repeticiones y las ∑(Xij)^2 son = 769, 800 y 700 cuál es el Factor de corrección para cada experimento:
            <ul>
                <li>24.640</li>
                <li>25.500</li>
                <li>26.667</li>
                <li>20.417</li>
                <li>10.417</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1,3,4',
                isCorrect: true
            },
            {
                textoRespuesta: '2,3,4',
                isCorrect: false
            },
            {
                textoRespuesta: '2,3,5',
                isCorrect: false
            },
            {
                textoRespuesta: '2,4,5',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Si el coeficiente de correlación es 0.92 ++ de un experimento con seis pares de observaciones
            correspondientes a dosis de fungicidas (X) y rendimiento Y) que porcentaje se puede asumir a la
            aplicación de fungicida.
        </div>,
        opciones: [
            {
                textoRespuesta: '80.00%',
                isCorrect: false
            },
            {
                textoRespuesta: '84.64%',
                isCorrect: false
            },
            {
                textoRespuesta: '70.00%',
                isCorrect: true
            },
            {
                textoRespuesta: '90.00%',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>En un diseño de cuadrado latino se utiliza cuando tenemos:</div>,
        opciones: [
            {
                textoRespuesta: 'Más tratamientos que repeticiones',
                isCorrect: false
            },
            {
                textoRespuesta: 'Más repeticiones que tratamientos',
                isCorrect: false
            },
            {
                textoRespuesta: 'Igual número de tratamientos y repeticiones',
                isCorrect: true
            },
            {
                textoRespuesta: 'Un número elevado de repeticiones y tratamientos',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Cuál sería el orden de acuerdo al grado de precisión de las pruebas utilizadas para separar medias
            <ul>
                <li>1. Tukey</li>
                <li>2. Ducan</li>
                <li>3. DMS</li>
                <li>Scheffe</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '4,1,2,3',
                isCorrect: true
            },
            {
                textoRespuesta: '1,3,2,4',
                isCorrect: false
            },
            {
                textoRespuesta: '3,2,4,1',
                isCorrect: false
            },
            {
                textoRespuesta: '1,4,2,3',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Las propiedades del coeficiente de correlación son:
            <ul>
                <li>1. Es independiente a la escala</li>
                <li>2. Las muestras deben ser tomadas al azar</li>
                <li>3. Existe dependencia de Y en X</li>
                <li>4. Las variables deben ser pareadas por alguna razón lógica</li>
                <li>5. Conocidos los valores de X predecir valores de Y</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1, 2, 4',
                isCorrect: true
            },
            {
                textoRespuesta: '2, 3, 4',
                isCorrect: false
            },
            {
                textoRespuesta: '2, 3, 4',
                isCorrect: false
            },
            {
                textoRespuesta: '1, 3, 4',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>El presupuesto parcial se utiliza para determinar:</div>,
        opciones: [
            {
                textoRespuesta: 'Los costos y beneficios',
                isCorrect: true
            },
            {
                textoRespuesta: 'Ilustración gráfica de los tratamientos',
                isCorrect: false
            },
            {
                textoRespuesta: 'El ordenamiento de tratamientos en orden creciente de sus costos que varían',
                isCorrect: false
            },
            {
                textoRespuesta: 'Las tasas de retorno marginal',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Los costos que varían son:</div>,
        opciones: [
            {
                textoRespuesta: 'Luz',
                isCorrect: false
            },
            {
                textoRespuesta: 'Los insumos',
                isCorrect: true
            },
            {
                textoRespuesta: 'Combustible',
                isCorrect: false
            },
            {
                textoRespuesta: 'Mantenimiento',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Cuál es la secuencia de evaluación una vez terminada la etapa de experimentación:
            <ul>
                <li>1. Análisis económico</li>
                <li>2. Evaluación agronómica</li>
                <li>3. Análisis estadístico</li>
                <li>4. Evaluación de los productores</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '2,3,4,1',
                isCorrect: false
            },
            {
                textoRespuesta: '1,3,2,4',
                isCorrect: false
            },
            {
                textoRespuesta: '4,2,3,1',
                isCorrect: true
            },
            {
                textoRespuesta: '1,4,2,3',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>
            Los costos fijos son:
            <ul>
                <li>1. Uso de suelo</li>
                <li>2. Luz</li>
                <li>3. Materia Prima</li>
                <li>4. Depreciaciones</li>
                <li>5. Mano de obra directa</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1,3,4',
                isCorrect: false
            },
            {
                textoRespuesta: '1,2,4',
                isCorrect: false
            },
            {
                textoRespuesta: '2,3,5',
                isCorrect: false
            },
            {
                textoRespuesta: '1,2,4',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>
            La labranza del suelo consiste en:
        </div>,
        opciones: [
            {
                textoRespuesta: 'Buscar mejoramiento de las propiedades físicas y químicas del suelo.',
                isCorrect: false
            },
            {
                textoRespuesta: 'Remover la capa vegetal del suelo, que se realiza antes de la siembra para facilitar la germinación de las semillas y el crecimiento, desarrollo y producción de la planta',
                isCorrect: true
            },
            {
                textoRespuesta: 'Remover el suelo de muchas maneras con distintas maquinarias para realizar siembras.',
                isCorrect: false
            },
            {
                textoRespuesta: 'La remoción del suelo con el propósito de mejorar mecánicamente su estructura para realizar siembras',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Los elementos con los que se puede realizar una labranza primaria mecanizada son</div>,
        opciones: [
            {
                textoRespuesta: 'Fresadora, Arado de cincel y Rotovator',
                isCorrect: true
            },
            {
                textoRespuesta: 'Rastrillo y pala',
                isCorrect: false
            },
            {
                textoRespuesta: 'Cavadora y azadón',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>La surcadora es un</div>,
        opciones: [
            {
                textoRespuesta: 'Es azadón que se utiliza para elaborar surcos y sembrar cultivos que convienen ser sembrado bajo dimensiones',
                isCorrect: false
            },
            {
                textoRespuesta: 'Es una maquinaria con diferentes ruedas que hacer surcos para sembrar cualquier cultivo',
                isCorrect: false
            },
            {
                textoRespuesta: 'Es una maquinaria con diferentes ruedas que hacer surcos para sembrar cualquier cultivo',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>¿Qué es una sembradora?</div>,
        opciones: [
            {
                textoRespuesta: 'Lleva unas rejas delante de los tubos por los cuales se distribuyen las semillas, que van a abrir los surcos en los que se depositan y luego son cubiertos con tierra por los rodillos o gradas.',
                isCorrect: true
            },
            {
                textoRespuesta: 'Se la utiliza para preparar el terreno en presiembra sobre labrado',
                isCorrect: false
            },
            {
                textoRespuesta: 'Se utilizan para realizar huecos en el suelo',
                isCorrect: false
            },
            {
                textoRespuesta: 'Procura una germinación más rápida',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>¿Las abonadoras, en base al principio por el que se desplaza el fertilizante hasta llegar al suelo se
            clasifican en?</div>,
        opciones: [
            {
                textoRespuesta: 'Gravedad, proyección y distribución',
                isCorrect: false
            },
            {
                textoRespuesta: 'Proyección, gravedad y neumáticas',
                isCorrect: true
            },
            {
                textoRespuesta: 'Distribución, gravedad y pendiente',
                isCorrect: false
            },
            {
                textoRespuesta: 'Móviles por gravedad y neumáticas',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>Los tipos de sembradora son:</div>,
        opciones: [
            {
                textoRespuesta: 'sembradora manual',
                isCorrect: false
            },
            {
                textoRespuesta: 'Sembradora instrumental',
                isCorrect: false
            },
            {
                textoRespuesta: 'Sembradora de presión',
                isCorrect: true
            },
            {
                textoRespuesta: 'Sembradora Neumática y de chorrillo',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>¿Qué es una sembradora neumática?</div>,
        opciones: [
            {
                textoRespuesta: 'Es una máquina que en ocasiones requiere de otros mecanismos que no dependen de la acción gravitacional para la inserción de semillas.',
                isCorrect: true
            },
            {
                textoRespuesta: 'Es una máquina que permite insertar sobre cada línea de siembra una cantidad de grano determinado',
                isCorrect: false
            },
            {
                textoRespuesta: 'Es una maquina diseñada para la siembra individual por cada surco',
                isCorrect: false
            },
            {
                textoRespuesta: 'Es una máquina de accionamiento gravitacional para siembra individual',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>¿De qué forma pueden ser utilizados los fertilizantes?</div>,
        opciones: [
            {
                textoRespuesta: 'Sólida y liquida',
                isCorrect: false
            },
            {
                textoRespuesta: 'Liquida, foliar y gaseosa',
                isCorrect: false
            },
            {
                textoRespuesta: 'Foliar sólida y gaseosa',
                isCorrect: false
            },
            {
                textoRespuesta: 'Solida liquida y gaseosa',
                isCorrect: true
            },
        ]
    },
    {
        titulo: <div>¿Cuáles son los órganos fundamentales del mecanismo de trilla?</div>,
        opciones: [
            {
                textoRespuesta: 'Cilindro desgranador',
                isCorrect: true
            },
            {
                textoRespuesta: 'Tornillo',
                isCorrect: false
            },
            {
                textoRespuesta: 'Cóncavo',
                isCorrect: true
            },
            {
                textoRespuesta: 'Barras',
                isCorrect: false
            },
        ]
    },
    {
        titulo: <div>¿Qué es una cultivadora agrícola?</div>,
        opciones: [
            {
                textoRespuesta: 'Es una máquina que se utiliza en la agricultura para descompactar, revolver el suelo y romper los terrones antes de la siembra, o en los terrenos sembrados para eliminar malas hierbas y airear y aflojar el suelo, acercando a la vez la tierra a las plantas',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Son menos dañinos que éstas, porque los cortes que producen son verticales y no entierran las capas superiores más fértiles como hacen las gradas de discos ni producen compactación de las capas inferiores del suelo.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Son equipos que trabajan entre las hileras (surcos) de plantas removiendo las hierbas, descompactando la capa superficial, y a veces acercando la tierra removida a las plantas (aporque).',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es una máquina que se utiliza en la agricultura para compactar, revolver el suelo y romper los terrones antes de la siembra, o en los terrenos sembrados para eliminar malas hierbas y airear y aflojar el suelo, acercando a la vez la tierra a las plantas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuáles son los elementos que conforman los cultivadores?</div>,
        opciones: [
            {
                textoRespuesta: 'para preparar el suelo, de desyerbe, Cultivador de plátano',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Chasis o bastidor, Barra porta implementos, Ruedas, Órganos de trabajo',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Patas, Barra porta implementos, Chasis o bastidor, Cultivador de plátano Órganos de trabajo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Sistema de enganche, Cultivador de plátano, Barra porta implementos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuál es la importancia de las maquinas, equipos y herramientas en la labor agrícola?</div>,
        opciones: [
            {
                textoRespuesta: 'Las maquinarias agrícolas se utilizan para arrastrar, desmenuzar o remover la tierra, limpieza y para sembrar.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'La diferencia es que las maquinarias se encargan de remover la tierra, mientras que los equipos se encargan de ayudar al terreno, de deshacerse de lo que no debería estar en la tierra, y las herramientas ayudan a transportar y excavar para sembrar un nuevo cultivo',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Los equipos agrícolas se utilizan para labrar la tierra, eliminar la maleza, fumigar las plantas y para abonar el suelo',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Las herramientas agrícolas se utilizan para abrir zanjas, cargar tierra, extraer raíces, arrancar hierbas, perforar el suelo y rociar con agua las plantas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Que son las maquinas agrícolas?</div>,
        opciones: [
            {
                textoRespuesta: 'Es una máquina agrícola muy útil, con ruedas o cadenas diseñadas para moverse con facilidad en el terreno y potencia de tracción que permite realizar grandes tareas agrícolas, aun en terrenos encharcados',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es una máquina agrícola de un solo eje y se opera por manillar; suele tener mediana potencia pero, en cambio puede ser muy versátil con los numerosos aperos e implementos que se han venido desarrollando',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Las maquinarias son elementos que se utilizan para dirigir la acción de fuerzas de trabajo a base de energía; por su parte en el campo agrícola, los mecanismos a motor que se emplean en estas labores aligeran la producción y mejoran las técnicas de cultivo',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Los equipos agrícolas son un grupo de aparatos diseñados para abrir surcos en la tierra, desmenuzar, fumigar y fertilizar en el suelo.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuáles son los tipos de cosechadoras de maíz?</div>,
        opciones: [
            {
                textoRespuesta: 'Cosechadoras de mazorcas',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Autopropulsadas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'De arrastre',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Chasis o bastidor',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuáles son los tipos de cosechadoras de arroz?</div>,
        opciones: [
            {
                textoRespuesta: 'Motor y mecanismos de operación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Cosechadoras a mata entera',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Cabina',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Cosechadoras trilladoras',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuál es el funcionamiento de una cosechadora?</div>,
        opciones: [
            {
                textoRespuesta: 'El molinete empuja los tallos de las plantas contra la barra de siega. La barra de siega corta los tallos y deja las partes aéreas de las plantas sobre la plataforma contra el conductor transversal. El conductor transversal conduce el material cortado hacia la parte central de la plataforma, donde se encuentra el conductor de alimentación',
                isCorrect: true,
            },
            {
                textoRespuesta: 'La paja se separa de los granos mediante el llamado sacapajas de la unidad de separación y limpieza. La paja sale detrás de la máquina. El mecanismo de limpieza de la unidad de separación y limpieza separa la pajilla y demás impurezas de los granos. Los granos son conducidos al tanque.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Tras conocer de forma general el funcionamiento de una cosechadora, a continuación, se describirán los componentes fundamentales que intervienen en el proceso',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es la encargada de cortar la mies. Es una guadañadora provista de una pletina móvil sobre la que se disponen unas cuchillas y unos dedos fijos unidos al bastidor de la plataforma',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La sembradora a voleo es</div>,
        opciones: [
            {
                textoRespuesta: 'Un modelo especial de sembradora que distribuye las semillas a granel, esparciéndolas sobre el campo roturado. Generalmente la labor se completa con un pase de grada (rastra) para tapar las semillas. ',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Un modelo especial de sembradora que distribuye en orden las semillas, esparciéndolas sobre el campo. Generalmente la labor se completa con un pase de grada (rastra) para tapar las semillas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Destinadas a la siembra o plantación de tubérculos (generalmente papa).',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Las que aplican fertilizantes químicos u orgánicos simultáneamente con la siembra de semillas. Tienen tolvas y mecanismos distribuidores independientes para el fertilizante, el cual cae en el mismo surco que las semillas o cerca de éstas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuáles son los tipos de asperjadoras?</div>,
        opciones: [
            {
                textoRespuesta: 'Ruedas, Sistema de enganche, Tanque o depósito, Bomba',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Válvula de regulación, Compensador, Tubos y bajantes, Alerones',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Arrastre, integrales, autopropulsadas.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Mochila y moto mochilas, Turbo',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>La cosecha en las zonas tropicales, durante la estación seca, el arroz está pronto para ser cosechado
            entre</div>,
        opciones: [
            {
                textoRespuesta: '25 a 35 días después de la floración',
                isCorrect: true,
            },
            {
                textoRespuesta: '35 a 40 días después de la floración',
                isCorrect: false,
            },
            {
                textoRespuesta: '12 días después de la floración',
                isCorrect: false,
            },
            {
                textoRespuesta: '10 a 50 días después de la floración',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Qué Misión tiene el Molinete en una cosechadora?</div>,
        opciones: [
            {
                textoRespuesta: 'Provista de una pletina móvil sobre la que se disponen unas cuchillas y unos dedos fijos unidos al bastidor de la plataforma',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Consiste en un tornillo sinfín alimentador cuya misión es la de canalizar toda la mies segada por la barra de corte hacia el centro de la plataforma de corte donde es recogida por los dedos retráctiles y empujada sobre la banda elevadora',
                isCorrect: false,
            },
            {
                textoRespuesta: 'De acercar la mies hacia la barra de corte para, una vez segada, empujarla sobre el sinfín alimentador, evitando que puede caerse por delante de la barra',
                isCorrect: true,
            },
            {
                textoRespuesta: 'De separar el grano de las espigas y de la paja',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿En el siglo XIX conque enfermedad se empezó a estudiar en profundidad la Bioestadística?</div>,
        opciones: [
            {
                textoRespuesta: 'Tuberculosis',
                isCorrect: true,
            },
            {
                textoRespuesta: 'VIH',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Cáncer',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Tifoidea',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuáles son las medidas descriptivas de tendencia central?</div>,
        opciones: [
            {
                textoRespuesta: 'Moda, varianza y mediana',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Desviación estándar, media, varianza',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Media, mediana, moda',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Coeficiente de variación, varianza, desviación estándar',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuál es el espacio muestral de lanzar un dado y observar su cara superior?</div>,
        opciones: [
            {
                textoRespuesta: '3,1,4,5,6,2',
                isCorrect: true,
            },
            {
                textoRespuesta: '7,9,8,10,6',
                isCorrect: false,
            },
            {
                textoRespuesta: '5,6,3,8,9,2',
                isCorrect: false,
            },
            {
                textoRespuesta: '4,9,7,3,2,1',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El volumen de producción de 2 plantas de una empresa es de 8000 y 10000 unidades de productos por
            día. El porcentaje de piezas defectuosas es de 0,5% en la primera fábrica y 0,8% en la segunda.
            ¿Calcular la probabilidad de que al elegir un producto al azar sea defectuoso?
        </div>,
        opciones: [
            {
                textoRespuesta: '1/ 200',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/150',
                isCorrect: true,
            },
            {
                textoRespuesta: '1/120',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/300',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Un producto este compuesto de 4 piezas. la probabilidad de que la primera sea defectuosa es de 2 de
            cada 1000, que la segunda sea defectuosa es de 4%, que la tercera sea defectuosa es de 7% y que la
            cuarta sea defectuosa 1%. ¿Calcular la probabilidad de que el producto tenga alguna pieza
            defectuosa?</div>,
        opciones: [
            {
                textoRespuesta: '0,015',
                isCorrect: false,
            },
            {
                textoRespuesta: '0,010',
                isCorrect: false,
            },
            {
                textoRespuesta: '0,014',
                isCorrect: true,
            },
            {
                textoRespuesta: '0,016',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En una ciudad se estima que la temperatura máxima en el mes de junio sigue una
            distribución normal, con media 23° y desviación típica 5°. Calcular el número de días
            del mes en los que se espera alcanzar máximas entre 21° y 27°</div>,
        opciones: [
            {
                textoRespuesta: '15',
                isCorrect: false,
            },
            {
                textoRespuesta: '13',
                isCorrect: true,
            },
            {
                textoRespuesta: '12',
                isCorrect: false,
            },
            {
                textoRespuesta: '14',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            En unas pruebas de alcoholemia se ha observado que el 5% de los conductores
            controlados dan positivo en la prueba y que el 10% de los conductores controlados no
            llevan puesto el cinturón de seguridad. También se ha observado que las dos
            infracciones son independientes. Un guardia de tráfico para cinco conductores al azar.
            Si tenemos en cuenta que el número de conductores es suficientemente important e
            como para estimar que la proporción de infractores no varía al hacer la selección.
            <ul>
                <li>1)Determinar la probabilidad de que exactamente tres conductores hayan cometido alguna
                    de las dos infracciones.</li>
                <li>2) Determine la probabilidad de que al menos uno de los con ductores controlados haya
                    cometido alguna de las dos infracciones</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '0,0223 - 0,543',
                isCorrect: true,
            },
            {
                textoRespuesta: '0,0365 - 0,523',
                isCorrect: false,
            },
            {
                textoRespuesta: '0,0137 - 0,552 ',
                isCorrect: false,
            },
            {
                textoRespuesta: '0,0245 - 0,562',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Si un banco recibe en promedio 6 cheques sin fondo por día.
            <ul>
                <li>¿cuáles son las probabilidades de que reciba?</li>
                <li>¿cuatro cheques sin fondo en un día dado, b) 10 cheques sin fondos en cualquiera de dos días consecutivos?</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '0,13492 – 0,125670',
                isCorrect: false,
            },
            {
                textoRespuesta: '0,13392 – 0,104953',
                isCorrect: true,
            },
            {
                textoRespuesta: '0,12456 – 0,156732',
                isCorrect: false,
            },
            {
                textoRespuesta: '0,17823 – 0,134521 ',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Para estudiar la efectividad de un medicamento contra la diabetes se mide la cantidad de glucemia en
            sangre antes y después de la administración de dicho medicamento, obteniéndose los resultados
            siguientes:
            <ul>
                <li>Antes 7.2 7.3 6.5 4.2 3.1 5.3 5.6</li>
                <li>Después 5.2 5.4 5.3 4.7 4.1 5.4 4.9</li>
            </ul>
            Estimar la reducción producida por el medicamento
        </div>,
        opciones: [
            {
                textoRespuesta: '0.6',
                isCorrect: true,
            },
            {
                textoRespuesta: '0.4',
                isCorrect: false,
            },
            {
                textoRespuesta: '0.8',
                isCorrect: false,
            },
            {
                textoRespuesta: '0.5',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Realizamos una investigación porque:</div>,
        opciones: [
            {
                textoRespuesta: 'Desconocemos algo',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Necesitamos aportar alguna solución a los problemas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Ninguna de las anteriores',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Todas las anteriores',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El concepto de investigación es aplicable a</div>,
        opciones: [
            {
                textoRespuesta: 'La actividad de indagar',
                isCorrect: false,
            },
            {
                textoRespuesta: 'La actividad social.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Distintos ámbitos donde se deduce los problemas a solucionar',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Obtener datos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>. Investigar, es sinónimo de</div>,
        opciones: [
            {
                textoRespuesta: 'Analizar, averiguar',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Procurar, desglosar',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Inventariar, determinar',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Inventariar, determinar',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En la investigación científica, después de plantear una hipótesis:</div>,
        opciones: [
            {
                textoRespuesta: 'Se contrastan los hechos hallados con la hipótesis. ',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Se comprueba que los hechos sean explicados por el científico.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se determinan procesos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se determinan soluciones',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En la investigación científica se utilizan normalmente los métodos:</div>,
        opciones: [
            {
                textoRespuesta: 'Hipotéticos-Deductivos',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Deductivos-Sugestivos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Diagnósticos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Subjetivos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Dentro de la investigación, pueden darse varios tipos como:</div>,
        opciones: [
            {
                textoRespuesta: 'Básica y documental.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'De campamento o experimental',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Central o centralizada',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Mixta o ambigua',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En la investigación histórica, el historiador</div>,
        opciones: [
            {
                textoRespuesta: 'Se basa en estudios de proyección de datos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Tiene que esclarecer un asunto a partir de datos objetivos.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Estudia los hechos del pasado primero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Determina consensos con otros historiadores',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La investigación histórica se basa en una serie de</div>,
        opciones: [
            {
                textoRespuesta: 'Pasos y estrategias. ( R )',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Tema, metodología, información y presentación de resultados',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Datos tabulados',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Resultados',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Investigar es realizar tareas de investigación. Esto supone</div>,
        opciones: [
            {
                textoRespuesta: 'Búsqueda de datos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Establecer comparaciones, análisis, que generan nuevos conocimientos. (R)',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Solución de problemas.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Establecer conclusiones',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En investigación, qué se debe diseñar primero</div>,
        opciones: [
            {
                textoRespuesta: 'Los pasos principales y metodología de trabajo. (R )',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Las conclusiones',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Los análisis de datos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Los resultados.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿En investigación, a qué llamamos planteamiento del problema?</div>,
        opciones: [
            {
                textoRespuesta: 'Conocer el estado actual del fenómeno a estudiar. (a)',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Incrementar los datos informativos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Realizar precisiones informativas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Darle solución al problema',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Existen 2 tipos de investigaciones, contrapuestas y enfrentadas, que son:</div>,
        opciones: [
            {
                textoRespuesta: 'Mayéutica y Asociadora',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Fonética',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Cualitativa y cuantitativa. ( R )',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Formativa',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Denominamos marco conceptual a:</div>,
        opciones: [
            {
                textoRespuesta: 'Vínculo con el referente',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Fuente de emisión',
                isCorrect: false,
            },
            {
                textoRespuesta: 'La ordenación coherente de aquellos aspectos que forman parte de la investigación. ( R )',
                isCorrect: true,
            },
            {
                textoRespuesta: 'D. Una intencionalidad investigativa',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Cuando se investiga un asunto es necesario que el investigador tenga una</div>,
        opciones: [
            {
                textoRespuesta: 'Idea cuantitativa de lo que va a investigar',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Estrategia lógica y racional en relación con lo que va a investigar. ( R )',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Hipótesis bien definida',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Idea lógica y coherente de lo que va a investigar.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Un marco conceptual en investigación es:</div>,
        opciones: [
            {
                textoRespuesta: 'Un código investigativo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Planificación de ideas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'El procedimiento concreto de una investigación dentro de un marco teórico',
                isCorrect: true,
            },
            {
                textoRespuesta: 'La formalidad en la investigación',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Un historiador se plantea estudiar un episodio de la historia, lo primero que debe hacer es:</div>,
        opciones: [
            {
                textoRespuesta: 'El significado del tema',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Los fondos de la investigación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Conocer los estudios ya realizados sobre el tema. ( R )',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Los significados de un problema.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En investigación, al marco conceptual, se lo visualiza como</div>,
        opciones: [
            {
                textoRespuesta: 'Una herramienta teórica que permite diseñar su estrategia de manera conjunta y coherente.',
                isCorrect: false,
            },
            {
                textoRespuesta: ' Un esquema que permite se tenga una idea global del asunto.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Ninguna de las anteriores',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Todas las anteriores.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Un marco de referencia es:</div>,
        opciones: [
            {
                textoRespuesta: 'Un modelo explicativo de lo que tenemos del conocimiento del problema. ( R)',
                isCorrect: true,
            },
            {
                textoRespuesta: 'La eficacia de la investigación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'El protocolo de la investigación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Una visualización del problema',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿A qué llamamos investigar?</div>,
        opciones: [
            {
                textoRespuesta: 'A la comunicación de la información',
                isCorrect: false,
            },
            {
                textoRespuesta: 'A la actitud innata de los seres humanos, que tiene curiosidad, siempre se pregunta y trata de resolver los problemas de su universo. ( R )',
                isCorrect: true,
            },
            {
                textoRespuesta: 'A la intensidad de la investigación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'A las pautas básicas de la investigación',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Los organismos animales y vegetales cumplen funciones vitales características, pero unas se presentan
            en ambos. ¿Cuáles son?
            <ul>
                <li>1. Respiración Celular</li>
                <li>2. Reproducción</li>
                <li>3. Fotosíntesis</li>
                <li>4. Foto-respiración celular</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: 'si 1 y 2 son correctas.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'si 1 y 3 son correctas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'si 2 y 4 son correctas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'si 3 y 4 son correctas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Dentro de los factores de amortiguación más sobresalientes en los organismos vivos, se encuentran
            <ul>
                <li>1. Sistema calcio</li>
                <li>2. Sistema Fosfato</li>
                <li>3. Hemoglobina</li>
                <li>4. Proteínas musculares</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1 y 3 son correctas',
                isCorrect: false,
            },
            {
                textoRespuesta: '2 y 3 son correctas',
                isCorrect: false,
            },
            {
                textoRespuesta: '1 y 2 son correctas',
                isCorrect: true,
            },
            {
                textoRespuesta: '2 y 4 son correctas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El Adenosín trifosfato es una biomolécula que posee un papel fundamental en el metabolismo celular.
            Con respecto a dicha biomolécula se puede afirmar:</div>,
        opciones: [
            {
                textoRespuesta: 'El ATP, se produce en la vacuola celular',
                isCorrect: false,
            },
            {
                textoRespuesta: 'El ATP, se produce en la respiración celularmitocondrial',
                isCorrect: false,
            },
            {
                textoRespuesta: 'El ATP, almacén los carbohidratosbiosintetizados',
                isCorrect: true,
            },
            {
                textoRespuesta: 'El ATP, almacena la energía libremetabólica',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Los carbohidratos o sacáridos, son biomoléculas constituidas por algunos bioelementos primarios, que
            se hallan en toda la materia viva.</div>,
        opciones: [
            {
                textoRespuesta: 'Carbono, Hidrógeno y Oxígeno',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Carbono, Nitrógeno y Oxígeno',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Carbono, Hidrógeno y Fósforo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Carbono, Nitrógeno y Azufre',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La enzima alcohol deshidrogenasa, convierte en el hígado, el alcohol etílico, antes de que llegue al
            cerebro, en acetaldehído, el cual es usado por la célula para sintetizar grasas. Esta enzima pertenece a
            uno de estos grupos:
        </div>,
        opciones: [
            {
                textoRespuesta: 'Óxido-reductasa',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Hidrolasa',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Transferasa',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Isomerasa',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Los aminoácidos son biomoléculas elementales que forman polímeros denominados proteínas ó
            polipéptidos.
            <ul>
                <li>La celulosa es un biopolímero constituido por monosacáridos, como la glucosa.</li>
                <li>Los ácidos nucleicos son polinucleótido constituidos por aminoácidos.</li>
                <li>El ADN está constituido por bases nitrogenadas como el uracilo.</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1 y 2 son correctos',
                isCorrect: true,
            },
            {
                textoRespuesta: '1 y 3 son correctos',
                isCorrect: false,
            },
            {
                textoRespuesta: '2 y 4 son correctos',
                isCorrect: false,
            },
            {
                textoRespuesta: '3 y 4 son correctos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>De acuerdo a la siguiente información, la enzima que actúa sobre el almidón se denomina</div>,
        opciones: [
            {
                textoRespuesta: 'Pectinasa',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Amilasa',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Lipasa',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Ligasa',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Los organismos ___________obtienen la energía de la __________ y los Nutrientes de las
            sustancias____________</div>,
        opciones: [
            {
                textoRespuesta: 'Heterótrofos; luz; Inorgánicas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Autótrofos; Luz; Inorgánicas',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Heterótrofos; Luz; Orgánicas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Autótrofos; Dieta; Inorgánicas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Para establecer una buena comunicación es necesario cumplir requisitos como:
            <ul>
                <li>Brevedad</li>
                <li>Concentración</li>
                <li>Claridad</li>
                <li>Corrección</li>
                <li>Caligrafía</li>
                <li>Ortografía</li>
                <li>Precisión</li>
                <li>Educación</li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1,3,4,8',
                isCorrect: false,
            },
            {
                textoRespuesta: '2,3,5,7',
                isCorrect: false,
            },
            {
                textoRespuesta: '3,4,6,7',
                isCorrect: true,
            },
            {
                textoRespuesta: '1,2,5,8',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Integrar por sustitución trigonométrica:
            ∫ 𝑑𝑥/√(25 − 16𝑥)^2
        </div>,
        opciones: [
            {
                textoRespuesta: '-1/4 ar sen 5/4 x + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/4 ar sec 5/4 x + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/4 ar sen 4/5 x + c',
                isCorrect: true,
            },
            {
                textoRespuesta: '-1/4 ar sen 4/5 x + c',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Integrar por sustitución trigonométrica:
            ∫ 𝑑𝑥/(4𝑥^2 + 9)
        </div>,
        opciones: [
            {
                textoRespuesta: '1/6 arc tg 2/3 x + c',
                isCorrect: true,
            },
            {
                textoRespuesta: '1/6 arc tg 3/2 x + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/6 arc tg 2/3 x - c',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/6 arc tg 3/2 x - c',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Encontrar: ∫ 𝒔𝒆𝒏𝟓𝒙 𝒅x</div>,
        opciones: [
            {
                textoRespuesta: 'cos x + 2/3 cos^3x cos^5x/5 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '-cos x + 2/3 cos^3x - cos^5x/5 + c',
                isCorrect: true,
            },
            {
                textoRespuesta: '− cos 𝑥 + 2/3 𝑐𝑜𝑠^3𝑥 + 𝑐𝑜𝑠5𝑥/5 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '-cos x + 2/3 cos^3x + cos^5x/5 + c',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Integrar por medio del método de integración por partes:
            ∫ 𝑡𝑔^2 𝑥 • sec 𝑥 𝑑x
        </div>,
        opciones: [
            {
                textoRespuesta: '(𝑡𝑔 𝑥 sec 𝑥 − 𝐿𝑛 |sec 𝑥 + 𝑡𝑔 𝑥| + c)/2',
                isCorrect: true,
            },
            {
                textoRespuesta: '(sec 𝑥 − 𝐿𝑛 |sec 𝑥 + 𝑡𝑔 𝑥| + c)/2',
                isCorrect: false,
            },
            {
                textoRespuesta: '(𝑡𝑔 𝑥 sec 𝑥 − 𝐿𝑛 |𝑡𝑔 𝑥| + c)/2',
                isCorrect: false,
            },
            {
                textoRespuesta: '𝑡𝑔 𝑥 sec 𝑥 − 𝐿𝑛 |sec 𝑥 + 𝑡𝑔 𝑥| + c',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Integrar aplicando el método de integración por descomposición en fracciones parciales:
            ∫ (3𝑥 + 1)/(𝑥^2 + 5𝑥^2 + 4) 𝑑x
        </div>,
        opciones: [
            {
                textoRespuesta: '3x+1 = 1/2 Ln|x^2| + 1/3 arctg x - 1/2 Ln|x^2| - 1/6 tg x/2 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '3x + 1 = 1/2 Ln|x^2 + 1| + 1/3 arctg x -1/2 Ln|x^2+4| - 1/3 tg x/2 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '3x + 1 = 1/2 Ln|x^2 +1| + 1/3 arctg x - 1/2 Ln|x^2 + 4| - 1/6 tg - 1/6 tg x/2 + c',
                isCorrect: true,
            },
            {
                textoRespuesta: '3x + 1 = 1/2 Ln|x^2 + 1| + 1/3 arctg x - 1/2 Ln|x^2 + 4| - 1/6 + C',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Un vivero suele vender cierto arbusto después de 5 años de crecimiento. La velocidad de crecimiento
            durante esos 5 años está dada por dh/dt = 1.5t + 6 Donde “t” está dada en años y “h” en centímetros.
            Las plantas de semillero miden 13cm de altura cuando se plantan.
            ¿Qué altura tenía el arbusto al momento de ser vendido?
        </div>,
        opciones: [
            {
                textoRespuesta: '62,75 cm',
                isCorrect: false,
            },
            {
                textoRespuesta: '64,75 cm',
                isCorrect: false,
            },
            {
                textoRespuesta: '64,75 cm',
                isCorrect: true,
            },
            {
                textoRespuesta: '63,75 cm',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Una partícula posee una aceleración de a = sen^2t Si su rapidez en t=0 es 2𝟑∏/24 m/s.
            Calcular su rapidez en t = ∏/12seg
        </div>,
        opciones: [
            {
                textoRespuesta: '(∏-1/16)m/s',
                isCorrect: false,
            },
            {
                textoRespuesta: '(∏-1/8)m/s',
                isCorrect: true,
            },
            {
                textoRespuesta: '(∏-8m/s)',
                isCorrect: false,
            },
            {
                textoRespuesta: '(∏-16)m/s',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Hallar:
            ∫ 𝒄𝒐𝒔𝟑 𝒙 𝒅x
        </div>,
        opciones: [
            {
                textoRespuesta: '𝑠𝑒𝑛 𝑥 − (𝑠𝑒𝑛^3𝑥)/2 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '𝑠𝑒𝑛 𝑥 + (𝑠𝑒𝑛^3𝑥)/3 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '𝑠𝑒𝑛 𝑥 + (𝑠𝑒𝑛3𝑥)/2 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '𝑠𝑒𝑛 𝑥 − (𝑠𝑒𝑛3𝑥)/3 + c',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            Integrar por partes:
            ∫ 𝒂𝒓𝒄 𝒕𝒈 𝒙 𝒅x
        </div>,
        opciones: [
            {
                textoRespuesta: '𝑥 𝑎𝑟𝑐 𝑡𝑔 𝑥 − 1/2 𝐿𝑛 |1 + 𝑥2| + c',
                isCorrect: true,
            },
            {
                textoRespuesta: 'x 𝑎𝑟𝑐 𝑡𝑔 𝑥 + 1/2 𝐿𝑛 |1 + 𝑥^2| + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '𝑥 𝑎𝑟𝑐 𝑡𝑔 𝑥 −1/2𝐿𝑛 |1 − 𝑥^2| + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '𝑥 𝑎𝑟𝑐 𝑡𝑔 𝑥 + 1/2 𝐿𝑛 |1 − 𝑥^2| + c',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Integrar por partes: ∫ 𝒙^𝟐 𝒆^𝒙 𝒅x</div>,
        opciones: [
            {
                textoRespuesta: 'x^2 • 𝑒^𝑥 + 2𝑥𝑒^𝑥 + 2𝑒^𝑥 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '𝑥^2 • 𝑒^𝑥 − 2𝑥𝑒^𝑥 + 2𝑒^𝑥 + c',
                isCorrect: true,
            },
            {
                textoRespuesta: '𝑥^2 • 𝑒^𝑥 − 2𝑥𝑒^𝑥 − 2𝑒^𝑥 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: ' 𝑥^2 • 𝑒^𝑥 + 2𝑥𝑒^𝑥 − 2𝑒^𝑥 + c',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Integrar por partes: ∫ 𝒙^𝟐 𝐜𝐨𝐬 𝒙 𝒅x</div>,
        opciones: [
            {
                textoRespuesta: '𝑥^2 𝑠𝑒𝑛 𝑥 − 2𝑥 cos 𝑥 − 2𝑠𝑒𝑛 𝑥 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '𝑥^2 𝑠𝑒𝑛 𝑥 − 2𝑥 cos 𝑥 + 2𝑠𝑒𝑛 𝑥 + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '𝑥^2 𝑠𝑒𝑛 𝑥 + 2𝑥 cos 𝑥 + 2𝑠𝑒𝑛 𝑥 + �',
                isCorrect: true,
            },
            {
                textoRespuesta: '𝑥^2 𝑠𝑒𝑛 𝑥 + 2𝑥 cos 𝑥 − 2𝑠𝑒𝑛 𝑥 + �',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Integrar por medio del método de fracciones parciales:
            ∫ (𝟐𝒙^𝟐 + 𝟏)/(𝒙 − 𝟐)^𝟑 𝒅x
        </div>,
        opciones: [
            {
                textoRespuesta: '2𝐿𝑛 |𝑥−2| + 8/(x-2) + 9/[2(x-2)^2] + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '2Ln |x-2| + 8/(x-2) - 9/[2(x-2)^2] + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '2Ln |x-2| - 8/(x-2) - 9/[2(x-2)^2] + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '2Ln |x-2| - 8/(x-2) + 9/[2(x-2)^2] + c',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            Integrar por el método de fracciones parciales.
            ∫ (𝒙^𝟑 + 𝒙^𝟐 + 𝟓𝒙 + 𝟒)/(𝒙^𝟐 + 𝟒)^𝟐 𝒅x
        </div>,
        opciones: [
            {
                textoRespuesta: '1/2Ln |x^2 + 4| - 1/2 arc tg x/2 - 1/[2(x^2 + 4)] + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/2Ln |x^2 + 4| + 1/2 arc tg x/2 - 1/[2(x^2 + 4)] + c',
                isCorrect: true,
            },
            {
                textoRespuesta: '1/2Ln |x^2 + 4| + 1/2 arc tg x/2 + 1/[2(x^2 + 4)] + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/2Ln |x^2 + 4| - 1/2 arc tg x/2 + 1/[2(x^2 + 4)] + c',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            La rapidez de una partícula que se desplaza a lo largo de una recta es 𝑽(𝒕) = 𝒕√(𝟏 + 𝒕^2)
            Determinar la distancia recorrida por la partícula desde el instante 𝒕𝟏 = 𝟐√𝟐 hasta 𝒕𝟐 = 𝟐√6
        </div>,
        opciones: [
            {
                textoRespuesta: 'd = 96',
                isCorrect: false,
            },
            {
                textoRespuesta: 'd = 98',
                isCorrect: true,
            },
            {
                textoRespuesta: 'd = 94',
                isCorrect: false,
            },
            {
                textoRespuesta: 'd = 92',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Un móvil de desplaza con MRUV a razón de 4m/(s^2). Si tu t=2 seg y su rapidez y posicion son 20m/s y 40m respectivamente. Calucular su rapidez y posicion en t=4seg</div>,
        opciones: [
            {
                textoRespuesta: '80m',
                isCorrect: false,
            },
            {
                textoRespuesta: '78m',
                isCorrect: false,
            },
            {
                textoRespuesta: '88m',
                isCorrect: true,
            },
            {
                textoRespuesta: '70m',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Un vehículo lleva una velocidad de 15km por hora y frena a razón de 0,8m por segundo en cada
            segundo. Hallar el espacio recorrido antes de detenerse</div>,
        opciones: [
            {
                textoRespuesta: 'x=10m',
                isCorrect: false,
            },
            {
                textoRespuesta: 'x=11m',
                isCorrect: true,
            },
            {
                textoRespuesta: 'x=12m',
                isCorrect: false,
            },
            {
                textoRespuesta: 'x=13m',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            ∏/4 ∫ -∏/4 (𝐬𝐞𝐜 𝒙 + 𝒕𝒈 𝒙)^𝟐𝒅x
        </div>,
        opciones: [
            {
                textoRespuesta: '1 + ∏/2',
                isCorrect: false,
            },
            {
                textoRespuesta: '1 - ∏/2',
                isCorrect: true,
            },
            {
                textoRespuesta: '1 - ∏',
                isCorrect: false,
            },
            {
                textoRespuesta: '1 + ∏',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Hallar el área bajo la curva aplicando el teorema fundamental del cálculo integral
            5∫2 (𝒙 − 𝟐)/[√(𝒙 − 𝟏)] 𝒅x
        </div>,
        opciones: [
            {
                textoRespuesta: '-4',
                isCorrect: false,
            },
            {
                textoRespuesta: '4',
                isCorrect: true,
            },
            {
                textoRespuesta: '3/4',
                isCorrect: false,
            },
            {
                textoRespuesta: '-3/4',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Integrar por sustitución trigonométrica: ∫ 𝑑𝑥/[𝑥 √(𝑥^2 + 4)]</div>,
        opciones: [
            {
                textoRespuesta: '1/2 Ln|(√(x^2) - 2)/x| + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/2 Ln|(√(x^2+4) - 2)/x| + c',
                isCorrect: true,
            },
            {
                textoRespuesta: '1/2 Ln|√(x^2+4)/x| + c',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/2 Ln|√(x^2+4) - 2| + c',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Hallar el área bajo la curva aplicando el teorema fundamental del cálculo integral: 3∫0 𝒕/(√𝒕^𝟐 + 𝟏𝟔) 𝒅x</div>,
        opciones: [
            {
                textoRespuesta: '3v^2',
                isCorrect: false,
            },
            {
                textoRespuesta: '2v^2',
                isCorrect: false,
            },
            {
                textoRespuesta: '1v^2',
                isCorrect: true,
            },
            {
                textoRespuesta: '0',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Lenguaje y pensamiento van</div>,
        opciones: [
            {
                textoRespuesta: 'Asociados',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Ligados a la dendrología',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Son valores',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Dispersos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El origen oral del lenguaje</div>,
        opciones: [
            {
                textoRespuesta: 'Favorece las relaciones entre la comunidad',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Es el primer agente de desarrollo psicológico.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'No utiliza el lenguaje verbal y los paralenguajes',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se debe a la comunidad',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuándo el Receptor cumple una función importante?</div>,
        opciones: [
            {
                textoRespuesta: 'Cuando descubre inferencias de la intención del emisor',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Cuando la comunicación es un esfuerzo de cooperación.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Ninguna de las anteriores',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Todas las anteriores',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>En la comunicación participan</div>,
        opciones: [
            {
                textoRespuesta: 'La intencionalidad',
                isCorrect: false,
            },
            {
                textoRespuesta: 'La competencia comunicativa de los interlocutores',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Ninguna de las anteriores',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Todas las anteriores',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>Lenguaje es</div>,
        opciones: [
            {
                textoRespuesta: 'Facultad humana para hablar',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Utiliza aparato fonador, neurona',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Una señal',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Una emisión',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Los mensajes verbales están compuestos por</div>,
        opciones: [
            {
                textoRespuesta: 'Enunciados numéricos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Enunciados y elementos combinados',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Palabras mixtas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Respuestas cortas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Enunciación es:</div>,
        opciones: [
            {
                textoRespuesta: 'La totalidad de la situación lingüística y extralingüística',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Los factores que no intervienen en su interpretación y producción',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Lo que se contesta',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Lo que se pregunta',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El lenguaje</div>,
        opciones: [
            {
                textoRespuesta: 'Nace con el ser humano',
                isCorrect: true,
            },
            {
                textoRespuesta: 'No es congénito y universal',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se fortalece',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se lee',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Las lenguas, entre sus características tienen</div>,
        opciones: [
            {
                textoRespuesta: 'Reflexividad y productividad',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Soberanía, territorio, población estados',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Provincias, ciudades, cantones, parroquias',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Ninguna de las anteriores',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En la arbitrariedad de la lengua no hay relación:</div>,
        opciones: [
            {
                textoRespuesta: 'Del poder del lenguaje',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Con la sociedad humana',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Directa entre los elementos de una lengua y la realidad a la que se refieren.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'De las normas del lenguaje',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La productividad del lenguaje hace que:</div>,
        opciones: [
            {
                textoRespuesta: 'La doble articulación crea infinitos mensajes con reducido número de elementos y hace que el lenguaje humano sea privilegiado',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Incrementen las voces',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Sean percibidos por los receptores',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se conviertan en fonemas.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>A partir de las funciones del lenguaje se tienen en cuenta los elementos:</div>,
        opciones: [
            {
                textoRespuesta: 'Fonación, chats, guturación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Fonética, emisión de mensajes',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Emisor, referente, receptor, código, canal, mensaje.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Distorsionador, lenguaje',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Un signo es</div>,
        opciones: [
            {
                textoRespuesta: 'Vínculo con el referente',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Fuente de emisión',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Aquello que está en lugar de otra cosa, y representa una realidad determinada por alguien que la interpreta',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Una intencionalidad',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Dentro de la intencionalidad de los signos encontramos a los:</div>,
        opciones: [
            {
                textoRespuesta: 'Signos distorsionadores',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Signos comunicativos y expresivos',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Signos guturales',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Signos fonéticos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El significante de un signo lingüístico es:</div>,
        opciones: [
            {
                textoRespuesta: 'Un código lingüístico',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Planificación de fonemas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'La imagen que tenemos en nuestra mente de una cadena de sonidos. Esa imagen permite que podamos pensar palabras sin pronunciarlas',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Una entidad de dos caras',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Los códigos no verbales estudian:</div>,
        opciones: [
            {
                textoRespuesta: 'El significado de las palabras.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Los fonemas primarios',
                isCorrect: false,
            },
            {
                textoRespuesta: ' Los elementos sonoros que acompañan a las emisiones lingüísticas y que constituyen señales ya que comunican información.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Los significados de un signo lingüístico',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En los códigos no verbales se incluyen:</div>,
        opciones: [
            {
                textoRespuesta: 'La intensidad y el volumen de la voz',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Los matices en la entonación y la duración ',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Ninguna de las anteriores',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Todas las anteriores',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>La semántica es</div>,
        opciones: [
            {
                textoRespuesta: 'La disciplina que estudia el significado de las palabras.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'La eficacia de la comunicación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'El significado de la lingüística',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Un mensaje visual.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En la comunicación oral, la eficacia es óptima si</div>,
        opciones: [
            {
                textoRespuesta: 'Comunican información',
                isCorrect: false,
            },
            {
                textoRespuesta: 'A cada significante le corresponde un significado y viceversa.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Incluye la intensidad de la voz',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Asociamos sonidos de voz',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En la comunicación oral</div>,
        opciones: [
            {
                textoRespuesta: 'Se desarrolla la demagogia',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se desarrolla el diálogo',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Se desarrolla la ideología',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se desarrolla la semántica',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Qué se puede hacer para evitar la destrucción de selvas tropicales y poblaciones afectadas a causa de
            la expansión de la palma aceitera?</div>,
        opciones: [
            {
                textoRespuesta: 'Se hace necesario evitar nuevas deforestaciones y conversiones de uso del suelo para el cultivo palma aceitera',
                isCorrect: true,
            },
            {
                textoRespuesta: 'El aceite de palma se encuentra entre los ingredientes de muchísimos productosalimentarios que consumimos diariamente.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'La protección de los derechos humanos de pueblos indígenas y comunidades',
                isCorrect: false,
            },
            {
                textoRespuesta: 'campesinas afectadas por plantaciones de monocultivos a gran escala y el respeto de sus tierras y territorios',
                isCorrect: false,
            },
            {
                textoRespuesta: 'No es una amenaza para el futuro, sino una de las causas más importantes ypreocupantes de destrucción de los bosques tropicales ya en la actualidad.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El cultivo de Passiflora edulis se ve afectado por enfermedades de importancia económica en el
            Ecuador, las cuales hace que los rendimientos bajen</div>,
        opciones: [
            {
                textoRespuesta: 'Antracnosis',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Roya',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Pudrición del pie o pudrición del cuello',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Anillo clorótico',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Entre una de las plagas de consideración por su importancia económica en los cultivos de cafeto la
            Leucoptera coffeella Guer y Men, KNS, muestra síntomas como:</div>,
        opciones: [
            {
                textoRespuesta: 'reducción de la capacidad fotosintética delas hojas y fuertes defoliaciones',
                isCorrect: true,
            },
            {
                textoRespuesta: 'raspa los tallitos en forma circular o deanillo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'succionar la savia de la cual sealimenta produciendo encrespamiento',
                isCorrect: false,
            },
            {
                textoRespuesta: 'ninguna de las anteriores',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>De los primeros registros de Moniliophthora perniciosa en Sudamérica, en que año fue atacado
            Ecuador por esta enfermedad:</div>,
        opciones: [
            {
                textoRespuesta: '1988',
                isCorrect: false,
            },
            {
                textoRespuesta: '1940',
                isCorrect: false,
            },
            {
                textoRespuesta: '1928',
                isCorrect: false,
            },
            {
                textoRespuesta: '1912',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>Como una práctica agronómica del banano, la propagación o siembra tradicional más utilizada por
            los agricultores es por medio de</div>,
        opciones: [
            {
                textoRespuesta: 'estolones',
                isCorrect: false,
            },
            {
                textoRespuesta: 'injertos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'colinos',
                isCorrect: true,
            },
            {
                textoRespuesta: 'acodos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Que es una empresa agropecuaria?</div>,
        opciones: [
            {
                textoRespuesta: 'Es una unidad de producción a la que se le asigna el objeto de optimizar su beneficio el cual en general es económico, pero también social',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Es una ciencia social, económica, y de carácter técnico que tiene como objetivo principal lograr el máximo beneficio posible para una empresa o ente en los fines',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es una organización o institución dedicada a actividades o persecusion de fines económicos o comerciales para satisfacer las necesidades de bienes o servicios de la sociedad ',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Definición de conflicto</div>,
        opciones: [
            {
                textoRespuesta: 'actividad o trabajo que se realiza para obtener un beneficio, especialmente el que consiste en realizar operaciones comerciales, comprando y vendiendo mercancías o servicios',
                isCorrect: false,
            },
            {
                textoRespuesta: 'En esta época se denominaba al individuo encargado de utilizar los factores de producción -el trabajo de los siervos, los materiales y los recursos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es el choque entre dos o más posturas diferente dentro de una perdona o entre varias personas o entre grupos estados y otras comunidades',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>¿Qué es la producción?</div>,
        opciones: [
            {
                textoRespuesta: 'Acción o trámite que, junto con otros, se lleva a cabo para conseguir o resolver una cosa',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es el proceso de creación de bienes y servicios que la población puede adquirir con el objetivo de consumirlo y satisfacer sus necesidades',
                isCorrect: true,
            },
            {
                textoRespuesta: 'es el acto de administrar, planificar, controlar y dirigir los diversos recursos con los que cuenta una persona, empresa, negocio u organización, con el fin de alcanzar una serie de objetivos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿qué es análisis FODA?</div>,
        opciones: [
            {
                textoRespuesta: 'la actividad económica que consiste en la transferencia e intercambio de bienes y servicios entre personas o entre otras entidades en la economía',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es una herramienta muy útil para ver los pasos y acciones futuras en una empresa',
                isCorrect: false,
            },
            {
                textoRespuesta: 'es una organización de personas y recursos que buscan la consecución de un beneficio económico con el desarrollo de una actividad en particular. Esta unidad productiva puede contar con una sola persona y debe buscar el lucro y alcanzar una serie de objetivos marcados en su formación',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>Concepto de las estrategias</div>,
        opciones: [
            {
                textoRespuesta: 'la determinación de los objetivos a largo plazo y la elección de las acciones y la asignación de los recursos necesarios para conseguirlos',
                isCorrect: true,
            },
            {
                textoRespuesta: 'es una organización de personas y recursos que buscan la consecución de un beneficio económico con el desarrollo de una actividad en particular. Esta unidad productiva puede contar con una sola persona y debe buscar el lucro y alcanzar una serie de objetivos marcados en su formación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'es aquella persona que, de forma individual o colectiva, fija los objetivos y toma las decisiones estratégicas acerca de las metas, los medios, la administración y el control de las empresas, y asume la responsabilidad tanto comercial como legal frente a terceros',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Que es gerenciar</div>,
        opciones: [
            {
                textoRespuesta: 'Cantidad de dinero que corresponde periódicamente a la realización de un trabajo o un servicio',
                isCorrect: false,
            },
            {
                textoRespuesta: 'tomar una idea unas intuiciones, unas iniciativas, unos sentimientos y convertirlos en propósitos, luego aplicarles una serie de recursos y de administrarla atreves de determinadas acciones organizacionales.',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Parte de una cuenta corriente en la que se escriben las cantidades de dinero que tiene que pagar una persona o un organismo.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Definición de costos</div>,
        opciones: [
            {
                textoRespuesta: 'abarca una amplia gama de bienes y servicios que pueden ser adquiridos a precios de mercado, bien sea por un consumidor específico o por el conjunto total de consumidores en un determinado lugar, a fin de satisfacer sus necesidades y deseos.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Corresponde a las sumas de erogaciones y recursos consumidos necesarios para la fabricación de un bien y un servicio desde el momento que se diseña hasta que el producto es vendido al cliente incluyendo el servicio posventa',
                isCorrect: true,
            },
            {
                textoRespuesta: 'como aquella propiedad dispuesta para ser enajenada a cambio de un precio. Cuando las condiciones de mercado vienen caracterizadas por el precio en conjunto de todos los pares de precio de mercado',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Cuantos tipos de costos hay y cuales son</div>,
        opciones: [
            {
                textoRespuesta: 'costos fijos: sueldos salario y renta /costos variables: varía dependiendo el volumen',
                isCorrect: true,
            },
            {
                textoRespuesta: 'es una representación mental que surge a partir del razonamiento o de la imaginación de una persona. Está considerada como el acto más básico del entendimiento, al contemplar la mera acción de conocer algo.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'hace referencia a lo conveniente de un contexto y a la confluencia de un espacio y un periodo temporal apropiada para obtener un provecho o cumplir un objetivo.',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Cuál es la función de una empresa</div>,
        opciones: [
            {
                textoRespuesta: 'es la base de diagnóstico de un plan de negocios, ya que sistematiza la información de la empresa y su entorno, la cual se utiliza para definir objetivos realistas y diseñar estrategias competitivas para alcanzarlos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Conjunto de los productos que da la tierra naturalmente o de los que se elaboran en la industria',
                isCorrect: false,
            },
            {
                textoRespuesta: 'funciones empresariales que están directamente ligadas a la producción de bienes y servicios',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>la planificación estratégica es una actividad de gestión…….. que se utiliza para establecer ……….
            Concentrar los …….. y los recursos, fortalecer las operaciones</div>,
        opciones: [
            {
                textoRespuesta: 'visual, control y respeto',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Organizar, crear y comprender',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Organizacional, prioridades y esfuerzos',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Riesgo, actividad y debilidad',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cómo hacer una planificación estratégica?</div>,
        opciones: [
            {
                textoRespuesta: 'labores, métodos y análisis',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Diagnosticó, identidad organizativa, metas e indicadores de éxito, plan de acción, seguimiento y análisis',
                isCorrect: true,
            },
            {
                textoRespuesta: 'conocimiento, análisis FODA, criterios básicos y gestión',
                isCorrect: false,
            },
            {
                textoRespuesta: 'ideas, marketing y plan',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Es el propósito fundamental de nuestra organización para alcanzar, y/o estar en consonancia, con la
            visión previamente definida por la organización</div>,
        opciones: [
            {
                textoRespuesta: 'Objetivo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'participación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Objetividad',
                isCorrect: false,
            },
            {
                textoRespuesta: 'misión',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>La administración es definida como el proceso de diseño y control de ambientes laborales en los cuales
            los recursos humanos alcancen con eficiencia sus metas seleccionadas</div>,
        opciones: [
            {
                textoRespuesta: 'administración de empresa',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Comentar',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Procesar',
                isCorrect: false,
            },
            {
                textoRespuesta: 'empresa agropecuaria',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Para poder mejorar la gestión se recomienda que además de todo el uso tecnológico, la preocupación
            por las ventas, la continua revisión hacia la competencia y el apoyo del gobierno, se inculque en todo
            empresario y en toda persona que desee convertirse en empresario los siguientes puntos que,
            ayudaran a crecer no solo como empresario, si no como ser humano</div>,
        opciones: [
            {
                textoRespuesta: 'Demanda',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Oferta',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Ideas para mejorar la gestión',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Cantidad',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Planificación se define como la selección de actos……….. que parecen ser más apropiados para
            producir los resultados deseados</div>,
        opciones: [
            {
                textoRespuesta: 'mercado',
                isCorrect: false,
            },
            {
                textoRespuesta: 'sustentable',
                isCorrect: false,
            },
            {
                textoRespuesta: 'fijo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'futuros',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>¿Qué es la planificación estratégica?</div>,
        opciones: [
            {
                textoRespuesta: 'Es una actividad de gestión organizacional que se utiliza para establecer prioridades, concentrar los esfuerzos y los recursos, fortalecer las operaciones, garantizar que los empleados y otras partes interesadas estén trstrategic-planning-for-your-businessa bajando hacia objetivos comunes',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es un esfuerzo disciplinado que produce decisiones fundamentales y acciones que dan forma y guían la misión de una organización, a quien sirve, que hace, y por qué lo hace, con un enfoque en el futuro.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es realizar suposiciones y formular actividades necesarias para poder realizar ciertos objetivos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'A y B son correctas',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            Seleccione Verdadero (v) o Falso (f)
            ¿El Plan estratégico es un documento utilizado para comunicar a la organización cuáles son sus objetivos?
        </div>,
        opciones: [
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Ninguna es correcta',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La Planificación propicia el desarrollo de la empresa al establecer _________ de utilización racional
            de los recursos y promueve la eficiencia al eliminar la improvisación</div>,
        opciones: [
            {
                textoRespuesta: 'Planificación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Métodos',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Dirección',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Reglas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Dentro del análisis DOFA, que son las fortalezas?</div>,
        opciones: [
            {
                textoRespuesta: 'Son las limitaciones u obstáculos que nos impiden alcanzar los objetivos trazados',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Son los hechos del entorno que podrían impedir alcanzar el objetivo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Son aquellos factores que están ocurriendo en el entorno y que nos pueden ayudar a alcanzar las metas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Son aquellos aspectos que brindan una diferenciación positiva con respecto a la competencia. Es lo que hace única y mejor a la organización',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            Seleccione Verdadero o Falso si es el caso.
            Uno de los beneficios de la planeación estratégica es que ayuda a los líderes a enfrentar de manera
            creativa e inteligente los retos que representa la incertidumbre del cambio
        </div>,
        opciones: [
            {
                textoRespuesta: 'Falso',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Verdadero',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Ninguna es correcta',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Un indicador de desempeño es la _________ cuantitativa construida a partir de una serie de variables
            objetivas y medibles que proporcionan un medio sencillo y fiable para medir _______, reflejar los
            cambios vinculados con las acciones del programa y monitorear resultados
        </div>,
        opciones: [
            {
                textoRespuesta: 'Expresión – logros',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Crecimiento – desarrollo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Fructificación – análisis',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Forma – señales',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Las principales características de un indicador estratégico son:
        </div>,
        opciones: [
            {
                textoRespuesta: 'Miden el grado de cumplimiento de los objetivos de las políticas de las empresas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Contribuyen a corregir o fortalecer las estrategias y orientación de los recursos.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'A y B son correctas',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Impactan de manera indirecta en las estrategias y áreas de enfoque de las organizaciones',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuáles son las ventajas de medir el desempeño?</div>,
        opciones: [
            {
                textoRespuesta: 'Empodera a los colaboradores y los vuelve autónomos de su propio desempeño',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Identifica las problemáticas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Incentiva la participación y mejoran el compromiso',
                isCorrect: false,
            },
            {
                textoRespuesta: 'A y C son correctas',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>¿Qué es la Misión dentro de las herramientas de la planeación FODA?</div>,
        opciones: [
            {
                textoRespuesta: 'Es el escenario futuro que deseamos, o creemos que se va a producir, en el entorno en el que se mueve nuestra organización',
                isCorrect: false,
            },
            {
                textoRespuesta: 'es el conjunto de resultados que queremos alcanzar en la organización dentro del contexto de la misión organizativa previamente definida',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es un conjunto de operación a desarrollar e implementar por la organización',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es el propósito fundamental de nuestra organización para alcanzar, y/o estar en consonancia, con la visión previamente definida por la organización.',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>La planificación estratégica también ayuda a la empresa a descubrir los caminos más adecuados para
            __________________.</div>,
        opciones: [
            {
                textoRespuesta: 'Cumplir los deseos de los demás',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Alcanzar los objetivos',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Obtener beneficios',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Tener mejor enfoque',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Cuáles fueron las principales herramientas que la revolución verde utilizó para el logro de la alta
            productividad</div>,
        opciones: [
            {
                textoRespuesta: 'Fertilizantes, químicos, plaguicidas, híbridos OGM',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Biopreparado, abonos orgánicos, controladores biológicos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Maquinaria, sistemas de riego tecnificado ',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuáles son los modos de actuación en agricultura para aplicar el enfoque agroecológico?</div>,
        opciones: [
            {
                textoRespuesta: 'Adoptar prácticas las cuales contribuyan a lograr una mayor biodiversidad de los agroecosistemas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Implementar prácticas de conservación de suelo y agua',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Disminuir los problemas fitosanitarios.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Procurar un mayor valor agregado de los productos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Adoptar un enfoque sistémico',
                isCorrect: false,
            },
            {
                textoRespuesta: 'todas las anteriores',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>Busca una producción grande en poco espacio. Conlleva un mayor desgaste del sitio. Propia de los
            países industrializados</div>,
        opciones: [
            {
                textoRespuesta: 'Agricultura de precisión',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Agricultura convencional',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Agricultura extensiva',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Agricultura intensiva',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>En función de los condicionantes físicos que presenta un espacio natural el ser humano elige diferentes
            maneras de cultivar para obtener la máxima productividad posible. Estas maneras de cultivar se
            conocen como:</div>,
        opciones: [
            {
                textoRespuesta: 'Policultivos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Sistema de cultivos',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Cultivos agrícolas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>existen varias formas de controlar la erosión causada por el agua, la implementación de cada una de
            estas medidas puede favorecer no solo al terreno sembrado sino a la finca y otros recursos naturales.
            Los métodos más empleados son</div>,
        opciones: [
            {
                textoRespuesta: 'Cultivos en contorno o faja',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Construcción de canales de drenaje y desviación de corrientes de aguas a zonas protegidas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Aumentar la cubierta vegetal ',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Usar residuos vegetales para cubrir el suelo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Todas las anteriores',
                isCorrect: true
            }
        ]
    },
    {
        titulo: <div>La rotación de cultivos es la plantación sucesiva de diferentes cultivos en el mismo</div>,
        opciones: [
            {
                textoRespuesta: 'Terreno',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Espacio',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Hace referencia a la asociación establecida entre hongos y raíces, considerada como una simbiosis
            mutualista multifuncional, cuyos efectos no se restringen solo a la nutrición de los cultivos, sino que
            incluyen también beneficios en el suelo y conservación de diversidad biológica.
        </div>,
        opciones: [
            {
                textoRespuesta: 'Micorrizas',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Manejo integrado de plagas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Enmiendas orgánicas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            En los estudios y evaluaciones de Ecosistemas se utilizan indicadores ecológicos y muestreos adecuados
            con modelos matemáticos y estadísticos apropiados, que permiten conocer el estado y situación de la
            Comunidad biótica. Los indicadores más representativos deben caracterizarse por
        </div>,
        opciones: [
            {
                textoRespuesta: 'Seleccionar especies de poblaciones con valencia ecológica amplia ( tipo “euri” ) ( Ej: euritérmicas, eurihídricas, etc.) y de ciclos vitales cortos ( tipo “ r “ )',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Utilizar especies pequeñas de alta mortalidad y generalistas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Seleccionar especies de poblaciones con valencia ecológica angosta ó estrecha ( tipo “esteno” ) ( Ej: estenotérmicas, etc.), y de ciclos vitales largos ó extensos. ( tipo “ k “ )',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Utilizar especies de poblaciones sin considerar su tipo pero con pruebas y modelos estadísticos apropiados',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Los cultivos comerciales intensivos de propósito alimentario presentan un funcionamiento
            ecosistémico que denota aspectos como:
        </div>,
        opciones: [
            {
                textoRespuesta: 'Baja eficiencia en el uso de la energía y una baja biodiversidad',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Alta disipación de la cadena de Energía, estabilidad y poca diversidad',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Alta disipación de la cadena de Energía, estabilidad y poca diversidad',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Alta competencia, no son perdurables, inestables y de estructura simple',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            Entre las características que diferencian a los Ecosistemas Agrícolas de los ecosistemas naturales se
            destacan
        </div>,
        opciones: [
            {
                textoRespuesta: 'Productividad neta alta, cadenas tróficas complejas y ciclos minerales cerrados',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Productividad neta baja, cadenas tróficas simples y ciclos minerales abiertos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Productividad neta baja, cadenas tróficas simples y ciclos minerales abiertos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Alta entropía, ciclos minerales abiertos, cadenas tróficas simples, fenología sincronizada y baja resiliencia',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            Las certificaciones ambientales, se constituyen, para el consumidor, en sello de garantía sobre los
            atributos ambientales que declaran los productos y para el empresario, un elemento diferenciador de
            los productos convencionales
        </div>,
        opciones: [
            {
                textoRespuesta: 'Se fundamenta en los Principios de la Agricultura Orgánica',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Se basa en las Buenas prácticas Agrícolas',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Certifica y comercializa productos y procesos de producción ',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Certifica las unidades de producción (fincas) de determinados cultivos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Los factores determinantes de un Agroecosistema que influyen en el tipo de agricultura que debe
            desarrollarse en una región corresponden a
        </div>,
        opciones: [
            {
                textoRespuesta: 'Factores biológicos (malezas, plagas y enfermedades), Físicos (Climáticos) y las características del ',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Factores físicos, biológicos, condiciones del suelo y modelos de cultivos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Factores biológicos, físicos y socioeconómicos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Factores físicos, biológicos, del suelo, sistemas de cultivos, socioeconómicos y culturales',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            En este contexto las condiciones que podrían garantizar el éxito de un programa de Cultivos “
            ecológicos “ con certificación para exportación son
        </div>,
        opciones: [
            {
                textoRespuesta: 'Emplear extractos vegetales para el control de plagas y enfermedades',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Aplicar un plan de nutrición vegetal integrado',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Adecuar distancias de siembra para reducir los riesgos fitosanitarios y aplicar abonos orgánicos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Estructurar un programa de manejo integrado de plagas y enfermedades',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            La Agricultura Orgánica, biológica, ecológica o biodinámica es la respuesta a la necesidad de los
            consumidores de una alimentación sana de máxima calidad y que pone de presente la importancia de
            armonizar la actividad económica rentable con el cuidado del medio ambiente, la preservación de los
            recursos naturales y el desarrollo sostenible
        </div>,
        opciones: [
            {
                textoRespuesta: 'Solo es aplicable para productos agrícolas de carácter alimenticio humano',
                isCorrect: false,
            },
            {
                textoRespuesta: 'La preservación de la fertilidad de suelos y cultivos en forma sostenible',
                isCorrect: false,
            },
            {
                textoRespuesta: 'La aplicación de Productos de origen natural y agroquímicos de baja toxicidad',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Altos beneficios económicos, ecológicos y sociales',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>
            La producción alternativa y Agroecológica involucra sistemas como el Cultivo de Cobertura que se
            define como “ una cobertura vegetal viva que cubre el suelo y que es temporal o permanente, el cual
            está en asociación con otras plantas ( intercalado, en relevo o en rotación)
            Las características de la tecnología de este sistema se reflejan en ventajas como:
        </div>,
        opciones: [
            {
                textoRespuesta: 'La selección y manejo cuidadoso que previene la competencia interespecífica',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Las técnicas agronómicas simples, el bajo costo a invertir en herbicidas y abonos',
                isCorrect: false,
            },
            {
                textoRespuesta: 'EL impulso al empleo por el requerimiento de mano de obra para labores como el Establecimiento y cosecha',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Las características eurióicas y la alta competencia contra malezas agresivas',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>¿El suelo es?</div>,
        opciones: [
            {
                textoRespuesta: 'Es la capa inferior improductiva',
                isCorrect: false,
            },
            {
                textoRespuesta: 'El suelo es la capa superior de tierra compuesta de sólidos, líquidos y gases',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Se trata de la roca madre',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Es la base donde se asientan los océanos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Debido a qué, los suelos arenosos, no son aptos para la agricultura</div>,
        opciones: [
            {
                textoRespuesta: 'Debido a su coloración',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Debido al alto contenido de humedad',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Debido a que no retienen agua y poseen escasa materia orgánica',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Debido a que son suelos rocosos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Según su funcionalidad los suelos son</div>,
        opciones: [
            {
                textoRespuesta: 'Arenosos, calizos, litosoles, humíferos, arcillosos, cambisoles.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Arenosos, calizos, litosoles, humíferos, arcillosos, cambisoles.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Arenoso, calizo, humífero, arcilloso, pedregoso, suelo mixto',
                isCorrect: true,
            },
            {
                textoRespuesta: 'grano grueso, calizo, grano fino, suelos altamente orgánicos, arcillosos, cambisoles',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La densidad real se mide con cuál de las fórmulas siguientes</div>,
        opciones: [
            {
                textoRespuesta: 'dr= Ps/Vt',
                isCorrect: false,
            },
            {
                textoRespuesta: 'dr= (dr-da/da)100',
                isCorrect: false,
            },
            {
                textoRespuesta: 'dr= Ps/Vs',
                isCorrect: true,
            },
            {
                textoRespuesta: 'dr= 2g(d-d`/9Cv)r^2',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            ¿La pérdida imperceptible de un milímetro en el espesor de suelos cultivables sobre la superficie de
            una hectárea equivaldría a eliminar?
        </div>,
        opciones: [
            {
                textoRespuesta: '100% de su superficie',
                isCorrect: false,
            },
            {
                textoRespuesta: ' 500 m^3',
                isCorrect: false,
            },
            {
                textoRespuesta: '1/2 hectárea.',
                isCorrect: false,
            },
            {
                textoRespuesta: '11 a 16 toneladas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Cuanto es el porcentaje de agua que contiene el tomate</div>,
        opciones: [
            {
                textoRespuesta: '7 – 10 %',
                isCorrect: false,
            },
            {
                textoRespuesta: '95%',
                isCorrect: true,
            },
            {
                textoRespuesta: '150%',
                isCorrect: false,
            },
            {
                textoRespuesta: '100%',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>a partir de una muestra de suelo en donde existe agua, se puede determinar su contenido mediante 3
            formas, escoja cuales son</div>,
        opciones: [
            {
                textoRespuesta: 'humedad gravimétrica, humedad volumétrica, unidad lineal o lámina',
                isCorrect: true,
            },
            {
                textoRespuesta: 'por capilaridad, por densidad, por arcilla',
                isCorrect: false,
            },
            {
                textoRespuesta: 'agua de mar, retenida, o lodazal',
                isCorrect: false,
            },
            {
                textoRespuesta: 'por agua en movimiento, por capilaridad, por suspensión de partículas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El agua se conserva mediante la acción efectiva que debe realizar el ser humano. De las 4 opciones, 1 es
            incorrecta, ¿Cuál es esa opción?</div>,
        opciones: [
            {
                textoRespuesta: 'Reforestación',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Manejo de cuencas hidrográficas.',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Por erosión del suelo',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Dragando los cauces hídricos',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            El agua que se deposita en los poros grandes y luego por gravedad se filtra fácilmente, toma el nombre de:
        </div>,
        opciones: [
            {
                textoRespuesta: 'Agua sobrante',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Agua disponible',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Agua gravitacional',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Agua hidroscópica',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>¿Cuál es la importancia del agua en la agricultura?
        </div>,
        opciones: [
            {
                textoRespuesta: 'El agua sirve para humedecer al suelo y permitir que las plantas utilicen los demás factores para la producción',
                isCorrect: true,
            },
            {
                textoRespuesta: 'El agua sirve para saturar al suelo',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Sirve para hidratar a los animales',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Sirve para alcanzar el punto de marchitez de las plantas',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En el cultivo de soya, el número de flores en racimo puede estar entre___. El período de floración es
            ____: desde la aparición de la primera hasta la última flor es alrededor de ___ días</div>,
        opciones: [
            {
                textoRespuesta: '10 a 20; variable; 20',
                isCorrect: false,
            },
            {
                textoRespuesta: '5 a 10; variable; 15',
                isCorrect: true,
            },
            {
                textoRespuesta: '5 a 10; constante; 20',
                isCorrect: false,
            },
            {
                textoRespuesta: '10 a 20; constante; 15',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Los siguientes son estadíos de la planta de soya:
            <ul>
                <li>a) V2</li>
                <li>b) R5</li>
                <li>c) VE</li>
            </ul>
            <ul>
                <li>
                    1) Comienzo de la formación de la semilla.
                    Semilla con 3 mm de largo en la vaina de uno
                    de los cuatro nudos superiores del tallo
                    principal.
                </li>
                <li>
                    2) Emergencia de la plántula con cotiledones
                    sobre superficie del suelo
                </li>
                <li>
                    3) Primera hoja trifoliada emergiendo en el nudo
                    superior al unifoliado y completamente
                    extendida
                </li>
            </ul>
        </div>,
        opciones: [
            {
                textoRespuesta: '1a; 2b; 3c',
                isCorrect: false,
            },
            {
                textoRespuesta: '2b; 1c; 3a',
                isCorrect: false,
            },
            {
                textoRespuesta: '3c; 1a; 2b',
                isCorrect: false,
            },
            {
                textoRespuesta: '1b; 2c; 3ª',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>El herbicida selectivo al cultivo de arroz es:</div>,
        opciones: [
            {
                textoRespuesta: 'Pendimentalin',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Atrazina',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Alaclor',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Piriclor',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>Los componentes principales del grano de soya son la proteína y el aceite. La mayor parte de los
            cultivares mejorados contienen un promedio de ______ de proteína y _______ de aceite</div>,
        opciones: [
            {
                textoRespuesta: '20 a 22%; 40 a 42%',
                isCorrect: false,
            },
            {
                textoRespuesta: '10 a 20%; 30 a 40%',
                isCorrect: false,
            },
            {
                textoRespuesta: '40 a 42%; 20 a 22%',
                isCorrect: true,
            },
            {
                textoRespuesta: '30 a 40%; 20 a 30%',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Cuando no se ha presentado una buena nodulación y se dificulta la aplicación de fertilizante
            nitrogenado al suelo, se puede aplicar urea al follaje de ______de urea en _______) durante el
            desarrollo del fruto con intervalo de _______, por 2 o 3 ocasiones. </div>,
        opciones: [
            {
                textoRespuesta: '7 – 10 kg; 100 litros; 10 – 17 días',
                isCorrect: false,
            },
            {
                textoRespuesta: '2 – 4 kg ; 100 litros; 7 a 10 días',
                isCorrect: true,
            },
            {
                textoRespuesta: '10 – 20 kg; 200 litros; 10 – 17 días',
                isCorrect: false,
            },
            {
                textoRespuesta: '2 – 4 g; 200 litros; 7 a 10 días',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La principal enfermedad que afecta al cultivo de maní es:</div>,
        opciones: [
            {
                textoRespuesta: 'Pricularia',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Alternaria',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Cercosporiosis',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Phytoptora',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La cantidad de semilla para siembra directa de una hectárea del cultivo de arroz variedad INIAP 17
            en secano es aproximadamente</div>,
        opciones: [
            {
                textoRespuesta: '30 kg',
                isCorrect: false,
            },
            {
                textoRespuesta: '150 kg',
                isCorrect: false,
            },
            {
                textoRespuesta: '80 kg',
                isCorrect: false,
            },
            {
                textoRespuesta: '15 kg',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            Los grupos comerciales de maní son:
            <table style={{ borderCollapse: 'collapse', border: '1px solid', margin: '5px', width: '100%' }}>
                <tbody>
                    <tr>
                        <th>1. Virginia</th>
                        <th>a. Pepón</th>
                    </tr>
                    <tr>
                        <th>2. Spanish</th>
                        <th>b. Caramelo</th>
                    </tr>
                    <tr>
                        <th>3. Runner</th>
                        <th>c. INIAP 380</th>
                    </tr>
                    <tr>
                        <th>4. Valencia</th>
                        <th>d. Rosita blanco</th>
                    </tr>
                </tbody>
            </table>
        </div>,
        opciones: [
            {
                textoRespuesta: '1d; 2b; 3a; 4c',
                isCorrect: false,
            },
            {
                textoRespuesta: '1a; 2d; 3b; 4c',
                isCorrect: true,
            },
            {
                textoRespuesta: '1c; 2d; 3a; 4b',
                isCorrect: false,
            },
            {
                textoRespuesta: ' 1b; 2a; 3c; 4d',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>
            En condiciones de campo se ha observado que el desarrollo de los nódulos comienza a observarse a
            partir del _____ día de la siembra y dos a tres semanas se puede observar la fijación del nitrógeno
            atmosférico, la nodulación puede continuar hasta que el nódulo tenga _______ días de edad, cuando
            comienza su senescencia.
        </div>,
        opciones: [
            {
                textoRespuesta: 'sexto; 20 - 30',
                isCorrect: false,
            },
            {
                textoRespuesta: 'segundo; 35 - 45',
                isCorrect: false,
            },
            {
                textoRespuesta: 'sexto; 45 - 55',
                isCorrect: true,
            },
            {
                textoRespuesta: 'segundo; 25 – 30',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En caso de aplicar Semevin y va a utilizar Propanil, este herbicida debe aplicarse _______días después
            de la siembra, si se aplica antes causa toxicidad al cultivo</div>,
        opciones: [
            {
                textoRespuesta: '15',
                isCorrect: true,
            },
            {
                textoRespuesta: '5',
                isCorrect: false,
            },
            {
                textoRespuesta: '25',
                isCorrect: false,
            },
            {
                textoRespuesta: '30',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La semilla de maíz puede protegerse contra el ataque de hongos y otros patógenos empleando</div>,
        opciones: [
            {
                textoRespuesta: 'Semevin; 250 cc/15 kg',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Thiodicarb 50 gr/qq',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Clorpirifos 20 cc/20 kg',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Carboxin; 50 gr/qq',
                isCorrect: true,
            },
        ]
    },
    {
        titulo: <div>La cantidad de semilla necesaria para sembrar 1 hectárea de arroz variedad INIAP 17 en secano es
            ______ y para trasplante</div>,
        opciones: [
            {
                textoRespuesta: '120 kg semilla ha^-1; 30 a 50 kg semilla ha^-1',
                isCorrect: false,
            },
            {
                textoRespuesta: '50 kg semilla ha^-1; 120 kg semilla ha^-1',
                isCorrect: false,
            },
            {
                textoRespuesta: '80 kg semilla ha^-1; 30 a 50 kg semilla ha^-1',
                isCorrect: false,
            },
            {
                textoRespuesta: '30 a 50 kg semilla ha^-1; 80 kg semilla ha^-1',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>La siembra del fréjol se hace a ______ entre surcos y _______ entre plantas, colocando dos semillas por
            sitio y obteniendo una población de _______ plantas por hectárea</div>,
        opciones: [
            {
                textoRespuesta: '60 cm; 30 cm; 70 000',
                isCorrect: false,
            },
            {
                textoRespuesta: '50 cm; 20 cm; 200 000',
                isCorrect: true,
            },
            {
                textoRespuesta: '30 cm; 30 cm; 100 000',
                isCorrect: false,
            },
            {
                textoRespuesta: '20 cm; 20 cm; 500 000',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>Antes de la siembra del frejol, se recomienda desinfectar la semilla contra hongos e insectos del suelo
            con ___ de Vitavax y ____ de Orthene 75 PS en _____ de agua por cada kilo de semilla</div>,
        opciones: [
            {
                textoRespuesta: '5 g; 10 g; 0.5 L',
                isCorrect: false,
            },
            {
                textoRespuesta: '3 g; 4 g; 0.5 L',
                isCorrect: true,
            },
            {
                textoRespuesta: '25 g; 30 g; 1.0 L',
                isCorrect: false,
            },
            {
                textoRespuesta: '1 g; 2 g; 1 L',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En terrenos de loma se recomienda las siguientes distancias y densidades de siembra para variedades
            de maíz comercializadas por INIAP en zonas secas o semi secas</div>,
        opciones: [
            {
                textoRespuesta: '80 cm entre hileras y 20 cm entre sitios, una semilla',
                isCorrect: false,
            },
            {
                textoRespuesta: '100 cm entre hileras y 100 cm entre sitios, tres semillas',
                isCorrect: false,
            },
            {
                textoRespuesta: '100 cm entre hileras y 50 cm entre sitios, dos semillas',
                isCorrect: true,
            },
            {
                textoRespuesta: '80 cm entre hileras y 80 cm entre sitios, una semilla',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>En las raíces de la soya se ha identificado una bacteria que se asocia para captar el nitrógeno
            atmosférico, la misma que se puede conseguir en un producto comercial para inocularse. Este producto
            comercial es</div>,
        opciones: [
            {
                textoRespuesta: 'Nitragin',
                isCorrect: true,
            },
            {
                textoRespuesta: 'Nitrofoska',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Nutripack',
                isCorrect: false,
            },
            {
                textoRespuesta: 'Nitrato de Amonio',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div> Si en la etapa de llenado del grano en el cultivo de arroz, encontramos poblaciones superiores a _______
            chinchorro de la espiga (Oebalus ornatus) por metro cuadrado, se debe aplicar _________ en dosis de
            _____ del producto en 200 L de agua.</div>,
        opciones: [
            {
                textoRespuesta: '4; Confidor 550 SC; 1000 cc',
                isCorrect: false,
            },
            {
                textoRespuesta: '20; Clorpirifos; 200 cc',
                isCorrect: false,
            },
            {
                textoRespuesta: '4; Diazinon; 700 cc',
                isCorrect: true,
            },
            {
                textoRespuesta: '8 a 10; Thiodicarb; 150 cc',
                isCorrect: false,
            },
        ]
    },
    {
        titulo: <div>El umbral económico del barrenador del tallo Diatrea saccharallis en el cultivo de arroz es</div>,
        opciones: [
            {
                textoRespuesta: '15% corazones muertos; 10% tallos afectados',
                isCorrect: true,
            },
            {
                textoRespuesta: '20% corazones muertos; 20% tallos afectados',
                isCorrect: false,
            },
            {
                textoRespuesta: '10% corazones muertos; 20% tallos afectados',
                isCorrect: false,
            },
            {
                textoRespuesta: '10% corazones muertos; 15% tallos afectados',
                isCorrect: false,
            },
        ]
    },
];

export default preguntas;