import { Location } from '../types/game';

export const gameLocations: Location[] = [
  {
    id: 'start',
    name: 'Entrada del Bosque Oscuro',
    description: 'Te encuentras en la entrada de un bosque denso y misterioso. Los árboles se alzan como gigantes silenciosos, y una niebla espesa se desliza entre sus troncos. Un sendero serpentea hacia el interior, mientras que otro camino lleva hacia una cabaña abandonada a tu derecha. Una voz susurra en el viento: "La princesa Nieve ha sido raptada por Rack, el demonio maligno. Solo un valiente puede rescatarla."',
    image: '/images/under-construction.svg',
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
      },
      {
        direction: 'oeste',
        targetLocationId: 'fairy-grove',
        description: 'Un claro brillante con luces danzantes se ve entre los árboles.'
      }
    ],
    items: [
      {
        id: 'rusty-key',
        name: 'llave oxidada',
        description: 'Una llave de hierro oxidado que parece muy antigua.',
        takeable: true,
        usable: true,
        effects: {
          unlock: ['abandoned-cabin']
        }
      },
      {
        id: 'ancient-scroll',
        name: 'pergamino antiguo',
        description: 'Un pergamino con runas que dicen: "Para encontrar a Nieve, busca las tres llaves de poder."',
        takeable: true,
        usable: false
      }
    ],
    npcs: [
      {
        id: 'forest-guardian',
        name: 'guardián del bosque',
        description: 'Un espíritu anciano con ojos brillantes que flota entre los árboles.',
        dialogue: [
          'Bienvenido, valiente aventurero. La princesa Nieve necesita tu ayuda.',
          'Rack, el demonio maligno, la ha llevado a su fortaleza en las profundidades del bosque.',
          'Necesitarás las tres llaves de poder para llegar hasta ella: la Llave de la Tierra, la Llave del Agua y la Llave del Fuego.'
        ]
      }
    ]
  },
  {
    id: 'abandoned-cabin',
    name: 'Cabaña Abandonada',
    description: 'Una cabaña de madera en ruinas con ventanas rotas y puerta cerrada. El aire huele a humedad y abandono. Hay runas antiguas talladas en la puerta.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'oeste',
        targetLocationId: 'start',
        description: 'Regresar a la entrada del bosque.'
      },
      {
        direction: 'norte',
        targetLocationId: 'cabin-attic',
        description: 'Una escalera de madera lleva al ático.'
      }
    ],
    items: [
      {
        id: 'old-journal',
        name: 'diario antiguo',
        description: 'Un diario con páginas amarillentas que cuenta la historia de un antiguo mago.',
        takeable: true,
        usable: true,
        effects: {
          special: 'magic_knowledge'
        }
      },
      {
        id: 'healing-herb',
        name: 'hierba curativa',
        description: 'Una hierba medicinal que puede curar heridas.',
        takeable: true,
        usable: true,
        effects: {
          healing: 35
        }
      }
    ],
    npcs: [
      {
        id: 'cabin-spirit',
        name: 'espíritu de la cabaña',
        description: 'Un espíritu benevolente que habita en la cabaña abandonada.',
        dialogue: [
          'Bienvenido, viajero. Esta cabaña perteneció a un mago sabio.',
          'En el ático encontrarás objetos útiles para tu aventura.',
          'Pero ten cuidado: hay criaturas peligrosas en el bosque.'
        ]
      }
    ]
  },
  {
    id: 'cabin-attic',
    name: 'Ático de la Cabaña',
    description: 'Un ático polvoriento lleno de objetos antiguos y libros de magia. El techo tiene agujeros por donde entra la luz del sol.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'abandoned-cabin',
        description: 'Bajar a la cabaña.'
      }
    ],
    items: [
      {
        id: 'magic-wand',
        name: 'varita mágica',
        description: 'Una varita de madera que aumenta el poder mágico.',
        takeable: true,
        usable: true,
        effects: {
          combat: {
            attackBonus: 5
          }
        }
      },
      {
        id: 'protection-amulet',
        name: 'amuleto de protección',
        description: 'Un amuleto que otorga protección contra ataques.',
        takeable: true,
        usable: true,
        effects: {
          combat: {
            defenseBonus: 3
          }
        }
      },
      {
        id: 'magic-shield',
        name: 'escudo mágico',
        description: 'Un escudo encantado que reduce significativamente el daño recibido.',
        takeable: true,
        usable: true,
        effects: {
          combat: {
            defenseBonus: 5
          }
        }
      }
    ],
    npcs: []
  },
  {
    id: 'deep-forest',
    name: 'Profundidades del Bosque',
    description: 'Has llegado a una parte más densa del bosque. La luz apenas se filtra a través del follaje, creando sombras inquietantes que se mueven con el viento. Escuchas sonidos extraños que no puedes identificar. Hay una cueva oscura a tu izquierda y un claro iluminado por la luna hacia el norte.',
    image: '/images/under-construction.svg',
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
      },
      {
        direction: 'este',
        targetLocationId: 'goblin-camp',
        description: 'Se escuchan risas maliciosas y el sonido de metal.'
      },
      {
        direction: 'noreste',
        targetLocationId: 'mist-labyrinth',
        description: 'Una densa niebla se extiende hacia el noreste, creando un laberinto natural.'
      }
    ],
    items: [
      {
        id: 'mysterious-herb',
        name: 'hierba misteriosa',
        description: 'Una planta brillante que emite un suave resplandor azulado.',
        takeable: true
      },
      {
        id: 'silver-coin',
        name: 'moneda de plata',
        description: 'Una moneda antigua con el símbolo de una corona.',
        takeable: true,
        usable: true,
        effects: {
          special: 'troll_payment'
        },
        requirements: {
          location: 'troll-bridge'
        }
      }
    ],
    npcs: [
      {
        id: 'forest-spirit',
        name: 'espíritu del bosque',
        description: 'Una figura etérea que flota entre los árboles, sus ojos brillan con sabiduría antigua.',
        dialogue: [
          'Los secretos del bosque están ocultos para aquellos que no saben buscar.',
          'La primera llave está en manos de los duendes, pero cuidado, son traicioneros.',
          'Para encontrar la segunda llave, debes resolver el enigma de las hadas.'
        ]
      }
    ]
  },
  {
    id: 'fairy-grove',
    name: 'Claro de las Hadas',
    description: 'Un hermoso claro donde las hadas danzan en círculos de luz dorada. Flores brillantes cubren el suelo y el aire está lleno de música etérea. En el centro hay un altar de cristal con runas brillantes.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'este',
        targetLocationId: 'start',
        description: 'Regresar hacia la entrada del bosque.'
      },
      {
        direction: 'norte',
        targetLocationId: 'fairy-queen-throne',
        description: 'Un sendero dorado lleva hacia un trono de cristal.'
      }
    ],
    items: [
      {
        id: 'fairy-dust',
        name: 'polvo de hada',
        description: 'Polvo brillante que brilla con todos los colores del arcoíris.',
        takeable: true
      },
      {
        id: 'crystal-flower',
        name: 'flor de cristal',
        description: 'Una flor hecha de cristal puro que nunca se marchita.',
        takeable: true
      }
    ],
    npcs: [
      {
        id: 'fairy-elder',
        name: 'hada anciana',
        description: 'Una hada anciana con alas de cristal que brilla con sabiduría.',
        dialogue: [
          'Bienvenido al reino de las hadas, valiente mortal.',
          'Para obtener la Llave del Agua, debes resolver nuestro enigma:',
          '"Soy más fuerte que el hierro, más suave que la seda, más rápido que el viento. ¿Qué soy?"',
          'La respuesta es "amor". Ahora puedes pasar al trono de nuestra reina.'
        ],
        puzzle: {
          question: 'Soy más fuerte que el hierro, más suave que la seda, más rápido que el viento. ¿Qué soy?',
          answer: 'amor',
          reward: 'fairy-blessing'
        }
      }
    ]
  },
  {
    id: 'fairy-queen-throne',
    name: 'Trono de la Reina de las Hadas',
    description: 'Un majestuoso trono de cristal tallado en una sola pieza. La Reina de las Hadas se sienta elegantemente, con una corona de estrellas en su cabeza. Su presencia irradia poder y bondad.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'fairy-grove',
        description: 'Regresar al claro de las hadas.'
      },
      {
        direction: 'este',
        targetLocationId: 'waterfall-chamber',
        description: 'Una cascada de agua cristalina revela una entrada oculta.'
      }
    ],
    items: [
      {
        id: 'water-key',
        name: 'llave del agua',
        description: 'Una llave hecha de agua cristalina que nunca se evapora.',
        takeable: true
      },
      {
        id: 'healing-potion',
        name: 'poción curativa',
        description: 'Una poción azul que cura las heridas.',
        takeable: true,
        usable: true,
        effects: {
          healing: 60
        }
      }
    ],
    npcs: [
      {
        id: 'fairy-queen',
        name: 'reina de las hadas',
        description: 'La Reina de las Hadas, radiante y poderosa, con ojos que brillan como estrellas.',
        dialogue: [
          'Has demostrado tu sabiduría al resolver nuestro enigma.',
          'Toma la Llave del Agua, pero ten cuidado: Rack ha corrompido muchas criaturas del bosque.',
          'La siguiente llave está en las manos de los trasgos, pero necesitarás fuerza para obtenerla.',
          'Que la magia de las hadas te proteja en tu viaje.'
        ]
      }
    ]
  },
  {
    id: 'goblin-camp',
    name: 'Campamento de Duendes',
    description: 'Un campamento desordenado lleno de tiendas de pieles y fogatas humeantes. Los duendes corretean por todas partes, riendo maliciosamente. Hay una jaula de hierro en el centro con un prisionero.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'oeste',
        targetLocationId: 'deep-forest',
        description: 'Regresar al bosque profundo.'
      },
      {
        direction: 'norte',
        targetLocationId: 'goblin-chief-tent',
        description: 'Una tienda más grande y ornamentada.'
      },
      {
        direction: 'este',
        targetLocationId: 'prisoner-cage',
        description: 'Una jaula de hierro con un prisionero.'
      },
      {
        direction: 'sureste',
        targetLocationId: 'cursed-stone-circle',
        description: 'Un círculo de piedras antiguas se vislumbra entre los árboles, emitiendo un resplandor siniestro.'
      }
    ],
    items: [
      {
        id: 'goblin-gold',
        name: 'oro de duende',
        description: 'Monedas de oro falsas que brillan como las verdaderas.',
        takeable: true
      },
      {
        id: 'crude-weapon',
        name: 'arma tosca',
        description: 'Una espada mal forjada pero afilada.',
        takeable: true,
        usable: true,
        effects: {
          combat: {
            attackBonus: 3
          }
        }
      }
    ],
    npcs: [
      {
        id: 'goblin-warrior',
        name: 'duende guerrero',
        description: 'Un duende musculoso con una armadura de cuero y una espada oxidada.',
        dialogue: [
          '¡Eh! ¿Qué haces aquí, humano?',
          'Si quieres pasar, tendrás que luchar conmigo primero.',
          '¡Prepárate para la batalla!'
        ],
        canFight: true,
        health: 15,
        attack: 8,
        drops: ['goblin-gold']
      }
    ]
  },
  {
    id: 'prisoner-cage',
    name: 'Jaula del Prisionero',
    description: 'Una jaula de hierro oxidado contiene a un elfo anciano. Sus ojos brillan con esperanza al verte. Las barras están cubiertas de runas protectoras.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'oeste',
        targetLocationId: 'goblin-camp',
        description: 'Regresar al campamento de duendes.'
      }
    ],
    items: [
      {
        id: 'elf-wisdom',
        name: 'sabiduría élfica',
        description: 'Conocimiento ancestral sobre las criaturas del bosque.',
        takeable: false
      }
    ],
    npcs: [
      {
        id: 'captured-elf',
        name: 'elfo prisionero',
        description: 'Un elfo anciano con ropas harapientas pero ojos llenos de sabiduría.',
        dialogue: [
          '¡Por fin! Un humano valiente ha llegado.',
          'Los duendes me capturaron hace semanas. Necesito que me liberes.',
          'Si me ayudas, te daré información sobre cómo derrotar a Rack.',
          'La llave de esta jaula está en la tienda del jefe duende.'
        ]
      }
    ]
  },
  {
    id: 'goblin-chief-tent',
    name: 'Tienda del Jefe Duende',
    description: 'Una tienda más grande decorada con trofeos y tesoros robados. El Jefe Duende, más grande y musculoso que los demás, se sienta en un trono de huesos.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'goblin-camp',
        description: 'Regresar al campamento de duendes.'
      },
      {
        direction: 'este',
        targetLocationId: 'treasure-chamber',
        description: 'Una cámara llena de tesoros robados.'
      }
    ],
    items: [
      {
        id: 'cage-key',
        name: 'llave de la jaula',
        description: 'Una llave de hierro para abrir la jaula del prisionero.',
        takeable: true
      },
      {
        id: 'earth-key',
        name: 'llave de la tierra',
        description: 'Una llave hecha de piedra sólida que nunca se rompe.',
        takeable: true
      }
    ],
    npcs: [
      {
        id: 'goblin-chief',
        name: 'jefe duende',
        description: 'El líder de los duendes, más grande y feroz que los demás.',
        dialogue: [
          '¡JAJAJA! ¿Otro humano tonto que viene a morir?',
          'Si quieres mis tesoros, tendrás que derrotarme primero.',
          '¡Prepárate para la batalla más feroz de tu vida!'
        ],
        canFight: true,
        health: 25,
        attack: 12,
        drops: ['earth-key', 'cage-key']
      }
    ]
  },
  {
    id: 'treasure-chamber',
    name: 'Cámara del Tesoro',
    description: 'Una cámara llena de oro, joyas y objetos mágicos. El brillo es casi cegador. Hay trampas visibles en el suelo.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'oeste',
        targetLocationId: 'goblin-chief-tent',
        description: 'Regresar a la tienda del jefe duende.'
      }
    ],
    items: [
      {
        id: 'magic-ring',
        name: 'anillo mágico',
        description: 'Un anillo que otorga protección contra la magia oscura.',
        takeable: true
      },
      {
        id: 'golden-crown',
        name: 'corona dorada',
        description: 'Una corona que perteneció a un rey antiguo.',
        takeable: true
      },
      {
        id: 'leather-armor',
        name: 'armadura de cuero',
        description: 'Una armadura resistente que protege contra ataques físicos.',
        takeable: true,
        usable: true,
        effects: {
          combat: {
            defenseBonus: 3
          }
        }
      }
    ],
    npcs: []
  },
  {
    id: 'waterfall-chamber',
    name: 'Cámara de la Cascada',
    description: 'Una cámara oculta detrás de una cascada de agua cristalina. El sonido del agua es relajante y el aire está lleno de vapor brillante.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'oeste',
        targetLocationId: 'fairy-queen-throne',
        description: 'Regresar al trono de la reina de las hadas.'
      },
      {
        direction: 'norte',
        targetLocationId: 'troll-bridge',
        description: 'Un puente de piedra sobre un río turbulento.'
      }
    ],
    items: [
      {
        id: 'water-blessing',
        name: 'bendición del agua',
        description: 'Una bendición que te permite respirar bajo el agua.',
        takeable: false
      }
    ],
    npcs: [
      {
        id: 'water-spirit',
        name: 'espíritu del agua',
        description: 'Un espíritu hecho de agua pura que flota sobre la cascada.',
        dialogue: [
          'Las aguas te bendicen, valiente aventurero.',
          'Con la Llave del Agua, puedes pasar por cualquier cuerpo de agua.',
          'Pero ten cuidado: los trolls del puente no son tan amigables como yo.'
        ]
      }
    ]
  },
  {
    id: 'troll-bridge',
    name: 'Puente del Troll',
    description: 'Un puente de piedra antigua cruza un río turbulento. Un troll enorme y feo custodia el puente, exigiendo un peaje a todos los que pasan.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'waterfall-chamber',
        description: 'Regresar a la cámara de la cascada.'
      },
      {
        direction: 'norte',
        targetLocationId: 'enchanted-forest',
        description: 'Un bosque donde los árboles susurran secretos.'
      }
    ],
    items: [
      {
        id: 'troll-tooth',
        name: 'diente de troll',
        description: 'Un diente afilado que puede usarse como arma.',
        takeable: true
      }
    ],
    npcs: [
      {
        id: 'bridge-troll',
        name: 'troll del puente',
        description: 'Un troll enorme y feo con piel verde y dientes afilados.',
        dialogue: [
          '¡STOP! Nadie pasa sin pagar el peaje.',
          'Dame 10 monedas de oro o prepárate para luchar.',
          '¡JAJAJA! Los humanos siempre eligen luchar.'
        ],
        canFight: true,
        health: 30,
        attack: 15,
        drops: ['troll-tooth']
      }
    ]
  },
  {
    id: 'enchanted-forest',
    name: 'Bosque Encantado',
    description: 'Un bosque donde los árboles susurran secretos y las hojas brillan con luz propia. El aire está lleno de magia y puedes sentir la energía mágica en cada paso.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'troll-bridge',
        description: 'Regresar al puente del troll.'
      },
      {
        direction: 'norte',
        targetLocationId: 'dragon-lair',
        description: 'Una cueva humeante donde vive un dragón anciano.'
      },
      {
        direction: 'este',
        targetLocationId: 'serpent-nest',
        description: 'Un nido de serpientes gigantes.'
      },
      {
        direction: 'oeste',
        targetLocationId: 'scorpion-den',
        description: 'Una guarida llena de escorpiones venenosos.'
      },
      {
        direction: 'noroeste',
        targetLocationId: 'illusion-forest',
        description: 'Un bosque extraño donde los árboles parecen moverse y las sombras toman formas imposibles.'
      }
    ],
    items: [
      {
        id: 'enchanted-leaf',
        name: 'hoja encantada',
        description: 'Una hoja que brilla con luz dorada y nunca se marchita.',
        takeable: true
      },
      {
        id: 'magic-acorn',
        name: 'bellota mágica',
        description: 'Una bellota que contiene el poder de los árboles antiguos.',
        takeable: true
      },
      {
        id: 'magic-fruit',
        name: 'fruto mágico',
        description: 'Un fruto brillante que emana energía curativa.',
        takeable: true,
        usable: true,
        effects: {
          healing: 30
        }
      },
      {
        id: 'blessed-water',
        name: 'agua bendita',
        description: 'Agua cristalina bendecida por los espíritus del bosque.',
        takeable: true,
        usable: true,
        effects: {
          healing: 20
        }
      }
    ],
    npcs: [
      {
        id: 'tree-spirit',
        name: 'espíritu del árbol',
        description: 'Un espíritu anciano que vive dentro de un roble milenario.',
        dialogue: [
          'Los árboles han visto muchas aventuras como la tuya.',
          'Para encontrar la Llave del Fuego, debes enfrentar al dragón anciano.',
          'Pero ten cuidado: también hay serpientes y escorpiones en esta zona.'
        ]
      }
    ]
  },
  {
    id: 'dragon-lair',
    name: 'Guarida del Dragón',
    description: 'Una cueva enorme con paredes cubiertas de cristales brillantes. En el centro hay un dragón anciano durmiendo sobre un montón de tesoros. Su respiración crea pequeñas llamas.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'enchanted-forest',
        description: 'Regresar al bosque encantado.'
      }
    ],
    items: [
      {
        id: 'fire-key',
        name: 'llave del fuego',
        description: 'Una llave hecha de fuego eterno que nunca se apaga.',
        takeable: true
      },
      {
        id: 'dragon-scale',
        name: 'escama de dragón',
        description: 'Una escama brillante que otorga resistencia al fuego.',
        takeable: true
      }
    ],
    npcs: [
      {
        id: 'ancient-dragon',
        name: 'dragón anciano',
        description: 'Un dragón majestuoso con escamas doradas y ojos sabios.',
        dialogue: [
          '¿Quién se atreve a despertar al Dragón Anciano?',
          'Veo que buscas la Llave del Fuego para rescatar a la princesa.',
          'Te la daré, pero primero debes responder a mi pregunta:',
          '¿Cuál es el nombre del primer rey que gobernó estas tierras?'
        ],
        puzzle: {
          question: '¿Cuál es el nombre del primer rey que gobernó estas tierras?',
          answer: 'Arturo',
          reward: 'fire-key'
        }
      }
    ]
  },
  {
    id: 'serpent-nest',
    name: 'Nido de Serpientes',
    description: 'Un lugar oscuro y húmedo lleno de serpientes gigantes. Sus ojos brillan en la oscuridad y sus silbidos llenan el aire. Hay huevos brillantes en el suelo.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'oeste',
        targetLocationId: 'enchanted-forest',
        description: 'Regresar al bosque encantado.'
      }
    ],
    items: [
      {
        id: 'serpent-egg',
        name: 'huevo de serpiente',
        description: 'Un huevo brillante que contiene poder mágico.',
        takeable: true
      },
      {
        id: 'venom-sac',
        name: 'saco de veneno',
        description: 'Un saco lleno de veneno que puede usarse como arma.',
        takeable: true
      }
    ],
    npcs: [
      {
        id: 'serpent-queen',
        name: 'reina serpiente',
        description: 'Una serpiente gigante con ojos brillantes y escamas iridiscentes.',
        dialogue: [
          'SSSSSS... ¿Qué haces en mi nido, humano?',
          'Si quieres mis tesoros, tendrás que luchar contra mí.',
          'SSSSSS... ¡Prepárate para la batalla!'
        ],
        canFight: true,
        health: 20,
        attack: 10,
        drops: ['serpent-egg', 'venom-sac']
      }
    ]
  },
  {
    id: 'scorpion-den',
    name: 'Guarida de Escorpiones',
    description: 'Una cueva llena de escorpiones venenosos de diferentes tamaños. Sus pinzas hacen ruido al chocar y sus colas brillan con veneno.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'este',
        targetLocationId: 'enchanted-forest',
        description: 'Regresar al bosque encantado.'
      }
    ],
    items: [
      {
        id: 'scorpion-stinger',
        name: 'aguijón de escorpión',
        description: 'Un aguijón afilado que puede usarse como arma venenosa.',
        takeable: true
      },
      {
        id: 'antidote',
        name: 'antídoto mejorado',
        description: 'Una poción que cura el veneno y restaura salud.',
        takeable: true,
        usable: true,
        effects: {
          healing: 40
        }
      }
    ],
    npcs: [
      {
        id: 'giant-scorpion',
        name: 'escorpión gigante',
        description: 'Un escorpión enorme con pinzas afiladas y un aguijón venenoso.',
        dialogue: [
          'CLICK CLICK... ¿Un humano en mi guarida?',
          'Mi veneno es mortal, pero si me derrotas, te daré mi tesoro.',
          'CLICK CLICK... ¡Prepárate para morir!'
        ],
        canFight: true,
        health: 18,
        attack: 12,
        drops: ['scorpion-stinger', 'antidote']
      }
    ]
  },
  {
    id: 'rack-fortress',
    name: 'Fortaleza de Rack',
    description: 'Una fortaleza oscura y siniestra que se alza sobre las nubes. Las paredes están cubiertas de runas malignas y el aire está lleno de energía oscura. Esta es la última prueba antes de rescatar a la princesa Nieve.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'enchanted-forest',
        description: 'Regresar al bosque encantado.'
      },
      {
        direction: 'norte',
        targetLocationId: 'princess-chamber',
        description: 'La cámara donde está prisionera la princesa Nieve.'
      }
    ],
    items: [
      {
        id: 'demon-horn',
        name: 'cuerno de demonio',
        description: 'Un cuerno que puede convocar a las fuerzas del mal.',
        takeable: true
      },
      {
        id: 'dark-crystal',
        name: 'cristal oscuro',
        description: 'Un cristal que contiene poder maligno.',
        takeable: true
      },
      {
        id: 'life-elixir',
        name: 'elixir de vida',
        description: 'Un elixir dorado que restaura completamente la salud.',
        takeable: true,
        usable: true,
        effects: {
          healing: 60
        }
      }
    ],
    npcs: [
      {
        id: 'rack-demon',
        name: 'Rack el demonio',
        description: 'El demonio maligno que raptó a la princesa Nieve. Es enorme, con cuernos afilados y ojos rojos brillantes.',
        dialogue: [
          '¡JAJAJA! ¿Has venido a rescatar a tu preciosa princesa?',
          'Necesitas las tres llaves de poder para pasar, pero aún así no podrás derrotarme.',
          '¡Prepárate para la batalla final, mortal!'
        ],
        canFight: true,
        health: 50,
        attack: 20,
        drops: ['demon-horn', 'dark-crystal']
      }
    ]
  },
  {
    id: 'princess-chamber',
    name: 'Cámara de la Princesa',
    description: 'Una hermosa cámara iluminada por luz dorada. La princesa Nieve está sentada en un trono de cristal, esperando ser rescatada. Su belleza es incomparable y sus ojos brillan con esperanza.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'rack-fortress',
        description: 'Regresar a la fortaleza de Rack.'
      }
    ],
    items: [
      {
        id: 'princess-crown',
        name: 'corona de princesa',
        description: 'La corona real de la princesa Nieve.',
        takeable: true
      },
      {
        id: 'royal-ring',
        name: 'anillo real',
        description: 'Un anillo que otorga poder real.',
        takeable: true
      }
    ],
    npcs: [
      {
        id: 'princess-nieve',
        name: 'princesa Nieve',
        description: 'La princesa Nieve, hermosa y valiente, esperando ser rescatada.',
        dialogue: [
          '¡Por fin! Un valiente aventurero ha llegado a rescatarme.',
          'Rack me mantuvo prisionera aquí durante meses.',
          'Gracias por salvarme. Ahora podemos regresar al reino juntos.',
          'Tu valentía será recordada por siempre.'
        ]
      }
    ]
  },

  // ===== TRAMPAS DEL BOSQUE OSCURO =====
  
  // TRAMPA 1: Laberinto de Niebla (callejón sin salida)
  {
    id: 'mist-labyrinth',
    name: 'Laberinto de Niebla',
    description: 'Una densa niebla envuelve este lugar, creando un laberinto natural de árboles retorcidos. Los caminos se multiplican y confunden, y cada paso parece llevarte más profundo en la confusión. Las sombras se mueven de forma inquietante, y sientes que algo te observa desde la oscuridad.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'norte',
        targetLocationId: 'mist-dead-end-1',
        description: 'Un sendero que se pierde en la niebla.'
      },
      {
        direction: 'este',
        targetLocationId: 'mist-dead-end-2',
        description: 'Un camino que serpentea entre árboles retorcidos.'
      },
      {
        direction: 'sur',
        targetLocationId: 'mist-dead-end-3',
        description: 'Un sendero que desciende hacia la oscuridad.'
      },
      {
        direction: 'oeste',
        targetLocationId: 'mist-dead-end-4',
        description: 'Un camino que se adentra en la espesura.'
      }
    ],
    items: [
      {
        id: 'mist-crystal',
        name: 'cristal de niebla',
        description: 'Un cristal translúcido que pulsa con una luz tenue. Parece contener la esencia misma de la niebla.',
        takeable: true,
        usable: true,
        effects: {
          special: 'mist_clearance'
        }
      },
      {
        id: 'lost-compass',
        name: 'brújula perdida',
        description: 'Una brújula antigua que parece estar rota, pero sus agujas giran de forma extraña.',
        takeable: true,
        usable: false
      }
    ],
    npcs: [
      {
        id: 'mist-wraith',
        name: 'espectro de niebla',
        description: 'Una figura etérea que se materializa y desaparece entre la niebla.',
        dialogue: [
          'Los perdidos... siempre los perdidos...',
          'Este lugar no es para los vivos...',
          'La niebla te confundirá... te perderás...',
          'Solo los muertos encuentran el camino aquí...'
        ],
        canFight: true,
        health: 15,
        attack: 8,
        drops: ['mist-crystal']
      }
    ]
  },

  // Trampas de callejón sin salida del laberinto
  {
    id: 'mist-dead-end-1',
    name: 'Callejón Sin Salida - Norte',
    description: 'Has llegado a un callejón sin salida. Los árboles forman una pared impenetrable, y la niebla se vuelve aún más densa. Una sensación de desesperación te invade. No hay más camino hacia adelante.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'mist-labyrinth',
        description: 'Regresar al laberinto de niebla.'
      }
    ],
    items: [
      {
        id: 'ancient-bone',
        name: 'hueso antiguo',
        description: 'Un hueso blanquecino que parece haber estado aquí por siglos. Tiene runas talladas.',
        takeable: true,
        usable: false
      }
    ],
    npcs: []
  },

  {
    id: 'mist-dead-end-2',
    name: 'Callejón Sin Salida - Este',
    description: 'Este camino te ha llevado a una pared de roca sólida. La niebla se acumula aquí, creando formas extrañas que parecen susurrar. Sientes que el tiempo se detiene en este lugar.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'oeste',
        targetLocationId: 'mist-labyrinth',
        description: 'Regresar al laberinto de niebla.'
      }
    ],
    items: [
      {
        id: 'mist-herb',
        name: 'hierba de niebla',
        description: 'Una hierba rara que solo crece en lugares donde la niebla es eterna.',
        takeable: true,
        usable: true,
        effects: {
          healing: 20
        }
      }
    ],
    npcs: []
  },

  {
    id: 'mist-dead-end-3',
    name: 'Callejón Sin Salida - Sur',
    description: 'El suelo aquí es pantanoso y peligroso. La niebla se mezcla con vapores tóxicos que hacen difícil respirar. No hay salida hacia adelante.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'norte',
        targetLocationId: 'mist-labyrinth',
        description: 'Regresar al laberinto de niebla.'
      }
    ],
    items: [
      {
        id: 'poison-antidote',
        name: 'antídoto de veneno',
        description: 'Un frasco con un líquido verde que neutraliza los efectos de los vapores tóxicos.',
        takeable: true,
        usable: true,
        effects: {
          healing: 30,
          protection: ['poison']
        }
      }
    ],
    npcs: []
  },

  {
    id: 'mist-dead-end-4',
    name: 'Callejón Sin Salida - Oeste',
    description: 'Una cascada de agua negra cae desde una altura imposible. El agua parece absorber la luz, creando una oscuridad absoluta. No hay forma de continuar.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'este',
        targetLocationId: 'mist-labyrinth',
        description: 'Regresar al laberinto de niebla.'
      }
    ],
    items: [
      {
        id: 'dark-water-vial',
        name: 'vial de agua oscura',
        description: 'Un pequeño frasco lleno del agua negra de la cascada. Pulsa con energía oscura.',
        takeable: true,
        usable: true,
        effects: {
          special: 'dark_power'
        }
      }
    ],
    npcs: []
  },

  // TRAMPA 2: Círculo de Piedras Malditas (retroceso de 10 ubicaciones)
  {
    id: 'cursed-stone-circle',
    name: 'Círculo de Piedras Malditas',
    description: 'Un círculo de piedras antiguas se alza ante ti. Cada piedra está tallada con runas que brillan con una luz siniestra. El aire aquí es pesado y cargado de magia oscura. Sientes que este lugar tiene un poder maléfico que puede enviarte muy lejos si no tienes cuidado.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'norte',
        targetLocationId: 'stone-circle-center',
        description: 'Adentrarse en el centro del círculo de piedras.'
      },
      {
        direction: 'sur',
        targetLocationId: 'stone-circle-exit',
        description: 'Salir del círculo de piedras.'
      }
    ],
    items: [
      {
        id: 'cursed-rune',
        name: 'runa maldita',
        description: 'Una piedra tallada con runas que emiten un resplandor rojizo. Parece contener poder maléfico.',
        takeable: true,
        usable: true,
        effects: {
          special: 'curse_protection'
        }
      },
      {
        id: 'ancient-tome',
        name: 'tomo antiguo',
        description: 'Un libro encuadernado en cuero oscuro que contiene conocimientos prohibidos sobre el círculo de piedras.',
        takeable: true,
        usable: false
      }
    ],
    npcs: [
      {
        id: 'stone-guardian',
        name: 'guardián de piedra',
        description: 'Una figura de piedra que cobra vida cuando te acercas, sus ojos brillan con fuego.',
        dialogue: [
          'Este lugar está maldito...',
          'Solo los valientes pueden pasar...',
          'Los débiles serán enviados muy lejos...',
          '¿Tienes el coraje de continuar?'
        ],
        canFight: true,
        health: 25,
        attack: 12,
        drops: ['cursed-rune']
      }
    ]
  },

  {
    id: 'stone-circle-center',
    name: 'Centro del Círculo Maldito',
    description: 'Estás en el centro del círculo de piedras. La energía mágica es abrumadora aquí. Las runas en las piedras brillan intensamente, y sientes que el espacio mismo se distorsiona. Si no tienes protección contra la maldición, serás enviado muy lejos de aquí.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'cursed-stone-circle',
        description: 'Salir del centro del círculo.'
      }
    ],
    items: [
      {
        id: 'power-crystal',
        name: 'cristal de poder',
        description: 'Un cristal que pulsa con energía pura. Parece ser la fuente del poder del círculo.',
        takeable: true,
        usable: true,
        effects: {
          combat: {
            attackBonus: 5,
            defenseBonus: 3
          }
        }
      }
    ],
    npcs: [
      {
        id: 'circle-spirit',
        name: 'espíritu del círculo',
        description: 'Un espíritu ancestral que custodia los secretos del círculo de piedras.',
        dialogue: [
          'Has llegado al corazón del poder...',
          'Solo aquellos protegidos contra la maldición pueden permanecer...',
          'Los demás serán enviados muy lejos...',
          '¿Estás preparado para enfrentar las consecuencias?'
        ],
        canFight: false,
        puzzle: {
          question: '¿Qué protege contra la maldición del círculo?',
          answer: 'runa maldita',
          reward: 'power-crystal',
          hint: 'Busca en los objetos que has encontrado en este lugar.'
        }
      }
    ]
  },

  {
    id: 'stone-circle-exit',
    name: 'Salida del Círculo',
    description: 'Has logrado salir del círculo de piedras malditas. El aire aquí es más limpio, pero aún sientes el eco de la magia oscura.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'norte',
        targetLocationId: 'cursed-stone-circle',
        description: 'Regresar al círculo de piedras.'
      },
      {
        direction: 'este',
        targetLocationId: 'deep-forest',
        description: 'Continuar hacia el bosque profundo.'
      }
    ],
    items: [],
    npcs: []
  },

  // TRAMPA 3: Bosque de Espejismos (trampa de ilusiones)
  {
    id: 'illusion-forest',
    name: 'Bosque de Espejismos',
    description: 'Este lugar es extraño. Los árboles parecen moverse cuando no los miras directamente. Las sombras toman formas de criaturas que no existen. Los caminos se duplican y triplican, creando una confusión total. Solo aquellos con percepción aguda pueden encontrar el camino correcto.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'norte',
        targetLocationId: 'illusion-path-1',
        description: 'Un sendero que parece real pero podría ser una ilusión.'
      },
      {
        direction: 'este',
        targetLocationId: 'illusion-path-2',
        description: 'Un camino que serpentea de forma imposible.'
      },
      {
        direction: 'sur',
        targetLocationId: 'illusion-path-3',
        description: 'Un sendero que desciende hacia la nada.'
      },
      {
        direction: 'oeste',
        targetLocationId: 'illusion-path-4',
        description: 'Un camino que se pierde en la distancia.'
      }
    ],
    items: [
      {
        id: 'truth-mirror',
        name: 'espejo de la verdad',
        description: 'Un espejo pequeño que refleja la realidad tal como es, sin ilusiones.',
        takeable: true,
        usable: true,
        effects: {
          special: 'illusion_sight'
        }
      },
      {
        id: 'phantom-herb',
        name: 'hierba fantasma',
        description: 'Una hierba que parece no estar ahí, pero puedes sentirla. Solo existe para aquellos que creen en ella.',
        takeable: true,
        usable: true,
        effects: {
          healing: 25
        }
      }
    ],
    npcs: [
      {
        id: 'illusion-master',
        name: 'maestro de ilusiones',
        description: 'Una figura que cambia constantemente de forma, nunca es la misma dos veces.',
        dialogue: [
          '¿Qué es real y qué es ilusión?',
          'En este lugar, la percepción es todo...',
          'Los débiles de mente se perderán para siempre...',
          'Solo los sabios encuentran el camino...'
        ],
        canFight: true,
        health: 20,
        attack: 10,
        drops: ['truth-mirror']
      }
    ]
  },

  // Caminos ilusorios del bosque de espejismos
  {
    id: 'illusion-path-1',
    name: 'Sendero Ilusorio - Norte',
    description: 'Este sendero se desvanece gradualmente hasta convertirse en nada. Te das cuenta de que era solo una ilusión cuando ya es demasiado tarde. No hay nada aquí excepto la confusión.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'sur',
        targetLocationId: 'illusion-forest',
        description: 'Regresar al bosque de espejismos.'
      }
    ],
    items: [
      {
        id: 'fading-crystal',
        name: 'cristal desvanecido',
        description: 'Un cristal que parece estar desapareciendo constantemente. Solo puedes verlo de reojo.',
        takeable: true,
        usable: false
      }
    ],
    npcs: []
  },

  {
    id: 'illusion-path-2',
    name: 'Sendero Ilusorio - Este',
    description: 'Este camino te lleva en círculos. Cada paso parece llevarte más lejos, pero en realidad estás regresando al mismo lugar. La ilusión es perfecta.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'oeste',
        targetLocationId: 'illusion-forest',
        description: 'Regresar al bosque de espejismos.'
      }
    ],
    items: [
      {
        id: 'circular-stone',
        name: 'piedra circular',
        description: 'Una piedra perfectamente redonda que parece haber estado rodando en círculos por la eternidad.',
        takeable: true,
        usable: false
      }
    ],
    npcs: []
  },

  {
    id: 'illusion-path-3',
    name: 'Sendero Ilusorio - Sur',
    description: 'Este sendero desciende hacia un abismo que no existe. Es una ilusión perfecta que te hace creer que estás cayendo, pero en realidad estás parado en el mismo lugar.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'norte',
        targetLocationId: 'illusion-forest',
        description: 'Regresar al bosque de espejismos.'
      }
    ],
    items: [
      {
        id: 'void-gem',
        name: 'gema del vacío',
        description: 'Una gema que parece contener la nada absoluta en su interior.',
        takeable: true,
        usable: true,
        effects: {
          special: 'void_sight'
        }
      }
    ],
    npcs: []
  },

  {
    id: 'illusion-path-4',
    name: 'Sendero Ilusorio - Oeste',
    description: 'Este camino se extiende hacia el infinito, pero es solo una ilusión. No importa cuánto camines, nunca llegarás a ningún lugar.',
    image: '/images/under-construction.svg',
    exits: [
      {
        direction: 'este',
        targetLocationId: 'illusion-forest',
        description: 'Regresar al bosque de espejismos.'
      }
    ],
    items: [
      {
        id: 'infinity-stone',
        name: 'piedra del infinito',
        description: 'Una piedra que parece extenderse hacia el infinito en todas las direcciones.',
        takeable: true,
        usable: false
      }
    ],
    npcs: []
  }
];