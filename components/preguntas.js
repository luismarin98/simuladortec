const preguntas = [
    {
        titulo: "Durante una auditoría de seguridad de TI, se descubre que varios empleados han estado compartiendo sus contraseñas con compañeros de trabajo. ¿Cuál de las siguientes es la acción más apropiada que debe tomar el auditor?",
        opciones: [
            { textoRespuesta: "Ignorar el hallazgo, ya que compartir contraseñas es una práctica común en la organización", isCorrect: false },
            { textoRespuesta: "Recomendar la implementación inmediata de un sistema de autenticación biométrica", isCorrect: false },
            { textoRespuesta: "Notificar a la gerencia sobre el incumplimiento de las políticas de seguridad y sugerir capacitación en concientización", isCorrect: true },
            { textoRespuesta: "Revocar los accesos de todos los empleados involucrados y exigir un cambio de contraseña", isCorrect: false }
        ]
    },
    {
        titulo: "Al revisar los registros de acceso a una base de datos crítica, se observa que un usuario administrativo ha estado accediendo a la base de datos fuera del horario laboral normal. ¿Qué enfoque debe adoptar el auditor para investigar más a fondo esta situación?",
        opciones: [
            { textoRespuesta: "Asumir que el acceso fuera de horario es justificado y no realizar más investigaciones", isCorrect: false },
            { textoRespuesta: "Entrevistar al usuario administrativo para obtener una explicación de los accesos inusuales", isCorrect: true },
            { textoRespuesta: "Recomendar la suspensión inmediata de los privilegios de acceso del usuario administrativo", isCorrect: false },
            { textoRespuesta: "Notificar a las autoridades legales sobre una posible actividad maliciosa", isCorrect: false }
        ]
    },
    {
        titulo: "Durante una auditoría de cumplimiento, se identifica que la organización no ha realizado evaluaciones de riesgo de seguridad de la información en los últimos dos años. ¿Cuál de las siguientes recomendaciones es la más adecuada para abordar esta deficiencia?",
        opciones: [
            { textoRespuesta: "Sugerir que la organización posponga las evaluaciones de riesgo hasta el próximo ciclo de auditoría", isCorrect: false },
            { textoRespuesta: "Recomendar la contratación de un consultor externo para realizar evaluaciones de riesgo inmediatas", isCorrect: false },
            { textoRespuesta: "Aconsejar a la organización que establezca un proceso regular de evaluación de riesgos y lo documento en sus políticas", isCorrect: true },
            { textoRespuesta: "Indicar que las evaluaciones de riesgo son opcionales y no afectan el cumplimiento normativo", isCorrect: false }
        ]
    },
    {
        titulo: "Al examinar la política de gestión de incidentes de seguridad de la información de una organización, se observa que no se han definido claramente los roles y responsabilidades del personal clave. ¿Qué recomendación debe hacer el auditor para mejorar la política?",
        opciones: [
            { textoRespuesta: "Sugerir la eliminación de la política de gestión de incidentes y confiar en la experiencia del personal", isCorrect: false },
            { textoRespuesta: "Recomendar la asignación inmediata de roles y responsabilidades al personal sin una revisión adicional", isCorrect: false },
            { textoRespuesta: "Aconsejar a la organización que revise y actualice la política, definiendo claramente los roles y responsabilidades", isCorrect: true },
            { textoRespuesta: "Indicar que la falta de claridad en los roles y responsabilidades no tiene un impacto significativo en la gestión de incidentes", isCorrect: false }
        ]
    },
    {
        titulo: "Durante una prueba de penetración como parte de una auditoría de seguridad, se descubre una vulnerabilidad crítica en el servidor web de la organización. ¿Cuál es el curso de acción más apropiado que debe seguir el auditor?",
        opciones: [
            { textoRespuesta: "Explotar la vulnerabilidad para demostrar su impacto y luego notificar a la organización", isCorrect: false },
            { textoRespuesta: "Ignorar la vulnerabilidad, ya que los servidores web suelen tener vulnerabilidades conocidas", isCorrect: false },
            { textoRespuesta: "Notificar inmediatamente a la organización sobre la vulnerabilidad y proporcionar recomendaciones para su corrección", isCorrect: true },
            { textoRespuesta: "Publicar los detalles de la vulnerabilidad en foros de seguridad en línea para obtener opiniones adicionales", isCorrect: false }
        ]
    },
    {
        titulo: "Al revisar los registros de acceso físico al centro de datos, se observa que un ex empleado ha ingresado a las instalaciones después de la terminación de su empleo. ¿Qué acción debe tomar el auditor en respuesta a este hallazgo?",
        opciones: [
            { textoRespuesta: "No hacer nada, ya que el ex empleado probablemente tenía una razón válida para ingresar", isCorrect: false },
            { textoRespuesta: "Notificar a la gerencia sobre el incidente y recomendar una revisión inmediata de los procedimientos de control de acceso físico", isCorrect: true },
            { textoRespuesta: "Contactar al ex empleado directamente para obtener una explicación de su visita al centro de datos", isCorrect: false },
            { textoRespuesta: "Eliminar todos los registros de acceso del ex empleado para evitar confusiones futuras", isCorrect: false }
        ]
    },
    {
        titulo: "Durante una auditoría de la gestión de cambios de TI, se identifica que no se siguen consistentemente los procedimientos establecidos para la aprobación y documentación de cambios. ¿Cuál de las siguientes recomendaciones es la más adecuada para abordar esta deficiencia?",
        opciones: [
            { textoRespuesta: "Sugerir que la organización abandone por completo los procedimientos de gestión de cambios", isCorrect: false },
            { textoRespuesta: "Recomendar que se hagan excepciones a los procedimientos de gestión de cambios en casos de emergencia", isCorrect: false },
            { textoRespuesta: "Aconsejar a la organización que refuerce la adherencia a los procedimientos existentes y proporcione capacitación al personal relevante", isCorrect: true },
            { textoRespuesta: "Indicar que la falta de consistencia en los procedimientos de gestión de cambios es aceptable siempre que los cambios sean exitosos", isCorrect: false }
        ]
    },
    {
        titulo: "Al evaluar los controles de seguridad de la red, se descubre que varios dispositivos de red críticos tienen configuraciones predeterminadas de fábrica y contraseñas débiles. ¿Qué enfoque debe adoptar el auditor para abordar esta situación?",
        opciones: [
            { textoRespuesta: "No informar sobre los dispositivos con configuraciones predeterminadas, ya que es una práctica común en muchas organizaciones", isCorrect: false },
            { textoRespuesta: "Recomendar la desconexión inmediata de todos los dispositivos de red afectados hasta que se corrijan las configuraciones", isCorrect: false },
            { textoRespuesta: "Notificar a la gerencia sobre los riesgos asociados y sugerir un plan de acción para asegurar adecuadamente los dispositivos de red", isCorrect: true },
            { textoRespuesta: "Intentar adivinar las contraseñas débiles para demostrar la gravedad del problema", isCorrect: false }
        ]
    },
    {
        titulo: "Durante una revisión de la política de clasificación de datos, se observa que no se han definido claramente los criterios para determinar la criticidad de los activos de información. ¿Qué recomendación debe hacer el auditor para mejorar la política?",
        opciones: [
            { textoRespuesta: "Sugerir que la organización elimine por completo la política de clasificación de datos", isCorrect: false },
            { textoRespuesta: "Recomendar que se asigne arbitrariamente la clasificación de datos a los activos de información", isCorrect: false },
            { textoRespuesta: "Aconsejar a la organización que establezca criterios claros y documentados para la clasificación de datos basados en su sensibilidad y criticidad", isCorrect: true },
            { textoRespuesta: "Indicar que la falta de criterios de clasificación claros no tiene un impacto significativo en la seguridad de la información", isCorrect: false }
        ]
    },
    {
        titulo: "Al realizar una auditoría de cumplimiento de la normativa de protección de datos, se identifica que la organización no ha designado formalmente a un responsable de la protección de datos (DPO). ¿Cuál de las siguientes acciones es la más apropiada para abordar esta deficiencia?",
        opciones: [
            { textoRespuesta: "Ignorar la falta de un DPO designado, ya que muchas organizaciones operan sin uno", isCorrect: false },
            { textoRespuesta: "Recomendar que se designe inmediatamente a un empleado existente como DPO sin considerar sus calificaciones", isCorrect: false },
            { textoRespuesta: "Aconsejar a la organización que evalúe la necesidad de un DPO y designe formalmente a una persona calificada para el rol", isCorrect: true },
            { textoRespuesta: "Sugerir que la organización externalice por completo la función de protecciónde datos a un tercero", isCorrect: false }
        ]
    },
    {
        titulo: "Se dispone de una mochila que soporta un peso máximo de 15 Kg y de 3 objetos: A, B y C. El objeto A con un peso de 5 Kg y da una ganancia de 4 dólares, el objeto B con un peso de 10 Kg y da una ganancia de 5 dólares, el objeto C con un peso de 5 Kg y da una ganancia de 3 dólares. Indicar los objetos que se deben colocar en la mochila para obtener la máxima ganancia, aplicando el método de búsqueda informada vuelta atrás:",
        opciones: [
            { textoRespuesta: "{A, B, C}", isCorrect: false },
            { textoRespuesta: "{B, C}", isCorrect: true },
            { textoRespuesta: "{A, B}", isCorrect: false },
            { textoRespuesta: "Ninguna es correcta.", isCorrect: false }
        ]
    },
    {
        titulo: "Se dispone de una mochila que soporta un peso máximo de 10 Kg y de 3 objetos: A, B y C. El objeto A con un peso de 3 Kg y da una ganancia de 10 dólares, el objeto B con un peso de 4 Kg y da una ganancia de 5 dólares, el objeto C con un peso de 6 Kg y da una ganancia de 15 dólares. Indicar los objetos que se deben colocar en la mochila para obtener la máxima ganancia, aplicando el método de búsqueda informada vuelta atrás:",
        opciones: [
            { textoRespuesta: "{A, C}", isCorrect: true },
            { textoRespuesta: "{B, C}", isCorrect: false },
            { textoRespuesta: "{A, B, C}", isCorrect: false },
            { textoRespuesta: "Ninguna es correcta.", isCorrect: false }
        ]
    },
    {
        titulo: "Aplicando el método de búsqueda no informada en amplitud, indique las operaciones que permitan la solución del puzzle, partiendo del estado origen 3142 al estado final 4312 y considerando que sólo se pueden hacer operaciones con las piezas que están continuas, por lo que existirán las operaciones: izquierda (hacia la izquierda del nodo), Centro (hacia el centro del nodo) y Derecha (hacia la derecha del nodo):",
        opciones: [
            { textoRespuesta: "Derecha - Centro - Derecha - Centro.", isCorrect: false },
            { textoRespuesta: "Izquierda - Centro - Izquierda - Centro.", isCorrect: false },
            { textoRespuesta: "Centro - Izquierda.", isCorrect: true },
            { textoRespuesta: "Ninguna es correcta.", isCorrect: false }
        ]
    },
    {
        titulo: "Aplicando el método de búsqueda no informada en profundidad, indique las operaciones que permitan la solución del puzzle, partiendo del estado origen 231 al estado final 123 y considerando que sólo se pueden hacer operaciones con las piezas que están continuas, por lo que existirán las operaciones: Izquierda (hacia la izquierda del nodo) y Derecha (hacia la derecha del nodo):",
        opciones: [
            { textoRespuesta: "Derecha – Izquierda - Derecha - Izquierda.", isCorrect: false },
            { textoRespuesta: "Izquierda - Derecha - Izquierda - Derecha.", isCorrect: true },
            { textoRespuesta: "Derecha - Izquierda.", isCorrect: false },
            { textoRespuesta: "Ninguna es correcta.", isCorrect: false }
        ]
    },
    {
        titulo: "Aplicando el método de búsqueda no informada en amplitud, indique las operaciones que permitan la solución del puzzle, partiendo del estado origen 213 al estado final 321 y considerando que sólo se pueden hacer operaciones con las piezas que están continuas, por lo que existirán las operaciones: Izquierda (hacia la izquierda del nodo), Centro (hacia el centro del nodo) y Derecha (h hacia la derecha del nodo):",
        opciones: [
            { textoRespuesta: "Izquierda - Derecha - Izquierda - Derecha.", isCorrect: false },
            { textoRespuesta: "Derecha - Izquierda.", isCorrect: false },
            { textoRespuesta: "Derecha - Izquierda - Derecha - Izquierda.", isCorrect: true },
            { textoRespuesta: "Ninguna es correcta.", isCorrect: false }
        ]
    },
    {
        titulo: "Aplicando el método de búsqueda no informada en amplitud, indique las operaciones que permitan la solución del puzzle, partiendo del estado origen 132 al estado final 231 y considerando que sólo se pueden hacer operaciones con las piezas que están continuas, por lo que existirán las operaciones: Izquierda (hacia la izquierda del nodo) y Derecha (hacia la derecha del nodo):",
        opciones: [
            { textoRespuesta: "Izquierda - Derecha - Izquierda.", isCorrect: false },
            { textoRespuesta: "Derecha - Izquierda.", isCorrect: false },
            { textoRespuesta: "Izquierda - Derecha.", isCorrect: true },
            { textoRespuesta: "Ninguna es correcta.", isCorrect: false }
        ]
    },
    {
        titulo: "Aplicando el método de búsqueda no informada en profundidad, indique las operaciones que permitan la solución del puzzle, partiendo del estado origen 2413 al estado final 2134 y considerando que sólo se pueden hacer operaciones con las piezas que están continuas, por lo que existirán las operaciones: Izquierda (hacia la izquierda del nodo), Centro (hacia el centro del nodo) y Derecha (hacia la derecha del nodo):",
        opciones: [
            { textoRespuesta: "Izquierda - Centro - Izquierda - Centro - Izquierda - Derecha.", isCorrect: false },
            { textoRespuesta: "Centro - Derecha.", isCorrect: true },
            { textoRespuesta: "Derecha - Izquierda.", isCorrect: false },
            { textoRespuesta: "Ninguna es correcta.", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál es el comando para actualizar la columna 'salario' a 5000 para el empleado con ID 3 en la tabla 'empleados'?",
        opciones: [
            { textoRespuesta: "UPDATE empleados SET salario=5000 WHERE ID=3;", isCorrect: true },
            { textoRespuesta: "MODIFY empleados SET salario=5000 WHERE ID=3;", isCorrect: false },
            { textoRespuesta: "CHANGE empleados SET salario=5000 WHERE ID=3;", isCorrect: false },
            { textoRespuesta: "REPLACE empleados SET salario=5000 WHERE ID=3;", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cómo se elimina el registro del estudiante con ID 5 de la tabla 'estudiantes'?",
        opciones: [
            { textoRespuesta: "DELETE FROM estudiantes WHERE ID=5;", isCorrect: true },
            { textoRespuesta: "REMOVE FROM estudiantes WHERE ID=5;", isCorrect: false },
            { textoRespuesta: "UPDATE estudiantes DELETE WHERE ID=5;", isCorrect: false },
            { textoRespuesta: "ERASE FROM estudiantes WHERE ID=5;", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cómo se pueden recuperar los datos ordenados por la columna Apellidos?",
        opciones: [
            { textoRespuesta: "Instrucción CREATE VIEW con una cláusula ORDER BY", isCorrect: false },
            { textoRespuesta: "Instrucción SELECT con una cláusula GROUP BY", isCorrect: false },
            { textoRespuesta: "Instrucción SELECT con una cláusula ORDER BY", isCorrect: true },
            { textoRespuesta: "Instrucción CREATE VIEW que incluya la función GETDATE", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué definición de columna crea con éxito una columna?",
        opciones: [
            { textoRespuesta: "Presupuesto money CHECK(Presupuesto BETWEEN 100 AND 500)", isCorrect: true },
            { textoRespuesta: "Presupuesto money > 100", isCorrect: false },
            { textoRespuesta: "Presupuesto money(5,2) DEFAULT 200", isCorrect: false },
            { textoRespuesta: "Presupuesto money CHECK(BETWEEN 100 AND 500)", isCorrect: false }
        ]
    },
    {
        titulo: "Se dispone de una tabla Producto vacía que se ha creado con la siguiente instrucción: CREATE TABLE Producto( ProdiD int PRIMARY KEY, CategoriaID int NOT NULL, Descripcion varchar(35), Cantidad int CHECK(Cantidad> 0 AND Cantidad <=50)) ¿Qué instrucción agrega con éxito datos en Producto?",
        opciones: [
            { textoRespuesta: "INSERT INTO Producto(Descripcion, Cantidad) VALUES('caramelos', 15)", isCorrect: false },
            { textoRespuesta: "INSERT INTO Producto VALUES(101,NULL, 'caramelos', 25)", isCorrect: false },
            { textoRespuesta: "INSERT INTO Producto (ProdiD, CategoriaID, Descripcion, Cantidad) VALUES (101, 2, 'Oval Wall Mirror',65)", isCorrect: false },
            { textoRespuesta: "INSERT INTO Producto VALUES(101, 1, 'caramelos', 25)", isCorrect: true }
        ]
    },
    {
        titulo: "¿Cuál es el comando SQL para actualizar el campo 'telefono' de la tabla 'clientes' donde el campo 'id' sea igual a 1?",
        opciones: [
            { textoRespuesta: "UPDATE clientes SET telefono = '555-1234' WHERE id = 1", isCorrect: true },
            { textoRespuesta: "UPDATE clientes WHERE id = 1 SET telefono = '555-1234'", isCorrect: false },
            { textoRespuesta: "UPDATE telefono FROM clientes WHERE id = 1", isCorrect: false },
            { textoRespuesta: "UPDATE clientes SET telefono = '555-1234'", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cómo podrías buscar todos los productos en una tabla productos cuyo nombre tenga exactamente cinco letras?",
        opciones: [
            { textoRespuesta: "SELECT nombre FROM productos WHERE nombre LIKE '%%%%%';", isCorrect: false },
            { textoRespuesta: "SELECT nombre FROM productos WHERE nombre LIKE '_ _ _ _ _';", isCorrect: true },
            { textoRespuesta: "SELECT nombre FROM productos WHERE nombre LIKE '_ _ _ _';", isCorrect: false },
            { textoRespuesta: "SELECT nombre FROM productos WHERE nombre LIKE '%';", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué sentencia SQL usarías para cambiar el nombre de un producto y aumentar su precio al mismo tiempo?",
        opciones: [
            { textoRespuesta: "UPDATE productos SET nombre = 'NuevoNombre', precio = precio + 10 WHERE id = 1;", isCorrect: true },
            { textoRespuesta: "UPDATE productos SET nombre = 'NuevoNombre', precio = precio - 10 WHERE id = 1;", isCorrect: false },
            { textoRespuesta: "UPDATE productos SET 'NuevoNombre', precio + 10 WHERE id = 1;", isCorrect: false },
            { textoRespuesta: "UPDATE productos SET nombre = 'NuevoNombre' AND precio = precio + 10 WHERE id = 1;", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cómo encontrarías los códigos de producto que comienzan con dos caracteres cualesquiera seguidos de '99' y luego cualquier cantidad de caracteres?",
        opciones: [
            { textoRespuesta: "SELECT codigo FROM productos WHERE codigo LIKE '99%';", isCorrect: false },
            { textoRespuesta: "SELECT codigo FROM productos WHERE codigo LIKE '_99%';", isCorrect: false },
            { textoRespuesta: "SELECT codigo FROM productos WHERE codigo LIKE '%99%';", isCorrect: false },
            { textoRespuesta: "SELECT codigo FROM productos WHERE codigo LIKE '_ _99%';", isCorrect: true }
        ]
    },
    {
        titulo: "¿Cómo podrías insertar múltiples registros en la tabla productos en una sola sentencia?",
        opciones: [
            { textoRespuesta: "INSERT INTO productos (nombre, precio) VALUES ('Producto1', 10), ('Producto2', 20);", isCorrect: true },
            { textoRespuesta: "INSERT INTO productos (nombre, precio) MULTIPLE ('Producto1', 10), ('Producto2', 20);", isCorrect: false },
            { textoRespuesta: "INSERT INTO productos SET nombre = 'Producto1', precio = 10;", isCorrect: false },
            { textoRespuesta: "UPDATE productos SET nombre = 'Producto1', precio = 10;", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál es el propósito principal de un IDE?",
        opciones: [
            { textoRespuesta: "Compilar código", isCorrect: false },
            { textoRespuesta: "Ejecutar código", isCorrect: false },
            { textoRespuesta: "Depurar código", isCorrect: false },
            { textoRespuesta: "Facilitar el desarrollo de software", isCorrect: true }
        ]
    },
    {
        titulo: "¿Qué se entiende por recursividad en programación?",
        opciones: [
            { textoRespuesta: "Un bucle que se repite infinitamente", isCorrect: false },
            { textoRespuesta: "Una función que se llama a sí misma", isCorrect: true },
            { textoRespuesta: "La capacidad de un lenguaje para interpretar código", isCorrect: false },
            { textoRespuesta: "Un tipo de estructura de datos", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué función cumplen los compiladores en el proceso de desarrollo de software?",
        opciones: [
            { textoRespuesta: "Ejecutar código fuente línea por línea", isCorrect: false },
            { textoRespuesta: "Traducir código fuente a código máquina", isCorrect: true },
            { textoRespuesta: "Depurar errores en el código", isCorrect: false },
            { textoRespuesta: "Interpretar código para su ejecución", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál es la principal diferencia entre un compilador y un intérprete?",
        opciones: [
            { textoRespuesta: "El compilador ejecuta el código directamente, mientras que el intérprete lo traduce línea por línea", isCorrect: false },
            { textoRespuesta: "El compilador es más rápido que el intérprete", isCorrect: false },
            { textoRespuesta: "El intérprete es más fácil de depurar que el compilador", isCorrect: false },
            { textoRespuesta: "No hay diferencia, ambos realizan las mismas tareas", isCorrect: false },
            { textoRespuesta: "El compilador traduce todo el código antes de ejecutarlo, mientras que el intérprete traduce y ejecuta línea por línea", isCorrect: true }
        ]
    },
    {
        titulo: "¿Qué es un thread en programación?",
        opciones: [
            { textoRespuesta: "Un tipo de error en el código el cual se puede manejar a través de try catch", isCorrect: false },
            { textoRespuesta: "Una función recursiva que se llama a sí mismo", isCorrect: false },
            { textoRespuesta: "Una secuencia de instrucciones que se ejecutan de forma independiente", isCorrect: true },
            { textoRespuesta: "Un tipo de estructura de datos que sirve para manipular colecciones", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál es el proceso principal de manejo de excepciones en Java?",
        opciones: [
            { textoRespuesta: "Creación de excepciones y errores", isCorrect: false },
            { textoRespuesta: "Lanzamiento de excepciones y errores", isCorrect: false },
            { textoRespuesta: "Captura de excepciones", isCorrect: true },
            { textoRespuesta: "Sincronización de excepciones", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué tecnología se utiliza comúnmente para conectarse a una base de datos desde una aplicación Java?",
        opciones: [
            { textoRespuesta: "Sockets", isCorrect: false },
            { textoRespuesta: "JDBC", isCorrect: true },
            { textoRespuesta: "HTML", isCorrect: false },
            { textoRespuesta: "CSS", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?",
        opciones: [
            { textoRespuesta: "Pila", isCorrect: true },
            { textoRespuesta: "Cola", isCorrect: false },
            { textoRespuesta: "Lista enlazada", isCorrect: false },
            { textoRespuesta: "Árbol binario", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál de las siguientes estructuras de datos utiliza el principio FIFO (First In, First Out)?",
        opciones: [
            { textoRespuesta: "Pila", isCorrect: false },
            { textoRespuesta: "Cola", isCorrect: true },
            { textoRespuesta: "Lista enlazada", isCorrect: false },
            { textoRespuesta: "Árbol binario", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué método se utiliza para agregar un elemento al final de una cola en C#?",
        opciones: [
            { textoRespuesta: "Push()", isCorrect: false },
            { textoRespuesta: "Pop()", isCorrect: false },
            { textoRespuesta: "Enqueue()", isCorrect: true },
            { textoRespuesta: "Dequeue()", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué operación en una cola de prioridad en C# devuelve el elemento con la mayor prioridad sin eliminarlo de la cola?",
        opciones: [
            { textoRespuesta: "Enqueue()", isCorrect: false },
            { textoRespuesta: "Dequeue()", isCorrect: false },
            { textoRespuesta: "Peek()", isCorrect: true },
            { textoRespuesta: "Poll()", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál es la diferencia principal entre una pila y una cola de prioridad en C#?",
        opciones: [
            { textoRespuesta: "Una pila sigue el principio FIFO, mientras que una cola de prioridad sigue el principio LIFO.", isCorrect: false },
            { textoRespuesta: "Una pila tiene un tamaño fijo, mientras que una cola de prioridad puede crecer dinámicamente.", isCorrect: false },
            { textoRespuesta: "Una cola de prioridad asigna una prioridad a cada elemento, mientras que una pila no.", isCorrect: true },
            { textoRespuesta: "Una pila utiliza una lista enlazada, mientras que una cola de prioridad utiliza un arreglo.", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál de las siguientes es una dirección IP de clase B?",
        opciones: [
            { textoRespuesta: "192.168.0.1", isCorrect: false },
            { textoRespuesta: "172.16.0.1", isCorrect: true },
            { textoRespuesta: "10.0.0.1", isCorrect: false },
            { textoRespuesta: "224.0.0.1", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué máscara de subred se utiliza típicamente para una red de clase C?",
        opciones: [
            { textoRespuesta: "255.0.0.0", isCorrect: false },
            { textoRespuesta: "255.255.0.0", isCorrect: false },
            { textoRespuesta: "255.255.255.0", isCorrect: true },
            { textoRespuesta: "255.255.255.255", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué protocolo se utiliza para asignar automáticamente direcciones IP a los dispositivos en una red?",
        opciones: [
            { textoRespuesta: "DNS", isCorrect: false },
            { textoRespuesta: "HTTP", isCorrect: false },
            { textoRespuesta: "DHCP", isCorrect: true },
            { textoRespuesta: "FTP", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué rango de direcciones IP se considera privado y no se enruta a través de Internet?",
        opciones: [
            { textoRespuesta: "169.254.0.0 - 169.254.255.255", isCorrect: false },
            { textoRespuesta: "192.168.0.0 - 192.168.255.255", isCorrect: true },
            { textoRespuesta: "224.0.0.0 - 239.255.255.255", isCorrect: false },
            { textoRespuesta: "240.0.0.0 - 255.255.255.255", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué dirección IP se utiliza para la difusión (broadcast) en una red de clase C con la dirección de red 192.168.1.0?",
        opciones: [
            { textoRespuesta: "192.168.1.0", isCorrect: false },
            { textoRespuesta: "192.168.1.1", isCorrect: false },
            { textoRespuesta: "192.168.1.254", isCorrect: false },
            { textoRespuesta: "192.168.1.255", isCorrect: true }
        ]
    },
    {
        titulo: "¿Qué dirección IP corresponde a una red de clase A?",
        opciones: [
            { textoRespuesta: "10.0.0.1", isCorrect: true },
            { textoRespuesta: "172.31.255.255", isCorrect: false },
            { textoRespuesta: "192.168.100.1", isCorrect: false },
            { textoRespuesta: "224.0.0.1", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál de las siguientes es una característica principal de la topología en estrella?",
        opciones: [
            { textoRespuesta: "Todos los nodos están conectados a un único cable central.", isCorrect: false },
            { textoRespuesta: "Cada nodo está conectado directamente a todos los demás nodos.", isCorrect: false },
            { textoRespuesta: "Todos los nodos están conectados a un nodo central.", isCorrect: true },
            { textoRespuesta: "Los nodos están conectados en un anillo cerrado.", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué topología de red utiliza una configuración de anillo en la que los datos viajan en una única dirección?",
        opciones: [
            { textoRespuesta: "Topología de estrella", isCorrect: false },
            { textoRespuesta: "Topología de bus", isCorrect: false },
            { textoRespuesta: "Topología de anillo", isCorrect: true },
            { textoRespuesta: "Topología de malla", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué topología es más adecuada para una red donde la redundancia y la tolerancia a fallos son cruciales?",
        opciones: [
            { textoRespuesta: "Topología de bus", isCorrect: false },
            { textoRespuesta: "Topología de anillo", isCorrect: false },
            { textoRespuesta: "Topología de estrella", isCorrect: false },
            { textoRespuesta: "Topología de malla", isCorrect: true }
        ]
    },
    {
        titulo: "En una topología de estrella, ¿qué sucede si el nodo central falla?",
        opciones: [
            { textoRespuesta: "Toda la red sigue funcionando sin interrupciones.", isCorrect: false },
            { textoRespuesta: "Solo fallan los nodos directamente conectados al nodo central.", isCorrect: false },
            { textoRespuesta: "Toda la red se cae.", isCorrect: true },
            { textoRespuesta: "La red se convierte automáticamente en una topología de bus.", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál es la longitud en bits de una dirección IPv4?",
        opciones: [
            { textoRespuesta: "32 bits", isCorrect: true },
            { textoRespuesta: "64 bits", isCorrect: false },
            { textoRespuesta: "128 bits", isCorrect: false },
            { textoRespuesta: "256 bits", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál de las siguientes es una dirección IPv6 válida?",
        opciones: [
            { textoRespuesta: "192.168.1.1", isCorrect: false },
            { textoRespuesta: "10.0.0.1", isCorrect: false },
            { textoRespuesta: "FE80::0202:B3FF:FE1E:8329", isCorrect: true },
            { textoRespuesta: "172.16.0.1", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué notación se utiliza para representar las direcciones IPv6?",
        opciones: [
            { textoRespuesta: "Decimal con puntos", isCorrect: false },
            { textoRespuesta: "Binaria", isCorrect: false },
            { textoRespuesta: "Hexadecimal con dos puntos", isCorrect: true },
            { textoRespuesta: "Octal", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuántos bits tiene una dirección IPv6?",
        opciones: [
            { textoRespuesta: "32 bits", isCorrect: false },
            { textoRespuesta: "64 bits", isCorrect: false },
            { textoRespuesta: "128 bits", isCorrect: true },
            { textoRespuesta: "256 bits", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuál es la longitud de una dirección MAC?",
        opciones: [
            { textoRespuesta: "32 bits", isCorrect: false },
            { textoRespuesta: "48 bits", isCorrect: true },
            { textoRespuesta: "64 bits", isCorrect: false },
            { textoRespuesta: "128 bits", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué tecnología se utiliza para crear una red privada segura a través de una red pública como Internet?",
        opciones: [
            { textoRespuesta: "VLAN", isCorrect: false },
            { textoRespuesta: "VPN", isCorrect: true },
            { textoRespuesta: "WLAN", isCorrect: false },
            { textoRespuesta: "LAN", isCorrect: false }
        ]
    },
    {
        titulo: "Si una PC no puede obtener una dirección IP automáticamente, ¿qué podría estar fallando en la red?",
        opciones: [
            { textoRespuesta: "El servidor DNS", isCorrect: false },
            { textoRespuesta: "El servidor DHCP", isCorrect: true },
            { textoRespuesta: "El servidor FTP", isCorrect: false },
            { textoRespuesta: "El servidor HTTP", isCorrect: false }
        ]
    },
    {
        titulo: "Si dos PCs en la misma red local no pueden comunicarse entre sí, ¿cuál de los siguientes comandos en la línea de comandos de Windows puede ayudar a identificar el problema?",
        opciones: [
            { textoRespuesta: "ping", isCorrect: true },
            { textoRespuesta: "ipconfig", isCorrect: true },
            { textoRespuesta: "tracert", isCorrect: true },
            { textoRespuesta: "Todas son correctas", isCorrect: true }
        ]
    },
    {
        titulo: "¿Cuál de las siguientes configuraciones de dirección IP es válida para una red con la dirección 192.168.1.0/24?",
        opciones: [
            { textoRespuesta: "Dirección IP: 192.168.1.256, Máscara de subred: 255.255.255.0", isCorrect: false },
            { textoRespuesta: "Dirección IP: 192.168.2.1, Máscara de subred: 255.255.255.0", isCorrect: false },
            { textoRespuesta: "Dirección IP: 192.168.1.10, Máscara de subred: 255.255.255.0", isCorrect: true },
            { textoRespuesta: "Dirección IP: 10.0.0.1, Máscara de subred: 255.0.0.0", isCorrect: false }
        ]
    },
    {
        titulo: "¿Cuántas subredes y hosts por subred se pueden obtener si se usa una máscara de subred 255.255.255.192 en una red clase C?",
        opciones: [
            { textoRespuesta: "2 subredes, 126 hosts por subred", isCorrect: false },
            { textoRespuesta: "4 subredes, 62 hosts por subred", isCorrect: true },
            { textoRespuesta: "6 subredes, 30 hosts por subred", isCorrect: false },
            { textoRespuesta: "8 subredes, 14 hosts por subred", isCorrect: false }
        ]
    },
    {
        titulo: "¿Qué indica una respuesta exitosa del comando ping?",
        opciones: [
            { textoRespuesta: "La dirección IP está configurada incorrectamente", isCorrect: false },
            { textoRespuesta: "La red está congestionada", isCorrect: false },
            { textoRespuesta: "Hay conectividad entre los dispositivos", isCorrect: true },
            { textoRespuesta: "El dispositivo de destino está apagado", isCorrect: false }
        ]
    }
];

export default preguntas;