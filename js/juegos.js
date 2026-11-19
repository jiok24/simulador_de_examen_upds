const juegos = [
    {
        numb: 1,
        question: "¿Cuál es el protagonista principal de GTA V en Los Santos?",
        answer: "Michael, Franklin y Trevor",
        options: ["Niko Bellic", "CJ", "Michael, Franklin y Trevor", "Tommy Vercetti"]
    },
    {
        numb: 2,
        question: "¿Qué ciudad es el escenario principal de GTA: San Andreas?",
        answer: "San Andreas (Los Santos, San Fierro, Las Venturas)",
        options: ["Liberty City", "Vice City", "San Andreas (Los Santos, San Fierro, Las Venturas)", "Carcer City"]
    },
    {
        numb: 3,
        question: "¿Cuál es el nombre de la pandilla a la que pertenece CJ al inicio de San Andreas?",
        answer: "Grove Street Families",
        options: ["Ballas", "Grove Street Families", "Vagos", "Aztecas"]
    },
    {
        numb: 4,
        question: "¿Qué elemento recupera la salud y el blindaje al máximo de manera instantánea en la mayoría de los GTA clásicos?",
        answer: "Código de trucos",
        options: ["Comer hamburguesas", "Ir al hospital", "Código de trucos", "Dormir en piso franco"]
    },
    {
        numb: 5,
        question: "¿Cuál es el vehículo deportivo clásico y emblemático de la saga fabricado por Infernus/Bravado?",
        answer: "Infernus",
        options: ["Banshee", "Infernus", "Adder", "Sentinel"]
    },
    {
        numb: 6,
        question: "¿Cuál es la estación de radio de hip-hop clásico más famosa en GTA: San Andreas?",
        answer: "Radio Los Santos",
        options: ["K-Rose", "Bounce FM", "Radio Los Santos", "Playback FM"]
    },
    {
        numb: 7,
        question: "¿Qué sistema o nivel mide la atención y persecución de la policía en el juego?",
        answer: "Nivel de búsqueda (Estrellas)",
        options: ["Nivel de respeto", "Nivel de búsqueda (Estrellas)", "Barra de resistencia", "Medidor de condena"]
    },
    {
        numb: 8,
        question: "¿Cuántas estrellas de búsqueda como máximo se pueden obtener de forma natural en GTA V?",
        answer: "5 estrellas",
        options: ["3 estrellas", "4 estrellas", "5 estrellas", "6 estrellas"]
    },
    {
        numb: 9,
        question: "¿Qué lugar te quita las armas y te cobra dinero cuando mueres en el juego?",
        answer: "Hospital",
        options: ["Comisaría", "Hospital", "Ammo-Nation", "Taller mecánico"]
    },
    {
        numb: 10,
        question: "¿Cuál es la moneda oficial utilizada en todo el estado de parodia estadounidense dentro de GTA?",
        answer: "Dólares (GTA$)",
        options: ["Euros", "Dólares (GTA$)", "Libras", "Bitcoins"]
    },
    {
        numb: 11,
        question: "¿Qué estudia el minijuego de la autoescuela en San Andreas?",
        answer: "Las habilidades de conducción y maniobra",
        options: ["Las leyes de tránsito reales", "Las habilidades de conducción y maniobra", "Tiros a distancia", "Mecánica de aviones"]
    },
    {
        numb: 12,
        question: "¿Qué mejora física te permite correr más rápido y saltar más alto en GTA: San Andreas tras hacer ejercicio?",
        answer: "Estadística de Resistencia y Musculatura",
        options: ["Dinero", "Estadística de Resistencia y Musculatura", "Blindaje pesado", "Gafas de sol"]
    },
    {
        numb: 13,
        question: "¿Cuál es el mapa o área insular más grande del universo 3D/HD de GTA V?",
        answer: "Condado de Blaine y Los Santos",
        options: ["Vice City", "Liberty City", "Condado de Blaine y Los Santos", "Alderney"]
    },
    {
        numb: 14,
        question: "¿Qué personaje icónico traiciona a CJ al final de la historia de San Andreas?",
        answer: "Big Smoke",
        options: ["Sweet", "Big Smoke", "Ryder", "Cesare"]
    },
    {
        numb: 15,
        question: "¿Qué sistema del juego te permite modificar la carrocería, pintura y nitro de tus vehículos?",
        answer: "Los Santos Customs (o Transfender)",
        options: ["Ammo-Nation", "Burger Shot", "Los Santos Customs (o Transfender)", "Cluckin' Bell"]
    },
    {
        numb: 16,
        question: "¿Qué objeto coleccionable clásico debías fotografiar o recolectar por todo San Andreas?",
        answer: "Herraduras y Ostras",
        options: ["Estatuas doradas", "Herraduras y Ostras", "Monedas antiguas", "Discos de vinilo"]
    },
    {
        numb: 17,
        question: "¿Qué corporación o empresa farmacéutica y tecnológica ficticia es muy famosa en el universo GTA?",
        answer: "BawSaq / Humane Labs",
        options: ["Apple", "Humane Labs", "Abstergo", "Oscorp"]
    },
    {
        numb: 18,
        question: "¿A qué temperatura mental o nivel de locura suele asociarse Trevor Philips?",
        answer: "Extremo e impredecible",
        options: ["Tranquilo y calculador", "Frío y silencioso", "Extremo e impredecible", "Tímido"]
    },
    {
        numb: 19,
        question: "¿Qué temática central satiriza constantemente la saga Grand Theft Auto?",
        answer: "La cultura, política y sociedad estadounidense",
        options: ["La historia medieval europea", "La cultura, política y sociedad estadounidense", "La ciencia ficción espacial", "La mitología griega"]
    },
    {
        numb: 20,
        question: "¿Cuál es la principal fuente de ingresos ilegales para amasar grandes fortunas en el modo historia?",
        answer: "Los Golpes (Heists) y misiones de robo",
        options: ["Vender limonada", "Trabajar de taxista", "Los Golpes (Heists) y misiones de robo", "Recolectar chatarra"]
    },
    {
        numb: 21,
        question: "¿Qué local de comida rápida es el rival directo de Cluckin' Bell en Los Santos?",
        answer: "Burger Shot",
        options: ["Well Stacked Pizza Co.", "Burger Shot", "Up-n-Atom Burger", "Taco Bomb"]
    },
    {
        numb: 22,
        question: "¿Qué suceso trágico y político marca la trama de traición en GTA IV con los amigos de Niko?",
        answer: "La emboscada en el trato de diamantes / traición",
        options: ["Una epidemia zombie", "La emboscada en el trato de diamantes / traición", "Un ataque alienígena", "Un terremoto masivo"]
    },
    {
        numb: 23,
        question: "¿Qué departamento gubernamental corrupto persigue incansablemente a los criminales en Los Santos?",
        answer: "FIB y IAA",
        options: ["FBI", "FIB y IAA", "CIA", "KGB"]
    },
    {
        numb: 24,
        question: "¿Cuál es el vehículo militar aéreo más temido y destructivo de la saga (un helicóptero de combate)?",
        answer: "Hunter (o Annihilator / Akula)",
        options: ["Maverick", "Hunter (o Annihilator / Akula)", "Sparrow", "Seasparrow"]
    },
    {
        numb: 25,
        question: "¿Qué función te permite saltar en paracaídas desde lo alto de los rascacielos o del Monte Chiliad?",
        answer: "Equipo de paracaidismo",
        options: ["Alas delta", "Equipo de paracaidismo", "Habilidades de levitación", "Jetski aéreo"]
    }
];