const preguntas = [

    {
      titulo: "Los circuitos eléctricos tienen diversas aplicaciones en diferentes áreas de la ingeniería.\n¿Cuál de las siguientes opciones NO corresponde a una aplicación de los circuitos\neléctricos?",
      opciones: [
        { textoRespuesta: "- Sistemas de comunicación, como satélites y radares.", isCorrect: false },
        { textoRespuesta: "- Sistemas de computación con redes de circuitos integrados.", isCorrect: false },
        { textoRespuesta: "- Sistemas de transmisión de datos sin componentes eléctricos.", isCorrect: true },
        { textoRespuesta: "- Sistemas de potencia para la generación y distribución de electricidad.", isCorrect: false },
      ]
    },
    {
      titulo: "La corriente eléctrica puede clasificarse en diferentes tipos según su dirección de flujo.\n¿Cuál de las siguientes afirmaciones es correcta respecto a la corriente eléctrica?",
      opciones: [
        { textoRespuesta: "- La corriente continua cambia de dirección periódicamente.", isCorrect: false },
        { textoRespuesta: "- La corriente alterna fluye siempre en un solo sentido.", isCorrect: false },
        { textoRespuesta: "- La corriente continua mantiene su dirección constante.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las respuestas mencionadas.", isCorrect: false },
      ]
    },
    {
      titulo: "El voltaje en un circuito eléctrico se define como:",
      opciones: [
        { textoRespuesta: "- La cantidad de carga eléctrica que fluye por un conductor en un tiempo determinado.", isCorrect: false },
        { textoRespuesta: "- La diferencia de energía potencial eléctrica entre dos puntos de un circuito.", isCorrect: true },
        { textoRespuesta: "- La tasa de cambio de la energía eléctrica con respecto al tiempo.", isCorrect: false },
        { textoRespuesta: "- La resistencia que presenta un material al paso de la corriente eléctrica.", isCorrect: false },
      ]
    },
    {
      titulo: "La potencia eléctrica en un circuito se define como:",
      opciones: [
        { textoRespuesta: "- La cantidad de carga que fluye por un conductor en un tiempo determinado.", isCorrect: false },
        { textoRespuesta: "- La diferencia de energía potencial eléctrica entre dos puntos de un circuito.", isCorrect: false },
        { textoRespuesta: "- La tasa de cambio de la energía eléctrica con respecto al tiempo.", isCorrect: true },
        { textoRespuesta: "- La oposición al flujo de corriente en un material conductor.", isCorrect: false },
      ]
    },
    {
      titulo: "Según la convención pasiva en el análisis de circuitos eléctricos, ¿cuál de las siguientes\nafirmaciones es correcta?",
      opciones: [
        { textoRespuesta: "- Las fuentes que absorben energía tienen un valor positivo de potencia.", isCorrect: false },
        { textoRespuesta: "- Las fuentes que entregan energía tienen un valor negativo de potencia.", isCorrect: false },
        { textoRespuesta: "- Un elemento pasivo (ej. resistor, condensador e inductor) que absorbe potencia tiene un valor positivo de potencia.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las respuestas mencionadas.", isCorrect: false },
      ]
    },
    {
      titulo: "La figura muestra un circuito eléctrico. Determine la afirmación correcta, según la\nconvención pasiva:",
      opciones: [
        { textoRespuesta: "- El elemento 1 entrega potencia.", isCorrect: false },
        { textoRespuesta: "- La fuente de 4V entrega potencia.", isCorrect: true },
        { textoRespuesta: "- Los elementos 1, 2 y 3 entregan potencia.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las respuestas mencionadas.", isCorrect: false },
      ]
    },
    {
      titulo: "La energía eléctrica (W) absorbida o suministrada por un elemento en un intervalo de\ntiempo se calcula mediante la siguiente expresión:",
      opciones: [
        { textoRespuesta: "- 𝑊= 𝑉. 𝐼.", isCorrect: false },
        { textoRespuesta: "- 𝑊= 𝑃. 𝑡.", isCorrect: true },
        { textoRespuesta: "- 𝑊= 𝑑𝑄 𝑑𝑡.", isCorrect: false },
        { textoRespuesta: "- 𝑊= 𝐼2. 𝑅.", isCorrect: false },
      ]
    },
    {
      titulo: "Los elementos de un circuito eléctrico pueden clasificarse como activos o pasivos. ¿Cuál\nde las siguientes afirmaciones es correcta respecto a los elementos pasivos?",
      opciones: [
        { textoRespuesta: "- Los elementos pasivos pueden generar energía eléctrica.", isCorrect: false },
        { textoRespuesta: "- Un inductor y un condensador son ejemplos de elementos pasivos.", isCorrect: true },
        { textoRespuesta: "- Un amplificador operacional es un elemento pasivo porque necesita energía para operar.", isCorrect: false },
        { textoRespuesta: "- Los elementos pasivos solo disipan energía y no pueden almacenarla.", isCorrect: false },
      ]
    },
    {
      titulo: "En un circuito eléctrico, un divisor de voltaje se utiliza para:",
      opciones: [
        { textoRespuesta: "- Distribuir el voltaje de entrada entre dos o más resistencias en serie.", isCorrect: true },
        { textoRespuesta: "- Reducir la corriente en un circuito sin afectar el voltaje de entrada.", isCorrect: false },
        { textoRespuesta: "- Aumentar la potencia total del circuito sin modificar el voltaje de entrada.", isCorrect: false },
        { textoRespuesta: "- Garantizar que la corriente en cada resistencia sea la misma, sin importar sus valores.", isCorrect: false },
      ]
    },
    {
      titulo: "La Ley de Ohm establece la relación entre:",
      opciones: [
        { textoRespuesta: "- Voltaje, corriente y resistencia en un circuito eléctrico.", isCorrect: true },
        { textoRespuesta: "- Potencia, voltaje y energía en un circuito eléctrico.", isCorrect: false },
        { textoRespuesta: "- Resistencia, capacitancia e inductancia en un circuito de corriente alterna.", isCorrect: false },
        { textoRespuesta: "- Frecuencia, voltaje y corriente en un circuito de señal variable.", isCorrect: false },
      ]
    },
    {
      titulo: "Cuando varias resistencias están conectadas en paralelo, la resistencia equivalente (𝑅𝑒𝑞)\nse calcula mediante la siguiente expresión:",
      opciones: [
        { textoRespuesta: "- 𝑅𝑒𝑞= 𝑅1 + 𝑅2 + 𝑅3+. . . +𝑅𝑁.", isCorrect: false },
        { textoRespuesta: "- 𝑅𝑒𝑞= 𝑅1.𝑅2 𝑅1+𝑅2 (para dos resistencias en paralelo).", isCorrect: false },
        { textoRespuesta: "- 𝑹𝒆𝒒= 𝑽 𝑰 , sin importar la configuración del circuito.", isCorrect: false },
        { textoRespuesta: "- 𝑹𝒆𝒒= 𝟏 𝟏 𝑹𝟏+ 𝟏 𝑹𝟐+ 𝟏 𝑹𝟑+...+ 𝟏 𝑹𝑵", isCorrect: true },
      ]
    },
    {
      titulo: "La potencia disipada en una resistencia puede calcularse utilizando las siguientes\nexpresiones matemáticas. ¿Cuál de las siguientes opciones NO es una forma válida de\ncalcular la potencia en una resistencia?",
      opciones: [
        { textoRespuesta: "- 𝑷 =  𝑽. 𝑰", isCorrect: false },
        { textoRespuesta: "-.𝑃= 𝑉2 𝑅", isCorrect: false },
        { textoRespuesta: "- 𝑷= 𝑰𝟐. 𝑹.", isCorrect: false },
        { textoRespuesta: "- 𝑃= 𝑅2 𝑉", isCorrect: true },
      ]
    },
    {
      titulo: "Una fuente dependiente de voltaje es aquella cuya magnitud:",
      opciones: [
        { textoRespuesta: "- Se mantiene constante sin importar las condiciones del circuito.", isCorrect: false },
        { textoRespuesta: "- Depende de un voltaje o corriente en otro punto del circuito.", isCorrect: true },
        { textoRespuesta: "- Se ajusta automáticamente para mantener una corriente fija.", isCorrect: false },
        { textoRespuesta: "- Solo se encuentra en circuitos de corriente alterna.", isCorrect: false },
      ]
    },
    {
      titulo: "Según la Ley de Corrientes de Kirchhoff (LCK), la suma algebraica de las corrientes en un\nnodo es:",
      opciones: [
        { textoRespuesta: "- Igual a la resistencia total del circuito.", isCorrect: false },
        { textoRespuesta: "- Proporcional a la impedancia del circuito.", isCorrect: false },
        { textoRespuesta: "- Igual a cero en cualquier instante de tiempo.", isCorrect: true },
        { textoRespuesta: "- Dependiente del número de elementos pasivos en el circuito.", isCorrect: false },
      ]
    },
    {
      titulo: "El Teorema de Tellegen en circuitos eléctricos establece que:",
      opciones: [
        { textoRespuesta: "- La potencia absorbida por los elementos pasivos siempre es mayor que la potencia suministrada por las fuentes.", isCorrect: false },
        { textoRespuesta: "- La suma de las potencias absorbidas en un circuito es igual a la suma de las potencias generadas.", isCorrect: true },
        { textoRespuesta: "- La potencia total en un circuito depende únicamente del número de nodos.", isCorrect: false },
        { textoRespuesta: "- Solo se puede aplicar en circuitos de corriente alterna.", isCorrect: false },
      ]
    },
    {
      titulo: "En un circuito eléctrico, la transformación estrella-triángulo se utiliza para:",
      opciones: [
        { textoRespuesta: "- Simplificar circuitos eléctricos con resistencias conectadas en configuraciones no triviales (ej. paralelo o serie).", isCorrect: true },
        { textoRespuesta: "- Convertir una conexión en serie a una en paralelo automáticamente.", isCorrect: false },
        { textoRespuesta: "- Determinar la potencia de un circuito sin usar la Ley de Ohm.", isCorrect: false },
        { textoRespuesta: "- Calcular la corriente en nodos sin utilizar la Ley de Kirchhoff.", isCorrect: false },
      ]
    },
    {
      titulo: "El método de transformación de fuentes en circuitos eléctricos permite:",
      opciones: [
        { textoRespuesta: "- Reemplazar una fuente de voltaje en serie con una resistencia por una fuente de corriente en paralelo con la misma resistencia.", isCorrect: true },
        { textoRespuesta: "- Convertir cualquier circuito en un equivalente de resistencias en paralelo.", isCorrect: false },
        { textoRespuesta: "- Eliminar la necesidad de aplicar las Leyes de Kirchhoff en el análisis de circuitos.", isCorrect: false },
        { textoRespuesta: "- Determinar la potencia de un circuito sin necesidad de conocer la resistencia.", isCorrect: false },
      ]
    },
    {
      titulo: "¿cómo se genera un voltaje alterno?",
      opciones: [
        { textoRespuesta: "- Mediante la rotación de una bobina dentro de un campo magnético uniforme.", isCorrect: true },
        { textoRespuesta: "- Mediante la rotación de una bobina dentro de un campo eléctrico uniforme.", isCorrect: false },
        { textoRespuesta: "- Aplicando una corriente continua a un capacitor.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las respuestas mencionadas.", isCorrect: false },
      ]
    },
    {
      titulo: "Cuando un condensador es introducido en un circuito de corriente alterna, ¿qué efecto\ntiene sobre la corriente y el voltaje?",
      opciones: [
        { textoRespuesta: "- La corriente y el voltaje permanecen en fase.", isCorrect: false },
        { textoRespuesta: "- La corriente se retrasa 90° respecto al voltaje.", isCorrect: false },
        { textoRespuesta: "- La corriente se adelanta 90° respecto al voltaje.", isCorrect: true },
        { textoRespuesta: "- No hay relación de desfase entre corriente y voltaje.", isCorrect: false },
      ]
    },
    {
      titulo: "Cuando una bobina es introducida en un circuito de corriente alterna, ¿qué efecto tiene\nsobre la corriente y el voltaje?",
      opciones: [
        { textoRespuesta: "- La corriente y el voltaje permanecen en fase.", isCorrect: false },
        { textoRespuesta: "- La corriente se adelanta 90° respecto al voltaje.", isCorrect: false },
        { textoRespuesta: "- No hay relación de desfase entre corriente y voltaje.", isCorrect: false },
        { textoRespuesta: "- La corriente se retrasa 90° respecto al voltaje.", isCorrect: true },
      ]
    },
    {
      titulo: "Un fasor es una representación matemática utilizada en circuitos de corriente alterna.\n¿Cuál de las siguientes afirmaciones es correcta respecto a los fasores?",
      opciones: [
        { textoRespuesta: "- Un fasor es un número complejo que representa la amplitud y el ángulo de fase de una sinusoide.", isCorrect: true },
        { textoRespuesta: "- Un fasor es un número real que representa únicamente la magnitud de una sinusoide.", isCorrect: false },
        { textoRespuesta: "- Un fasor solo puede representarse en forma rectangular.", isCorrect: false },
        { textoRespuesta: "- Los fasores se utilizan exclusivamente para representar corrientes y no voltajes.", isCorrect: false },
      ]
    },
    {
      titulo: "En un circuito de corriente alterna, ¿cuál es la relación de fase entre el voltaje y la\ncorriente en un resistor puro?",
      opciones: [
        { textoRespuesta: "- El voltaje se adelanta 90° respecto a la corriente.", isCorrect: false },
        { textoRespuesta: "- La corriente se adelanta 90° respecto al voltaje.", isCorrect: false },
        { textoRespuesta: "- La corriente y el voltaje están en fase.", isCorrect: true },
        { textoRespuesta: "- No hay una relación de fase definida entre voltaje y corriente.", isCorrect: false },
      ]
    },
    {
      titulo: "En un circuito de corriente alterna, ¿cuál es la relación de fase entre el voltaje y la\ncorriente en un resistor puro?",
      opciones: [
        { textoRespuesta: "- El voltaje se adelanta 90° respecto a la corriente.", isCorrect: false },
        { textoRespuesta: "- La corriente se adelanta 90° respecto al voltaje.", isCorrect: false },
        { textoRespuesta: "- La corriente y el voltaje están en fase.", isCorrect: true },
        { textoRespuesta: "- No hay una relación de fase definida entre voltaje y corriente.", isCorrect: false },
      ]
    },
    {
      titulo: "En un circuito de corriente alterna, la impedancia de un inductor puro se expresa\nmatemáticamente como:",
      opciones: [
        { textoRespuesta: "- 𝑍𝐿= 𝑗𝜔𝐿", isCorrect: true },
        { textoRespuesta: "- 𝑍𝐿= 𝑗𝜔 𝐿 𝑅", isCorrect: false },
        { textoRespuesta: "- 𝑍𝐿= 𝑉. 𝐼", isCorrect: false },
        { textoRespuesta: "- 𝑍𝐿= 1 𝑗𝜔𝐿", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué sucede con un inductor y un capacitor en los extremos de frecuencia angular 𝜔?",
      opciones: [
        { textoRespuesta: "- A bajas frecuencias, el inductor actúa como un circuito abierto y el capacitor como un cortocircuito.", isCorrect: false },
        { textoRespuesta: "- A altas frecuencias, el inductor actúa como un cortocircuito y el capacitor como un circuito abierto.", isCorrect: false },
        { textoRespuesta: "- A altas frecuencias, tanto el inductor como el capacitor actúan como cortocircuitos.", isCorrect: false },
        { textoRespuesta: "- A bajas frecuencias, el inductor actúa como un cortocircuito y el capacitor como un circuito abierto.", isCorrect: true },
      ]
    },
    {
      titulo: "Dada la función de voltaje sinusoidal: 𝑣(𝑡) = 12𝑐𝑜𝑠(50𝑡+ 10°). ¿Cuál es el valor de la\namplitud del voltaje en voltios?",
      opciones: [
        { textoRespuesta: "- 12 V.", isCorrect: true },
        { textoRespuesta: "- 50 V.", isCorrect: false },
        { textoRespuesta: "- 10 V.", isCorrect: false },
        { textoRespuesta: "- 24 V.", isCorrect: false },
      ]
    },
    {
      titulo: "En un sistema de corriente alterna, ¿cuál de las siguientes afirmaciones es correcta\nrespecto a la potencia aparente, activa y reactiva?",
      opciones: [
        { textoRespuesta: "- La potencia activa es la potencia total de la red y se mide en voltamperios (VA).", isCorrect: false },
        { textoRespuesta: "- La potencia reactiva es la parte de la potencia que se transforma en luz, calor o movimiento.", isCorrect: false },
        { textoRespuesta: "- La potencia aparente es la combinación de la potencia activa y la potencia reactiva.", isCorrect: true },
        { textoRespuesta: "- La potencia activa es la capacidad de un sistema de alimentación para suministrar potencia.", isCorrect: false },
      ]
    },
    {
      titulo: "El valor eficaz (RMS) de una onda senoidal en un circuito de corriente alterna se define\ncomo:",
      opciones: [
        { textoRespuesta: "- El valor que tendría una corriente continua que produce la misma potencia que la corriente alterna.", isCorrect: true },
        { textoRespuesta: "- El valor máximo que alcanza la onda en un ciclo.", isCorrect: false },
        { textoRespuesta: "- La media aritmética de los valores instantáneos de la onda en un ciclo.", isCorrect: false },
        { textoRespuesta: "- La diferencia entre el valor pico y el valor medio de la onda.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué representa el triángulo de potencias en un circuito de corriente alterna?",
      opciones: [
        { textoRespuesta: "- La relación entre la resistencia, la inductancia y la capacitancia en un circuito eléctrico.", isCorrect: false },
        { textoRespuesta: "- Un método para calcular el consumo de energía en corriente continua.", isCorrect: false },
        { textoRespuesta: "- La variación del voltaje y la corriente en función del tiempo en un sistema de corriente alterna.", isCorrect: false },
        { textoRespuesta: "- La relación entre la potencia activa, la potencia reactiva y la potencia aparente.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Por qué el sistema trifásico es más eficiente que el sistema monofásico en la transmisión\nde energía eléctrica?",
      opciones: [
        { textoRespuesta: "- Porque permite el uso de conductores de menor sección y reduce las pérdidas en el transporte de energía.", isCorrect: true },
        { textoRespuesta: "- Porque solo puede alimentar equipos de alto consumo como motores industriales.", isCorrect: false },
        { textoRespuesta: "- Porque las tres fases están en fase entre sí, lo que reduce la fluctuación de la tensión.", isCorrect: false },
        { textoRespuesta: "- Porque no se puede utilizar para cargas monofásicas, lo que garantiza una mejor distribución de energía.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es electricidad?",
      opciones: [
        { textoRespuesta: "- La electricidad es un conjunto de fenómenos producidos por el movimiento e interacción entre las cargas eléctricas positivas y negativas de los cuerpos físicos.", isCorrect: true },
        { textoRespuesta: "- Es la máxima corriente que puede transportar un conductor en condiciones de uso sin superar su temperatura nominal de servicio.", isCorrect: false },
        { textoRespuesta: "- Es la potencia que puede transportar un conductor con T=25 ºC.", isCorrect: false },
        { textoRespuesta: "- Optima – Evaluar.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuáles son las formas comunes de electricidad?",
      opciones: [
        { textoRespuesta: "- Construcción – Elementos.", isCorrect: false },
        { textoRespuesta: "- Conductores, semiconductores y aislantes.", isCorrect: false },
        { textoRespuesta: "- Concesión - Circuitos.", isCorrect: false },
        { textoRespuesta: "- Electricidad estática, electricidad dinámica, electricidad electromagnética.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Cuáles son las formas más comunes de generar electricidad?",
      opciones: [
        { textoRespuesta: "- Construcción – Elementos.", isCorrect: false },
        { textoRespuesta: "- Hidráulica, Térmica, Eólica, Fotovoltaica, Nuclear, etc.", isCorrect: true },
        { textoRespuesta: "- Concesión - Circuitos.", isCorrect: false },
        { textoRespuesta: "- Conductores, semiconductores y aislantes.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se clasifican los materiales eléctricos?",
      opciones: [
        { textoRespuesta: "- Conductores, semiconductores y aislantes.", isCorrect: true },
        { textoRespuesta: "- Aisladores.", isCorrect: false },
        { textoRespuesta: "- Cables de tierra.", isCorrect: false },
        { textoRespuesta: "- Estructura.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué son los materiales eléctricos semiconductores?",
      opciones: [
        { textoRespuesta: "- Es todo aquel material que, dependiendo de las circunstancias puede actuar como conductor, permitiendo el paso de la corriente, o como aislante, impidiendo el paso de la misma.", isCorrect: true },
        { textoRespuesta: "- Es aquel que transforma la energía eléctrica en energía mecánica.", isCorrect: false },
        { textoRespuesta: "- Es todo aquel material que, puede actuar solamente como conductor.", isCorrect: false },
        { textoRespuesta: "- Es todo aquel material que, puede actuar solamente como aislante.", isCorrect: false },
      ]
    },
    {
      titulo: "Seleccione los materiales aislantes",
      opciones: [
        { textoRespuesta: "- Vidrio, plástico.", isCorrect: true },
        { textoRespuesta: "- Cobre, aluminio.", isCorrect: false },
        { textoRespuesta: "- Oro, bronce.", isCorrect: false },
        { textoRespuesta: "- Hierro, agua.", isCorrect: false },
      ]
    },
    {
      titulo: "Seleccione los materiales eléctricos conductores",
      opciones: [
        { textoRespuesta: "- Vidrio, plástico.", isCorrect: true },
        { textoRespuesta: "- Porcelana, madera.", isCorrect: false },
        { textoRespuesta: "- Oro, cobre.", isCorrect: false },
        { textoRespuesta: "- Goma, cerámica.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es corriente eléctrica?",
      opciones: [
        { textoRespuesta: "- Es el flujo de electrones que circula por un conductor.", isCorrect: true },
        { textoRespuesta: "- La magnitud encargada de establecer la diferencia de potencial eléctrico que existe entre dos puntos.", isCorrect: false },
        { textoRespuesta: "- Es la oposición al paso de la corriente eléctrica a través de un conductor.", isCorrect: false },
        { textoRespuesta: "- Es la cantidad de energía eléctrica transferida de una fuente generadora a un elemento consumidor por unidad de tiempo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuáles son los tipos de corriente eléctrica que existen?",
      opciones: [
        { textoRespuesta: "- Continua y alterna.", isCorrect: true },
        { textoRespuesta: "- Watio y lumen.", isCorrect: false },
        { textoRespuesta: "- Lux y resistencia.", isCorrect: false },
        { textoRespuesta: "- Lux y alterna.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es corriente eléctrica continua?",
      opciones: [
        { textoRespuesta: "- Distribuir la luz emitida por las lámparas y las protegen mecánicamente.", isCorrect: false },
        { textoRespuesta: "- La corriente eléctrica que fluye de forma constante e una sola dirección.", isCorrect: true },
        { textoRespuesta: "- Es la oposición al paso de la corriente eléctrica a través de un conductor.", isCorrect: false },
        { textoRespuesta: "- Es la que la dirección del flujo de electrones va y viene a intervalos regulares o en ciclos.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es corriente eléctrica alterna?",
      opciones: [
        { textoRespuesta: "- La corriente eléctrica que fluye de forma constante e una sola dirección.", isCorrect: false },
        { textoRespuesta: "- Distribuir la luz emitida por las lámparas y las protegen mecánicamente.", isCorrect: false },
        { textoRespuesta: "- Es la oposición al paso de la corriente eléctrica a través de un conductor.", isCorrect: false },
        { textoRespuesta: "- Es la que la dirección del flujo de electrones va y viene a intervalos regulares o en ciclos.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Qué es voltaje eléctrico?",
      opciones: [
        { textoRespuesta: "- Es el flujo de electrones que circula por un conductor.", isCorrect: false },
        { textoRespuesta: "- La magnitud encargada de establecer la diferencia de potencial eléctrico que existe entre dos puntos.", isCorrect: true },
        { textoRespuesta: "- Es la oposición al paso de la corriente eléctrica a través de un conductor.", isCorrect: false },
        { textoRespuesta: "- Es la cantidad de energía eléctrica transferida de una fuente generadora a un elemento consumidor por unidad de tiempo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es resistencia eléctrica?",
      opciones: [
        { textoRespuesta: "- Es el flujo de electrones que circula por un conductor.", isCorrect: false },
        { textoRespuesta: "- La magnitud encargada de establecer la diferencia de potencial eléctrico que existe entre dos puntos.", isCorrect: false },
        { textoRespuesta: "- Es la oposición al paso de la corriente eléctrica a través de un conductor.", isCorrect: true },
        { textoRespuesta: "- Es la cantidad de energía eléctrica transferida de una fuente generadora a un elemento consumidor por unidad de tiempo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es potencia eléctrica?",
      opciones: [
        { textoRespuesta: "- Es el flujo de electrones que circula por un conductor.", isCorrect: false },
        { textoRespuesta: "- La magnitud encargada de establecer la diferencia de potencial eléctrico que existe entre dos puntos.", isCorrect: false },
        { textoRespuesta: "- Es la oposición al paso de la corriente eléctrica a través de un conductor.", isCorrect: false },
        { textoRespuesta: "- Es la cantidad de energía eléctrica transferida de una fuente generadora a un elemento consumidor por unidad de tiempo.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Qué es circuito eléctrico?",
      opciones: [
        { textoRespuesta: "- Es la oposición al paso de la corriente eléctrica a través de un conductor.", isCorrect: false },
        { textoRespuesta: "- La magnitud encargada de establecer la diferencia de potencial eléctrico que existe entre dos puntos.", isCorrect: false },
        { textoRespuesta: "- Conjunto de operadores unidos se tal forma que permitan el paso de corriente electrica para conseguir algún efecto útil (luz, calor, movimiento, sonido, etc).", isCorrect: true },
        { textoRespuesta: "- Es la cantidad de energía eléctrica transferida de una fuente generadora.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué establece la ley de ohm?",
      opciones: [
        { textoRespuesta: "- Establece que la intensidad de corriente que recorre un circuito es directamente proporcional al voltaje e inversamente proporcional a la resistencia.", isCorrect: true },
        { textoRespuesta: "- La magnitud encargada de establecer la diferencia de potencial eléctrico que existe entre dos puntos.", isCorrect: false },
        { textoRespuesta: "- Es la oposición al paso de la corriente eléctrica a través de un conductor.", isCorrect: false },
        { textoRespuesta: "- Es la cantidad de energía eléctrica transferida de una fuente generadora a un elemento consumidor por unidad de tiempo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué dispositivo permite medir las tres magnitudes básicas de electricidad (corriente,\nvoltaje y resistencia)?",
      opciones: [
        { textoRespuesta: "- Telurometro.", isCorrect: false },
        { textoRespuesta: "- Osciloscopio.", isCorrect: false },
        { textoRespuesta: "- Megger.", isCorrect: false },
        { textoRespuesta: "- Multímetro.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Cómo se conecta el multímetro para medir voltaje?",
      opciones: [
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en Ohmios (Ω) y en la escala adecuada y luego conectar el multímetro en paralelo con el circuito.", isCorrect: false },
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en Amperios (A) y en la escala adecuada y luego conectar el multímetro en serie con el circuito.", isCorrect: false },
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en voltios(V) y en la escala adecuada y luego conectar el multímetro en paralelo con el circuito.", isCorrect: true },
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en Watts (W) y en la escala adecuada y luego conectar el multímetro en serie con el circuito.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se conecta el multímetro para medir intensidad de corriente?",
      opciones: [
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en voltios(V) y en la escala adecuada y luego conectar el multímetro en paralelo con el circuito.", isCorrect: false },
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en Ohmios (Ω) y en la escala adecuada y luego conectar el multímetro en paralelo con el circuito.", isCorrect: false },
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en Amperios (A) y en la escala adecuada y luego conectar el multímetro en serie con el circuito.", isCorrect: true },
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en Watts (W) y en la escala adecuada y luego conectar el multímetro en serie con el circuito.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es resistencia eléctrica?",
      opciones: [
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en voltios(V) y en la escala adecuada y luego conectar el multímetro en paralelo con el circuito.", isCorrect: false },
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en Ohmios (Ω) y en la escala adecuada y luego conectar el multímetro en paralelo con el circuito.", isCorrect: true },
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en Amperios (A) y en la escala adecuada y luego conectar el multímetro en serie con el circuito.", isCorrect: false },
        { textoRespuesta: "- Verificar que el selector del multímetro se encuentre en Watts (W) y en la escala adecuada y luego conectar el multímetro en serie con el circuito.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es un circuito en serie?",
      opciones: [
        { textoRespuesta: "- Disponen de dos o más operadores conectados en distintos cables. En ellos, para pasar de un punto a otro del circuito la corriente eléctrica dispone de varios caminos alternativos, por lo que ésta sólo atravesará aquellos operadores que se encuentren en su recorrido.", isCorrect: false },
        { textoRespuesta: "- Tiene un aislamiento con recubrimiento metálico.", isCorrect: false },
        { textoRespuesta: "- Los circuitos en serie son aquellos que disponen de dos o más operadores no conectados.", isCorrect: false },
        { textoRespuesta: "- Los circuitos en serie son aquellos que disponen de dos o más operadores conectados seguidos, es decir, en el mismo cable o conductor.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Qué es un circuito en paralelo?",
      opciones: [
        { textoRespuesta: "- Los circuitos en serie son aquellos que disponen de dos o más operadores conectados seguidos, es decir, en el mismo cable o conductor.", isCorrect: false },
        { textoRespuesta: "- Disponen de dos o más operadores conectados en distintos cables. En ellos, para pasar de un punto a otro del circuito la corriente eléctrica dispone de varios caminos alternativos, por lo que ésta sólo atravesará aquellos operadores que se encuentren en su recorrido.", isCorrect: true },
        { textoRespuesta: "- Tiene un aislamiento con recubrimiento metálico.", isCorrect: false },
        { textoRespuesta: "- Los circuitos en serie son aquellos que disponen de dos o más operadores no conectados.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué ocurre con el voltaje y la corriente en un circuito en serie?",
      opciones: [
        { textoRespuesta: "- La corriente se mantiene y el voltaje varía.", isCorrect: true },
        { textoRespuesta: "- El voltaje se mantiene y la corriente varía.", isCorrect: false },
        { textoRespuesta: "- El voltaje se mantiene y la corriente se mantiene.", isCorrect: false },
        { textoRespuesta: "- El voltaje varía y la corriente varía.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué ocurre con el voltaje y la corriente en un circuito en paralelo?",
      opciones: [
        { textoRespuesta: "- La corriente se mantiene y el voltaje varía.", isCorrect: false },
        { textoRespuesta: "- El voltaje se mantiene y la corriente varía.", isCorrect: true },
        { textoRespuesta: "- El voltaje se mantiene y la corriente se mantiene.", isCorrect: false },
        { textoRespuesta: "- El voltaje varía y la corriente varía.", isCorrect: false },
      ]
    },
    {
      titulo: "¿En qué consiste el teorema de Kennelly?",
      opciones: [
        { textoRespuesta: "- Permite determinar la carga equivalente en estrella a una dada en triángulo y viceversa.", isCorrect: true },
        { textoRespuesta: "- Configuración presente en circuitos eléctricos que puede fragmentar la corriente eléctrica de una fuente entre diferentes resistencias o impedancias conectadas en paralelo.", isCorrect: false },
        { textoRespuesta: "- Configuración de un circuito eléctrico que reparte la tensión de una fuente entre una o más impedancias conectadas en serie.", isCorrect: false },
        { textoRespuesta: "- Que la sumatorias de las corrientes que entran a un nodo es igual a la sumatorias de las corrientes que salen de dicho nodo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es el divisor de corriente?",
      opciones: [
        { textoRespuesta: "- Permite determinar la carga equivalente en estrella a una dada en triángulo y viceversa.", isCorrect: false },
        { textoRespuesta: "- Configuración presente en circuitos eléctricos que puede fragmentar la corriente eléctrica de una fuente entre diferentes resistencias o impedancias conectadas en paralelo.", isCorrect: true },
        { textoRespuesta: "- Configuración de un circuito eléctrico que reparte la tensión de una fuente entre una o más impedancias conectadas en serie.", isCorrect: false },
        { textoRespuesta: "- Que la sumatorias de las corrientes que entran a un nodo es igual a la sumatorias de las corrientes que salen de dicho nodo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es el divisor de voltaje?",
      opciones: [
        { textoRespuesta: "- Permite determinar la carga equivalente en estrella a una dada en triángulo y viceversa.", isCorrect: false },
        { textoRespuesta: "- Configuración presente en circuitos eléctricos que puede fragmentar la corriente eléctrica de una fuente entre diferentes resistencias o impedancias conectadas en paralelo.", isCorrect: false },
        { textoRespuesta: "- Configuración de un circuito eléctrico que reparte la tensión de una fuente entre una o más impedancias conectadas en serie.", isCorrect: true },
        { textoRespuesta: "- Que la sumatorias de las corrientes que entran a un nodo es igual a la sumatorias de las corrientes que salen de dicho nodo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿En qué consiste la ley de corrientes de Kirchhoff (LCK)?",
      opciones: [
        { textoRespuesta: "- Permite determinar la carga equivalente en estrella a una dada en triángulo y viceversa.", isCorrect: false },
        { textoRespuesta: "- Configuración presente en circuitos eléctricos que puede fragmentar la corriente eléctrica de una fuente entre diferentes resistencias o impedancias conectadas en paralelo.", isCorrect: false },
        { textoRespuesta: "- Configuración de un circuito eléctrico que reparte la tensión de una fuente entre una o más impedancias conectadas en serie.", isCorrect: false },
        { textoRespuesta: "- Que la sumatorias de las corrientes que entran a un nodo es igual a la sumatorias de las corrientes que salen de dicho nodo.", isCorrect: true },
      ]
    },
    {
      titulo: "¿En qué consiste la ley de corrientes de Kirchhoff (LVK)?",
      opciones: [
        { textoRespuesta: "- Establece que la suma algebraica de las diferencias de voltaje es igual a cero.", isCorrect: true },
        { textoRespuesta: "- Configuración presente en circuitos eléctricos que puede fragmentar la corriente eléctrica de una fuente entre diferentes resistencias o impedancias conectadas en paralelo.", isCorrect: false },
        { textoRespuesta: "- Configuración de un circuito eléctrico que reparte la tensión de una fuente entre una o más impedancias conectadas en serie.", isCorrect: false },
        { textoRespuesta: "- Que la sumatorias de las corrientes que entran a un nodo es igual a la sumatorias de las corrientes que salen de dicho nodo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué nos indica el teorema de Thevenin?",
      opciones: [
        { textoRespuesta: "- Configuración presente en circuitos eléctricos que puede fragmentar la corriente eléctrica de una fuente entre diferentes resistencias o impedancias conectadas en paralelo.", isCorrect: false },
        { textoRespuesta: "- Configuración de un circuito eléctrico que reparte la tensión de una fuente entre una o más impedancias conectadas en serie.", isCorrect: false },
        { textoRespuesta: "- Nos dice que cualquier circuito eléctrico, por complejo que sea, se puede simplificar a una fuente de voltaje o corriente y una resistencia.", isCorrect: true },
        { textoRespuesta: "- Que la sumatorias de las corrientes que entran a un nodo es igual a la sumatorias de las corrientes que salen de dicho nodo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿A qué función corresponde la siguiente gráfica?",
      opciones: [
        { textoRespuesta: "- Trigonométrica.", isCorrect: true },
        { textoRespuesta: "- Exponencial.", isCorrect: false },
        { textoRespuesta: "- Logarítmica.", isCorrect: false },
        { textoRespuesta: "- Inversa.", isCorrect: false },
      ]
    },
    {
      titulo: "¿A qué función corresponde la siguiente gráfica?",
      opciones: [
        { textoRespuesta: "- Trigonométrica.", isCorrect: false },
        { textoRespuesta: "- Inversa.", isCorrect: false },
        { textoRespuesta: "- Logarítmica.", isCorrect: false },
        { textoRespuesta: "- Exponencial.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Qué propiedad debe cumplir una función para ser considerada una función inyectiva?",
      opciones: [
        { textoRespuesta: "- Cada valor de la variable independiente tiene una sola imagen.", isCorrect: false },
        { textoRespuesta: "- Cada valor de la variable dependiente tiene una sola preimagen.", isCorrect: true },
        { textoRespuesta: "- La gráfica debe ser simétrica respecto al eje y.", isCorrect: false },
        { textoRespuesta: "- La función debe ser creciente en todo su dominio.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es el límite de la siguiente expresión cuando 𝑥 tiende a 2?",
      opciones: [
        { textoRespuesta: "- 4.", isCorrect: true },
        { textoRespuesta: "- 2.", isCorrect: false },
        { textoRespuesta: "- No existe.", isCorrect: false },
        { textoRespuesta: "- 0.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es el límite de la siguiente expresión cuando 𝑥 tiende a 0?",
      opciones: [
        { textoRespuesta: "- 0.", isCorrect: false },
        { textoRespuesta: "- 1.", isCorrect: true },
        { textoRespuesta: "- ∞.", isCorrect: false },
        { textoRespuesta: "- No existe.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es el valor del límite lateral izquierdo de la siguiente expresión cuando 𝑥→0−?",
      opciones: [
        { textoRespuesta: "- 0.", isCorrect: false },
        { textoRespuesta: "- 1.", isCorrect: false },
        { textoRespuesta: "- ∞.", isCorrect: false },
        { textoRespuesta: "- -∞.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Cuál es el límite de la siguiente función cuando 𝑥→∞?",
      opciones: [
        { textoRespuesta: "- 3/2.", isCorrect: true },
        { textoRespuesta: "- 5/2.", isCorrect: false },
        { textoRespuesta: "- 1.", isCorrect: false },
        { textoRespuesta: "- 0.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué sucede si una función tiene un límite unidireccional distinto de cero en un punto c?",
      opciones: [
        { textoRespuesta: "- La función es continua en ccc.", isCorrect: false },
        { textoRespuesta: "- La función no es continua en ccc, porque el límite unidireccional no es el mismo en ambos lados.", isCorrect: true },
        { textoRespuesta: "- La función es continua en ccc, pero tiene un salto.", isCorrect: false },
        { textoRespuesta: "- La función es continua en ccc, pero tiene una discontinuidad removible.", isCorrect: false },
      ]
    },
    {
      titulo: "¿En qué condiciones una función es diferenciable en un punto c?",
      opciones: [
        { textoRespuesta: "- La función debe ser continua en c.", isCorrect: false },
        { textoRespuesta: "- La derivada de la función en ccc debe existir.", isCorrect: false },
        { textoRespuesta: "- La función debe ser continua y la derivada debe existir en c.", isCorrect: true },
        { textoRespuesta: "- La función debe ser continua y no tener saltos.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál de las siguientes funciones no es diferenciable en 𝑥= 0?",
      opciones: [
        { textoRespuesta: "- 𝑓(𝑥) = |𝑥|.", isCorrect: true },
        { textoRespuesta: "- 𝑓(𝑥) = 𝑥2.", isCorrect: false },
        { textoRespuesta: "- 𝑓(𝑥) = 𝑠𝑖𝑛(𝑥).", isCorrect: false },
        { textoRespuesta: "- 𝑓(𝑥) = 𝑒𝑥.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es la derivada de la siguiente función utilizando la regla de la cadena?\n𝑓(𝑥) = 𝑠𝑖𝑛(3𝑥2 + 2)",
      opciones: [
        { textoRespuesta: "- 3 𝑐𝑜𝑠(3𝑥2 + 2).", isCorrect: false },
        { textoRespuesta: "- 6𝑥 𝑐𝑜𝑠(3𝑥2 + 2).", isCorrect: true },
        { textoRespuesta: "- 6𝑥 𝑠𝑖𝑛(3𝑥2 + 2).", isCorrect: false },
        { textoRespuesta: "- 3 𝑠𝑖𝑛(3𝑥2 + 2).", isCorrect: false },
      ]
    },
    {
      titulo: "¿Si tienes la ecuación 𝑥2 + 𝑦2 = 25, ¿cuál es la derivada implícita de y con respecto a x?",
      opciones: [
        { textoRespuesta: "- 𝑑𝑦 𝑑𝑥= − 𝑥 𝑦.", isCorrect: true },
        { textoRespuesta: "- 𝑑𝑦 𝑑𝑥= 𝑥 𝑦.", isCorrect: false },
        { textoRespuesta: "- 𝑑𝑦 𝑑𝑥= 𝑦 𝑥.", isCorrect: false },
        { textoRespuesta: "- 𝑑𝑦 𝑑𝑥= − 𝑦 𝑥.", isCorrect: false },
      ]
    },
    {
      titulo: "¿En qué consiste la derivación implícita?",
      opciones: [
        { textoRespuesta: "- Derivar una ecuación explícita para obtener una expresión de yyy en función de xxx.", isCorrect: false },
        { textoRespuesta: "- Derivar una ecuación implícita, donde y y x están relacionados, sin necesidad de despejar y.", isCorrect: true },
        { textoRespuesta: "- Derivar una función sin considerar las variables dependientes.", isCorrect: false },
        { textoRespuesta: "- Resolver una ecuación diferencial explícita.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál de las siguientes condiciones indica que una función es creciente en un intervalo (a,\nb)?",
      opciones: [
        { textoRespuesta: "- La función no tiene derivada en el intervalo (𝑎, 𝑏).", isCorrect: false },
        { textoRespuesta: "- La derivada de la función es menor que cero para todo 𝑥 ∈(𝑎, 𝑏).", isCorrect: false },
        { textoRespuesta: "- La derivada de la función es igual a cero para todo 𝑥 ∈(𝑎, 𝑏).", isCorrect: false },
        { textoRespuesta: "- La derivada de la función es mayor que cero para todo 𝑥 ∈(𝑎, 𝑏).", isCorrect: true },
      ]
    },
    {
      titulo: "¿Si 𝑓′(𝑥) = 0 en un punto 𝑥= 𝑐, qué podemos deducir sobre la función 𝑓(𝑥) en ese\npunto?",
      opciones: [
        { textoRespuesta: "- La función es constante en el intervalo alrededor de 𝑐.", isCorrect: false },
        { textoRespuesta: "- La función tiene un máximo local en 𝑥= 𝑐.", isCorrect: false },
        { textoRespuesta: "- La función tiene un mínimo local en 𝑥= 𝑐.", isCorrect: false },
        { textoRespuesta: "- No se puede determinar el comportamiento de la función en 𝑥= 𝑐 solo con la derivada.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Si la derivada de una función 𝑓′(𝑥) es negativa en un intervalo (a, b), ¿qué\ncomportamiento tiene la función en ese intervalo?",
      opciones: [
        { textoRespuesta: "- La función está aumentando en el intervalo (𝑎, 𝑏).", isCorrect: false },
        { textoRespuesta: "- La función está constante en el intervalo (𝑎, 𝑏).", isCorrect: true },
        { textoRespuesta: "- La función está disminuyendo en el intervalo (𝑎, 𝑏).", isCorrect: false },
        { textoRespuesta: "- La función no tiene derivada en el intervalo (𝑎, 𝑏).", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué indica un valor de la segunda derivada mayor que cero en un punto crítico de una\nfunción?",
      opciones: [
        { textoRespuesta: "- El punto es un máximo local.", isCorrect: false },
        { textoRespuesta: "- El punto es un punto de inflexión.", isCorrect: false },
        { textoRespuesta: "- El punto es un mínimo local.", isCorrect: true },
        { textoRespuesta: "- La función es decreciente en ese punto.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Dada la función 𝑓(𝑥) = 𝑥3 −3𝑥2 + 4, ¿cuál es el tipo de punto crítico en 𝑥= 2?",
      opciones: [
        { textoRespuesta: "- Máximo local.", isCorrect: false },
        { textoRespuesta: "- Mínimo local.", isCorrect: false },
        { textoRespuesta: "- Punto de inflexión.", isCorrect: true },
        { textoRespuesta: "- No es un punto crítico.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se determina la concavidad de una función utilizando la segunda derivada?",
      opciones: [
        { textoRespuesta: "- Si la segunda derivada es negativa, la función es cóncava hacia arriba.", isCorrect: false },
        { textoRespuesta: "- Si la segunda derivada es positiva, la función es cóncava hacia abajo.", isCorrect: false },
        { textoRespuesta: "- Si la segunda derivada es positiva, la función es cóncava hacia arriba.", isCorrect: true },
        { textoRespuesta: "- La concavidad de la función no depende de la segunda derivada.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué sucede en un punto de inflexión de una función?",
      opciones: [
        { textoRespuesta: "- La función cambia de ser creciente a decreciente.", isCorrect: false },
        { textoRespuesta: "- La función cambia de ser cóncava hacia abajo a cóncava hacia arriba.", isCorrect: true },
        { textoRespuesta: "- La función tiene un máximo o mínimo local.", isCorrect: false },
        { textoRespuesta: "- La función es constante en ese punto.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué expresión representa 0,0000456 en notación científica?",
      opciones: [
        { textoRespuesta: "- 4.56 x 10^-5.", isCorrect: true },
        { textoRespuesta: "- 45.6 x 10^-6.", isCorrect: false },
        { textoRespuesta: "- 456 x 10^-7.", isCorrect: false },
        { textoRespuesta: "- 0.456 x 10^-4.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál de las siguientes es una magnitud escalar?",
      opciones: [
        { textoRespuesta: "- Velocidad.", isCorrect: false },
        { textoRespuesta: "- Fuerza.", isCorrect: false },
        { textoRespuesta: "- Tiempo.", isCorrect: true },
        { textoRespuesta: "- Aceleración.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es el resultado de sumar los vectores A = 2i + 3j y B = -i + 2j?",
      opciones: [
        { textoRespuesta: "- i + 5j.", isCorrect: true },
        { textoRespuesta: "- 3i + j.", isCorrect: false },
        { textoRespuesta: "- -3i - j.", isCorrect: false },
        { textoRespuesta: "- -i - 5j.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Si ¯𝑨⃑  = 2𝚤̂ + 3𝚥̂ 𝑦 𝐵¯  = −4𝚤̂ + 5𝚥̂ ¿cuál es el producto escalar ¯𝑨⃑ . ¯𝑩¯ ?",
      opciones: [
        { textoRespuesta: "- 7.", isCorrect: true },
        { textoRespuesta: "- 23.", isCorrect: false },
        { textoRespuesta: "- -8.", isCorrect: false },
        { textoRespuesta: "- -23.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es la magnitud del vector A = 3i - 4j?",
      opciones: [
        { textoRespuesta: "- 25.", isCorrect: false },
        { textoRespuesta: "- 7.", isCorrect: false },
        { textoRespuesta: "- 1.", isCorrect: false },
        { textoRespuesta: "- 5.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Si un vector tiene un ángulo de 90 grados con respecto al eje x, ¿cuál es su coseno\ndirector con respecto a ese eje?",
      opciones: [
        { textoRespuesta: "- -1.", isCorrect: false },
        { textoRespuesta: "- 1.", isCorrect: false },
        { textoRespuesta: "- 0.", isCorrect: true },
        { textoRespuesta: "- 0,5.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué ángulo forma el vector 5i^+12k^5\\hat{i} + 12\\hat{k}5i^+12k^ con el eje Y?",
      opciones: [
        { textoRespuesta: "- 0°.", isCorrect: false },
        { textoRespuesta: "- 90°.", isCorrect: true },
        { textoRespuesta: "- 180°.", isCorrect: false },
        { textoRespuesta: "- 45°.", isCorrect: false },
      ]
    },
    {
      titulo: "Dados los vectores A = 2i - j + k y B = -i + 3j - 2k, ¿cuál es el vector resultante?",
      opciones: [
        { textoRespuesta: "- -i - 3j + 5k.", isCorrect: true },
        { textoRespuesta: "- i + 3j - 5k.", isCorrect: false },
        { textoRespuesta: "- -i + 3j - 5k.", isCorrect: false },
        { textoRespuesta: "- i - 3j + 5k.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Un vector de magnitud 10 forma un ángulo de 30 grados con el eje x. ¿Cuál es su\ncomponente en el eje y?",
      opciones: [
        { textoRespuesta: "- 10.", isCorrect: false },
        { textoRespuesta: "- 8.66.", isCorrect: false },
        { textoRespuesta: "- 5.", isCorrect: true },
        { textoRespuesta: "- 0.", isCorrect: false },
      ]
    },
    {
      titulo: "En el MRU, la aceleración es:",
      opciones: [
        { textoRespuesta: "- Variable.", isCorrect: false },
        { textoRespuesta: "- Cero.", isCorrect: true },
        { textoRespuesta: "- Constante positiva.", isCorrect: false },
        { textoRespuesta: "- Constante negativa.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál de las siguientes opciones describe mejor la velocidad instantánea?",
      opciones: [
        { textoRespuesta: "- La velocidad promedio durante un largo intervalo de tiempo.", isCorrect: false },
        { textoRespuesta: "- La velocidad en un momento específico en el tiempo.", isCorrect: true },
        { textoRespuesta: "- La velocidad inicial de un objeto.", isCorrect: false },
        { textoRespuesta: "- La velocidad final de un objeto.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué tipo de movimiento tiene un objeto que cae libremente sin resistencia del aire?",
      opciones: [
        { textoRespuesta: "- Movimiento rectilíneo uniforme (MRU).", isCorrect: false },
        { textoRespuesta: "- Movimiento rectilíneo uniformemente variado (MRUV).", isCorrect: true },
        { textoRespuesta: "- Movimiento circular uniforme (MCU).", isCorrect: false },
        { textoRespuesta: "- Movimiento armónico simple (MAS).", isCorrect: false },
      ]
    },
    {
      titulo: "Un proyectil se lanza a 30° con Vo = 40m/s. ¿Cuál es su altura máxima??",
      opciones: [
        { textoRespuesta: "- 20.4 m.", isCorrect: true },
        { textoRespuesta: "- 35.5 m.", isCorrect: false },
        { textoRespuesta: "- 40.8 m.", isCorrect: false },
        { textoRespuesta: "- 15.3 m.", isCorrect: false },
      ]
    },
    {
      titulo: "Un coche acelera de 0 a 25 m/s en 5 segundos. ¿Cuál es su aceleración media?",
      opciones: [
        { textoRespuesta: "- 1 m/s².", isCorrect: false },
        { textoRespuesta: "- 2 m/s².", isCorrect: false },
        { textoRespuesta: "- 10 m/s².", isCorrect: false },
        { textoRespuesta: "-  5 m/s².", isCorrect: true },
      ]
    },
    {
      titulo: "Un objeto se lanza verticalmente hacia arriba con una velocidad inicial de 15 m/s. ¿Cuánto\ntiempo tarda en alcanzar su punto más alto?",
      opciones: [
        { textoRespuesta: "- 1.53 s.", isCorrect: true },
        { textoRespuesta: "- 2 s.", isCorrect: false },
        { textoRespuesta: "- 0.77 s.", isCorrect: false },
        { textoRespuesta: "- 3 s.", isCorrect: false },
      ]
    },
    {
      titulo: "Un disco gira a 600 RPM. ¿Cuál es su frecuencia en Hz?",
      opciones: [
        { textoRespuesta: "- 20 Hz.", isCorrect: false },
        { textoRespuesta: "- 70 Hz.", isCorrect: false },
        { textoRespuesta: "- 40 Hz.", isCorrect: false },
        { textoRespuesta: "- 10 Hz.", isCorrect: true },
      ]
    },
    {
      titulo: "Un proyectil se lanza con un ángulo de 45 grados. ¿A qué ángulo se debe lanzar otro\nproyectil con la misma velocidad inicial para tener el mismo alcance horizontal?",
      opciones: [
        { textoRespuesta: "- 30 grados.", isCorrect: false },
        { textoRespuesta: "- 60 grados.", isCorrect: true },
        { textoRespuesta: "- 90 grados.", isCorrect: false },
        { textoRespuesta: "- 15 grados.", isCorrect: false },
      ]
    },
    {
      titulo: "Un objeto se mueve en un círculo de radio 2 m con una velocidad constante de 4 m/s.\n¿Cuál es su aceleración centrípeta?",
      opciones: [
        { textoRespuesta: "- 4 m/s².", isCorrect: false },
        { textoRespuesta: "- 2 m/s².", isCorrect: false },
        { textoRespuesta: "- 8 m/s².", isCorrect: true },
        { textoRespuesta: "- 16 m/s².", isCorrect: false },
      ]
    },
    {
      titulo: "Según la tercera ley de Newton, si un martillo golpea un clavo:",
      opciones: [
        { textoRespuesta: "- El clavo ejerce igual fuerza sobre el martillo.", isCorrect: true },
        { textoRespuesta: "- El martillo no siente fuerza.", isCorrect: false },
        { textoRespuesta: "- La fuerza del clavo es mayor.", isCorrect: false },
        { textoRespuesta: "- No hay fuerza actuando.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál de las siguientes afirmaciones es verdadera acerca de la primera ley de Newton?",
      opciones: [
        { textoRespuesta: "- Un objeto en movimiento permanece en movimiento solo si se le aplica una fuerza.", isCorrect: false },
        { textoRespuesta: "- La aceleración de un objeto es directamente proporcional a su masa.", isCorrect: false },
        { textoRespuesta: "- Un objeto en reposo permanece en reposo a menos que actúe una fuerza externa.", isCorrect: true },
        { textoRespuesta: "- Por cada acción hay una reacción igual pero en la misma dirección.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué dispositivo de protección se utiliza para evitar sobrecargas en un circuito eléctrico?",
      opciones: [
        { textoRespuesta: "- Interruptor.", isCorrect: false },
        { textoRespuesta: "- Resistor.", isCorrect: false },
        { textoRespuesta: "- Condensador.", isCorrect: false },
        { textoRespuesta: "- Fusible.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Qué simboliza un capacitor en un esquema eléctrico?",
      opciones: [
        { textoRespuesta: "- Dos líneas paralelas cortas.", isCorrect: true },
        { textoRespuesta: "- Una línea recta.", isCorrect: false },
        { textoRespuesta: "- Un círculo con una \"C\".", isCorrect: false },
        { textoRespuesta: "- Un triángulo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es la función principal de un disyuntor en un sistema eléctrico?",
      opciones: [
        { textoRespuesta: "- Regular la tensión.", isCorrect: false },
        { textoRespuesta: "- Conectar y desconectar el circuito manualmente.", isCorrect: false },
        { textoRespuesta: "- Proteger el circuito de sobrecargas y cortocircuitos.", isCorrect: true },
        { textoRespuesta: "- Medir la corriente.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es la principal ventaja de los actuadores eléctricos sobre los actuadores hidráulicos\ny neumáticos?",
      opciones: [
        { textoRespuesta: "- Mayor fuerza.", isCorrect: false },
        { textoRespuesta: "- Menor coste.", isCorrect: false },
        { textoRespuesta: "- Mayor precisión y control.", isCorrect: true },
        { textoRespuesta: "- Mayor velocidad.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué tipo de actuador se usa comúnmente en aplicaciones de válvulas de control?",
      opciones: [
        { textoRespuesta: "- Actuador térmico.", isCorrect: false },
        { textoRespuesta: "- Actuador piezoeléctrico.", isCorrect: false },
        { textoRespuesta: "- Actuador eléctrico.", isCorrect: true },
        { textoRespuesta: "- Actuador neumático.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál de los siguientes es un ejemplo de actuador rotativo?",
      opciones: [
        { textoRespuesta: "- Motor paso a paso.", isCorrect: false },
        { textoRespuesta: "- Cilindro neumático.", isCorrect: false },
        { textoRespuesta: "- Actuador lineal.", isCorrect: true },
        { textoRespuesta: "- Actuador térmico.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es la definición de un sistema dinámico?",
      opciones: [
        { textoRespuesta: "- Un sistema que no cambia con el tiempo.", isCorrect: false },
        { textoRespuesta: "- Un sistema que se mueve con velocidad constante.", isCorrect: false },
        { textoRespuesta: "- Un sistema cuyo estado cambia con el tiempo.", isCorrect: true },
        { textoRespuesta: "- Un sistema que mantiene su estado constante.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué método se utiliza para analizar la estabilidad de un sistema dinámico lineal?",
      opciones: [
        { textoRespuesta: "- Transformada de Fourier.", isCorrect: false },
        { textoRespuesta: "- Análisis de Nyquist.", isCorrect: true },
        { textoRespuesta: "- Transformada de Laplace.", isCorrect: false },
        { textoRespuesta: "- Análisis de Bode.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué herramienta se usa para representar las ecuaciones diferenciales de un sistema\ndinámico?",
      opciones: [
        { textoRespuesta: "- Diagramas de fase.", isCorrect: false },
        { textoRespuesta: "- Diagramas de bloques.", isCorrect: true },
        { textoRespuesta: "- Transformada de Fourier.", isCorrect: false },
        { textoRespuesta: "- Series de Taylor.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué tipo de controlador utiliza la retroalimentación para corregir el error de seguimiento\nen un sistema dinámico?",
      opciones: [
        { textoRespuesta: "- Controlador proporcional (P).", isCorrect: true },
        { textoRespuesta: "- Controlador derivativo (D).", isCorrect: false },
        { textoRespuesta: "- Controlador integral (I).", isCorrect: false },
        { textoRespuesta: "- Controlador PID.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es el propósito de la función de transferencia en el análisis de sistemas dinámicos?",
      opciones: [
        { textoRespuesta: "- Determinar el punto de equilibrio.", isCorrect: false },
        { textoRespuesta: "- Analizar la respuesta en frecuencia.", isCorrect: false },
        { textoRespuesta: "- Determinar la ganancia del sistema.", isCorrect: false },
        { textoRespuesta: "- Representar la relación entre la entrada y la salida del sistema.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Qué es la Industria 4.0?",
      opciones: [
        { textoRespuesta: "- Una serie de normas industriales.", isCorrect: false },
        { textoRespuesta: "- La automatización industrial.", isCorrect: false },
        { textoRespuesta: "- La cuarta revolución industrial caracterizada por la digitalización y la interconectividad.", isCorrect: true },
        { textoRespuesta: "- Un modelo de gestión empresarial.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál de las siguientes tecnologías es fundamental para la Industria 4.0?",
      opciones: [
        { textoRespuesta: "- Tecnología de vapor.", isCorrect: false },
        { textoRespuesta: "- Internet de las Cosas (IoT).", isCorrect: true },
        { textoRespuesta: "- Energía solar.", isCorrect: false },
        { textoRespuesta: "- Energía nuclear.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué tipo de válvula se utiliza para controlar la dirección del flujo de aire en un sistema\nneumático?",
      opciones: [
        { textoRespuesta: "- Válvula de seguridad.", isCorrect: false },
        { textoRespuesta: "- Válvula reguladora de presión.", isCorrect: false },
        { textoRespuesta: "- Válvula de escape.", isCorrect: false },
        { textoRespuesta: "- Válvula de control direccional.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Cuál es la función principal de un compresor en un sistema neumático?",
      opciones: [
        { textoRespuesta: "- Regular la presión del aire.", isCorrect: false },
        { textoRespuesta: "- Almacenar aire comprimido.", isCorrect: false },
        { textoRespuesta: "- Generar aire comprimido.", isCorrect: true },
        { textoRespuesta: "- Distribuir el aire comprimido.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué dispositivo se utiliza para eliminar el exceso de humedad del aire comprimido?",
      opciones: [
        { textoRespuesta: "- Filtro de aire.", isCorrect: false },
        { textoRespuesta: "- Regulador de presión.", isCorrect: false },
        { textoRespuesta: "- Secador de aire.", isCorrect: true },
        { textoRespuesta: "- Compresor.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué tipo de compresor es más adecuado para aplicaciones industriales que requieren\ngrandes volúmenes de aire?",
      opciones: [
        { textoRespuesta: "- Compresor de pistón.", isCorrect: false },
        { textoRespuesta: "- Compresor de tornillo.", isCorrect: true },
        { textoRespuesta: "- Compresor centrífugo.", isCorrect: false },
        { textoRespuesta: "- Compresor de diafragma.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué ventaja ofrece la lógica cableada en comparación con los PLC en ciertas\naplicaciones industriales?",
      opciones: [
        { textoRespuesta: "- Menor coste de mantenimiento.", isCorrect: false },
        { textoRespuesta: "- Mayor resistencia a entornos adversos.", isCorrect: true },
        { textoRespuesta: "- Facilidad de reprogramación.", isCorrect: false },
        { textoRespuesta: "- Mayor capacidad de almacenamiento.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué lenguaje de programación se utiliza comúnmente para programar PLCs?",
      opciones: [
        { textoRespuesta: "- Python.", isCorrect: false },
        { textoRespuesta: "- C++.", isCorrect: false },
        { textoRespuesta: "- Ladder Logic (Diagramas de escalera).", isCorrect: true },
        { textoRespuesta: "- HTML.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es el propósito principal de los diagramas de escalera en la programación de\nPLCs?",
      opciones: [
        { textoRespuesta: "- Visualizar los circuitos eléctricos.", isCorrect: false },
        { textoRespuesta: "- Facilitar la programación y el diagnóstico de errores.", isCorrect: true },
        { textoRespuesta: "- Generar gráficos de control.", isCorrect: false },
        { textoRespuesta: "- Almacenar datos en la memoria.", isCorrect: false },
      ]
    },
    {
      titulo: "Según el tipo de aislamiento las subestaciones eléctricas se clasifican en:",
      opciones: [
        { textoRespuesta: "- De exterior y de interior.", isCorrect: false },
        { textoRespuesta: "- Aisladas al aire, Aisladas o encapsuladas en gas SF6, Híbridas.", isCorrect: true },
        { textoRespuesta: "- Reductoras y elevadoras.", isCorrect: false },
        { textoRespuesta: "- Todas son correctas.", isCorrect: false },
      ]
    },
    {
      titulo: "Según el emplazamiento, las subestaciones eléctricas se clasifican en:",
      opciones: [
        { textoRespuesta: "- De exterior y de interior.", isCorrect: true },
        { textoRespuesta: "- De maniobra o reparto.", isCorrect: false },
        { textoRespuesta: "- De transformación pura.", isCorrect: false },
        { textoRespuesta: "- Ninguna es correcta.", isCorrect: false },
      ]
    },
    {
      titulo: "Las subestaciones de maniobra se caracterizan por:",
      opciones: [
        { textoRespuesta: "- Tener un banco de transformación que modifique el nivel de tensión de las fuentes de alimentación.", isCorrect: false },
        { textoRespuesta: "- No tener un banco de transformación que modifique el nivel de tensión de las fuentes de alimentación.", isCorrect: false },
        { textoRespuesta: "- En ocasiones se tiene un nivel intermedio denominado Subtransmisión.", isCorrect: false },
        { textoRespuesta: "- B y C son correctas.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Cuál de los siguientes son elementos constitutivos de una subestación eléctrica?",
      opciones: [
        { textoRespuesta: "- Transformadores de instrumentación, interruptor, seccionador.", isCorrect: false },
        { textoRespuesta: "- Interruptor, seccionador, pararrayos.", isCorrect: false },
        { textoRespuesta: "- Protección, sistemas auxiliares, transformadores de instrumentación, interruptor, seccionador.", isCorrect: false },
        { textoRespuesta: "- Todas son correctas.", isCorrect: true },
      ]
    },
    {
      titulo: "Este tipo de subestaciones son las más utilizadas debido a que utilizan el aire como\naislante natural:",
      opciones: [
        { textoRespuesta: "- GIS.", isCorrect: false },
        { textoRespuesta: "- AIS.", isCorrect: true },
        { textoRespuesta: "- Hibridas.", isCorrect: false },
        { textoRespuesta: "- SF6.", isCorrect: false },
      ]
    },
    {
      titulo: "Las subestaciones eléctricas con doble barra y dos disyuntores (DBDD) son un tipo de\nconfiguración de subestación que ofrece:",
      opciones: [
        { textoRespuesta: "- Mayor confiabilidad y potencia en la operación del sistema eléctrico.", isCorrect: false },
        { textoRespuesta: "- Mayor confiabilidad y flexibilidad en la operación del sistema eléctrico.", isCorrect: true },
        { textoRespuesta: "- Mayor seguridad y rapidez en la operación del sistema eléctrico.", isCorrect: false },
        { textoRespuesta: "- Ninguna es correcta.", isCorrect: false },
      ]
    },
    {
      titulo: "La configuración de las subestaciones eléctricas con doble barra y dos disyuntores se\ncaracteriza por:",
      opciones: [
        { textoRespuesta: "- Dos barras principales.", isCorrect: false },
        { textoRespuesta: "- Dos disyuntores por circuito.", isCorrect: false },
        { textoRespuesta: "- Ninguna es correcta.", isCorrect: false },
        { textoRespuesta: "- A y B son correctas.", isCorrect: true },
      ]
    },
    {
      titulo: "Las barras simples seccionadas permiten:",
      opciones: [
        { textoRespuesta: "- Aislar toda la red eléctrica para mantenimiento o en caso de fallos, manteniendo la continuidad del suministro en otras áreas.", isCorrect: false },
        { textoRespuesta: "- Aislar secciones de la red eléctrica para mantenimiento o en caso de fallos, manteniendo la continuidad del suministro en otras áreas.", isCorrect: true },
        { textoRespuesta: "- Aislar secciones de la red eléctrica para evitar mantenimiento o en caso de fallos, manteniendo la continuidad del suministro en otras áreas.", isCorrect: false },
        { textoRespuesta: "- Todas son correctas.", isCorrect: false },
      ]
    },
    {
      titulo: "En las subestaciones eléctricas, se utilizan diferentes tipos de barras seccionadas y de\ntransferencia según las necesidades específicas del sistema y las condiciones operativas.\n¿Cuál de las siguientes son tipos comunes de barras seccionadas y de transferencia?",
      opciones: [
        { textoRespuesta: "- Barras seccionadas en vertical, barras seccionadas en anillo y horizontales y barras de transferencia tipo puente.", isCorrect: false },
        { textoRespuesta: "- Barras seccionadas en ángulo, barras seccionadas radiales y barras de transferencia.", isCorrect: false },
        { textoRespuesta: "- Barras seccionadas en ángulo, barras seccionadas verticales y horizontales y barras de transferencia tipo puente.", isCorrect: true },
        { textoRespuesta: "- B y C son correctas.", isCorrect: false },
      ]
    },
    {
      titulo: "En el contexto de subestaciones eléctricas, la \"doble barra\" es una configuración\ncomúnmente utilizada para la disposición de equipos y circuitos en sistemas de alta\ntensión. Consiste en dos conjuntos de barras principales, denominadas:",
      opciones: [
        { textoRespuesta: "- Barras principales y barras de transferencia, que están dispuestas en serie dentro de la subestación.", isCorrect: false },
        { textoRespuesta: "- Barras principales y barras de transferencia, que están dispuestas en paralelo dentro de la subestación.", isCorrect: true },
        { textoRespuesta: "- Barras de respaldo y barras de transferencia, que están dispuestas en serie dentro de la subestación.", isCorrect: false },
        { textoRespuesta: "- Ninguna es correcta.", isCorrect: false },
      ]
    },
    {
      titulo: "Las barras múltiples en subestaciones eléctricas son componentes esenciales que\npermiten:",
      opciones: [
        { textoRespuesta: "- La interconexión, flexibilidad operativa y seguridad en la gestión de la energía eléctrica.", isCorrect: false },
        { textoRespuesta: "- Facilitan la distribución eficiente de energía desde y hacia los diferentes equipos de la subestación.", isCorrect: false },
        { textoRespuesta: "- A y B son correctas.", isCorrect: true },
        { textoRespuesta: "- Ninguna es correcta.", isCorrect: false },
      ]
    },
    {
      titulo: "Señale las características de un esquema de barras:",
      opciones: [
        { textoRespuesta: "- Continuidad y Calidad de Suministro de Potencia y Energía.", isCorrect: false },
        { textoRespuesta: "- Operación, protección.", isCorrect: false },
        { textoRespuesta: "- Facilidades de Ampliación y costo.", isCorrect: false },
        { textoRespuesta: "- Todas son correctas.", isCorrect: true },
      ]
    },
    {
      titulo: "Un disyuntor acoplador de barra es:",
      opciones: [
        { textoRespuesta: "- Un componente eléctrico mecánico utilizado en sistemas de distribución de energía para conectar o desconectar dos barras colectoras.", isCorrect: false },
        { textoRespuesta: "- Un componente eléctrico utilizado en sistemas de distribución de energía para conectar o desconectar dos barras colectoras.", isCorrect: false },
        { textoRespuesta: "- Este dispositivo desempeña un papel clave en la gestión de la energía eléctrica, asegurando la continuidad del suministro y facilitando el mantenimiento de los equipos.", isCorrect: false },
        { textoRespuesta: "- B y C son correctas.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Cuál de las siguientes normativas establece los criterios de diseño, rendimiento y\nseguridad a considerar para la selección de transformadores de corriente?",
      opciones: [
        { textoRespuesta: "- IEC 61868-2.", isCorrect: false },
        { textoRespuesta: "- IEC 61869-2.", isCorrect: true },
        { textoRespuesta: "- IEC 60044-2.", isCorrect: false },
        { textoRespuesta: "- ISO 50002.", isCorrect: false },
      ]
    },
    {
      titulo: "Los seccionadores eléctricos basan su principio de funcionamiento en su capacidad de\nabrir y cerrar circuitos eléctricos de manera segura y controlada de tal manera que:",
      opciones: [
        { textoRespuesta: "- Estos dispositivos están diseñados para medir la corriente en un circuito eléctrico.", isCorrect: false },
        { textoRespuesta: "- Estos dispositivos están diseñados para proporcionar una separación física entre secciones activas y las secciones inactivas de una red eléctrica.", isCorrect: true },
        { textoRespuesta: "- Ambas son correctas.", isCorrect: false },
        { textoRespuesta: "- Ninguna es correcta.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál de los siguientes disyuntores utiliza hexafluoruro de azufre como medio de\naislamiento y extinción de arco?",
      opciones: [
        { textoRespuesta: "- Disyuntor de aceite.", isCorrect: false },
        { textoRespuesta: "- Disyuntor de vacío.", isCorrect: false },
        { textoRespuesta: "- Disyuntor de SF6.", isCorrect: true },
        { textoRespuesta: "- Disyuntor de contacto.", isCorrect: false },
      ]
    },
    {
      titulo: "La regulación de un transformador está influenciada por varios factores:",
      opciones: [
        { textoRespuesta: "- La impedancia de carga, la resistencia del devanado y la resistencia del núcleo.", isCorrect: false },
        { textoRespuesta: "- La resistencia del devanado, las características magnéticas del núcleo y la impedancia de carga.", isCorrect: true },
        { textoRespuesta: "- La resistencia del devanado y la resistencia del núcleo.", isCorrect: false },
        { textoRespuesta: "- Todas las anteriores son correctas.", isCorrect: false },
      ]
    },
    {
      titulo: "Los transformadores de corriente de protección se emplean en sistemas de protección\neléctrica para:",
      opciones: [
        { textoRespuesta: "- Detectar condiciones normales de falla, como cortocircuitos y sobrecargas.", isCorrect: false },
        { textoRespuesta: "- Reducir los niveles de corriente para garantizar la seguridad de las personas y equipos, así como el aislamiento galvánico entre el circuito de potencia y el circuito de protección, evitando así la circulación de corriente en la malla de tierra.", isCorrect: true },
        { textoRespuesta: "- Detectar condiciones normales y activar dispositivos de protección como relevadores y disyuntores.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las respuestas anteriores es correcta.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué tipo de interruptor se utiliza para cortar la corriente en caso de un cortocircuito o\nsobrecarga en una subestación eléctrica?",
      opciones: [
        { textoRespuesta: "- Seccionador.", isCorrect: false },
        { textoRespuesta: "- Transformador de corriente.", isCorrect: false },
        { textoRespuesta: "- Pararrayos.", isCorrect: false },
        { textoRespuesta: "- Disyuntor (o interruptor de potencia).", isCorrect: true },
      ]
    },
    {
      titulo: "¿Cuál es la principal función de los transformadores de medida y protección en\nuna subestación eléctrica?",
      opciones: [
        { textoRespuesta: "- Aumentar el voltaje para el transporte de energía eléctrica.", isCorrect: false },
        { textoRespuesta: "- Reducir los voltajes y corrientes a niveles seguros para los equipos de medición y protección.", isCorrect: true },
        { textoRespuesta: "- Proteger los cables de transmisión de energía contra sobrecargas.", isCorrect: false },
        { textoRespuesta: "- Almacenar energía para su uso posterior en caso de cortes de suministro.", isCorrect: false },
      ]
    },
    {
      titulo: "Alimentador que se caracteriza por ser trifásico y de calibres grandes (del orden de 2/0 a\n4/0 AWG) y generalmente con neutro.",
      opciones: [
        { textoRespuesta: "- Troncal Principal", isCorrect: true },
        { textoRespuesta: "- Ramal", isCorrect: false },
        { textoRespuesta: "- Derivación Lateral", isCorrect: false },
        { textoRespuesta: "- Derivación Sublateral", isCorrect: false },
      ]
    },
    {
      titulo: "Salen de las derivaciones laterales mediante cortacircuitos fusible para alimentar muy\npocos transformadores monofásicos. (fase - neutro).",
      opciones: [
        { textoRespuesta: "- Alimentador principal.", isCorrect: false },
        { textoRespuesta: "- Derivaciones laterales.", isCorrect: false },
        { textoRespuesta: "- Derivaciones Sublaterales.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Es un dispositivo capaz de abrir la carga (usualmente 200 A máximo para monofásicos y\n600 A máximo para trifásicos). Muchos interruptores aéreos no tienen esta capacidad\nmientras la mayoría de los suiches subterráneos si la tienen.",
      opciones: [
        { textoRespuesta: "- Loadbreak", isCorrect: true },
        { textoRespuesta: "- Suiches de enlace.", isCorrect: false },
        { textoRespuesta: "- Cuchillas de puesta a tierra tipo TEB.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Qué tipo de topología se muestra en la figura:",
      opciones: [
        { textoRespuesta: "- Tipo Radial.", isCorrect: false },
        { textoRespuesta: "- Anillo Primario.", isCorrect: false },
        { textoRespuesta: "- Sistema de red primaria.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "El nivel de voltaje del AP es el factor más importante que afecta el diseño, el costo y la\noperación. Algunos de los aspectos de diseño y operación afectados por el nivel de voltaje\ndel AP son:",
      opciones: [
        { textoRespuesta: "- Necesidad de poda de Arboles", isCorrect: false },
        { textoRespuesta: "- Régimen nominal de las SED", isCorrect: false },
        { textoRespuesta: "- Costo de equipos.", isCorrect: false },
        { textoRespuesta: "- Todas las anteriores.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Cuál no es un tipo de circuito de distribución primaria?",
      opciones: [
        { textoRespuesta: "- Sistema Trifásico, 3h servido de transformadores en Estrella.", isCorrect: true },
        { textoRespuesta: "- Sistema Trifásico - 4h con neutro uniaterrizado", isCorrect: false },
        { textoRespuesta: "- Laterales 2 Fases - 2h sin neutro.", isCorrect: false },
        { textoRespuesta: "- Todas las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Este tipo de instalación de cables directamente enterrados en el tendido del cable se\nrealiza desde un vehículo en movimiento y es posible cuando no se cruza con otras\nconstrucciones, bajo las cuales debe tenderse el cable, y no existan obstáculos para el\ndesplazamiento del vehículo a lo largo de la trayectoria.",
      opciones: [
        { textoRespuesta: "- Método de rodillos y poleas.", isCorrect: false },
        { textoRespuesta: "- Deposito de cable directamente sobre la zanja.", isCorrect: true },
        { textoRespuesta: "- Método manual.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Indique el tipo de configuración de cables directamente enterrados se encuentra en la\nfigura:",
      opciones: [
        { textoRespuesta: "- Dos circuitos de cables monopolares en la misma zanja", isCorrect: false },
        { textoRespuesta: "- Un circuito con cables monopolares espaciados horizontalmente. Configuración usual en instalaciones D.R.S.", isCorrect: false },
        { textoRespuesta: "- Dos circuitos de cables monopolares en la misma zanja.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Indique a que método de cables en Ductos Subterráneos pertenece la siguiente imagen:",
      opciones: [
        { textoRespuesta: "- Un circuito con cables monopolares espaciados horizontalmente (configuración usual en instalaciones DRS).", isCorrect: false },
        { textoRespuesta: "- Dos circuitos con cables monopolares espaciados horizontalmente y verticalmente.", isCorrect: false },
        { textoRespuesta: "- Dos circuitos con cables monopolares espaciados horizontalmente.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Este tipo de instalación es sin duda la más común, se usa en la gran mayoría de la\nindustria y en los sistemas de distribución comercial y en aquellos casos donde se\nrequiera una red flexible en la que la facilidad para efectuar los cambios (por reparación o\nampliación) en el sistema de cables sea de primordial importancia.",
      opciones: [
        { textoRespuesta: "- Cables en Ductos Subterráneos", isCorrect: true },
        { textoRespuesta: "- Cables directamente enterrados", isCorrect: false },
        { textoRespuesta: "- cables monopolares en la misma zanja.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Antes de la instalación de los cables, debe tenerse especial cuidado en los siguientes\nparámetros, los cuales son limitaciones impuestas por las propiedades físicas de los\ncables:",
      opciones: [
        { textoRespuesta: "- Longitud del cableado", isCorrect: false },
        { textoRespuesta: "- Líneas de enlace", isCorrect: false },
        { textoRespuesta: "- Grosor del cableado", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: true },
      ]
    },
    {
      titulo: "Las formas de conductores para SDS de uso más general en cables aislados de media\ntensión son:",
      opciones: [
        { textoRespuesta: "- Redondo concéntrico: donde los hilos son torcidos en capas concéntricas alrededor de un núcleo central.", isCorrect: false },
        { textoRespuesta: "- Redondo compacto: los hilos se compactan para disminuir sus dimensiones.", isCorrect: false },
        { textoRespuesta: "- Sectorial compacto: formado por un cable cuya sección es un sector circular (usado en cables tripolares).", isCorrect: false },
        { textoRespuesta: "- Todas las anteriores.", isCorrect: true },
      ]
    },
    {
      titulo: "Indique Cual de las siguientes opciones puede implicar reformas en los sistemas siendo el\ncaso las decisiones a que deben conducir las predicciones de la demanda se relacionan\ncon el aumento en la capacidad de transformación y transmisión.",
      opciones: [
        { textoRespuesta: "- Técnicas de selección de tamaños más económicos de transformadores de distribución, conductores secundarios y acometidas", isCorrect: false },
        { textoRespuesta: "- Reestructuración de los circuitos existentes, disminuyendo su extensión y trasladando a nuevos circuitos parte de la carga asignada", isCorrect: true },
        { textoRespuesta: "- Niveles deseables de regulación, pérdidas y caídas de voltaje momentáneos.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Indique Cual de las siguientes opciones es una red de distribución secundaria empleada\npara alimentar cargas residenciales y comerciales:",
      opciones: [
        { textoRespuesta: "- Sistema monofásico trifilar ( 1 fase - 3H) 120/240 V", isCorrect: true },
        { textoRespuesta: "- Sistema Trifásico, 3h servido de transformadores en Estrella.", isCorrect: false },
        { textoRespuesta: "- Sistema Bifásico - 4h con neutro uniaterrizado", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Que sistema es el que se muestra en la figura:",
      opciones: [
        { textoRespuesta: "- Sistema monofásico trifilar ( 1 fase - 3H) 120/240 V", isCorrect: false },
        { textoRespuesta: "- Sistema Trifásico, 3h servido de transformadores en Estrella.", isCorrect: false },
        { textoRespuesta: "- Sistema trifásico tretrafilar (3 -4H) 208/120 V O 214/123 V O 220/127 V O 480/277 V.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Las ventajas de un banco de transformadores de distribución son las siguientes:",
      opciones: [
        { textoRespuesta: "- Mejoramiento de la regulación de voltaje.", isCorrect: false },
        { textoRespuesta: "- Al alimentar un número grande de consumidores se emplean factores de diversidad de carga que induce ahorros en los kVA requeridos por el transformador de distribución.", isCorrect: false },
        { textoRespuesta: "- Reducción de caídas momentáneas de voltaje (flicker) debido a arranque de motores, pues las corrientes de arranque encuentran líneas de alimentación paralelas.", isCorrect: false },
        { textoRespuesta: "- Todas las anteriores.", isCorrect: true },
      ]
    },
    {
      titulo: "Que método de conexión en los bancos secundarios muestra la siguiente imagen:",
      opciones: [
        { textoRespuesta: "- Banco secundario protegido a la salida de los trasformadores de distribución", isCorrect: true },
        { textoRespuesta: "- Banco secundario protegido con breakers.", isCorrect: false },
        { textoRespuesta: "- Banco secundario con un fusible intermedio.", isCorrect: false },
        { textoRespuesta: "- Banco secundario con fusibles entre cargas.", isCorrect: false },
      ]
    },
    {
      titulo: "En redes secundarias subterráneas los transformadores se instalan:",
      opciones: [
        { textoRespuesta: "- Sobre postes o plataformas: entre 75 y 150 kVA en postes y de 300 kVA en plataformas.", isCorrect: false },
        { textoRespuesta: "- En Bóvedas", isCorrect: true },
        { textoRespuesta: "- Bajo tierra.", isCorrect: false },
        { textoRespuesta: "- Todas las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Si un circuito de distribución fuera instalado sin el equipo de protección de sobrecorriente,\nlas fallas podrían causar una falta de suministro de energía a todos los consumidores\nservidos desde el alimentador. Esto trae como consecuencia una reducción en los niveles\nde confiabilidad (continuidad del servicio) que son inaceptables. Para incrementar el nivel\nde confiabilidad en el suministro de energía eléctrica que opción se puede tomar:",
      opciones: [
        { textoRespuesta: "- Eliminar los armónicos instalando banco de capacitores en cada transformador de distribución", isCorrect: false },
        { textoRespuesta: "- Instalar equipo de protección contra sobrecorrientes de tal forma que reduzca el efecto de las fallas.", isCorrect: true },
        { textoRespuesta: "- Utilizando un método de instalación donde el circuito primario se encuentre en la topología Anillo.", isCorrect: false },
        { textoRespuesta: "- Todas las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Es una función del sistema de protección contra sobrecargas donde todos los elementos\ndel sistema de distribución tienen una curva de daño, de tal forma que, si se excede de\nésta, la vida útil de los elementos se ve considerablemente reducida.",
      opciones: [
        { textoRespuesta: "- Aislar fallas permanentes.", isCorrect: false },
        { textoRespuesta: "- Prevenir contra daño al equipo", isCorrect: true },
        { textoRespuesta: "- Minimizar el tiempo de localización de fallas.", isCorrect: false },
        { textoRespuesta: "- Todas las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Se tiene un conductor de cobre 𝜌I𝑇=20℃ = 1.7 × 10−8Ω ∙ m y 𝛼𝑇 = 3.9 × 10−3 ℃−𝟏, de un\nmetro de longitud conformado por 12 hilos. Cada hilo con un diámetro de 0.3373 cm. Para\neste conductor:\n(a) Determine los cmil.\n(b) Considere efecto espiral, tal que 𝛼𝑠𝑝 = 1.15 %. Con este dato, determine la\nresistencia DC a 50℃.\n(c) Se considera que a 60 Hz y 50℃, la potencia consumida es de 1.83 W a una\ncorriente de 100 A.\n(d) Determine el factor 𝛼𝑠𝑘",
      opciones: [
        { textoRespuesta: "- 𝑨⃑ = 𝟐𝟏𝟏.𝟔𝟔𝟔 𝐜𝐦𝐢l; 𝑹𝑫𝑪 𝟓𝟎℃ = 𝟏𝟕𝟓.𝟗𝟎 × 𝟏𝟎−𝟒 Ω; 𝜶𝒔𝒌 = 𝟒𝟎.𝟐𝟔 %", isCorrect: false },
        { textoRespuesta: "- 𝑨⃑ = 𝟐.𝟏𝟏𝟔𝟔𝟔 𝐜𝐦𝐢l; 𝑹𝑫𝑪 𝟓𝟎℃ = 𝟏.𝟕𝟓𝟗𝟎 × 𝟏𝟎−𝟒 Ω; 𝜶𝒔𝒌 = 𝟒𝟎.𝟐𝟔 %.", isCorrect: false },
        { textoRespuesta: "- 𝑨⃑ = 𝟐𝟏𝟏𝟔𝟔𝟔 𝐜𝐦𝐢l; 𝑹𝑫𝑪 𝟓𝟎℃ = 𝟏. 𝟕𝟓𝟗𝟎 × 𝟏𝟎−𝟒 Ω; 𝜶𝒔𝒌 = 𝟒. 𝟎𝟐𝟔 %.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Calcular el GMR para determinación de inductancia y capacitancia en mm de un conductor\ncuádruplex (ver Figura adjunta) de radio interno 𝑟 = 0.5 mm y espaciamiento entre\nconductores 𝑑 = 2 mm.",
      opciones: [
        { textoRespuesta: "- 𝐺𝑀𝑅𝐿 = 14.488 mm; 𝐺𝑀𝑅𝐶 = 1.5422 mm.", isCorrect: false },
        { textoRespuesta: "- 𝐺𝑀𝑅𝐿 = 1.4488 mm; 𝐺𝑀𝑅𝐶 = 154.22 mm.", isCorrect: true },
        { textoRespuesta: "- 𝐺𝑀𝑅𝐿 = 1.4488 mm; 𝐺𝑀𝑅𝐶 = 1.5422 mm.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Considere una línea trifásica con tres conductores de radio interno 𝑟 espaciados\nsimétricamente 𝐷𝑎𝑏 = 𝐷𝑏𝑐 = 𝐷𝑐𝑎 = 𝐷 en una configuración triangular como se muestra en\nla figura adjunta. Determine la inductancia en cada una de las fases. Suponga carga\nbalanceada.",
      opciones: [
        { textoRespuesta: "- 𝐿𝑎 = 𝜆𝑎/𝐼𝑎 = 2ℓ/3 × 10−7 ln 𝐷/𝑟 ′; 𝐿𝑏 = 𝜆𝑏/𝐼𝑏 = 2ℓ/3 × 10−7 ln 𝐷/𝑟 ′; 𝐿𝑐 = 𝜆𝑐/𝐼𝑐 = 2ℓ/3 × 10−7 ln 𝐷/𝑟 ′.", isCorrect: false },
        { textoRespuesta: "- 𝐿𝑎 = 𝜆𝑎/𝐼𝑎 = ℓ/2 × 10−7 ln 𝐷/𝑟 ′; 𝐿𝑏 = 𝜆𝑏/𝐼𝑏 = ℓ/2 × 10−7 ln 𝐷/𝑟 ′; 𝐿𝑐 = 𝜆𝑐/𝐼𝑐 = ℓ/2 × 10−7 ln 𝐷/𝑟 ′.", isCorrect: true },
        { textoRespuesta: "- 𝐿𝑎 = 𝜆𝑎/𝐼𝑎 = 2ℓ × 10−7 ln 𝐷/𝑟 ′; 𝐿𝑏 = 𝜆𝑏/𝐼𝑏 = 2ℓ × 10−7 ln 𝐷/𝑟 ′; 𝐿𝑐 = 𝜆𝑐/𝐼𝑐 = 2ℓ × 10−7 ln 𝐷/𝑟 ′.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Determinar la inductancia en la fase 𝑎 de un sistema trifásico balanceado. Considere que\nlas tres líneas están transpuestas como se muestra en la figura adjunta.",
      opciones: [
        { textoRespuesta: "- ; ;", isCorrect: false },
        { textoRespuesta: "- ; ;", isCorrect: false },
        { textoRespuesta: "- ; ;", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Se tiene una línea trifásica transpuesta conformada por agrupamientos por fase como se\nmuestra en a la figura adjunta. El agrupamiento tiene 403 𝑚𝑚2 de área y está\nconformado por 3 conductores ACSR de radio 2.4704 𝑐𝑚 y están distanciados entre ellos\nuna distancia 𝑑 = 2.775 𝑐𝑚. Determine la reactancia inductiva por fase de la línea para\nuna frecuencia de 60 Hz. Considere que la línea recorre una distancia de 200 km.",
      opciones: [
        { textoRespuesta: "- 𝑿𝑳 = 𝟏.𝟎𝟓𝟔𝟕 Ω.", isCorrect: false },
        { textoRespuesta: "- 𝑿𝑳 = 𝟏𝟎.𝟓𝟔𝟕 Ω.", isCorrect: false },
        { textoRespuesta: "- 𝑿𝑳 = 𝟏𝟎𝟓. 𝟔𝟕 Ω.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "La figura adjunta muestra una línea transpuesta de transmisión trifásica de doble circuito.\nEl espacio entre par de conductores es de 𝑑 = 45 cm. Determine la inductancia si la línea\nrecorre 1 km, y se conoce que los conductores internos tienen un diámetro de 4.4069 cm",
      opciones: [
        { textoRespuesta: "- 𝐿 = 47.65 H.", isCorrect: false },
        { textoRespuesta: "- 𝐿 = 0.4765 H.", isCorrect: true },
        { textoRespuesta: "- 𝐿 = 4.765 H.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Se presenta una línea de transmisión de aluminio (𝜌𝐴𝑙 20°𝐶 = 2.8 × 10−8 Ωm y 𝛼𝐴𝑙 =\n1/228°𝐶 −1), 80 hilos, 100 km de largo, 𝛼𝑠𝑝 = 2.35%, con pérdidas eléctricas máximas\nde 200 kW (trifásico) a una corriente de entrega de 120 A por fase trabajando a una\ntemperatura de 50°C. De repente, ocurre una falla sobre dicha línea y la mitad de esta\nlínea es reemplazada por un conductor de cobre reforzado (𝜌𝐶𝑢 20°𝐶 = 1.7 × 10−8 Ωm\ny 𝛼𝐶𝑢 = 1/250°𝐶 −1), 𝛼𝑠𝑝 = 2.00%, con pérdidas eléctricas máximas de 300 kW\n(trifásico) a una corriente de entrega de 100 A por fase trabajando a una temperatura de\n50°C:\na) Determine los cmil en común que deben tener dichos conductores para medir\nuna resistencia (DC) promedio desde los extremos del conductor compuesto de\n13.90 Ω a una temperatura de 50°C.\nb) Determine el coeficiente por efecto piel del conductor compuesto.\nNota: Asumir que el valor de las perdidas eléctricas es independiente a la longitud de la\nL/T.\n✓\n✓\n187\nUNIVERSIDAD TÉCNICA “LUIS VARGAS TORRES”\nFACULTAD DE INGENIERÍAS Y TECNOLOGÍAS\nCARRERA DE INGENIERIA MECÁNICA\nAREA ACADÉMICA",
      opciones: [
        { textoRespuesta: "- 𝐴 = 3.6491 × 105 cmil; 𝛼𝑠𝑘 = 0.1524.", isCorrect: false },
        { textoRespuesta: "- 𝐴 = 3.6491 × 105 cmil; 𝛼𝑠𝑘 = 0.0524.", isCorrect: true },
        { textoRespuesta: "- 𝐴 = 36.491 × 105 cmil; 𝛼𝑠𝑘 = 0.0524.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Una línea transpuesta trifásica se compone de un ACSR 159,000 cmil, 54/19 conductor\nLapwing por fase con un espaciado horizontal plano de 8 metros como se muestra en la figura\nadjunta izquierda). El GMR de cada conductor es 1.515 cm.\n(a) Determine la inductancia por fase por kilómetro de la línea.\n(b) Esta línea debe ser reemplazada por un haz de dos conductores con un espacio de 8 m\nmedido desde el centro de los haces como se muestra en la figura adjunta (derecha). El\nespacio entre los conductores en el haz es de 40 cm. Si la inductancia de línea por fase\nes el 77 por ciento de la inductancia en la parte (a), determine el GMR individual (1 hilo)\npara determinar el conductor que se debe utilizar.",
      opciones: [
        { textoRespuesta: "- 𝐿/ℓ = 1.3 × 10 −3 𝐻/𝑘𝑚; 𝐺𝑀𝑅 = 1.15 𝑐m.", isCorrect: true },
        { textoRespuesta: "- 𝐿/ℓ = 1.36 × 10 −3 𝐻/𝑘𝑚; 𝐺𝑀𝑅 = 11.5 𝑐m.", isCorrect: false },
        { textoRespuesta: "- 𝐿/ℓ = 1.35 × 10 −3 𝐻/𝑘𝑚; 𝐺𝑀𝑅 = 1.15 𝑐m.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Se desea diseñar una torre de transmisión transpuesta de 230 kV, capacidad de 500\nMVA, frecuencia 60 Hz, 100 km de longitud, y cuya configuración de fase se muestra en\nla figura adjunta izquierda (note que la configuración interna de los conductores es\ndesconocida). Considerando como base los nominales de la línea de transmisión, se\ndesea:\n(a) Determinar el radio interno que tener los conductores para cada una de las\nconfiguraciones mostradas en la figura adjunta (derecha), tal que, la reactancia\ninductiva la línea de transmisión por fase sea 0.30 por unidad.\n(b) De manera analítica, el costo por fase de la línea de transmisión viene dado por la\nexpresión matemática 𝐶𝑜𝑠𝑡𝑜 = 𝑘𝑁𝑐𝑟𝑐, donde 𝑘 es una constante cuyo valor fijo es\nde 100 [M£/m], 𝑁𝑐 representa el número total de conductores internos, y 𝑟𝑐 el radio\ninterno del conductor. Se solicita determinar la configuración (justificado con\ncálculos) más rentable por fase en términos económicos (menos costoso).",
      opciones: [
        { textoRespuesta: "- 𝑟𝑥 = 1.32 m; 𝑟𝑦 = 0.0114 m; La configuración más rentable es la (i).", isCorrect: false },
        { textoRespuesta: "- 𝑟𝑥 = 0.0132 m; 𝑟𝑦 = 0.0114 m; La configuración no es rentable es la (i). ✓ ✓ 189 UNIVERSIDAD TÉCNICA “LUIS VARGAS TORRES” FACULTAD DE INGENIERÍAS Y TECNOLOGÍAS CARRERA DE INGENIERIA MECÁNICA AREA ACADÉMICA", isCorrect: false },
        { textoRespuesta: "- 𝑟𝑥 = 0.0132 m; 𝑟𝑦 = 0.0114 m; La configuración más rentable es la (i).", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "La figura adjunta muestra una línea de transmisión de doble circuito transpuesta y\nsimétrica de 230 kV, capacidad de 800 MVA, frecuencia 60 Hz. La línea de transmisión\nse constituye por agrupamiento de conductores Drake como se muestra en la figura\nadjunta. Las características del conductor Drake se presentan en la tabla adjunta. Si se\nconoce que la línea de transmisión recorre 1000 km, determine:\n(a) la distancia media geométrica por fase;\n(b) la inductancia por fase; la reactancia inductiva por fase en por unidad, tomando\ncomo base los nominales de la línea de transmisión.",
      opciones: [
        { textoRespuesta: "- 𝐺𝑀𝐷𝑇 = 9.76 m; 𝐿 = 0.60 H ; 𝑋𝐿.𝑝𝑢 = 3.42.", isCorrect: true },
        { textoRespuesta: "- 𝐺𝑀𝐷𝑇 = 9.76 m; 𝐿 = 0.80 H ; 𝑋𝐿.𝑝𝑢 = 3.72.", isCorrect: false },
        { textoRespuesta: "- 𝐺𝑀𝐷𝑇 = 9.76 m; 𝐿 = 0.90 H ; 𝑋𝐿.𝑝𝑢 = 3.42.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Considere una línea trifásica con tres conductores, cada uno con radio 𝑟, longitud ℓ\nespaciados simétricamente (𝐷𝑎𝑏 = 𝐷𝑏𝑐 = 𝐷𝑐𝑎 = 𝐷) en una configuración triangular como\nse muestra en la adjunta. Determine la capacitancia de la fase 𝑎 con respecto al neutro.\nSuponga carga balanceada.",
      opciones: [
        { textoRespuesta: "-", isCorrect: true },
        { textoRespuesta: "- 0<D", isCorrect: false },
        { textoRespuesta: "- D>r", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "Se tiene una línea trifásica transpuesta conformada por agrupamientos por fase como se\nmuestra en a la figura adjunta. El agrupamiento tiene 403 𝑚𝑚2 de área y está conformado\npor 3 conductores ACSR de radio 2.4704 𝑚𝑚 y están distanciados entre ellos una\ndistancia 𝑑 = 2.775 𝑐𝑚. Determine la reactancia capacitiva por fase de la línea para una\nfrecuencia de 60 Hz. Considere que la línea recorre una distancia de 200 km.",
      opciones: [
        { textoRespuesta: "- 𝑿𝑪 = 𝟏𝟔𝟓𝟏. 𝟓𝟗 Ω.", isCorrect: true },
        { textoRespuesta: "- 𝑿𝑪 = 𝟏𝟔.𝟓𝟏𝟓𝟗 Ω.", isCorrect: false },
        { textoRespuesta: "- 𝑿𝑪 = 𝟏𝟔𝟓.𝟏𝟓𝟗 Ω.", isCorrect: false },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es la gestión de mantenimiento?",
      opciones: [
        { textoRespuesta: "- Acciones combinadas como son las técnicas, administrativas y de gestión realizadas durante el ciclo de vida de un elemento.", isCorrect: false },
        { textoRespuesta: "- Actividades estructuradas y documentadas de tareas que incluyen las acciones, procedimientos, recursos y duración necesaria para realizar el mantenimiento.", isCorrect: false },
        { textoRespuesta: "- Todas las actividades de la gestión que se utilizan para que el equipo no pare por fallas o averías.", isCorrect: false },
        { textoRespuesta: "- Actividades de la gestión que determinan los objetivos, las estrategias y las responsabilidades del mantenimiento.", isCorrect: true },
      ]
    },
    {
      titulo: "¿Cuál no sería una responsabilidad de la gestión de mantenimiento?",
      opciones: [
        { textoRespuesta: "- Asegurar la disponibilidad del elemento para la función requerida.", isCorrect: false },
        { textoRespuesta: "- Considerar cualquier impacto sobre el medio ambiente.", isCorrect: false },
        { textoRespuesta: "- Establecer las frecuencias de cambios y su teoría de envejecimiento.", isCorrect: true },
        { textoRespuesta: "- Tomar en cuenta los requerimientos de seguridad para personas.", isCorrect: false },
      ]
    },
    {
      titulo: "¿En qué campos se toman decisiones en la actualidad debido a las modificaciones en las\ncaracterísticas de las actividades industriales y sus diferentes ritmos de desarrollo?",
      opciones: [
        { textoRespuesta: "- Calidad Y Productividad.", isCorrect: true },
        { textoRespuesta: "- Calidad Y Mantenibilidad.", isCorrect: false },
        { textoRespuesta: "- Calidad Y Mantenimiento.", isCorrect: false },
        { textoRespuesta: "- Calidad Y Tpm.", isCorrect: false },
      ]
    },
    {
      titulo: "Identifique una de las funciones principales de mantenimiento",
      opciones: [
        { textoRespuesta: "- Mantener reparar y revisar los equipos e instalaciones.", isCorrect: true },
        { textoRespuesta: "- Dar la máxima seguridad para que no se vayan a presentar paros en la producción.", isCorrect: false },
        { textoRespuesta: "- Mantener los equipos de seguridad y demás sistemas de protección.", isCorrect: false },
        { textoRespuesta: "- Mantener el equipo en su máxima eficiencia de operación.", isCorrect: false },
      ]
    },
    {
      titulo: "¿A quién se le conoce como \"el eslabón perdido\" de la estrategia empresarial?",
      opciones: [
        { textoRespuesta: "- El Mantenimiento.", isCorrect: true },
        { textoRespuesta: "- El TPM.", isCorrect: false },
        { textoRespuesta: "- La Producción.", isCorrect: false },
        { textoRespuesta: "- La Operación.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es la interpretación correcta de un índice de Eficiencia Global de la Planta (OEE)\ndel 72% en una empresa industrial que implementa el Mantenimiento Productivo Total\n(TPM)?",
      opciones: [
        { textoRespuesta: "- La planta opera de manera óptima sin necesidad de mejoras.", isCorrect: false },
        { textoRespuesta: "- Existe margen de mejora, ya que un OEE del 72% indica pérdidas en disponibilidad, calidad o rendimiento.", isCorrect: true },
        { textoRespuesta: "- El TPM ha alcanzado su máximo nivel de eficiencia en la empresa.", isCorrect: false },
        { textoRespuesta: "- Un OEE del 72% significa que la producción se encuentra en estado crítico y debe detenerse.", isCorrect: false },
      ]
    },
    {
      titulo: "Disminuir el tiempo de parada de planta por averías imprevistas que impidan cumplir con\nlos planos de producción es un objetivo del RCM. ¿Cuál es el principal objetivo de este\nenfoque?",
      opciones: [
        { textoRespuesta: "- Disminuir los costes del mantenimiento.", isCorrect: false },
        { textoRespuesta: "- Aumentar la disponibilidad de la planta.", isCorrect: true },
        { textoRespuesta: "- Aumentar la fiabilidad de la planta.", isCorrect: false },
        { textoRespuesta: "- Mantener la vida útil de los activos de la planta.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se llama la estrategia que minimiza el efecto conjunto de los componentes de\ncosto, es decir, identifica el punto donde el costo de reparación es menor que el costo de\npérdida de producción?",
      opciones: [
        { textoRespuesta: "- Estrategia óptima del TPM.", isCorrect: false },
        { textoRespuesta: "- Estrategia óptima de Operación.", isCorrect: false },
        { textoRespuesta: "- Estrategia óptima de mantenimiento.", isCorrect: true },
        { textoRespuesta: "- Estrategia óptima de confiablidad.", isCorrect: false },
      ]
    },
    {
      titulo: "En la filosofía o técnica de las 5S implementadas en la empresa, se organizan las cosas\nsegún el criterio de seguridad, para evitar que se caigan, estorben, o sean peligrosas.\nEsta práctica corresponde a:",
      opciones: [
        { textoRespuesta: "- Shitsuke.", isCorrect: false },
        { textoRespuesta: "- Seiton.", isCorrect: true },
        { textoRespuesta: "- Seiso.", isCorrect: false },
        { textoRespuesta: "- Seiketsu.", isCorrect: false },
      ]
    },
    {
      titulo: "¿A qué norma corresponde el concepto que define el conjunto de actividades técnicas y\nadministrativas cuya finalidad es conservar o restituir un ítem en las condiciones que le\npermitirán desarrollar sus funciones?",
      opciones: [
        { textoRespuesta: "- Norma Francesa AFNOR.", isCorrect: false },
        { textoRespuesta: "- Norma Española AEM.", isCorrect: false },
        { textoRespuesta: "- Norma inglesa BS 3811.", isCorrect: true },
        { textoRespuesta: "- Norma Americana MIL – STD -721 C.", isCorrect: false },
      ]
    },
    {
      titulo: "Existen variados sistemas para acometer el servicio de mantenimiento de las instalaciones\nen operación, tal como fueron concebidos, como sobre los que se encuentran en etapa de\ndiseño, introduciendo en estos últimos, las modalidades de simplicidad en el diseño,\ndiseño robusto, análisis de su mantenibilidad, diseño sin mantenimiento, etc.",
      opciones: [
        { textoRespuesta: "- Correctivo, practico, predictivo, mejorativo, administrativo, autónomo.", isCorrect: false },
        { textoRespuesta: "- Autónomo, practico, preventivo, predictivo, productivo, mejorativo.", isCorrect: false },
        { textoRespuesta: "- Correctivo, preventivo, autónomo, predictivo y productivo total.", isCorrect: true },
        { textoRespuesta: "- Correctivo, preventivo, autónomo, predictivo y administrativo total.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se denomina la actividad sistemática, predefinida y repetitiva de mantenimiento\nque garantiza la continuidad?",
      opciones: [
        { textoRespuesta: "- Mantenimiento correctivo.", isCorrect: false },
        { textoRespuesta: "- Mantenimiento predictivo.", isCorrect: false },
        { textoRespuesta: "- Mantenimiento preventivo.", isCorrect: true },
        { textoRespuesta: "- Mantenimiento previsto.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué función tiene una influencia decisiva para que la empresa cumpla con la producción\nde una cantidad determinada de productos, con la calidad requerida, en el tiempo\noportuno, a un costo mínimo y dentro de condiciones de seguridad y moral del grupo\nlaboral?",
      opciones: [
        { textoRespuesta: "- TPM.", isCorrect: true },
        { textoRespuesta: "- Mantenimiento.", isCorrect: false },
        { textoRespuesta: "- Mantenibilidad.", isCorrect: false },
        { textoRespuesta: "- Costo.", isCorrect: false },
      ]
    },
    {
      titulo: "Las áreas de ventas, producción, logística y mantenimiento no solo se integran a través de\ncomputadoras, sino también mediante sistemas de producción como:",
      opciones: [
        { textoRespuesta: "- ISO 9001.", isCorrect: false },
        { textoRespuesta: "- ISO 14000.", isCorrect: false },
        { textoRespuesta: "- Justo a tiempo.", isCorrect: true },
        { textoRespuesta: "- TPM.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se denomina el conjunto de acciones preventivas destinadas a la conservación de\nlos recursos físicos, mediante intervenciones periódicas que detectan y corrigen\nsituaciones anormales para minimizar paros o desgaste acelerado?",
      opciones: [
        { textoRespuesta: "- Redacción de mano de obra.", isCorrect: false },
        { textoRespuesta: "- Manejo de materiales.", isCorrect: false },
        { textoRespuesta: "- Sistematización del mantenimiento.", isCorrect: true },
        { textoRespuesta: "- Codificación de equipos.", isCorrect: false },
      ]
    },
    {
      titulo: "La ………………………lleva implica la capacidad de una instalación (procesos, tecnología,\ngente) para cumplir su función o el propósito que se espera de ella, dentro de sus límites\nde diseño y bajo un especifico contexto operacional",
      opciones: [
        { textoRespuesta: "- Confiabilidad.", isCorrect: true },
        { textoRespuesta: "- Confiabilidad de los procesos.", isCorrect: false },
        { textoRespuesta: "- Confiabilidad operacional.", isCorrect: false },
        { textoRespuesta: "- Confiabilidad de los equipos.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué dos funciones administrativas permiten reducir los costos de reparación de\nmáquinas al minimizar los tiempos de parada, asegurando que los equipos, herramientas,\ntécnicos y repuestos estén listos para la parada de la máquina y no al revés?",
      opciones: [
        { textoRespuesta: "- La planeación y programación de mantenimiento.", isCorrect: true },
        { textoRespuesta: "- El control del mantenimiento.", isCorrect: false },
        { textoRespuesta: "- La dirección y programación de mantenimiento.", isCorrect: false },
        { textoRespuesta: "- Integración y control del mantenimiento.", isCorrect: false },
      ]
    },
    {
      titulo: "En el sistema de importancia crítica, ¿a qué se refiere la clase B o importancia crítica 2?",
      opciones: [
        { textoRespuesta: "- Equipo cuya parada interrumpe el proceso productivo.", isCorrect: true },
        { textoRespuesta: "- Equipo que no debe fallar.", isCorrect: false },
        { textoRespuesta: "- Equipo que no debería fallar.", isCorrect: false },
        { textoRespuesta: "- Equipo que no se utiliza con frecuencia.", isCorrect: false },
      ]
    },
    {
      titulo: "Calcular 𝐼𝐵, 𝐼𝐶, 𝑉𝐶, 𝑉𝐶𝐸, 𝑉𝐵, 𝑉𝐸, teniendo un 𝛽= 100, además indicar que configuración es:",
      opciones: [
        { textoRespuesta: "- 𝐼𝐵= 60,75𝑢𝐴; 𝐼𝐶= 6.08𝑚𝐴; 𝑉𝐶𝐸= 12.85𝑉; 𝑉𝐶= 12.85𝑉; 𝑉𝐵= 0.7𝑉; 𝑉𝐸= 0; Fija.", isCorrect: true },
        { textoRespuesta: "-𝐼𝐵= 60,75𝑢𝐴; 𝐼𝐶= 6.08𝑚𝐴; 𝑉𝐶𝐸= 12.85𝑉; 𝑉𝐶= 12.85𝑉; 𝑉𝐵= 0.7𝑉; 𝑉𝐸= 0; Estabilizada en el emisor.", isCorrect: false },
        { textoRespuesta: "- 𝐼𝐵= 60,75𝑢𝐴; 𝐼𝐶= 6.08𝑚𝐴; 𝑉𝐶𝐸= 12.85𝑉; 𝑉𝐶= 12.85𝑉; 𝑉𝐵= 0.7𝑉; 𝑉𝐸= 0.7𝑉; Fija.", isCorrect: false },
        { textoRespuesta: "-𝐼𝐵= 60,75𝑢𝐴; 𝐼𝐶= 6.08𝑚𝐴; 𝑉𝐶𝐸= 12.85𝑉; 𝑉𝐶= 12.85𝑉; 𝑉𝐵= 0.7𝑉; 𝑉𝐸= 0.7𝑉; Estabilizada en el emisor.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuál es la diferencia entre proyecto y proyecto de inversión?",
      opciones: [
        { textoRespuesta: "- Proyecto es viable con la asignación de recursos, mientras que un proyecto de inversión necesita destacar una necesidad.", isCorrect: false },
        { textoRespuesta: "- Proyecto de inversión cubre necesidades básicas del ser humano, mientras que un proyecto puede desarrollar un bien común.", isCorrect: false },
        { textoRespuesta: "- Un proyecto busca la solución inteligente al planteamiento de un problema, mientras que un proyecto de inversión se le asigna recursos e insumos para que produzca un bien o servicio.", isCorrect: true },
        { textoRespuesta: "- Ninguna de las anteriores.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué se entiende por “formulación de proyectos” y cuál es su relevancia para la toma de\ndecisiones de financiamiento?",
      opciones: [
        { textoRespuesta: "- Es la ejecución operativa del proyecto sin relación con el financiamiento.", isCorrect: false },
        { textoRespuesta: "- Es el proceso de identificar, definir y estructurar una idea de inversión, fundamental para evaluar su viabilidad y decidir el financiamiento.", isCorrect: true },
        { textoRespuesta: "- Es únicamente la elaboración de un plan de marketing.", isCorrect: false },
        { textoRespuesta: "- Es el seguimiento post implementación.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuáles son las etapas fundamentales en la formulación de un proyecto de inversión?",
      opciones: [
        { textoRespuesta: "- Diagnóstico, planificación, ejecución y evaluación.", isCorrect: false },
        { textoRespuesta: "-Identificación, preinversión (perfil, factibilidad), evaluación y seguimiento/implementación.", isCorrect: true },
        { textoRespuesta: "- Diseño, producción y distribución.", isCorrect: false },
        { textoRespuesta: "- Solo evaluación financiera.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se define y cuál es la importancia del estudio de factibilidad en un proyecto?",
      opciones: [
        { textoRespuesta: "- Es un análisis superficial que descarta la inversión sin mayor detalle.", isCorrect: false },
        { textoRespuesta: "- Es un análisis profundo que determina la viabilidad técnica, económica, financiera, social y ambiental, reduciendo la incertidumbre de la inversión.", isCorrect: true },
        { textoRespuesta: "- Solo analiza los aspectos financieros.", isCorrect: false },
        { textoRespuesta: "- Se centra únicamente en la parte técnica.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué componentes integran un estudio de mercado y cómo se aplican en la evaluación de\nproyectos?",
      opciones: [
        { textoRespuesta: "- Solo análisis de la competencia.", isCorrect: false },
        { textoRespuesta: "- Análisis de la demanda, oferta, precios y estrategias de comercialización, para estimar ventas y aceptación del producto.", isCorrect: true },
        { textoRespuesta: "- Exclusivamente análisis de precios.", isCorrect: false },
        { textoRespuesta: "- Únicamente la segmentación del mercado.", isCorrect: false },
      ]
    },
    {
      titulo: "¿De qué manera se realiza el diagnóstico inicial de un proyecto antes de su\nformulación?",
      opciones: [
        { textoRespuesta: "- Solo se revisan los estados financieros de la empresa.", isCorrect: false },
        { textoRespuesta: "- Mediante la recolección y análisis de datos del entorno (social, económico, tecnológico y ambiental) para identificar problemas y oportunidades.", isCorrect: true },
        { textoRespuesta: "- Con una encuesta a clientes potenciales únicamente.", isCorrect: false },
        { textoRespuesta: "- A través de la implementación directa del proyecto.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué herramientas se utilizan para determinar la inversión inicial necesaria en un\nproyecto?",
      opciones: [
        { textoRespuesta: "- Únicamente proyecciones de ventas.", isCorrect: false },
        { textoRespuesta: "- Análisis de costos, estimaciones de insumos, presupuestos de inversión y cálculos de desembolsos iniciales.", isCorrect: true },
        { textoRespuesta: "- Solo análisis de rentabilidad.", isCorrect: false },
        { textoRespuesta: "- Exclusivamente el estudio de mercado.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se calcula y qué significado tiene el Valor Presente Neto (VPN) en la evaluación de\nproyectos?",
      opciones: [
        { textoRespuesta: "- Se calcula sumando los flujos futuros; un valor negativo indica rentabilidad.", isCorrect: false },
        { textoRespuesta: "- Se calcula descontando los flujos futuros a valor presente y restando la inversión inicial; un VPN positivo indica que el proyecto genera valor neto.", isCorrect: true },
        { textoRespuesta: "- Es la suma de los ingresos sin descontar la inversión.", isCorrect: false },
        { textoRespuesta: "- Solo se utiliza para determinar el tiempo de recuperación.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué rol juega la Tasa Interna de Retorno (TIR) en el análisis financiero de un proyecto?",
      opciones: [
        { textoRespuesta: "- Es la tasa que, al aplicarse, deja el VPN en cero, representando el rendimiento esperado del proyecto.", isCorrect: true },
        { textoRespuesta: "- Es el porcentaje fijo de interés que debe pagar el proyecto.", isCorrect: false },
        { textoRespuesta: "- Mide únicamente el riesgo ambiental.", isCorrect: false },
        { textoRespuesta: "- No tiene importancia en la evaluación financiera.", isCorrect: false },
      ]
    },
    {
      titulo: "¿En qué consiste el período de recuperación de la inversión (PRI) y cuáles son sus\nlimitaciones?",
      opciones: [
        { textoRespuesta: "- Es el tiempo que se tarda en recuperar la inversión inicial sin considerar el valor del dinero en el tiempo ni los beneficios posteriores.", isCorrect: true },
        { textoRespuesta: "- Es el periodo en que se obtiene el máximo beneficio.", isCorrect: false },
        { textoRespuesta: "- Es el tiempo total de vida útil del proyecto.", isCorrect: false },
        { textoRespuesta: "- Es el período donde se generan todos los ingresos del proyecto.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué es el análisis de sensibilidad y cómo contribuye a identificar riesgos en la\nevaluación de proyectos?",
      opciones: [
        { textoRespuesta: "- Es un análisis que solo evalúa el entorno legal del proyecto.", isCorrect: false },
        { textoRespuesta: "- Es la evaluación de cómo varían los resultados del proyecto ante cambios en variables clave, permitiendo identificar los parámetros críticos y preparar planes de contingencia.", isCorrect: true },
        { textoRespuesta: "- Se utiliza únicamente para calcular el VPN.", isCorrect: false },
        { textoRespuesta: "- Es un análisis que determina el tamaño de la inversión.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuáles son los principales riesgos asociados a un proyecto y qué estrategias se\npueden aplicar para mitigarlos?",
      opciones: [
        { textoRespuesta: "- Riesgos únicamente técnicos, mitigados solo con mantenimiento.", isCorrect: false },
        { textoRespuesta: "- Riesgos de mercado, técnicos, financieros y ambientales/sociales; estrategias como análisis de escenarios, diversificación, seguros, reservas de contingencia y planes de mitigación.", isCorrect: true },
        { textoRespuesta: "- Solo riesgos financieros, que se solucionan con más inversión.", isCorrect: false },
        { textoRespuesta: "- Únicamente riesgos ambientales, mitigados con estudios de impacto.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se integran los aspectos técnicos, económicos y financieros en la formulación de\nun proyecto?",
      opciones: [
        { textoRespuesta: "- Se realizan de forma aislada sin relación entre sí.", isCorrect: false },
        { textoRespuesta: "- Se integran mediante estudios interdisciplinarios que evalúan la viabilidad técnica, la factibilidad económica y la evaluación financiera, ofreciendo una visión holística del proyecto.", isCorrect: true },
        { textoRespuesta: "- Solo se consideran los aspectos financieros.", isCorrect: false },
        { textoRespuesta: "- Únicamente se evalúa el aspecto técnico.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué diferencias existen entre la evaluación ex-ante y ex-post de proyectos?",
      opciones: [
        { textoRespuesta: "- Ex-ante se realiza después de la implementación y ex-post antes de la ejecución.", isCorrect: false },
        { textoRespuesta: "- Ex-ante se efectúa antes de la implementación utilizando proyecciones; ex-post se realiza después de la ejecución utilizando datos reales para comparar resultados.", isCorrect: true },
        { textoRespuesta: "- Ambas se realizan al mismo tiempo.", isCorrect: false },
        { textoRespuesta: "- Solo existe la evaluación ex-ante en el sector privado.", isCorrect: false },
      ]
    },
    {
      titulo: "¿De qué manera se incorporan los criterios de impacto ambiental en la evaluación de un\nproyecto?",
      opciones: [
        { textoRespuesta: "- Se ignoran en la evaluación financiera.", isCorrect: false },
        { textoRespuesta: "- Se incluyen mediante estudios de impacto ambiental que analizan efectos sobre recursos naturales, emisiones, residuos y se proponen medidas de mitigación.", isCorrect: true },
        { textoRespuesta: "- Se consideran solo si el proyecto es de gran envergadura.", isCorrect: false },
        { textoRespuesta: "- Se basan únicamente en la opinión del inversionista.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué importancia tiene el análisis de costos y beneficios en la toma de decisiones para el\nfinanciamiento?",
      opciones: [
        { textoRespuesta: "- No es relevante para determinar la rentabilidad.", isCorrect: false },
        { textoRespuesta: "- Permite cuantificar y comparar ingresos y egresos, fundamentando la rentabilidad y justificando la asignación de recursos financieros.", isCorrect: true },
        { textoRespuesta: "- Solo se utiliza para calcular la TIR.", isCorrect: false },
        { textoRespuesta: "- Se aplica únicamente en proyectos públicos.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cómo se estructura un flujo de caja proyectado y por qué es esencial en la evaluación\nfinanciera?",
      opciones: [
        { textoRespuesta: "- Se estructura de forma aleatoria y no influye en la evaluación.", isCorrect: false },
        { textoRespuesta: "- Se organiza listando ingresos y egresos por periodos futuros, lo que permite evaluar la liquidez, rentabilidad y capacidad de pago del proyecto.", isCorrect: true },
        { textoRespuesta: "- Solo se considera la inversión inicial.", isCorrect: false },
        { textoRespuesta: "- Se elabora únicamente para proyectos de corto plazo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué papel juegan los estados financieros en la verificación de la viabilidad de un\nproyecto?",
      opciones: [
        { textoRespuesta: "- Solo se utilizan para calcular la TIR.", isCorrect: false },
        { textoRespuesta: "- Ofrecen una visión detallada de la situación económica, permitiendo analizar la solidez, rentabilidad y riesgos del proyecto.", isCorrect: true },
        { textoRespuesta: "- No se consideran en la evaluación de proyectos.", isCorrect: false },
        { textoRespuesta: "- Se usan exclusivamente en proyectos de inversión pública.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Cuáles son las fuentes de financiamiento más comunes para proyectos de inversión y\ncuáles son sus características?",
      opciones: [
        { textoRespuesta: "- Solo recursos propios, sin necesidad de financiamiento externo.", isCorrect: false },
        { textoRespuesta: "- Recursos propios, créditos bancarios, capital de riesgo y subvenciones; cada uno con distintos costos, plazos y requisitos.", isCorrect: true },
        { textoRespuesta: "- Únicamente financiamiento público sin garantías.", isCorrect: false },
        { textoRespuesta: "- Exclusivamente capital de riesgo.", isCorrect: false },
      ]
    },
    {
      titulo: "¿Qué se entiende por apalancamiento financiero y cómo afecta la rentabilidad del\nproyecto?",
      opciones: [
        { textoRespuesta: "- Es el uso exclusivo de recursos propios, sin deuda.", isCorrect: false },
        { textoRespuesta: "- Es el uso de deuda para financiar la inversión; puede aumentar la rentabilidad sobre el capital propio si el rendimiento del proyecto supera el costo de la deuda, aunque incrementa el riesgo.", isCorrect: true },
        { textoRespuesta: "- No influye en la rentabilidad.", isCorrect: false },
        { textoRespuesta: "- Solo se utiliza en proyectos del sector público.", isCorrect: false },
      ]
    },
  ];
  
  export default preguntas;
  