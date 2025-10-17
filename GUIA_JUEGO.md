# Guía Completa del Juego: El Rescate de la Princesa Nieve

## Objetivo Principal
Rescatar a la princesa Nieve del demonio maligno Rack, quien la ha raptado y la mantiene prisionera en su fortaleza.

## Historia
La princesa Nieve ha sido raptada por Rack, el demonio maligno del bosque. Para rescatarla, necesitas encontrar las tres Llaves de Poder: la Llave de la Tierra, la Llave del Agua y la Llave del Fuego. Solo con estas tres llaves podrás acceder a la fortaleza de Rack y enfrentar al demonio final.

## Sistema de Objetos Interconectados
Los objetos que recojas en una zona pueden ser utilizados en otras zonas para resolver problemas, mejorar tus capacidades de combate, o desbloquear nuevas áreas. Cada objeto tiene efectos específicos que puedes usar con el comando `usar [objeto]`.

---

## Mapa de Locaciones y Conexiones

### **Zona Inicial**

#### 1. **Entrada del Bosque Oscuro** (start)
- **Descripción**: Punto de partida de la aventura
- **Salidas**: 
  - Norte → Profundidades del Bosque
  - Este → Cabaña Abandonada (requiere llave oxidada)
  - Oeste → Claro de las Hadas
- **Objetos**: 
  - `llave oxidada` - Desbloquea la cabaña abandonada
  - `pergamino antiguo` - Información sobre la misión
- **Personajes**: guardián del bosque
- **Acciones**: Hablar con el guardián para obtener información sobre la misión

#### 2. **Cabaña Abandonada** (abandoned-cabin) ⭐ NUEVA
- **Descripción**: Una cabaña de madera en ruinas con ventanas rotas y puerta cerrada
- **Requisito**: Usar `llave oxidada` en la entrada del bosque
- **Salidas**:
  - Oeste → Entrada del Bosque Oscuro
  - Norte → Ático de la Cabaña
- **Objetos**:
  - `diario antiguo` - Otorga conocimiento mágico especial
  - `hierba curativa` - Restaura 35 puntos de salud
- **Personajes**: espíritu de la cabaña
- **Acciones**: Hablar con el espíritu para obtener información sobre el mago

#### 3. **Ático de la Cabaña** (cabin-attic) ⭐ NUEVA
- **Descripción**: Un ático polvoriento lleno de objetos antiguos y libros de magia
- **Salidas**:
  - Sur → Cabaña Abandonada
- **Objetos**:
  - `varita mágica` - Aumenta el ataque en +5
  - `amuleto de protección` - Aumenta la defensa en +3
  - `escudo mágico` - Aumenta la defensa en +5
- **Personajes**: Ninguno
- **Acciones**: Recoger objetos mágicos para mejorar capacidades de combate

#### 4. **Profundidades del Bosque** (deep-forest)
- **Descripción**: Parte más densa del bosque con sombras inquietantes
- **Salidas**:
  - Sur → Entrada del Bosque Oscuro
  - Norte → Claro Iluminado por la Luna
  - Oeste → Cueva Misteriosa
  - Este → Campamento de Duendes
- **Objetos**: 
  - `hierba misteriosa` - Planta brillante con propiedades especiales
  - `moneda de plata` - Puede usarse para pagar al troll del puente
- **Personajes**: espíritu del bosque
- **Acciones**: Hablar con el espíritu para obtener pistas sobre las llaves

---

### **Zona de las Hadas (Llave del Agua)**

#### 5. **Claro de las Hadas** (fairy-grove)
- **Descripción**: Hermoso claro donde las hadas danzan en círculos de luz dorada
- **Salidas**:
  - Este → Entrada del Bosque Oscuro
  - Norte → Trono de la Reina de las Hadas
- **Objetos**: 
  - `polvo de hada` - Polvo brillante con propiedades mágicas
  - `flor de cristal` - Flor hecha de cristal puro
- **Personajes**: hada anciana
- **Acciones**: 
  - Hablar con la hada anciana para obtener el enigma
  - **Enigma**: "Soy más fuerte que el hierro, más suave que la seda, más rápido que el viento. ¿Qué soy?"
  - **Respuesta**: "amor"
  - **Comando**: `responder amor`

#### 6. **Trono de la Reina de las Hadas** (fairy-queen-throne)
- **Descripción**: Majestuoso trono de cristal donde se sienta la Reina de las Hadas
- **Salidas**:
  - Sur → Claro de las Hadas
  - Este → Cámara de la Cascada
- **Objetos**: 
  - `llave del agua` - Llave hecha de agua cristalina
  - `poción curativa` - Restaura 60 puntos de salud
- **Personajes**: reina de las hadas
- **Acciones**: Hablar con la reina después de resolver el enigma para obtener la Llave del Agua

#### 7. **Cámara de la Cascada** (waterfall-chamber)
- **Descripción**: Cámara oculta detrás de una cascada de agua cristalina
- **Salidas**:
  - Oeste → Trono de la Reina de las Hadas
  - Norte → Puente del Troll
- **Objetos**: `bendición del agua` - Bendición que permite respirar bajo el agua
- **Personajes**: espíritu del agua
- **Acciones**: Hablar con el espíritu del agua para obtener bendiciones

---

### **Zona de los Duendes (Llave de la Tierra)**

#### 8. **Campamento de Duendes** (goblin-camp)
- **Descripción**: Campamento desordenado lleno de tiendas de pieles y fogatas humeantes
- **Salidas**:
  - Oeste → Profundidades del Bosque
  - Norte → Tienda del Jefe Duende
  - Este → Jaula del Prisionero
- **Objetos**: 
  - `oro de duende` - Monedas de oro falsas
  - `arma tosca` - Aumenta el ataque en +3
- **Personajes**: duende guerrero
- **Acciones**: 
  - **Combate**: `luchar duende guerrero` (Salud: 15, Ataque: 8)
  - **Recompensa**: oro de duende

#### 9. **Jaula del Prisionero** (prisoner-cage)
- **Descripción**: Jaula de hierro oxidado que contiene a un elfo anciano
- **Salidas**:
  - Oeste → Campamento de Duendes
- **Objetos**: `sabiduría élfica` - Conocimiento ancestral sobre las criaturas del bosque
- **Personajes**: elfo prisionero
- **Acciones**: 
  - Hablar con el elfo para obtener información
  - **Liberación**: `liberar elfo` (requiere llave de la jaula)

#### 10. **Tienda del Jefe Duende** (goblin-chief-tent)
- **Descripción**: Tienda más grande decorada con trofeos y tesoros robados
- **Salidas**:
  - Sur → Campamento de Duendes
  - Este → Cámara del Tesoro
- **Objetos**: 
  - `llave de la jaula` - Para liberar al elfo prisionero
  - `llave de la tierra` - Una de las tres llaves de poder
- **Personajes**: jefe duende
- **Acciones**: 
  - **Combate**: `luchar jefe duende` (Salud: 25, Ataque: 12)
  - **Recompensas**: llave de la tierra, llave de la jaula

#### 11. **Cámara del Tesoro** (treasure-chamber)
- **Descripción**: Cámara llena de oro, joyas y objetos mágicos
- **Salidas**:
  - Oeste → Tienda del Jefe Duende
- **Objetos**: 
  - `anillo mágico` - Protección contra magia oscura
  - `corona dorada` - Corona que perteneció a un rey antiguo
  - `armadura de cuero` - Aumenta la defensa en +3
- **Personajes**: Ninguno
- **Acciones**: Recoger tesoros adicionales

---

### **Zona del Troll**

#### 12. **Puente del Troll** (troll-bridge)
- **Descripción**: Puente de piedra antigua custodiado por un troll enorme
- **Salidas**:
  - Sur → Cámara de la Cascada
  - Norte → Bosque Encantado
- **Objetos**: `diente de troll` - Diente afilado que puede usarse como arma
- **Personajes**: troll del puente
- **Acciones**: 
  - **Opción 1 - Combate**: `luchar troll del puente` (Salud: 30, Ataque: 15)
  - **Opción 2 - Pago**: `usar moneda de plata` (requiere tener la moneda)
  - **Recompensa**: diente de troll

---

### **Zona Final (Llave del Fuego)**

#### 13. **Bosque Encantado** (enchanted-forest)
- **Descripción**: Bosque donde los árboles susurran secretos y las hojas brillan con luz propia
- **Salidas**:
  - Sur → Puente del Troll
  - Norte → Guarida del Dragón
  - Este → Nido de Serpientes
  - Oeste → Guarida de Escorpiones
- **Objetos**: 
  - `hoja encantada` - Hoja que brilla con luz dorada
  - `bellota mágica` - Bellota que contiene el poder de los árboles antiguos
  - `fruto mágico` - Restaura 30 puntos de salud
  - `agua bendita` - Restaura 20 puntos de salud
- **Personajes**: espíritu del árbol
- **Acciones**: Hablar con el espíritu del árbol para obtener información sobre la Llave del Fuego

#### 14. **Guarida del Dragón** (dragon-lair)
- **Descripción**: Cueva enorme con paredes cubiertas de cristales brillantes
- **Salidas**:
  - Sur → Bosque Encantado
- **Objetos**: 
  - `llave del fuego` - Llave hecha de fuego eterno
  - `escama de dragón` - Resistencia al fuego
- **Personajes**: dragón anciano
- **Acciones**: 
  - Hablar con el dragón para obtener el enigma
  - **Enigma**: "¿Cuál es el nombre del primer rey que gobernó estas tierras?"
  - **Respuesta**: "Arturo"
  - **Comando**: `responder Arturo`
  - **Recompensa**: llave del fuego

#### 15. **Nido de Serpientes** (serpent-nest)
- **Descripción**: Lugar oscuro y húmedo lleno de serpientes gigantes
- **Salidas**:
  - Oeste → Bosque Encantado
- **Objetos**: 
  - `huevo de serpiente` - Huevo brillante que contiene poder mágico
  - `saco de veneno` - Saco lleno de veneno que puede usarse como arma
- **Personajes**: reina serpiente
- **Acciones**: 
  - **Combate**: `luchar reina serpiente` (Salud: 20, Ataque: 10)
  - **Recompensas**: huevo de serpiente, saco de veneno

#### 16. **Guarida de Escorpiones** (scorpion-den)
- **Descripción**: Cueva llena de escorpiones venenosos de diferentes tamaños
- **Salidas**:
  - Este → Bosque Encantado
- **Objetos**: 
  - `aguijón de escorpión` - Aguijón afilado que puede usarse como arma venenosa
  - `antídoto mejorado` - Restaura 40 puntos de salud y cura veneno
- **Personajes**: escorpión gigante
- **Acciones**: 
  - **Combate**: `luchar escorpión gigante` (Salud: 18, Ataque: 12)
  - **Recompensas**: aguijón de escorpión, antídoto mejorado

---

### **Zona Final**

#### 17. **Fortaleza de Rack** (rack-fortress)
- **Descripción**: Fortaleza oscura y siniestra que se alza sobre las nubes
- **Salidas**:
  - Sur → Bosque Encantado
  - Norte → Cámara de la Princesa
- **Objetos**: 
  - `cuerno de demonio` - Cuerno que puede convocar a las fuerzas del mal
  - `cristal oscuro` - Cristal que contiene poder maligno
  - `elixir de vida` - Restaura 60 puntos de salud
- **Personajes**: Rack el demonio
- **Acciones**: 
  - **Combate Final**: `luchar Rack el demonio` (Salud: 50, Ataque: 20)
  - **Recompensas**: cuerno de demonio, cristal oscuro, elixir de vida
- **Requisitos**: Necesitas las tres llaves de poder para acceder

#### 18. **Cámara de la Princesa** (princess-chamber)
- **Descripción**: Hermosa cámara iluminada por luz dorada donde está prisionera la princesa
- **Salidas**:
  - Sur → Fortaleza de Rack
- **Objetos**: 
  - `corona de princesa` - La corona real de la princesa Nieve
  - `anillo real` - Anillo que otorga poder real
- **Personajes**: princesa Nieve
- **Acciones**: Hablar con la princesa para completar la aventura

---

## 🚨 TRAMPAS DEL BOSQUE OSCURO

### **Trampa 1: Laberinto de Niebla** 🌀
- **Ubicación**: `mist-labyrinth` (noreste desde Profundidades del Bosque)
- **Tipo**: Callejón sin salida
- **Mecanismo**: 4 caminos que llevan a callejones sin salida, obligando a regresar
- **Ubicaciones**:
  - `mist-labyrinth` (centro del laberinto)
  - `mist-dead-end-1` (norte - callejón sin salida)
  - `mist-dead-end-2` (este - pared de roca)
  - `mist-dead-end-3` (sur - pantano tóxico)
  - `mist-dead-end-4` (oeste - cascada de agua negra)
- **Objetos especiales**:
  - `cristal de niebla` - Claridad en la niebla (efecto especial)
  - `brújula perdida` - Brújula antigua con agujas extrañas
  - `hueso antiguo` - Hueso con runas talladas
  - `hierba de niebla` - Restaura 20 puntos de salud
  - `antídoto de veneno` - Restaura 30 puntos de salud + protección contra veneno
  - `vial de agua oscura` - Poder oscuro (efecto especial)
- **Enemigo**: `espectro de niebla` (Salud: 15, Ataque: 8)
- **Recompensa**: cristal de niebla
- **Estrategia**: Explora todos los callejones para obtener objetos valiosos, luego regresa

### **Trampa 2: Círculo de Piedras Malditas** 🔮
- **Ubicación**: `cursed-stone-circle` (sureste desde Campamento de Duendes)
- **Tipo**: Trampa de retroceso de 10 ubicaciones
- **Mecanismo**: Si no tienes protección, te envía 10 ubicaciones hacia atrás
- **Ubicaciones**:
  - `cursed-stone-circle` (entrada al círculo)
  - `stone-circle-center` (centro maldito - ⚠️ PELIGRO)
  - `stone-circle-exit` (salida segura)
- **Protección requerida**: `runa maldita` (efecto `curse_protection`)
- **Objetos especiales**:
  - `runa maldita` - Protección contra maldiciones (efecto especial)
  - `tomo antiguo` - Conocimientos prohibidos sobre el círculo
  - `cristal de poder` - Aumenta ataque +5 y defensa +3
- **Enemigos**:
  - `guardián de piedra` (Salud: 25, Ataque: 12) - Recompensa: runa maldita
  - `espíritu del círculo` - Puzzle: "¿Qué protege contra la maldición del círculo?" → Respuesta: "runa maldita"
- **Estrategia**: 
  1. Derrota al guardián de piedra para obtener la runa maldita
  2. Usa la runa maldita para obtener protección
  3. Entra al centro del círculo para obtener el cristal de poder
  4. Resuelve el puzzle del espíritu del círculo

### **Trampa 3: Bosque de Espejismos** 🌫️
- **Ubicación**: `illusion-forest` (noroeste desde Bosque Encantado)
- **Tipo**: Trampa de ilusiones
- **Mecanismo**: 4 caminos ilusorios que no llevan a ningún lugar
- **Ubicaciones**:
  - `illusion-forest` (centro del bosque)
  - `illusion-path-1` (norte - sendero que se desvanece)
  - `illusion-path-2` (este - camino circular)
  - `illusion-path-3` (sur - abismo ilusorio)
  - `illusion-path-4` (oeste - camino infinito)
- **Objetos especiales**:
  - `espejo de la verdad` - Ver a través de ilusiones (efecto especial)
  - `hierba fantasma` - Restaura 25 puntos de salud
  - `cristal desvanecido` - Cristal que desaparece constantemente
  - `piedra circular` - Piedra que rueda en círculos eternos
  - `gema del vacío` - Percepción del vacío (efecto especial)
  - `piedra del infinito` - Piedra que se extiende al infinito
- **Enemigo**: `maestro de ilusiones` (Salud: 20, Ataque: 10)
- **Recompensa**: espejo de la verdad
- **Estrategia**: Explora todos los caminos ilusorios para obtener objetos únicos

### **⚠️ ADVERTENCIAS SOBRE LAS TRAMPAS**

1. **Laberinto de Niebla**: Todos los caminos llevan a callejones sin salida. Debes regresar al centro para salir.

2. **Círculo de Piedras Malditas**: 
   - ⚠️ **PELIGRO EXTREMO**: Sin protección, te envía 10 ubicaciones hacia atrás
   - ✅ **SOLUCIÓN**: Obtén la runa maldita del guardián de piedra antes de entrar al centro
   - 💡 **CONSEJO**: Usa la runa maldita para obtener protección permanente

3. **Bosque de Espejismos**: Todos los caminos son ilusiones. Explora para obtener objetos, pero regresa al centro para salir.

### **Efectos Especiales de Objetos de Trampas**

| Objeto | Efecto Especial | Descripción |
|--------|----------------|-------------|
| `cristal de niebla` | `mist_clearance` | Claridad en la niebla, mejor percepción |
| `runa maldita` | `curse_protection` | Protección contra maldiciones del círculo |
| `espejo de la verdad` | `illusion_sight` | Ver a través de ilusiones complejas |
| `vial de agua oscura` | `dark_power` | Poder oscuro fluyendo por las venas |
| `gema del vacío` | `void_sight` | Percepción expandida del vacío |

---

## Guía de Solución Paso a Paso

### **Fase 1: Preparación Inicial**
1. Comienza en la **Entrada del Bosque Oscuro**
2. Habla con el **guardián del bosque** para entender la misión
3. Recoge la **llave oxidada** y el **pergamino antiguo**
4. **Usa la llave oxidada** para desbloquear la cabaña abandonada

### **Fase 2: Explorar la Cabaña Abandonada** ⭐ NUEVA
1. Ve a la **Cabaña Abandonada** (este desde la entrada)
2. Habla con el **espíritu de la cabaña** para obtener información
3. Recoge la **hierba curativa** y el **diario antiguo**
4. **Usa el diario antiguo** para obtener conocimiento mágico
5. Ve al **Ático de la Cabaña**
6. Recoge la **varita mágica** y el **amuleto de protección**
7. **Usa la varita mágica** para aumentar tu ataque (+5)
8. **Usa el amuleto de protección** para aumentar tu defensa (+3)

### **Fase 3: Obtener la Llave del Agua**
1. Ve al **Claro de las Hadas** (oeste desde la entrada)
2. Habla con la **hada anciana** para obtener el enigma
3. Responde al enigma: `responder amor`
4. Ve al **Trono de la Reina de las Hadas**
5. Habla con la **reina de las hadas** para obtener la **llave del agua**
6. Recoge la **poción curativa** (restaura 50 puntos de salud)

### **Fase 4: Obtener la Llave de la Tierra**
1. Ve al **Campamento de Duendes** (este desde profundidades del bosque)
2. Lucha contra el **duende guerrero**: `luchar duende guerrero`
3. Recoge la **arma tosca** y **úsala** para aumentar tu ataque (+3)
4. Ve a la **Tienda del Jefe Duende**
5. Lucha contra el **jefe duende**: `luchar jefe duende`
6. Obtén la **llave de la tierra** y la **llave de la jaula**
7. Opcional: Ve a la **Jaula del Prisionero** y libera al elfo: `liberar elfo`

### **Fase 5: Cruzar el Puente del Troll**
1. Ve a la **Cámara de la Cascada** desde el trono de las hadas
2. Habla con el **espíritu del agua** para obtener bendiciones
3. Ve al **Puente del Troll**
4. **Opción A - Combate**: `luchar troll del puente`
5. **Opción B - Pago**: `usar moneda de plata` (si la tienes de las profundidades del bosque)

### **Fase 6: Obtener la Llave del Fuego**
1. Ve al **Bosque Encantado**
2. Habla con el **espíritu del árbol** para obtener información
3. Ve a la **Guarida del Dragón**
4. Habla con el **dragón anciano** para obtener el enigma
5. Responde al enigma: `responder Arturo`
6. Obtén la **llave del fuego**

### **Fase 7: Enfrentar a Rack**
1. Con las tres llaves, ve a la **Fortaleza de Rack**
2. Lucha contra **Rack el demonio**: `luchar Rack el demonio`
3. Ve a la **Cámara de la Princesa**
4. Habla con la **princesa Nieve** para completar la aventura

---

## Comandos Disponibles

### **Comandos Básicos**
- `ir [dirección]` - Moverte hacia una dirección
- `tomar [objeto]` - Recoger un objeto
- `usar [objeto]` - Usar un objeto de tu inventario (con efectos específicos)
- `hablar [personaje]` - Hablar con un personaje
- `mirar [objeto/personaje]` - Examinar algo
- `inventario` - Ver tu inventario
- `estadisticas` - Ver tus estadísticas de combate
- `ayuda` - Mostrar ayuda

### **Comandos de Combate**
- `luchar [enemigo]` - Combatir con un enemigo

### **Comandos de Puzzles**
- `responder [respuesta]` - Responder a un enigma

### **Comandos Especiales**
- `liberar [prisionero]` - Liberar a alguien de una jaula

---

## Sistema de Estadísticas del Jugador

### **Estadísticas Base**
- **Salud**: 100/100 puntos
- **Ataque**: 10 puntos base
- **Defensa**: 5 puntos base

### **Objetos que Mejoran Estadísticas**

#### **Aumento de Ataque**
- `arma tosca` → +3 de ataque
- `varita mágica` → +5 de ataque

#### **Aumento de Defensa**
- `amuleto de protección` → +3 de defensa
- `escudo mágico` → +5 de defensa
- `armadura de cuero` → +3 de defensa

#### **Curación**
- `hierba curativa` → Restaura 35 puntos de salud
- `poción curativa` → Restaura 60 puntos de salud
- `fruto mágico` → Restaura 30 puntos de salud
- `agua bendita` → Restaura 20 puntos de salud
- `antídoto mejorado` → Restaura 40 puntos de salud
- `elixir de vida` → Restaura 60 puntos de salud
- `hierba de niebla` → Restaura 20 puntos de salud (Laberinto de Niebla)
- `antídoto de veneno` → Restaura 30 puntos de salud + protección contra veneno (Laberinto de Niebla)
- `hierba fantasma` → Restaura 25 puntos de salud (Bosque de Espejismos)
- `curar` → Restaura 15 puntos de salud

---

## Enemigos y Sus Estadísticas

| Enemigo | Salud | Ataque | Recompensas |
|---------|-------|--------|-------------|
| Duende Guerrero | 15 | 8 | oro de duende |
| Jefe Duende | 25 | 12 | llave de la tierra, llave de la jaula |
| Troll del Puente | 30 | 15 | diente de troll |
| Reina Serpiente | 20 | 10 | huevo de serpiente, saco de veneno |
| Escorpión Gigante | 18 | 12 | aguijón de escorpión, antídoto |
| **Espectro de Niebla** | 15 | 8 | cristal de niebla |
| **Guardián de Piedra** | 25 | 12 | runa maldita |
| **Maestro de Ilusiones** | 20 | 10 | espejo de la verdad |
| Rack el Demonio | 50 | 20 | cuerno de demonio, cristal oscuro |

---

## Puzzles y Sus Respuestas

| Puzzle | Respuesta | Recompensa |
|--------|-----------|------------|
| "Soy más fuerte que el hierro, más suave que la seda, más rápido que el viento. ¿Qué soy?" | amor | bendición de hada |
| "¿Cuál es el nombre del primer rey que gobernó estas tierras?" | Arturo | llave del fuego |
| "¿Qué protege contra la maldición del círculo?" | runa maldita | cristal de poder |

---

## Objetos Importantes y Sus Efectos

### **Llaves de Poder**
- **Llave de la Tierra**: Obtenida del jefe duende
- **Llave del Agua**: Obtenida de la reina de las hadas
- **Llave del Fuego**: Obtenida del dragón anciano

### **Objetos de Combate**
- **Arma tosca**: +3 de ataque
- **Varita mágica**: +5 de ataque
- **Diente de troll**: Arma del troll del puente
- **Aguijón de escorpión**: Arma venenosa del escorpión gigante

### **Objetos de Protección**
- **Amuleto de protección**: +3 de defensa
- **Escudo mágico**: +5 de defensa
- **Armadura de cuero**: +3 de defensa
- **Escama de dragón**: Resistencia al fuego
- **Anillo mágico**: Protección contra magia oscura

### **Objetos de Curación**
- **Hierba curativa**: Restaura 35 puntos de salud
- **Poción curativa**: Restaura 60 puntos de salud
- **Fruto mágico**: Restaura 30 puntos de salud
- **Agua bendita**: Restaura 20 puntos de salud
- **Antídoto mejorado**: Restaura 40 puntos de salud y cura veneno
- **Elixir de vida**: Restaura 60 puntos de salud

### **Objetos Especiales**
- **Llave oxidada**: Desbloquea la cabaña abandonada
- **Moneda de plata**: Permite pagar al troll del puente
- **Diario antiguo**: Otorga conocimiento mágico especial
- **Polvo de hada**: Del claro de las hadas
- **Flor de cristal**: Del claro de las hadas
- **Cristal de niebla**: Claridad en la niebla (Laberinto de Niebla)
- **Brújula perdida**: Brújula antigua con agujas extrañas (Laberinto de Niebla)
- **Hueso antiguo**: Hueso con runas talladas (Laberinto de Niebla)
- **Vial de agua oscura**: Poder oscuro (Laberinto de Niebla)
- **Runa maldita**: Protección contra maldiciones (Círculo de Piedras)
- **Tomo antiguo**: Conocimientos prohibidos (Círculo de Piedras)
- **Cristal de poder**: Aumenta ataque +5 y defensa +3 (Círculo de Piedras)
- **Espejo de la verdad**: Ver a través de ilusiones (Bosque de Espejismos)
- **Cristal desvanecido**: Cristal que desaparece constantemente (Bosque de Espejismos)
- **Piedra circular**: Piedra que rueda en círculos eternos (Bosque de Espejismos)
- **Gema del vacío**: Percepción del vacío (Bosque de Espejismos)
- **Piedra del infinito**: Piedra que se extiende al infinito (Bosque de Espejismos)

---

## Estrategias de Juego

### **Ruta Recomendada para Principiantes**
1. **Explora la cabaña abandonada** primero para obtener objetos de combate y protección
2. **Usa todos los objetos de mejora** antes de enfrentar enemigos fuertes
3. **Recoge la moneda de plata** para evitar el combate con el troll
4. **Usa objetos curativos** después de combates difíciles
5. **Usa el comando `curar`** cuando no tengas objetos curativos
6. **Prioriza objetos de protección** para reducir el daño recibido
7. **⚠️ EVITA las trampas** hasta tener objetos de protección adecuados
8. **Si exploras trampas**: Comienza con el Laberinto de Niebla (menos peligroso)
9. **Para el Círculo de Piedras**: Obtén la runa maldita ANTES de entrar al centro

### **Ruta para Jugadores Experimentados**
1. **Combate directo** con todos los enemigos usando armas mejoradas
2. **Explora todas las áreas** para obtener todos los objetos
3. **Optimiza el uso de objetos** para maximizar las estadísticas
4. **Gestiona recursos** estratégicamente para combates finales
5. **Explora todas las trampas** para obtener objetos únicos y efectos especiales
6. **Usa el cristal de poder** del Círculo de Piedras para maximizar estadísticas
7. **Aprovecha los efectos especiales** de objetos de trampas

### **Consejos de Combate**
- **Usa armas mejoradas** para aumentar el daño
- **Usa objetos de protección** para reducir significativamente el daño recibido
- **Cura después de combates** con hierbas, pociones y elixires
- **Revisa tus estadísticas** con `estadisticas` antes de combates importantes
- **Con protección máxima** (16 defensa) puedes reducir el daño de Rack a solo 4 puntos

---

## Consejos de Juego

1. **Explora completamente** cada área antes de continuar
2. **Habla con todos los personajes** para obtener información valiosa
3. **Recoge todos los objetos** que puedas - pueden ser útiles más adelante
4. **Usa objetos de mejora** para aumentar tus capacidades de combate
5. **Prioriza objetos de protección** - son más valiosos que los de ataque
6. **Resuelve los puzzles** para obtener recompensas especiales
7. **Libera al elfo prisionero** para obtener información adicional sobre Rack
8. **Las tres llaves son esenciales** para acceder a la fortaleza de Rack
9. **Rack es el enemigo más fuerte** - asegúrate de estar preparado para la batalla final
10. **Usa la moneda de plata** para evitar el combate con el troll si prefieres
11. **Revisa tus estadísticas** regularmente para ver tu progreso
12. **Gestiona tus objetos curativos** - úsalos estratégicamente
13. **Con protección máxima** puedes reducir el daño de Rack de 15 a solo 4 puntos
14. **Usa el comando `curar`** cuando no tengas objetos curativos disponibles
15. **Hay más de 245 puntos de curación** disponibles en el juego - úsalos sabiamente
16. **⚠️ Las trampas son opcionales** pero ofrecen objetos únicos y efectos especiales
17. **El Círculo de Piedras es la trampa más peligrosa** - sin protección te envía 10 ubicaciones hacia atrás
18. **El Laberinto de Niebla es la trampa más segura** - solo callejones sin salida
19. **El Bosque de Espejismos es la trampa más confusa** - todos los caminos son ilusiones
20. **Los efectos especiales de las trampas** pueden ser muy útiles en combates posteriores
21. **Explora las trampas solo si tienes objetos de protección** y curación suficientes
22. **El cristal de poder** del Círculo de Piedras es uno de los objetos más valiosos del juego

¡Buena suerte en tu aventura para rescatar a la princesa Nieve! 🌟
