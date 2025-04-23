const preguntas = [
  {
    titulo: "Seleccione el literal correcto. Cisco Packet Tracer es una herramienta de:",
    opciones: [
      { textoRespuesta: "enseñanza y aprendizaje de softwares que ofrece una combinación única de experiencias de programación y visualización realistas, evaluación, capacidades de creación de actividades y colaboración multiusuario y oportunidades de competencia.", isCorrect: false },
      { textoRespuesta: "enseñanza y aprendizaje de tecnología de redes que ofrece una combinación única de experiencias de simulación y visualización realistas, evaluación, capacidades de creación de actividades y colaboración multiusuario y oportunidades de competencia.", isCorrect: false },
      { textoRespuesta: "enseñanza y aprendizaje de hardware que nos brinda una maravillosa experiencia simulada, para saber ubicar las piezas de un computador,", isCorrect: false }
    ]
  },
  {
    titulo: "¿Qué es una red SAN:",
    opciones: [
      { textoRespuesta: "Es una red de área local virtual.", isCorrect: false },
      { textoRespuesta: "Es una red de área amplia.", isCorrect: false },
      { textoRespuesta: "Es una red de área de almacenamiento.", isCorrect: false }
    ]
  },
  {
    titulo: "Una de las características de los SWITCH es que:",
    opciones: [
      { textoRespuesta: "Permiten la transmisión de señal por medio de sus ondas electromagnéticas.", isCorrect: false },
      { textoRespuesta: "Ellos son los únicos responsables de determinar el destino de los Cut-Throughts y enviarlos de manera eficiente.", isCorrect: false },
      { textoRespuesta: "Cuando uno de sus puentes no recibe la señal, se conecta con el resto de sus puertos", isCorrect: false }
    ]
  },
  {
    titulo: "Subraye la respuesta correcta.",
    opciones: [
      { textoRespuesta: "Los ACCESS POINT son dispositivos para establecer una conexión por medio de cableado entre equipos y poder formar una red LAN.", isCorrect: false },
      { textoRespuesta: "Los ACCESS POINT son dispositivos que establecen la trasmisión de datos por medio de antenas para crear una red inalámbrica interna WLAN.", isCorrect: false },
      { textoRespuesta: "Los ACCESS POINT son dispositivos para establecer una conexión inalámbrica entre equipos y pueden formar una red inalámbrica externa (local o internet).", isCorrect: false }
    ]
  },
  {
    titulo: "De cuantas partes está compuesto un Access Point",
    opciones: [
      { textoRespuesta: "1Cubierta, 2Indicadores, 3Antena, 4Conector RJ45, 5Conector DC", isCorrect: false },
      { textoRespuesta: "1Cubierta, 2Antena, 3Conector RJ45.", isCorrect: false },
      { textoRespuesta: "1Cubierta, 2Antena, 3ADSL, 4ConectorRJ45, 5Conector DC", isCorrect: false }
    ]
  },
  {
    titulo: "Entre los modelos de capas tcp/ip están?",
    opciones: [
      { textoRespuesta: "Aplicación, Transporte, Internet, Vínculo de datos, Red física", isCorrect: false },
      { textoRespuesta: "cableado, lógica, internet", isCorrect: false },
      { textoRespuesta: "aplicación, trasporte, red física", isCorrect: false },
      { textoRespuesta: "proveedor, instalación", isCorrect: false }
    ]
  },
  {
    titulo: "La capa de transporte TCP/IP:",
    opciones: [
      { textoRespuesta: "garantiza que los paquetes lleguen en secuencia y sin errores", isCorrect: false },
      { textoRespuesta: "No se puede alcanzar un sistema de destino.", isCorrect: false },
      { textoRespuesta: "sirve para causar interferencias", isCorrect: false },
      { textoRespuesta: "todas", isCorrect: false },
      { textoRespuesta: "ninguna", isCorrect: false }
    ]
  },
  {
    titulo: "El protocolo de mensajes de control de Internet (ICMP)",
    opciones: [
      { textoRespuesta: "detecta y registra las condiciones de error de la red", isCorrect: false },
      { textoRespuesta: "proporciona un servicio de entrega de datagramas", isCorrect: false },
      { textoRespuesta: "sirve para causar interferencias", isCorrect: false },
      { textoRespuesta: "todas las anteriores", isCorrect: false }
    ]
  },
  {
    titulo: "Para que sirve el modo Bridge de un Acces point:",
    opciones: [
      { textoRespuesta: "sirve para extender la señal", isCorrect: false },
      { textoRespuesta: "sirve como un puente inalámbrico entre dispositivos", isCorrect: false },
      { textoRespuesta: "sirve para causar interferencias", isCorrect: false }
    ]
  },
  {
    titulo: "Aparte de modelo TCP/IP con que otro nombre se le llama:",
    opciones: [
      { textoRespuesta: "modelo COP", isCorrect: false },
      { textoRespuesta: "modelo DARPA.", isCorrect: false },
      { textoRespuesta: "modelo SAMUS", isCorrect: false }
    ]
  },
  {
    titulo: "Que define el FTP:",
    opciones: [
      { textoRespuesta: "el funcionamiento de navegadores", isCorrect: false },
      { textoRespuesta: "interacción hombre-máquina", isCorrect: false },
      { textoRespuesta: "cómo se envían archivos en una red", isCorrect: false }
    ]
  },
  {
    titulo: "Marque lo Correcto. Protocolo que utiliza direcciones series de cuatro octetos con formato de punto decimal, este protocolo lleva los datos a otras máquinas de la red.",
    opciones: [
      { textoRespuesta: "IP", isCorrect: false },
      { textoRespuesta: "TCP", isCorrect: false },
      { textoRespuesta: "WAN", isCorrect: false },
      { textoRespuesta: "DARPA", isCorrect: false }
    ]
  },
  {
    titulo: "Cuáles son los parámetros de QOS.",
    opciones: [
      { textoRespuesta: "Hardware, software", isCorrect: false },
      { textoRespuesta: "Diseño, prueba.", isCorrect: false },
      { textoRespuesta: "Perdida de paquetes, Jitter, latencia, Ancho de Banda.", isCorrect: false },
      { textoRespuesta: "Ninguna de las Anteriores.", isCorrect: false }
    ]
  },
  {
    titulo: "Determine cuál de las siguientes NO es una característica de la arquitectura de red:",
    opciones: [
      { textoRespuesta: "Tolerancia a Fallas", isCorrect: false },
      { textoRespuesta: "Escalabilidad", isCorrect: false },
      { textoRespuesta: "Calidad de Servicio", isCorrect: false },
      { textoRespuesta: "Seguridad", isCorrect: false },
      { textoRespuesta: "Interconectividad", isCorrect: false }
    ]
  },
  {
    titulo: "Determine cuál de las siguientes NO es un parámetro de QOS.",
    opciones: [
      { textoRespuesta: "Jitter", isCorrect: false },
      { textoRespuesta: "Ancho de banda", isCorrect: false },
      { textoRespuesta: "Ruido electrónico", isCorrect: false },
      { textoRespuesta: "Latencia", isCorrect: false }
    ]
  },
  {
    titulo: "Cuál es la frecuencia de banda de la IEEE-802?15.1 en Bluetooth en la WPAN?",
    opciones: [
      { textoRespuesta: "1 GHz", isCorrect: false },
      { textoRespuesta: "2,4 GHz", isCorrect: false },
      { textoRespuesta: "2,4 MHz", isCorrect: false },
      { textoRespuesta: "Ninguna", isCorrect: false }
    ]
  },
  {
    titulo: "¿Cuánto alcance tiene un acces point",
    opciones: [
      { textoRespuesta: "30 a 100 metros", isCorrect: false },
      { textoRespuesta: "60 a 300 metros", isCorrect: false },
      { textoRespuesta: "10 a 600 metros", isCorrect: false }
    ]
  },
  {
    titulo: "¿Dónde se utiliza el protocolo WAP2 personal?",
    opciones: [
      { textoRespuesta: "Área domésticas", isCorrect: false },
      { textoRespuesta: "Área metropolitanas", isCorrect: false },
      { textoRespuesta: "Área extensas", isCorrect: false }
    ]
  },
  {
    titulo: "¿Cuál es la función del punto de acceso dentro del modo AP?",
    opciones: [
      { textoRespuesta: "Se utiliza como un receptor y actúa como un cable de red", isCorrect: false },
      { textoRespuesta: "Sirve de núcleo para la instalación del cableado", isCorrect: false },
      { textoRespuesta: "Se usa para extender la señal", isCorrect: false }
    ]
  },
  {
    titulo: "¿Cuáles son los tipos de conmutadores?",
    opciones: [
      { textoRespuesta: "Conmutador de router", isCorrect: false },
      { textoRespuesta: "Conmutador de cortar – continuar", isCorrect: false },
      { textoRespuesta: "Conmutador de grupo de trabajo y de red", isCorrect: false }
    ]
  },
  {
    titulo: "En la interconexión de redes el internet es una herramienta:",
    opciones: [
      { textoRespuesta: "De interconexión de área extensa", isCorrect: false },
      { textoRespuesta: "Compleja, intrincada e interdependiente", isCorrect: false },
      { textoRespuesta: "De interconexión de área loca.", isCorrect: false }
    ]
  },
  {
    titulo: "¿Indica qué es la longitud de Prefijos IP?",
    opciones: [
      { textoRespuesta: "Parte de red numérica de una dirección IP", isCorrect: false },
      { textoRespuesta: "La cantidad de bits en la dirección que conforma la porción de red.", isCorrect: false },
      { textoRespuesta: "Control de acceso a medios", isCorrect: false },
      { textoRespuesta: "Dispositivo de red", isCorrect: false }
    ]
  },
  {
    titulo: "¿Cuáles son los elementos principales de un sistema de cableado estrucado?",
    opciones: [
      { textoRespuesta: "Distorsion", isCorrect: false },
      { textoRespuesta: "Hardware y Software", isCorrect: false },
      { textoRespuesta: "Cableado Horizontal y Vertical", isCorrect: false }
    ]
  },
  {
    titulo: "Seleccione lo correcto la norma EIA/TIa 568 A?",
    opciones: [
      { textoRespuesta: "Es un estándar de cableado en el cual se interconectan diferentes dispositivos para formar una red, orden en par trenzado.", isCorrect: false },
      { textoRespuesta: "son cables coaxiales.", isCorrect: false },
      { textoRespuesta: "ninguna de las anteriores.", isCorrect: false }
    ]
  },
  {
    titulo: "Cuál es la Distancia que alcanza la fibra óptica monomodo 62?5/125 micras?",
    opciones: [
      { textoRespuesta: "300 mts", isCorrect: false },
      { textoRespuesta: "menos de 300 mts", isCorrect: false },
      { textoRespuesta: "3000 mts", isCorrect: false }
    ]
  },
  {
    titulo: "Si en un cableado horizontal no alcanza el cable para llegar su destino que se hace?",
    opciones: [
      { textoRespuesta: "Se coloca un repetidor.", isCorrect: false },
      { textoRespuesta: "Se remplaza el cable por otro de la longitud correcta.", isCorrect: false },
      { textoRespuesta: "Se conecta un switch y se coloca otro cable.", isCorrect: false }
    ]
  },
  {
    titulo: "A la Hora de establecer las rutas del cableado horizontal es importante evitar.",
    opciones: [
      { textoRespuesta: "motor con fuente de poder menor a 0.5 wats.", isCorrect: false },
      { textoRespuesta: "cables de corriente alterna.", isCorrect: false },
      { textoRespuesta: "Curvas de menos de 5 cm de radio", isCorrect: false },
      { textoRespuesta: "Perdida de paquetes", isCorrect: false }
    ]
  },
  {
    titulo: "Todos los switches multicapa Catalyst admiten los siguientes tipos de interfaces de capa 3.",
    opciones: [
      { textoRespuesta: "Puerto enrutado e Interfaz virtual del switch (SVI).", isCorrect: false },
      { textoRespuesta: "switches de alto rendimiento, switches Cisco Catalyst, puerto enrutado.", isCorrect: false },
      { textoRespuesta: "Puerto enrutado, Interfaz virtual del switching.", isCorrect: false }
    ]
  },
  {
    titulo: "La sentencia RETURN:",
    opciones: [
      { textoRespuesta: "Es una instrucción de control de flujo.", isCorrect: false },
      { textoRespuesta: "Devuelve el control de ejecución a la función desde la que se la invocó", isCorrect: false },
      { textoRespuesta: "Opcionalmente puede devolver un valor", isCorrect: false },
      { textoRespuesta: "Todas las afirmaciones son correctas", isCorrect: false }
    ]
  },
  {
    titulo: "Las instrucciones escritas en un lenguaje natural al ser humano, generalmente en el idioma inglés, como, por ejemplo: if, for, while, entre otras. Corresponden al :",
    opciones: [
      { textoRespuesta: "Lenguaje de bajo nivel", isCorrect: false },
      { textoRespuesta: "Lenguaje máquina", isCorrect: false },
      { textoRespuesta: "Lenguaje de alto nivel", isCorrect: false },
      { textoRespuesta: "Lenguaje intermedio", isCorrect: false }
    ]
  },
  {
    titulo: "Un depurador :",
    opciones: [
      { textoRespuesta: "Permite detectar y diagnosticar fallos en programas informáticos.", isCorrect: false },
      { textoRespuesta: "Analizan el código fuente del programa y su interacción con el sistema operativo que lo ejecuta.", isCorrect: false },
      { textoRespuesta: "Analizan el código del programa paso a paso mediante el uso de los breakpoints o puntos de interrupción", isCorrect: false },
      { textoRespuesta: "Todas las afirmaciones son correctas", isCorrect: false }
    ]
  },
  {
    titulo: "Un token:",
    opciones: [
      { textoRespuesta: "Es un segmento código fuente del programa, que el compilador divide en elementos que los componen.", isCorrect: false },
      { textoRespuesta: "Es una cadena de caracteres que tiene un significado coherente en cierto lenguaje de programación", isCorrect: false },
      { textoRespuesta: "No es una constante, ni un identificador, ni un operador, ni un separador ni las palabras reservadas.", isCorrect: false },
      { textoRespuesta: "Es un componente semántico", isCorrect: false }
    ]
  },
  {
    titulo: "Los mecanismos utilizados para transformar los datos del mismo tipo en otros datos nuevos, mediante la realización de operaciones, se denominan:",
    opciones: [
      { textoRespuesta: "Variables", isCorrect: false },
      { textoRespuesta: "Tipos de datos", isCorrect: false },
      { textoRespuesta: "Operadores", isCorrect: false },
      { textoRespuesta: "Sentencias de control de flujo.", isCorrect: false }
    ]
  },
  {
    titulo: "Las estructuras de control de flujo:",
    opciones: [
      { textoRespuesta: "Permiten modificar la sucesión lineal de instrucciones de un programa para que pueden tomar decisiones en función del valor de las variables.", isCorrect: false },
      { textoRespuesta: "Permiten que Los programas que se pueden realizar utilizando solamente variables y operadores son una simple sucesión lineal de instrucciones básicas.", isCorrect: false },
      { textoRespuesta: "Son estructuras que no influyen en la decisión de la que instrucción se ejecutará a continuación.", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta.", isCorrect: false }
    ]
  },
  {
    titulo: "El diseño web fijo:",
    opciones: [
      { textoRespuesta: "Utiliza unidades de medidas fijas, generalmente pixeles.", isCorrect: false },
      { textoRespuesta: "Cambia según el tipo de dispositivo.", isCorrect: false },
      { textoRespuesta: "Cumple las normas de un diseño web responsivo.", isCorrect: false },
      { textoRespuesta: "Utiliza unidades de medidas fijas, generalmente pixeles.", isCorrect: false }
    ]
  },
  {
    titulo: "La técnica de programación que se basa en la secuencia, iteración y selección se denomina:",
    opciones: [
      { textoRespuesta: "Programación lineal", isCorrect: false },
      { textoRespuesta: "Programación estructurada", isCorrect: false },
      { textoRespuesta: "Programación orientada a objetos", isCorrect: false },
      { textoRespuesta: "Programación en capas", isCorrect: false }
    ]
  },
  {
    titulo: "En programación orientada a objetos, en el caso” impresora usa papel”, que tipo de relación existe entre los objetos impresora y papel:",
    opciones: [
      { textoRespuesta: "Asociación", isCorrect: false },
      { textoRespuesta: "Herencia", isCorrect: false },
      { textoRespuesta: "Composición", isCorrect: false },
      { textoRespuesta: "Dependencia", isCorrect: false }
    ]
  },
  {
    titulo: "A la capacidad que tienen los objetos de comportarse de múltiples formas sin olvidar su esencia, se denomina:",
    opciones: [
      { textoRespuesta: "Abstracción", isCorrect: false },
      { textoRespuesta: "Encapsulamiento", isCorrect: false },
      { textoRespuesta: "Polimorfismo", isCorrect: false },
      { textoRespuesta: "Herencia", isCorrect: false }
    ]
  },
  {
    titulo: "¿Con qué propiedad se define el espacio entre el borde de un elemento HTML y los elementos que lo rodean?",
    opciones: [
      { textoRespuesta: "border", isCorrect: false },
      { textoRespuesta: "margin", isCorrect: false },
      { textoRespuesta: "padding", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "La característica común que comparten todas las aplicaciones web, es:",
    opciones: [
      { textoRespuesta: "Utilizar el lenguaje de programación HTML, tanto para la creación de sitios estáticos como dinámicos.", isCorrect: false },
      { textoRespuesta: "Centralizar el software para facilitar las tareas de mantenimiento y actualización de grandes sistemas.", isCorrect: false },
      { textoRespuesta: "Utilizar las hojas de estilo CSS, para definir la estructura y contenido del sitio.", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "Las etiquetas semánticas en HTML:",
    opciones: [
      { textoRespuesta: "Definen el aspecto, la apariencia e incluso la posición dentro de la web", isCorrect: false },
      { textoRespuesta: "Definen la estructura del documento y permiten que las páginas web sean mejor indexadas por los buscadores.", isCorrect: false },
      { textoRespuesta: "Empiezan en una nueva línea y ocupan todo el espacio disponible hasta el final de la línea.", isCorrect: false },
      { textoRespuesta: "Sólo ocupan el espacio necesario para mostrar sus contenidos.", isCorrect: false }
    ]
  },
  {
    titulo: "El tipo de dato:",
    opciones: [
      { textoRespuesta: "Determina la naturaleza del conjunto de valores que un dato puede tomar una variable.", isCorrect: false },
      { textoRespuesta: "Pueden ser numéricos, cadena de caracteres.", isCorrect: false },
      { textoRespuesta: "Pueden ser valores lógicos.", isCorrect: false },
      { textoRespuesta: "Todas las anteriores respuestas son correctas.", isCorrect: false }
    ]
  },
  {
    titulo: "El código se define como:",
    opciones: [
      { textoRespuesta: "Un conjunto de reglas e instrucciones escritas en un lenguaje de programación específico que permite la comunicación con las máquinas.", isCorrect: false },
      { textoRespuesta: "Un conjunto de navegadores escritos en un lenguaje de programación específico que es útil para comunicarse con las máquinas.", isCorrect: false },
      { textoRespuesta: "Un conjunto de textos, imágenes, vídeos y espacios que se pueden mostrar en páginas web.", isCorrect: false },
      { textoRespuesta: "Un conjunto de páginas web que contienen textos, imágenes, vídeos y espacios que son útiles para comunicarse con las máquinas", isCorrect: false }
    ]
  },
  {
    titulo: "En programación orientada a objetos para que sirven los getters (get) y setters (set)",
    opciones: [
      { textoRespuesta: "Determinan la visibilidad de la variable o atributo dentro de la estructura del programa", isCorrect: false },
      { textoRespuesta: "Sirven para mostrar (get) y modificar (set) el valor de las variables privadas", isCorrect: false },
      { textoRespuesta: "Son métodos que determinan el nivel de encapsulamiento de una variable o atributo", isCorrect: false },
      { textoRespuesta: "Son procedimientos utilizados para reusar código", isCorrect: false }
    ]
  },
  {
    titulo: "La opción más recomendable para declarar los estilos en CSS es:",
    opciones: [
      { textoRespuesta: "Enlazarlo a otro archivo de texto con extensión css.", isCorrect: false },
      { textoRespuesta: "Realizarlo en la cabecera de la página de manera interna", isCorrect: false },
      { textoRespuesta: "Realizarlo en la etiqueta especifica de HTML", isCorrect: false },
      { textoRespuesta: "Todas las opciones son correctas", isCorrect: false }
    ]
  },
  {
    titulo: "Un servidor Web es:",
    opciones: [
      { textoRespuesta: "Aquel que proporciona interoperabilidad manejando bases de datos flexibles y de alto rendimiento.	 Un programa codificado en un lenguaje soportado por un navegador que permite acceder al servidor en cualquier momento sin requerir una instalación.", isCorrect: false },
      { textoRespuesta: "El encargado de procesar un programa del lado del servidor, permitiendo el intercambio de información entre servidor y el cliente", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "Seleccione una ventaja del uso de frameworks en el desarrollo de aplicaciones Web",
    opciones: [
      { textoRespuesta: "Añade código incensario a las aplicaciones", isCorrect: false },
      { textoRespuesta: "Agilita el desarrollo de los proyectos, mediante diseño y programación estándar", isCorrect: false },
      { textoRespuesta: "Las versiones pueden ser inestables", isCorrect: false },
      { textoRespuesta: "El tiempo de aprendizaje puede ser extensos si no tenemos nociones del lenguaje de programación a utilizar.", isCorrect: false }
    ]
  },
  {
    titulo: "Cuáles de las siguientes tecnologías son SGBD no relacionales:",
    opciones: [
      { textoRespuesta: "SQL SERVER Y ORACLE", isCorrect: false },
      { textoRespuesta: "MONGODB Y MARIADB", isCorrect: false },
      { textoRespuesta: "POSTGRESQL Y CASSANDRA", isCorrect: false },
      { textoRespuesta: "=COUCHBASE Y MONGO DB", isCorrect: false }
    ]
  },
  {
    titulo: "¿Qué define la estructura de las expresiones de un lenguaje de programación?",
    opciones: [
      { textoRespuesta: "Sus palabras reservadas", isCorrect: false },
      { textoRespuesta: "Sus reglas sintácticas", isCorrect: false },
      { textoRespuesta: "Sus reglas semánticas", isCorrect: false },
      { textoRespuesta: "Ninguna de las afirmaciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "La estructura de datos que añade un elemento al final de la estructura y elimina el primer elemento de la estructura, se denomina: {",
    opciones: [
      { textoRespuesta: "Lista", isCorrect: false },
      { textoRespuesta: "Matriz", isCorrect: false },
      { textoRespuesta: "Pila", isCorrect: false },
      { textoRespuesta: "=Cola", isCorrect: false }
    ]
  },
  {
    titulo: "Cuando se ejecuta el método constructor de una clase:",
    opciones: [
      { textoRespuesta: "Se crea un alias y se inicializan los atributos del objeto", isCorrect: false },
      { textoRespuesta: "Se asigna un espacio de memoria al objeto instanciado y se inicializan los atributos del objeto", isCorrect: false },
      { textoRespuesta: "Se asigna un espacio de memoria al objeto instanciado, pero no se inicializan los atributos del objeto", isCorrect: false },
      { textoRespuesta: "Ninguna de las afirmaciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "Una variable:",
    opciones: [
      { textoRespuesta: "Es un espacio de almacenamiento en la memoria RAM, que sirve para que la computadora guarda temporalmente los datos con los que trabaja un algoritmo", isCorrect: false },
      { textoRespuesta: "Pueden cambiar su valor mientras se ejecuta el algoritmo", isCorrect: false },
      { textoRespuesta: "Utilizan un nombre o identificador y un tipo de dato.", isCorrect: false },
      { textoRespuesta: "Todas las opciones son correctas", isCorrect: false }
    ]
  },
  {
    titulo: "La sobrecarga de métodos en programación orientada a objetos, se refiere:",
    opciones: [
      { textoRespuesta: "Múltiples métodos dentro de una clase los cuales contienen el mismo nombre, diferentes parámetros, pero la misma funcionalidad.", isCorrect: false },
      { textoRespuesta: "Múltiples métodos dentro de una clase los cuales contienen el mismo nombre, diferentes parámetros y diferentes funcionalidades.", isCorrect: false },
      { textoRespuesta: "Múltiples métodos dentro de una clase los cuales contienen el mismo nombre, mismos parámetros y la misma funcionalidad.", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta.", isCorrect: false }
    ]
  },
  {
    titulo: "Al conjunto de protocolos y estándares que sirven para intercambiar datos entre aplicaciones, se conoce como:",
    opciones: [
      { textoRespuesta: "Servidor web", isCorrect: false },
      { textoRespuesta: "Servidor de aplicaciones", isCorrect: false },
      { textoRespuesta: "Servicio web", isCorrect: false },
      { textoRespuesta: "Aplicación web", isCorrect: false }
    ]
  },
  {
    titulo: "Un ataque CSRF es:",
    opciones: [
      { textoRespuesta: "La inyección de <scripts> maliciosos por parte del usuario, que se ejecutaran al momento de cargar este contenido en la página web.", isCorrect: false },
      { textoRespuesta: "Consisten en forzar a un usuario a ejecutar peticiones no deseadas a una web en la que están autentificados sin que este se dé cuenta.", isCorrect: false },
      { textoRespuesta: "La ejecución de códigos que permiten acceder al sitio e implantar un malware, que facilitará la ejecución de código de manera remota", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta.", isCorrect: false }
    ]
  },
  {
    titulo: "La estructura básica de una página HTML es:",
    opciones: [
      { textoRespuesta: "<HTML>, <HEADER>, <BODY>, </BODY>, </HTML>.", isCorrect: false },
      { textoRespuesta: "<HTML>, <HEADER>, <BODY>, </HEADER>, </BODY>.", isCorrect: false },
      { textoRespuesta: "<HTML>, <HEADER>, </HEADER>. <BODY>, </BODY>, </HTML>.", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones anteriores es correcta.", isCorrect: false }
    ]
  },
  {
    titulo: "Una excepción es la indicación de que se produjo un error en el programa y se producen cuando:",
    opciones: [
      { textoRespuesta: "~Se diseña el programa.", isCorrect: false },
      { textoRespuesta: "~Se compila el programa.", isCorrect: false },
      { textoRespuesta: "=Se ejecuta el programa.", isCorrect: false },
      { textoRespuesta: "~Ninguna de las opciones anteriores es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "Al conjunto de instrucciones que se encuentra dentro de una clase, que pueden o no devolver un valor y pueden recibir parámetros de entrada, parámetros de salida y/o parámetros de referencia.",
    opciones: [
      { textoRespuesta: "Atributo", isCorrect: false },
      { textoRespuesta: "Método", isCorrect: false },
      { textoRespuesta: "Objeto", isCorrect: false },
      { textoRespuesta: "Interfaz", isCorrect: false }
    ]
  },
  {
    titulo: "En el desarrollo de aplicaciones web, la programación en el cliente:",
    opciones: [
      { textoRespuesta: "Consiste en crear esbozos de la web final", isCorrect: false },
      { textoRespuesta: "Consiste en crear la lógica de la aplicación web", isCorrect: false },
      { textoRespuesta: "Consiste en el desarrollo de la interfaz de usuario de la aplicación web, utilizando el estándar de desarrollo HTML, CSS y JAVASCRIPTS", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "Boostrap:",
    opciones: [
      { textoRespuesta: "Es una herramienta de tecnología de frontend que no favorece el diseño responsive", isCorrect: false },
      { textoRespuesta: "Dificulta el desarrollo de aplicaciones web", isCorrect: false },
      { textoRespuesta: "Es un framework de CSS Open Source", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "En el desarrollo de aplicaciones web, la programación en el servidor:",
    opciones: [
      { textoRespuesta: "Consiste en el desarrollo de la interfaz de usuario de la aplicación web", isCorrect: false },
      { textoRespuesta: "Consiste en crear esbozos de la web final", isCorrect: false },
      { textoRespuesta: "Consiste en desarrollar la lógica de la aplicación, para lo cual se utilizan lenguajes de programación como PHP, ASP NET, Python, Perl, etc.", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "Seleccione lo correcto:",
    opciones: [
      { textoRespuesta: "HTML es un lenguaje de programación, pese a que no posee funciones aritméticas, estructuras de control o las variables.", isCorrect: false },
      { textoRespuesta: "HTML, CSS no son lenguajes de programación, son lenguajes que se utilizan para desarrollar la lógica de la aplicación del lado del servidor", isCorrect: false },
      { textoRespuesta: "HTML, CSS no son lenguajes de programación, son lenguajes que se utilizan para la presentación de la aplicación del lado del cliente.", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "La programación se puede definir como:",
    opciones: [
      { textoRespuesta: "El proceso de diseñar, codificar, depurar y mantener el código fuente de programas de ordenador", isCorrect: false },
      { textoRespuesta: "La ejecución de programas de ordenador desde la línea de comandos", isCorrect: false },
      { textoRespuesta: "La instalación de programas en sistemas operativos desde la línea de comandos", isCorrect: false },
      { textoRespuesta: "Ninguna de las anteriores respuestas es correcta.", isCorrect: false }
    ]
  },
  {
    titulo: "Una arquitectura multicapa es:",
    opciones: [
      { textoRespuesta: "Es un modelo  que se utiliza para la representación de diagramas de uso.", isCorrect: false },
      { textoRespuesta: "Un estilo de programación donde el objetivo principal es separar los diferentes aspectos del desarrollo, tales como la lógica de negocio, mecanismos de almacenamiento de datos, aspectos de presentación, etc.", isCorrect: false },
      { textoRespuesta: "Es un modelo de programación donde no se establecen responsabilidades de manera clara.", isCorrect: false },
      { textoRespuesta: "Ninguna de las anteriores.", isCorrect: false }
    ]
  },
  {
    titulo: "La regla \"div + span \{ color: red \}\" significa que ...",
    opciones: [
      { textoRespuesta: "Se aplicará a las etiquetas <span> que sean un \"hermano\" de <div>.", isCorrect: false },
      { textoRespuesta: "Se aplicará a las etiquetas <span> que sean un \"hermano contiguo\" de <div>.", isCorrect: false },
      { textoRespuesta: "Se aplicará a las etiquetas <span> que sean un \"descendiente\" de <div>.", isCorrect: false },
      { textoRespuesta: "Ninguna de las opciones es correcta", isCorrect: false }
    ]
  },
  {
    titulo: "Las páginas web que utilizan bases de datos y su contenido cambian según la interacción con el usuario, se denominan:",
    opciones: [
      { textoRespuesta: "Dinámicas", isCorrect: false },
      { textoRespuesta: "Gestor de contenido", isCorrect: false },
      { textoRespuesta: "E-Comerce", isCorrect: false },
      { textoRespuesta: "Dinámicas", isCorrect: false }
    ]
  },
  {
    titulo: "Seleccione lo correcto. Los algoritmos:",
    opciones: [
      { textoRespuesta: "Dependen del lenguaje de programación específico.", isCorrect: false },
      { textoRespuesta: "Son la interfaz con la que el usuario debe interactuar para ejecutar un proceso", isCorrect: false },
      { textoRespuesta: "Resuelven paso a paso un problema utilizando una entrada de datos, que es procesada para generar una salida", isCorrect: false },
      { textoRespuesta: "Grupo de ordenes discontinuas, que presentan la solución a un problema.", isCorrect: false }
    ]
  },
  {
    titulo: "Un lenguaje de programación:",
    opciones: [
      { textoRespuesta: "Es un sistema estructurado de comunicación, para describir el conjunto de acciones consecutivas que un computador debe ejecutar.", isCorrect: false },
      { textoRespuesta: "Es un conjunto de símbolos y reglas sintácticas y semánticas que definen su estructura y el significado de sus elementos y expresiones.", isCorrect: false },
      { textoRespuesta: "Comprende un lenguaje formal, diseñado para organizar algoritmos y procesos lógicos que serán ejecutados por un computador.", isCorrect: false },
      { textoRespuesta: "Todas las afirmaciones son correctas", isCorrect: false }
    ]
  }
];

export default preguntas;
