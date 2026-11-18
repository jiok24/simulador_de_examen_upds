const programacion3 = [
    {
        numb: 1,
        question: "¿Qué paradigma organiza el código en objetos que combinan datos y comportamiento?",
        answer: "Programación orientada a objetos",
        options: ["Programación funcional", "Programación orientada a objetos", "Programación estructurada", "Programación lógica"]
    },
    {
        numb: 2,
        question: "¿Qué pilar de la POO oculta los detalles internos de un objeto?",
        answer: "Encapsulamiento",
        options: ["Herencia", "Polimorfismo", "Encapsulamiento", "Compilación"]
    },
    {
        numb: 3,
        question: "¿Qué mecanismo permite que una clase reutilice atributos y métodos de otra?",
        answer: "Herencia",
        options: ["Herencia", "Sobrecarga", "Recursión", "Iteración"]
    },
    {
        numb: 4,
        question: "¿Qué describe mejor el polimorfismo?",
        answer: "Un mismo método con comportamientos distintos según el objeto",
        options: [
            "Ocultar los atributos de una clase",
            "Un mismo método con comportamientos distintos según el objeto",
            "Crear objetos sin usar clases",
            "Repetir un bloque de código varias veces"
        ]
    },
    {
        numb: 5,
        question: "¿Qué estructura de datos sigue el principio LIFO (último en entrar, primero en salir)?",
        answer: "Pila",
        options: ["Cola", "Pila", "Lista enlazada", "Árbol"]
    },
    {
        numb: 6,
        question: "¿Qué estructura de datos sigue el principio FIFO (primero en entrar, primero en salir)?",
        answer: "Cola",
        options: ["Pila", "Árbol", "Cola", "Grafo"]
    },
    {
        numb: 7,
        question: "¿Cuál es la complejidad temporal de la búsqueda binaria?",
        answer: "O(log n)",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"]
    },
    {
        numb: 8,
        question: "¿Para qué sirve un constructor en una clase?",
        answer: "Inicializar un objeto al crearlo",
        options: ["Destruir un objeto", "Inicializar un objeto al crearlo", "Heredar de otra clase", "Imprimir datos en pantalla"]
    },
    {
        numb: 9,
        question: "¿Qué es la recursión?",
        answer: "Una función que se llama a sí misma",
        options: ["Un ciclo infinito", "Una función que se llama a sí misma", "Una variable global", "Un tipo de dato"]
    },
    {
        numb: 10,
        question: "¿Qué caracteriza a una clase abstracta?",
        answer: "No se puede instanciar directamente",
        options: ["No tiene atributos", "No se puede instanciar directamente", "No puede heredarse", "Solo tiene métodos privados"]
    },
    {
        numb: 11,
        question: "¿Qué define una interfaz?",
        answer: "Un contrato de métodos que otras clases deben implementar",
        options: [
            "Una base de datos",
            "Un contrato de métodos que otras clases deben implementar",
            "Una ventana gráfica",
            "Un tipo de bucle"
        ]
    },
    {
        numb: 12,
        question: "¿Qué sentencia SQL se usa para consultar datos de una tabla?",
        answer: "SELECT",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"]
    },
    {
        numb: 13,
        question: "¿Qué estructura está formada por nodos, donde cada uno apunta al siguiente?",
        answer: "Lista enlazada",
        options: ["Arreglo", "Lista enlazada", "Pila estática", "Matriz"]
    },
    {
        numb: 14,
        question: "¿Qué algoritmo de ordenamiento compara elementos adyacentes y los intercambia?",
        answer: "Burbuja",
        options: ["Burbuja", "Búsqueda binaria", "Merge sort", "Hashing"]
    },
    {
        numb: 15,
        question: "¿Qué comando de Git guarda los cambios en el repositorio local?",
        answer: "git commit",
        options: ["git push", "git clone", "git commit", "git pull"]
    },
    {
        numb: 16,
        question: "¿Qué estructura se usa para manejar excepciones en la mayoría de lenguajes?",
        answer: "try-catch",
        options: ["if-else", "for-each", "try-catch", "switch-case"]
    },
    {
        numb: 17,
        question: "¿Qué método HTTP se usa normalmente para obtener recursos de un servidor?",
        answer: "GET",
        options: ["POST", "GET", "PUT", "DELETE"]
    },
    {
        numb: 18,
        question: "¿Qué caracteriza a un árbol binario?",
        answer: "Cada nodo tiene como máximo dos hijos",
        options: [
            "Tiene exactamente dos nodos",
            "Cada nodo tiene como máximo dos hijos",
            "Solo tiene una rama",
            "Todos los nodos son hojas"
        ]
    },
    {
        numb: 19,
        question: "¿Para qué sirve una clave primaria en una base de datos?",
        answer: "Identificar de forma única cada registro",
        options: ["Cifrar los datos", "Ordenar alfabéticamente", "Identificar de forma única cada registro", "Relacionar dos bases de datos"]
    },
    {
        numb: 20,
        question: "¿Qué es JSON?",
        answer: "Un formato ligero de intercambio de datos",
        options: ["Un lenguaje de programación", "Un formato ligero de intercambio de datos", "Un sistema operativo", "Un framework de diseño"]
    },
    {
        numb: 21,
        question: "¿Qué es la sobrecarga de métodos?",
        answer: "Mismo nombre de método con diferentes parámetros",
        options: [
            "Mismo nombre de método con diferentes parámetros",
            "Un método que consume demasiada memoria",
            "Heredar un método de la clase padre",
            "Eliminar un método de una clase"
        ]
    },
    {
        numb: 22,
        question: "¿Qué recorrido de un árbol visita primero la raíz, luego el subárbol izquierdo y después el derecho?",
        answer: "Preorden",
        options: ["Inorden", "Postorden", "Preorden", "Por niveles"]
    },
    {
        numb: 23,
        question: "¿Cuál es la complejidad promedio de acceso en una tabla hash?",
        answer: "O(1)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"]
    },
    {
        numb: 24,
        question: "¿Qué patrón de diseño garantiza una única instancia de una clase?",
        answer: "Singleton",
        options: ["Factory", "Observer", "Singleton", "Decorator"]
    },
    {
        numb: 25,
        question: "¿Qué principio SOLID establece que una clase debe tener una sola razón para cambiar?",
        answer: "Responsabilidad única",
        options: ["Responsabilidad única", "Abierto/cerrado", "Sustitución de Liskov", "Inversión de dependencias"]
    },
];