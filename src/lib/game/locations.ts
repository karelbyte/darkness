import { Location } from '../types/game';

export const gameLocations: Location[] = [
  {
    id: 'start',
    name: 'Entrada del Bosque Oscuro',
    description: 'Te encuentras en la entrada de un bosque denso y misterioso. Los árboles se alzan como gigantes silenciosos, y una niebla espesa se desliza entre sus troncos. Un sendero serpentea hacia el interior, mientras que otro camino lleva hacia una cabaña abandonada a tu derecha.',
    image: '/images/init.jpg',
    exits: [
      {
        direction: 'norte',
        targetLocationId: 'deep-forest',
        description: 'El sendero principal se adentra en la oscuridad del bosque.'
      },
      {
        direction: 'este',
        targetLocationId: 'abandoned-cabin',
        description: 'Una cabaña de madera en ruinas se vislumbra entre los árboles.'
      }
    ],
    items: [
      {
        id: 'rusty-key',
        name: 'llave oxidada',
        description: 'Una llave de hierro oxidado que parece muy antigua.',
        takeable: true
      }
    ],
    npcs: []
  },
  {
    id: 'deep-forest',
    name: 'Profundidades del Bosque',
    description: 'Has llegado a una parte más densa del bosque. La luz apenas se filtra a través del follaje, creando sombras inquietantes que se mueven con el viento. Escuchas sonidos extraños que no puedes identificar. Hay una cueva oscura a tu izquierda y un claro iluminado por la luna hacia el norte.',
    image: '/images/cave.jpg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'start',
        description: 'El camino de regreso hacia la entrada del bosque.'
      },
      {
        direction: 'norte',
        targetLocationId: 'moonlit-clearing',
        description: 'Un claro bañado por la luz de la luna.'
      },
      {
        direction: 'oeste',
        targetLocationId: 'mysterious-cave',
        description: 'Una cueva oscura que parece absorber toda la luz.'
      }
    ],
    items: [
      {
        id: 'mysterious-herb',
        name: 'hierba misteriosa',
        description: 'Una planta brillante que emite un suave resplandor azulado.',
        takeable: true
      }
    ],
    npcs: [
      {
        id: 'forest-spirit',
        name: 'espíritu del bosque',
        description: 'Una figura etérea que flota entre los árboles, sus ojos brillan con sabiduría antigua.',
        dialogue: [
          'Los secretos del bosque están ocultos para aquellos que no saben buscar.',
          'La llave que buscas está en manos de quien no la necesita.'
        ]
      }
    ]
  },
  {
    id: 'abandoned-cabin',
    name: 'Cabaña Abandonada',
    description: 'Una cabaña de madera en estado de abandono. Las ventanas están rotas y la puerta cuelga de sus bisagras. El interior está lleno de polvo y telarañas. Hay un cofre cerrado en una esquina y una escalera que lleva al piso superior.',
    image: '/placeholder-cabin.svg',
    exits: [
      {
        direction: 'oeste',
        targetLocationId: 'start',
        description: 'Regresar hacia la entrada del bosque.'
      },
      {
        direction: 'arriba',
        targetLocationId: 'cabin-attic',
        description: 'Subir por la escalera hacia el ático.'
      }
    ],
    items: [
      {
        id: 'old-journal',
        name: 'diario antiguo',
        description: 'Un diario cubierto de polvo con páginas amarillentas.',
        takeable: true
      },
      {
        id: 'locked-chest',
        name: 'cofre cerrado',
        description: 'Un cofre de madera con un candado oxidado.',
        takeable: false
      }
    ],
    npcs: []
  },
  {
    id: 'moonlit-clearing',
    name: 'Claro Iluminado por la Luna',
    description: 'Un hermoso claro donde la luna llena brilla intensamente, iluminando todo con su luz plateada. En el centro hay un altar de piedra antigua con runas grabadas. El aire aquí es más puro y tranquilo que en el resto del bosque.',
    image: '/placeholder-moon.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'deep-forest',
        description: 'Regresar al bosque denso.'
      }
    ],
    items: [
      {
        id: 'moonstone',
        name: 'piedra lunar',
        description: 'Una piedra que brilla con la misma intensidad que la luna.',
        takeable: true
      }
    ],
    npcs: [
      {
        id: 'moon-guardian',
        name: 'guardián lunar',
        description: 'Una figura majestuosa vestida con ropas que brillan como la luz de la luna.',
        dialogue: [
          'Solo aquellos que han encontrado la verdad pueden pasar por el portal.',
          'La llave de hierro abre más que simples cerraduras.'
        ]
      }
    ]
  },
  {
    id: 'mysterious-cave',
    name: 'Cueva Misteriosa',
    description: 'Una cueva profunda y oscura. El eco de tus pasos resuena en las paredes de piedra. Hay cristales que brillan débilmente en las paredes, proporcionando una luz tenue. Al fondo se ve una puerta de piedra con símbolos antiguos.',
    image: '/placeholder-cave.svg',
    exits: [
      {
        direction: 'este',
        targetLocationId: 'deep-forest',
        description: 'Salir de la cueva hacia el bosque.'
      },
      {
        direction: 'sur',
        targetLocationId: 'cave-chamber',
        description: 'Adentrarse más en la cueva hacia una cámara oculta.'
      }
    ],
    items: [
      {
        id: 'glowing-crystal',
        name: 'cristal brillante',
        description: 'Un cristal que pulsa con una luz azul suave.',
        takeable: true
      }
    ],
    npcs: []
  },
  {
    id: 'cabin-attic',
    name: 'Ático de la Cabaña',
    description: 'El ático está lleno de objetos polvorientos y cajas viejas. Hay una ventana pequeña que permite ver el bosque desde arriba. En una esquina hay un espejo antiguo que parece reflejar algo más que la habitación.',
    image: '/placeholder-attic.svg',
    exits: [
      {
        direction: 'abajo',
        targetLocationId: 'abandoned-cabin',
        description: 'Bajar por la escalera hacia la cabaña.'
      }
    ],
    items: [
      {
        id: 'ancient-mirror',
        name: 'espejo antiguo',
        description: 'Un espejo que parece mostrar imágenes del pasado.',
        takeable: false
      },
      {
        id: 'dusty-scroll',
        name: 'pergamino polvoriento',
        description: 'Un pergamino con texto en una lengua antigua.',
        takeable: true
      }
    ],
    npcs: []
  },
  {
    id: 'cave-chamber',
    name: 'Cámara Oculta',
    description: 'Una cámara circular tallada en la roca. En el centro hay un pedestal con una llave dorada brillante. Las paredes están cubiertas de pinturas rupestres que cuentan una historia antigua. El aire aquí es frío y cargado de misterio.',
    image: '/placeholder-chamber.svg',
    exits: [
      {
        direction: 'norte',
        targetLocationId: 'mysterious-cave',
        description: 'Regresar a la cueva principal.'
      }
    ],
    items: [
      {
        id: 'golden-key',
        name: 'llave dorada',
        description: 'Una llave de oro puro que brilla con luz propia.',
        takeable: true
      }
    ],
    npcs: []
  }
];
