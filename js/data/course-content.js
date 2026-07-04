export const moduleContent = {
  arrival: {
    label: "Módulo 1 · Mentalidad",
    objective:
      "Comprender qué espera un encargado de una persona que empieza a trabajar en hostelería y desarrollar la actitud adecuada desde el primer día.",
    media: {
      hero: "./img/module-1-hero.png",
      brand: {
        name: "Quiroz",
        logo: "./img/logo-quiroz.jpeg",
      },
    },
    introduction:
      "Los conocimientos llegarán con la práctica. La actitud depende de ti desde el primer minuto.",
    blocks: [
      {
        type: "expectations",
        title: "¿Qué espera un encargado?",
        paragraphs: [
          "Un encargado no espera que sepas hacerlo todo perfectamente.",
          "Lo que realmente observará durante tus primeros días será:",
        ],
        list: [
          "Tu actitud.",
          "Tus ganas de aprender.",
          "Tu iniciativa.",
          "Tu capacidad para observar.",
          "Tu disposición para ayudar al equipo.",
        ],
        closing: "Los conocimientos llegarán con la práctica. La actitud depende de ti desde el primer minuto.",
      },
      {
        type: "rule",
        title: "La regla más importante",
        media: {
          src: "./img/module-1-iniciativa.png",
          label: "Actitud activa antes de abrir",
          alt: "Camarero en formación organizando la barra antes del servicio",
        },
        highlight: "No te quedes quieto.",
        paragraphs: ["Si no sabes qué hacer:"],
        orderedList: ["Observa.", "Pregunta.", "Ayuda."],
        closing: "Esta será una de las reglas más importantes de todo el curso.",
      },
      {
        type: "habits",
        title: "Aprende de las personas adecuadas",
        paragraphs: [
          "En todos los bares y restaurantes encontrarás diferentes formas de trabajar.",
          "Habrá compañeros que no paran en todo el día:",
        ],
        list: [
          "Siempre encuentran algo útil que hacer.",
          "Ayudan al equipo.",
          "Se adelantan a los problemas.",
          "Mantienen la barra organizada.",
          "Están atentos a los clientes.",
        ],
      },
      {
        type: "gold",
        title: "Consejo de oro",
        media: {
          src: "./img/module-1-observacion.png",
          label: "Aprender observando al equipo",
          alt: "Camarero nuevo observando a un compañero con experiencia en la barra",
        },
        paragraphs: [
          "Fíjate siempre en quienes mejor trabajan.",
          "Observa cómo se organizan, cómo hablan con los clientes y qué hacen cuando no hay trabajo aparente.",
          "Imita sus hábitos. Ellos serán tu mejor escuela.",
        ],
      },
      {
        type: "observe",
        title: "Aprende observando",
        paragraphs: [
          "Muchas cosas no se enseñan con palabras.",
          "Se aprenden viendo cómo trabajan los compañeros con más experiencia.",
          "Observa:",
        ],
        list: [
          "Cómo organizan la barra.",
          "Cómo preparan un servicio.",
          "Cómo atienden a los clientes.",
          "Cómo se anticipan a lo que va a hacer falta.",
        ],
      },
      {
        type: "questions",
        title: "Pregunta sin miedo",
        paragraphs: [
          "Nadie espera que lo sepas todo el primer día.",
          "Pregunta siempre que tengas dudas.",
          "Una buena pregunta puede ser:",
        ],
        quotes: [
          "¿Hay algo que pueda preparar antes de abrir?",
          "¿Quedó algo pendiente de ayer que pueda adelantar?",
        ],
        closing: "Este tipo de preguntas demuestra interés, iniciativa y ganas de trabajar.",
      },
    ],
    advice: {
      title: "Consejo del encargado",
      body: "Prefiero un camarero que pregunta diez veces y aprende, que uno que nunca pregunta por miedo a equivocarse.",
    },
    mistake: {
      title: "Un error que puede costarte el puesto",
      body:
        "Si adoptas una actitud pasiva, dando la impresión de que esperas a que el trabajo llegue a ti, transmitirás una imagen negativa desde los primeros días.",
    },
    reminder: {
      title: "Qué debes recordar",
      body:
        "La experiencia se consigue con el tiempo. La actitud la decides tú desde el primer día. Si observas, preguntas, ayudas y aprendes de los mejores compañeros, crecerás mucho más rápido.",
    },
    practice: {
      title: "Situación real",
      body: "Acabas de llegar al bar. Nadie te da instrucciones porque todos están ocupados. ¿Qué haces?",
      prompt: "Elige la reacción que mejor transmite mentalidad de primer turno.",
      options: [
        {
          label: "Me quedo apartado para no molestar hasta que alguien me diga algo.",
          feedback:
            "Parece prudente, pero transmite pasividad. Un encargado puede interpretar que estás esperando a que el trabajo llegue a ti.",
        },
        {
          label: "Observo cómo se mueve el equipo, detecto tareas sencillas y pregunto en cuanto pueda ayudar.",
          isCorrect: true,
          feedback:
            "Correcto. Combina observación, iniciativa y respeto por la forma de trabajar del local.",
        },
        {
          label: "Empiezo a cambiar cosas importantes de la barra para demostrar iniciativa.",
          feedback:
            "Tiene iniciativa, pero falta criterio. Antes de tocar algo importante, conviene observar y preguntar.",
        },
      ],
      takeaway:
        "La mejor actitud no es hacer ruido ni esperar quieto: es observar, ayudar en tareas útiles y preguntar con cabeza.",
      steps: [
        "Observa el funcionamiento del local.",
        "Comienza con pequeñas tareas útiles.",
        "Cuando sea posible, pregunta en qué puedes ayudar.",
      ],
    },
    summary: {
      title: "Resumen",
      body:
        "La mentalidad correcta es el primer paso para convertirse en un buen camarero. No esperes a que el trabajo llegue a ti. Busca la forma de ayudar, aprende de quienes hacen bien su trabajo y demuestra cada día que has venido a aprender.",
    },
    completion: {
      eyebrow: "Mentalidad completada",
      title: "Ya sabes qué actitud espera un encargado el primer día.",
      body:
        "Has aprendido la base del primer turno: observar, preguntar, ayudar y fijarte en quienes mejor trabajan.",
      points: [
        "No te quedes quieto.",
        "Aprende observando al equipo.",
        "Pregunta con iniciativa.",
      ],
    },
    quiz: [
      {
        id: "mindset-1",
        prompt: "¿Qué espera principalmente un encargado de una persona nueva durante sus primeros días?",
        correctExplanation:
          "Correcto. Al principio no se espera perfección técnica, se observa sobre todo la actitud, las ganas de aprender, la iniciativa y la disposición para ayudar.",
        options: [
          {
            id: "a",
            label: "Que lo haga todo perfecto desde el primer turno.",
            explanation:
              "No es lo principal. Nadie espera que una persona sin experiencia domine todo desde el primer día.",
          },
          {
            id: "b",
            label: "Que tenga actitud, observe, pregunte y ayude al equipo.",
            isCorrect: true,
            explanation:
              "Correcto. Es exactamente lo que un encargado suele valorar al principio.",
          },
          {
            id: "c",
            label: "Que no pregunte para no molestar a los compañeros.",
            explanation:
              "No. Preguntar bien demuestra interés y evita errores mayores.",
          },
        ],
      },
      {
        id: "mindset-2",
        prompt: "Si no sabes qué hacer al llegar al bar, ¿cuál es la regla más importante?",
        correctExplanation:
          "Correcto. La regla es no quedarte quieto: observa, pregunta y ayuda.",
        options: [
          {
            id: "a",
            label: "Esperar quieto hasta que alguien te diga una tarea.",
            explanation:
              "No. Esa actitud transmite pasividad y puede dar una mala imagen desde el principio.",
          },
          {
            id: "b",
            label: "Hacer cualquier cosa sin mirar cómo trabaja el local.",
            explanation:
              "No del todo. Tener iniciativa no significa actuar sin observar ni entender el ritmo del equipo.",
          },
          {
            id: "c",
            label: "Observar, preguntar y buscar una forma útil de ayudar.",
            isCorrect: true,
            explanation:
              "Correcto. Es una forma sencilla de demostrar interés y criterio desde el primer turno.",
          },
        ],
      },
      {
        id: "mindset-3",
        prompt: "¿De quién conviene aprender cuando empiezas en un bar?",
        correctExplanation:
          "Correcto. Los mejores compañeros son una escuela práctica: observa cómo se organizan y cómo se anticipan.",
        options: [
          {
            id: "a",
            label: "De quienes mejor trabajan, ayudan y se adelantan a los problemas.",
            isCorrect: true,
            explanation:
              "Correcto. Copiar buenos hábitos acelera mucho tu aprendizaje.",
          },
          {
            id: "b",
            label: "De quien haga menos esfuerzo para cansarte menos.",
            explanation:
              "No. Esa actitud puede frenar tu aprendizaje y perjudicar la imagen que das.",
          },
          {
            id: "c",
            label: "De nadie, porque cada uno debe aprender solo.",
            explanation:
              "No. En hostelería se aprende mucho observando a gente con experiencia.",
          },
        ],
      },
      {
        id: "mindset-4",
        prompt: "¿Cuál de estas preguntas demuestra más iniciativa al llegar antes de abrir?",
        correctExplanation:
          "Correcto. Preguntar qué puedes adelantar antes de abrir muestra interés, iniciativa y ganas de trabajar.",
        options: [
          {
            id: "a",
            label: "¿Hay algo que pueda preparar antes de abrir?",
            isCorrect: true,
            explanation:
              "Correcto. Es concreta, útil y demuestra que quieres aportar.",
          },
          {
            id: "b",
            label: "¿Cuándo puedo descansar?",
            explanation:
              "No es una buena primera señal. Puede parecer que tu prioridad no es integrarte ni ayudar.",
          },
          {
            id: "c",
            label: "¿Tengo que hacer algo o espero?",
            explanation:
              "Es mejor preguntar de forma más activa. No solo esperes una orden: ofrece ayuda concreta.",
          },
        ],
      },
      {
        id: "mindset-5",
        prompt: "Situación real: llegas al bar y nadie te da instrucciones porque todos están ocupados. ¿Qué haces?",
        correctExplanation:
          "Correcto. Primero observas, luego empiezas con pequeñas tareas útiles y cuando se pueda preguntas en qué ayudar.",
        options: [
          {
            id: "a",
            label: "Me quedo apartado para no molestar.",
            explanation:
              "No. Puede parecer que no tienes iniciativa o que esperas a que el trabajo llegue a ti.",
          },
          {
            id: "b",
            label: "Observo, detecto tareas sencillas y pregunto en cuanto pueda ayudar.",
            isCorrect: true,
            explanation:
              "Correcto. Es la respuesta más profesional para una persona nueva.",
          },
          {
            id: "c",
            label: "Empiezo a cambiar cosas importantes sin preguntar.",
            explanation:
              "No. La iniciativa debe ir acompañada de observación y respeto por la forma de trabajar del local.",
          },
        ],
      },
    ],
  },
  "bar-setup": {
    label: "Módulo 2 · Barra e iniciativa",
    objective:
      "Aprender qué revisar y preparar en la barra antes de que empiece el servicio para trabajar con orden, rapidez e iniciativa.",
    media: {
      hero: "./img/module-2-hero.png",
      brand: {
        name: "Quiroz",
        logo: "./img/logo-quiroz.jpeg",
      },
    },
    introduction:
      "Preparar la barra no es solo colocar cosas. Es dejar el puesto listo para que el servicio arranque sin tropiezos.",
    blocks: [
      {
        type: "expectations",
        title: "La barra habla antes que tú",
        paragraphs: [
          "Un encargado nota rápido si una persona entiende la importancia del orden.",
          "Antes de que llegue el primer cliente, la barra debe transmitir control: limpia, preparada y fácil de usar.",
        ],
        list: [
          "Vasos a mano.",
          "Servilletas repuestas.",
          "Cucharillas preparadas.",
          "Zona de café despejada.",
          "Superficie limpia y seca.",
        ],
        closing: "Si la barra está preparada, el equipo trabaja más rápido y con menos tensión.",
      },
      {
        type: "rule",
        title: "Mira antes de tocar",
        highlight: "Primero observa cómo está organizada la barra.",
        paragraphs: [
          "Cada bar tiene su forma de colocar vasos, cafés, pinchos, tickets y herramientas.",
          "Tu primera tarea no es cambiarlo todo, sino entender el orden del local.",
        ],
        orderedList: ["Observa la colocación.", "Detecta lo que falta.", "Pregunta antes de mover algo importante."],
        closing: "La iniciativa buena respeta la forma de trabajar del sitio.",
      },
      {
        type: "habits",
        title: "Qué puedes revisar al llegar",
        media: {
          src: "./img/module-2-barra.png",
          label: "Barra preparada antes del servicio",
          alt: "Preparación de vasos, servilletas y barra antes de abrir",
        },
        paragraphs: [
          "Aunque cada local sea distinto, hay comprobaciones básicas que casi siempre ayudan antes de abrir o antes de un pico de trabajo.",
        ],
        list: [
          "Si hay vasos limpios suficientes.",
          "Si faltan servilletas o posavasos.",
          "Si la cafetera y la zona de cafés están despejadas.",
          "Si hay leche, azúcar y cucharillas preparadas.",
          "Si la barra tiene manchas, migas o agua.",
          "Si la basura o los envases molestan en la zona de trabajo.",
        ],
      },
      {
        type: "gold",
        title: "Anticiparte sin molestar",
        paragraphs: [
          "Anticiparte no significa ir por libre.",
          "Significa encontrar tareas pequeñas que facilitan el trabajo del equipo sin interrumpir el ritmo del local.",
          "Cuando dudes, pregunta de forma concreta.",
        ],
        quotes: [
          "¿Repongo servilletas?",
          "¿Quieres que deje vasos preparados?",
          "¿Limpio esta zona antes de abrir?",
        ],
      },
      {
        type: "observe",
        title: "La zona de café",
        media: {
          src: "./img/module-2-cafe.png",
          label: "Zona de café lista para la mañana",
          alt: "Cafetera, tazas y cucharillas preparadas antes del servicio",
        },
        paragraphs: [
          "En muchos bares de Pamplona la mañana empieza fuerte con cafés.",
          "Aunque todavía no sepas preparar todos los cafés, puedes ayudar dejando la zona lista.",
        ],
        list: [
          "Tazas ordenadas.",
          "Cucharillas disponibles.",
          "Azúcar o endulzantes repuestos.",
          "Leche localizada.",
          "Trapo limpio a mano.",
        ],
      },
      {
        type: "questions",
        title: "La pregunta útil",
        paragraphs: [
          "Una buena pregunta ahorra tiempo al encargado.",
          "En lugar de preguntar de forma muy general, ofrece una tarea concreta.",
        ],
        quotes: ["¿Quieres que revise vasos y servilletas antes de abrir?"],
        closing: "Eso demuestra que observas y que ya empiezas a pensar como parte del equipo.",
      },
    ],
    advice: {
      title: "Consejo del encargado",
      body: "Antes de correr, quiero ver que sabes dejar tu zona lista. Una barra preparada evita muchos errores durante el servicio.",
    },
    mistake: {
      title: "Error frecuente",
      body:
        "Cambiar cosas de sitio sin preguntar puede parecer iniciativa, pero puede desordenar el sistema del local y hacer perder tiempo a los compañeros.",
    },
    reminder: {
      title: "Recuerda",
      body:
        "La barra debe estar limpia, repuesta y fácil de usar. Observa primero, ayuda con tareas útiles y pregunta antes de mover algo importante.",
    },
    practice: {
      title: "Situación real",
      body: "Llegas a la barra y ves que falta papel, hay vasos por recoger y la cafetera está rodeada de cosas.",
      prompt: "¿Qué harías primero?",
      options: [
        {
          label: "Empiezo a reorganizar toda la barra a mi manera para que quede mejor.",
          feedback:
            "No es lo ideal. Puedes descolocar el sistema del local. Primero observa y actúa sobre tareas sencillas.",
        },
        {
          label: "Recojo lo evidente, limpio la zona de trabajo y pregunto si repongo servilletas o vasos.",
          isCorrect: true,
          feedback:
            "Correcto. Es útil, prudente y demuestra iniciativa sin alterar la organización del equipo.",
        },
        {
          label: "Espero a que alguien me diga exactamente qué hacer.",
          feedback:
            "No es la mejor actitud. Hay tareas visibles que puedes adelantar con cuidado y sentido común.",
        },
      ],
      takeaway:
        "En barra, la mejor iniciativa empieza por tareas visibles, útiles y poco invasivas: recoger, limpiar, reponer y preguntar.",
      steps: [
        "Detecta lo evidente.",
        "Actúa sobre tareas sencillas.",
        "Pregunta antes de cambiar la organización.",
      ],
    },
    summary: {
      title: "Resumen",
      body:
        "Preparar la barra significa dejar el puesto listo para trabajar con rapidez. Revisa vasos, servilletas, zona de café, limpieza y reposición. No cambies el sistema del local sin preguntar: observa, ayuda y anticípate con criterio.",
    },
    completion: {
      eyebrow: "Barra completada",
      title: "Ya sabes cómo empezar a preparar una barra con criterio.",
      body:
        "Has aprendido a detectar tareas útiles antes del servicio y a demostrar iniciativa sin desordenar el trabajo del equipo.",
      points: [
        "Observa la organización antes de tocar.",
        "Revisa limpieza, vasos y reposición.",
        "Pregunta antes de mover algo importante.",
      ],
    },
    quiz: [
      {
        id: "bar-setup-1",
        prompt: "¿Qué transmite una barra limpia, repuesta y ordenada antes de empezar el servicio?",
        correctExplanation:
          "Correcto. Una barra preparada transmite control y permite trabajar con más rapidez cuando llegan clientes.",
        options: [
          {
            id: "a",
            label: "Que el local está listo para trabajar con orden.",
            isCorrect: true,
            explanation:
              "Correcto. Es una señal clara de preparación y profesionalidad.",
          },
          {
            id: "b",
            label: "Que ya no queda nada que hacer durante el turno.",
            explanation:
              "No. Durante el turno siempre habrá tareas, pero empezar ordenado reduce problemas.",
          },
          {
            id: "c",
            label: "Que solo importa la estética, no la rapidez.",
            explanation:
              "No. El orden de barra afecta directamente a la rapidez y a la coordinación.",
          },
        ],
      },
      {
        id: "bar-setup-2",
        prompt: "Si eres nuevo y ves la barra desordenada, ¿cuál es la mejor forma de actuar?",
        correctExplanation:
          "Correcto. Ayudas con tareas visibles y poco invasivas, pero respetas la organización del local antes de cambiar cosas importantes.",
        options: [
          {
            id: "a",
            label: "Limpiar lo evidente, reponer lo básico si sabes dónde está y preguntar antes de mover cosas importantes.",
            isCorrect: true,
            explanation:
              "Correcto. Es una forma útil de ayudar sin alterar el sistema de trabajo del equipo.",
          },
          {
            id: "b",
            label: "Esperar quieto hasta que alguien te dé una orden exacta.",
            explanation:
              "No es lo ideal. Si hay tareas visibles y sencillas, puedes adelantarlas con criterio.",
          },
          {
            id: "c",
            label: "Cambiar la colocación de todo sin preguntar.",
            explanation:
              "No. Puede desordenar el sistema que usa el equipo y hacer perder tiempo a tus compañeros.",
          },
        ],
      },
      {
        id: "bar-setup-3",
        prompt: "¿Cuál es una buena forma de demostrar iniciativa en barra?",
        correctExplanation:
          "Correcto. Ofrecer una tarea concreta demuestra que observas y quieres ayudar.",
        options: [
          {
            id: "a",
            label: "Preguntar: ¿quieres que revise vasos y servilletas antes de abrir?",
            isCorrect: true,
            explanation:
              "Correcto. Es una pregunta concreta, útil y fácil de responder.",
          },
          {
            id: "b",
            label: "Preguntar cada minuto si ya hay algo para hacer.",
            explanation:
              "No es lo mejor. Preguntar está bien, pero conviene observar y proponer tareas concretas.",
          },
          {
            id: "c",
            label: "No preguntar nunca para no molestar.",
            explanation:
              "No. Preguntar con criterio demuestra interés y evita errores.",
          },
        ],
      },
      {
        id: "bar-setup-4",
        prompt: "¿Qué zona conviene tener especialmente despejada por la mañana?",
        correctExplanation:
          "Correcto. La zona de café suele tener mucho movimiento al inicio del día.",
        options: [
          {
            id: "a",
            label: "La zona de café.",
            isCorrect: true,
            explanation:
              "Correcto. Tazas, cucharillas, leche y azúcar deben estar localizados y listos.",
          },
          {
            id: "b",
            label: "Solo la entrada del local.",
            explanation:
              "La entrada importa, pero en barra la zona de café es clave durante la mañana.",
          },
          {
            id: "c",
            label: "Ninguna, porque cada camarero ya se apañará.",
            explanation:
              "No. Preparar zonas de trabajo ayuda a todo el equipo.",
          },
        ],
      },
      {
        id: "bar-setup-5",
        prompt: "¿Cuál sería la mejor primera acción si ves vasos por recoger, servilletas bajas y la barra mojada?",
        correctExplanation:
          "Correcto. Recoger, limpiar y reponer son tareas útiles que preparan la barra sin alterar el sistema del local.",
        options: [
          {
            id: "a",
            label: "Recoger lo evidente, secar la barra y preguntar si repongo servilletas.",
            isCorrect: true,
            explanation:
              "Correcto. Es práctico, ordenado y prudente.",
          },
          {
            id: "b",
            label: "Esperar quieto porque nadie me ha dado una orden.",
            explanation:
              "No. Hay tareas visibles que puedes adelantar con criterio.",
          },
          {
            id: "c",
            label: "Mover todos los vasos a otra zona sin avisar.",
            explanation:
              "No. Puede dificultar el trabajo de quienes ya conocen la barra.",
          },
        ],
      },
    ],
  },
  "first-customer": {
    label: "Módulo 3 · Primer servicio",
    objective:
      "Aprender cómo actuar cuando llega el primer cliente: saludar, escuchar, confirmar el pedido y pedir ayuda si hace falta sin bloquearte.",
    media: {
      hero: "./img/module-3-hero.png",
      brand: {
        name: "Quiroz",
        logo: "./img/logo-quiroz.jpeg",
      },
    },
    introduction:
      "El primer cliente puede imponer, pero no necesitas hacerlo perfecto. Necesitas mantener la calma, escuchar bien y seguir un orden sencillo.",
    blocks: [
      {
        type: "expectations",
        title: "El cliente nota tu actitud",
        paragraphs: [
          "Un cliente no siempre sabe si eres nuevo, pero sí percibe si estás atento, tranquilo y dispuesto a ayudar.",
          "La primera impresión se construye con gestos simples.",
        ],
        list: [
          "Mirar al cliente.",
          "Saludar de forma natural.",
          "Escuchar sin interrumpir.",
          "Confirmar si tienes dudas.",
          "Pedir ayuda si no sabes algo.",
        ],
        closing: "No hace falta actuar como experto. Hace falta estar presente y no desaparecer.",
      },
      {
        type: "rule",
        title: "La secuencia básica",
        highlight: "Saluda, escucha, confirma y actúa.",
        paragraphs: [
          "Cuando llegue un cliente, usa una secuencia sencilla para no bloquearte.",
          "Este orden te ayuda aunque todavía no domines la carta, los cafés o la barra.",
        ],
        orderedList: ["Saluda.", "Escucha el pedido.", "Confirma lo que no entiendas.", "Busca ayuda si hace falta."],
        closing: "La seguridad se gana repitiendo un proceso simple.",
      },
      {
        type: "habits",
        title: "Cómo saludar sin sonar raro",
        paragraphs: [
          "No necesitas una frase perfecta. En hostelería funciona mejor ser natural, claro y amable.",
        ],
        list: [
          "Buenos días.",
          "Hola, dime.",
          "¿Qué te pongo?",
          "Ahora te atiendo, un momento.",
        ],
        closing: "Lo importante es que el cliente sepa que le has visto.",
      },
      {
        type: "gold",
        title: "Confirmar evita errores",
        media: {
          src: "./img/module-3-pedido.png",
          label: "Confirmar el pedido con calma",
          alt: "Camarero confirmando el pedido de un cliente en barra",
        },
        paragraphs: [
          "Si no has entendido algo, no finjas.",
          "Confirmar un pedido es mucho mejor que servir algo mal.",
        ],
        quotes: [
          "Perdona, ¿me lo repites un momento?",
          "Entonces sería un café con leche y una tostada, ¿verdad?",
          "Te lo confirmo con mi compañero y ahora te digo.",
        ],
      },
      {
        type: "observe",
        title: "Si no sabes algo",
        paragraphs: [
          "No saber algo al principio es normal.",
          "Lo importante es no inventar y no dejar al cliente sin respuesta.",
        ],
        list: [
          "Mantén la calma.",
          "Di que lo confirmas.",
          "Pregunta a un compañero.",
          "Vuelve con una respuesta clara.",
        ],
      },
      {
        type: "questions",
        title: "El momento de pedir ayuda",
        paragraphs: [
          "Pedir ayuda bien no te hace parecer peor.",
          "Te hace parecer responsable, porque evitas errores delante del cliente.",
        ],
        quotes: ["Me han pedido esto y no quiero equivocarme, ¿me confirmas cómo lo hacemos aquí?"],
        closing: "Esa frase demuestra humildad, atención y ganas de aprender.",
      },
    ],
    advice: {
      title: "Consejo del encargado",
      body: "Prefiero que confirmes un pedido a que lo sirvas mal por vergüenza. Preguntar a tiempo ahorra problemas.",
    },
    mistake: {
      title: "Error frecuente",
      body:
        "Hacer como que has entendido al cliente cuando no es verdad suele terminar en errores, repeticiones y pérdida de confianza.",
    },
    reminder: {
      title: "Recuerda",
      body:
        "El primer cliente no exige perfección. Exige atención. Saluda, escucha, confirma y pide ayuda si no sabes algo.",
    },
    practice: {
      title: "Situación real",
      body: "Llega un cliente y te pide algo que no has entendido bien porque hay ruido en la barra.",
      prompt: "¿Cuál es la mejor reacción?",
      options: [
        {
          label: "Hago como que lo he entendido y preparo lo que creo que ha pedido.",
          feedback:
            "No es buena opción. Si fallas, el cliente tendrá que repetir y el equipo perderá tiempo.",
        },
        {
          label: "Le pido que lo repita con educación y confirmo el pedido antes de moverme.",
          isCorrect: true,
          feedback:
            "Correcto. Confirmar con calma evita errores y transmite atención.",
        },
        {
          label: "Me voy a buscar a otro compañero sin decir nada al cliente.",
          feedback:
            "No es lo ideal. Puedes pedir ayuda, pero primero conviene atender al cliente y explicarle que lo confirmas.",
        },
      ],
      takeaway:
        "Cuando no entiendas algo, no improvises. Pide que lo repitan, confirma y actúa.",
      steps: ["Escucha.", "Confirma.", "Actúa o pide ayuda."],
    },
    summary: {
      title: "Resumen",
      body:
        "Atender al primer cliente consiste en seguir un orden simple: saludar, escuchar, confirmar y actuar. Si no sabes algo, no inventes. Pide ayuda, vuelve con una respuesta y mantén una actitud tranquila.",
    },
    completion: {
      eyebrow: "Primer cliente completado",
      title: "Ya tienes una forma clara de atender al primer cliente.",
      body:
        "Has aprendido una secuencia sencilla para no bloquearte: saludar, escuchar, confirmar y pedir ayuda si hace falta.",
      points: [
        "Saluda de forma natural.",
        "Confirma antes de servir si dudas.",
        "No inventes respuestas.",
      ],
    },
    quiz: [
      {
        id: "first-customer-1",
        prompt: "¿Qué es lo primero que debe notar un cliente cuando llega a la barra?",
        correctExplanation:
          "Correcto. Lo primero es que le has visto y que estás atento.",
        options: [
          {
            id: "a",
            label: "Que le has visto y estás dispuesto a atenderle.",
            isCorrect: true,
            explanation:
              "Correcto. Un saludo o una mirada evita que el cliente se sienta ignorado.",
          },
          {
            id: "b",
            label: "Que sabes hacerlo todo rápido aunque no escuches bien.",
            explanation:
              "No. La rapidez sin escucha puede acabar en errores.",
          },
          {
            id: "c",
            label: "Que no vas a preguntar nunca.",
            explanation:
              "No. Preguntar y confirmar bien es parte de atender con responsabilidad.",
          },
        ],
      },
      {
        id: "first-customer-2",
        prompt: "¿Cuál es la secuencia básica para no bloquearte con un cliente?",
        correctExplanation:
          "Correcto. Saludar, escuchar, confirmar y actuar te da un orden sencillo.",
        options: [
          {
            id: "a",
            label: "Saludar, escuchar, confirmar y actuar.",
            isCorrect: true,
            explanation:
              "Correcto. Es una secuencia simple y útil para empezar.",
          },
          {
            id: "b",
            label: "Correr, improvisar y evitar preguntar.",
            explanation:
              "No. Esa forma de actuar aumenta los errores.",
          },
          {
            id: "c",
            label: "Esperar a que otro compañero atienda siempre.",
            explanation:
              "No. Si puedes saludar y escuchar, ya puedes empezar a atender.",
          },
        ],
      },
      {
        id: "first-customer-3",
        prompt: "Si no entiendes bien un pedido, ¿qué es mejor hacer?",
        correctExplanation:
          "Correcto. Pedir que lo repitan y confirmar evita errores.",
        options: [
          {
            id: "a",
            label: "Inventar lo que crees que ha pedido.",
            explanation:
              "No. Eso puede generar un error y hacer perder tiempo.",
          },
          {
            id: "b",
            label: "Pedir que lo repita con educación y confirmar.",
            isCorrect: true,
            explanation:
              "Correcto. Es profesional y demuestra atención.",
          },
          {
            id: "c",
            label: "Ignorar el pedido hasta que insista.",
            explanation:
              "No. El cliente debe sentirse atendido.",
          },
        ],
      },
      {
        id: "first-customer-4",
        prompt: "¿Qué frase es adecuada si no sabes cómo se hace algo en ese local?",
        correctExplanation:
          "Correcto. Confirmar con un compañero evita errores sin abandonar al cliente.",
        options: [
          {
            id: "a",
            label: "Te lo confirmo con mi compañero y ahora te digo.",
            isCorrect: true,
            explanation:
              "Correcto. Es clara y responsable.",
          },
          {
            id: "b",
            label: "No lo sé, pregunta a otro.",
            explanation:
              "No. Suena poco profesional y deja al cliente sin atención.",
          },
          {
            id: "c",
            label: "Eso aquí no se puede hacer, aunque no lo sepa seguro.",
            explanation:
              "No. No conviene inventar una respuesta.",
          },
        ],
      },
      {
        id: "first-customer-5",
        prompt: "¿Cuál es el error más peligroso con el primer cliente?",
        correctExplanation:
          "Correcto. Fingir que has entendido puede terminar en un servicio incorrecto.",
        options: [
          {
            id: "a",
            label: "Confirmar un pedido antes de prepararlo.",
            explanation:
              "No. Confirmar suele evitar errores.",
          },
          {
            id: "b",
            label: "Fingir que has entendido cuando tienes dudas.",
            isCorrect: true,
            explanation:
              "Correcto. Es mejor preguntar que servir mal.",
          },
          {
            id: "c",
            label: "Saludar de forma sencilla.",
            explanation:
              "No. Un saludo sencillo y natural es correcto.",
          },
        ],
      },
    ],
  },
  "coffee-service": {
    label: "Módulo 4 · Cafés",
    objective:
      "Entender el flujo básico de cafés de mañana: escuchar el pedido, preparar la zona, servir con orden y pedir ayuda si no dominas la cafetera.",
    media: {
      hero: "./img/module-4-hero.png",
      brand: { name: "Quiroz", logo: "./img/logo-quiroz.jpeg" },
    },
    introduction:
      "Los cafés son una de las primeras pruebas reales en barra. No necesitas saberlo todo, pero sí entender el orden y no estorbar el ritmo.",
    blocks: [
      {
        type: "expectations",
        title: "Por qué los cafés importan",
        paragraphs: [
          "En muchos bares, la mañana empieza con cafés, tostadas y clientes que van con prisa.",
          "Un café mal escuchado o servido tarde puede romper el ritmo de la barra.",
        ],
        list: ["Escuchar bien.", "Confirmar si hay duda.", "Mantener la zona limpia.", "Servir con plato, cucharilla y azúcar si corresponde.", "No tocar la máquina sin permiso si no sabes usarla."],
        closing: "El objetivo al empezar es ayudar al flujo, no demostrar que sabes más de lo que sabes.",
      },
      {
        type: "rule",
        title: "La regla del café",
        highlight: "Primero entiende el pedido; después prepara.",
        paragraphs: ["Antes de moverte, asegúrate de haber entendido qué café quiere el cliente."],
        orderedList: ["Escucha.", "Repite mentalmente.", "Confirma si dudas.", "Prepara o pide ayuda."],
        closing: "Un segundo confirmando puede ahorrar un café repetido.",
      },
      {
        type: "habits",
        title: "Zona de café lista",
        media: {
          src: "./img/module-4-cafe.png",
          label: "Flujo básico de café",
          alt: "Cafetera, taza, cucharilla y leche preparados para el servicio",
        },
        paragraphs: ["Aunque no manejes la cafetera todavía, puedes dejar preparado lo que rodea al café."],
        list: ["Tazas y platos a mano.", "Cucharillas localizadas.", "Azúcar o endulzante repuesto.", "Leche ubicada.", "Trapo limpio cerca.", "Mostrador seco."],
      },
      {
        type: "gold",
        title: "No bloquees la máquina",
        paragraphs: [
          "La cafetera suele ser un punto de presión.",
          "Si no sabes usarla, no te quedes delante ocupando espacio. Apártate, pregunta y observa cómo lo hace alguien con experiencia.",
        ],
      },
      {
        type: "observe",
        title: "Observa los nombres",
        paragraphs: ["Cada zona tiene formas habituales de pedir cafés. En Pamplona escucharás pedidos rápidos y abreviados."],
        list: ["Café solo.", "Cortado.", "Café con leche.", "Descafeinado.", "Con hielo.", "Leche templada o muy caliente."],
        closing: "No memorices todo de golpe. Empieza por reconocer los pedidos más repetidos.",
      },
      {
        type: "questions",
        title: "Pregunta útil",
        paragraphs: ["Si no sabes preparar un café, no improvises con la máquina."],
        quotes: ["Me han pedido un cortado, ¿me enseñas cómo lo hacéis aquí?"],
        closing: "Aprenderás más rápido si conviertes cada duda en una pregunta concreta.",
      },
    ],
    advice: {
      title: "Consejo del encargado",
      body: "Con los cafés prefiero que preguntes antes de tocar la máquina sin saber. La rapidez llegará cuando entiendas el flujo.",
    },
    mistake: {
      title: "Error frecuente",
      body: "Preparar un café que no has entendido bien por vergüenza a preguntar suele terminar en pérdida de tiempo y mala imagen.",
    },
    reminder: {
      title: "Recuerda",
      body: "Escucha el pedido, confirma si dudas, mantén la zona limpia y pide ayuda antes de usar algo que no dominas.",
    },
    practice: {
      title: "Situación real",
      body: "Un cliente pide un café que no has entendido bien y tu compañero está usando la cafetera.",
      prompt: "¿Qué haces?",
      options: [
        { label: "Preparo lo que creo que ha pedido para no perder tiempo.", feedback: "No. Puedes acabar repitiendo el café y frenando más el servicio." },
        { label: "Le confirmo el pedido al cliente y espero el momento para pedir ayuda al compañero.", isCorrect: true, feedback: "Correcto. Evitas errores y respetas el ritmo de la máquina." },
        { label: "Me coloco delante de la cafetera hasta que alguien me diga qué hacer.", feedback: "No. Puedes bloquear una zona clave de trabajo." },
      ],
      takeaway: "En cafés, confirmar y respetar el flujo de la cafetera es más importante que aparentar rapidez.",
      steps: ["Confirma.", "Prepara lo que sí sabes.", "Pide ayuda concreta."],
    },
    summary: {
      title: "Resumen",
      body: "El servicio de cafés exige escucha, orden y respeto por el flujo de barra. Si no sabes usar la máquina, observa y pregunta. Puedes ayudar preparando tazas, cucharillas, azúcar, leche y manteniendo la zona limpia.",
    },
    completion: {
      eyebrow: "Cafés completado",
      title: "Ya entiendes cómo entrar en el flujo de cafés sin bloquear la barra.",
      body: "Has aprendido a escuchar, confirmar, preparar la zona y pedir ayuda con criterio.",
      points: ["Escucha antes de preparar.", "Mantén la zona lista.", "No uses la máquina sin saber."],
    },
    quiz: [
      {
        id: "coffee-1",
        prompt: "¿Qué debes hacer si no has entendido bien un café?",
        correctExplanation: "Correcto. Confirmar evita repetir cafés y perder tiempo.",
        options: [
          { id: "a", label: "Confirmar el pedido con el cliente.", isCorrect: true, explanation: "Correcto. Es la forma más segura." },
          { id: "b", label: "Preparar cualquiera parecido.", explanation: "No. Puede acabar en error." },
          { id: "c", label: "Ignorar el pedido.", explanation: "No. El cliente debe sentirse atendido." },
        ],
      },
      {
        id: "coffee-2",
        prompt: "Si no sabes usar la cafetera, ¿qué es lo más profesional?",
        correctExplanation: "Correcto. Preguntar y observar evita errores.",
        options: [
          { id: "a", label: "Tocarla hasta aprender por prueba y error.", explanation: "No. Puedes romper el flujo o servir mal." },
          { id: "b", label: "Pedir ayuda y observar cómo se hace.", isCorrect: true, explanation: "Correcto. Aprendes sin crear problemas." },
          { id: "c", label: "Decir que no harás cafés nunca.", explanation: "No. La idea es aprender progresivamente." },
        ],
      },
      {
        id: "coffee-3",
        prompt: "¿Qué puedes preparar aunque aún no domines los cafés?",
        correctExplanation: "Correcto. La mise en place de café ayuda mucho al equipo.",
        options: [
          { id: "a", label: "Tazas, cucharillas, azúcar y zona limpia.", isCorrect: true, explanation: "Correcto. Es una ayuda real." },
          { id: "b", label: "Nada, porque no sabes hacer café.", explanation: "No. Hay muchas tareas alrededor del café." },
          { id: "c", label: "Cambiar toda la configuración de la máquina.", explanation: "No. Eso no corresponde a alguien nuevo." },
        ],
      },
      {
        id: "coffee-4",
        prompt: "¿Por qué no conviene bloquear la zona de cafetera?",
        correctExplanation: "Correcto. Es una zona de mucho ritmo.",
        options: [
          { id: "a", label: "Porque otros compañeros pueden necesitarla para sacar pedidos.", isCorrect: true, explanation: "Correcto. Debe estar libre y ordenada." },
          { id: "b", label: "Porque la cafetera no se usa por la mañana.", explanation: "No. Suele usarse mucho." },
          { id: "c", label: "Porque el cliente no mira esa zona.", explanation: "No. El motivo principal es el flujo de trabajo." },
        ],
      },
      {
        id: "coffee-5",
        prompt: "¿Qué frase demuestra iniciativa correcta?",
        correctExplanation: "Correcto. Es concreta y facilita que te enseñen.",
        options: [
          { id: "a", label: "Me han pedido un cortado, ¿me enseñas cómo lo hacéis aquí?", isCorrect: true, explanation: "Correcto. Pregunta concreta y útil." },
          { id: "b", label: "No pienso tocar cafés.", explanation: "No. No demuestra ganas de aprender." },
          { id: "c", label: "Ya lo hago yo aunque no sepa.", explanation: "No. Puede generar errores." },
        ],
      },
    ],
  },
  "terrace-service": {
    label: "Módulo 5 · Terraza",
    objective:
      "Aprender a moverte en terraza con orden: mirar mesas, priorizar avisos, llevar y recoger sin viajes vacíos.",
    media: {
      hero: "./img/module-5-hero.png",
      brand: { name: "Quiroz", logo: "./img/logo-quiroz.jpeg" },
    },
    introduction:
      "La terraza exige memoria, observación y movimiento. No gana quien corre más, sino quien hace mejores viajes.",
    blocks: [
      {
        type: "expectations",
        title: "La terraza se trabaja con ojos",
        paragraphs: ["Antes de salir corriendo, mira la terraza como un mapa.", "Detecta quién acaba de sentarse, quién espera, qué mesas tienen platos y qué puedes recoger."],
        list: ["Mesas nuevas.", "Clientes esperando.", "Mesas para recoger.", "Bebidas pendientes.", "Camino libre para pasar."],
      },
      {
        type: "rule",
        title: "No hagas viajes vacíos",
        highlight: "Si sales con algo, intenta volver con algo.",
        paragraphs: ["Una terraza mal trabajada multiplica pasos innecesarios.", "Cada viaje debe servir para llevar, recoger o comprobar algo."],
        orderedList: ["Mira antes de salir.", "Lleva lo pendiente.", "Recoge al volver.", "Informa si ves una mesa esperando."],
      },
      {
        type: "habits",
        title: "Prioridades básicas",
        paragraphs: ["Cuando hay varias cosas a la vez, prioriza lo que afecta más al cliente."],
        list: ["Saludar a una mesa nueva.", "Llevar bebidas preparadas.", "Resolver una duda.", "Recoger lo que bloquea la mesa.", "Limpiar una mesa para nuevos clientes."],
      },
      {
        type: "gold",
        title: "Bandeja y calma",
        media: {
          src: "./img/module-5-terraza.png",
          label: "Movimiento ordenado en terraza",
          alt: "Camarero caminando con bandeja entre mesas de terraza",
        },
        paragraphs: ["La bandeja no es para correr. Es para transportar con estabilidad.", "Camina con calma, mira el camino y evita giros bruscos."],
      },
      {
        type: "observe",
        title: "Comunica lo que ves",
        paragraphs: ["Si no puedes resolver algo, avisa.", "Una frase rápida puede evitar que una mesa se quede olvidada."],
        quotes: ["La mesa de fuera acaba de sentarse.", "La mesa 4 está esperando cafés.", "La mesa de la esquina ya se puede recoger."],
      },
      {
        type: "questions",
        title: "Pregunta útil",
        paragraphs: ["Si no conoces la numeración o el orden de terraza, pregunta antes de sacar pedidos."],
        quotes: ["¿Me enseñas cómo numeráis las mesas de terraza?"],
      },
    ],
    advice: {
      title: "Consejo del encargado",
      body: "En terraza quiero que mires antes de moverte. Un viaje bien pensado vale más que tres viajes corriendo.",
    },
    mistake: {
      title: "Error frecuente",
      body: "Salir y volver con las manos vacías continuamente hace perder mucho tiempo y da sensación de desorden.",
    },
    reminder: {
      title: "Recuerda",
      body: "Mira la terraza como un mapa: mesas nuevas, pendientes, recogida y camino. Lleva algo y vuelve con algo siempre que puedas.",
    },
    practice: {
      title: "Situación real",
      body: "Sales a terraza con dos bebidas y ves una mesa nueva sentada y otra mesa con vasos vacíos.",
      prompt: "¿Qué decisión tiene más sentido?",
      options: [
        { label: "Entrego las bebidas, saludo a la mesa nueva y recojo vasos al volver si puedo.", isCorrect: true, feedback: "Correcto. Resuelves prioridad y aprovechas el viaje." },
        { label: "Vuelvo corriendo dentro sin mirar nada más.", feedback: "No. Pierdes información importante de terraza." },
        { label: "Dejo las bebidas en cualquier mesa para recoger vasos primero.", feedback: "No. Primero entrega lo que ya está preparado." },
      ],
      takeaway: "En terraza piensa el viaje completo: salida, prioridad y vuelta.",
      steps: ["Entrega.", "Observa.", "Recoge o avisa."],
    },
    summary: {
      title: "Resumen",
      body: "Trabajar terraza consiste en observar, priorizar y aprovechar viajes. Saluda mesas nuevas, entrega lo pendiente, recoge al volver y comunica lo que veas al equipo.",
    },
    completion: {
      eyebrow: "Terraza completada",
      title: "Ya sabes moverte en terraza con más orden.",
      body: "Has aprendido a mirar la terraza como un mapa y a evitar viajes vacíos.",
      points: ["Observa antes de salir.", "Prioriza mesas nuevas y pedidos listos.", "Vuelve con algo cuando puedas."],
    },
    quiz: [
      { id: "terrace-1", prompt: "¿Qué significa no hacer viajes vacíos?", correctExplanation: "Correcto. Aprovechar ida y vuelta reduce pasos.", options: [{ id: "a", label: "Intentar llevar o recoger algo en cada trayecto.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "No salir nunca a terraza.", explanation: "No." }, { id: "c", label: "Correr sin mirar.", explanation: "No." }] },
      { id: "terrace-2", prompt: "¿Qué conviene hacer al ver una mesa nueva?", correctExplanation: "Correcto. Que el cliente sepa que le has visto.", options: [{ id: "a", label: "Saludar o avisar al compañero.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Ignorarla hasta que llame.", explanation: "No." }, { id: "c", label: "Recoger otra mesa y no decir nada.", explanation: "No." }] },
      { id: "terrace-3", prompt: "¿Por qué hay que conocer la numeración de mesas?", correctExplanation: "Correcto. Evita sacar pedidos a la mesa equivocada.", options: [{ id: "a", label: "Para entregar pedidos correctamente.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Solo por decoración.", explanation: "No." }, { id: "c", label: "No hace falta nunca.", explanation: "No." }] },
      { id: "terrace-4", prompt: "¿Cómo se usa la bandeja de forma básica?", correctExplanation: "Correcto. Estabilidad antes que velocidad.", options: [{ id: "a", label: "Con calma, mirando el camino y sin giros bruscos.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Corriendo para acabar antes.", explanation: "No." }, { id: "c", label: "Con una mano distraída y mirando el móvil.", explanation: "No." }] },
      { id: "terrace-5", prompt: "¿Qué frase ayuda al equipo?", correctExplanation: "Correcto. Comunica una necesidad visible.", options: [{ id: "a", label: "La mesa de fuera acaba de sentarse.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "No sé nada de fuera.", explanation: "No." }, { id: "c", label: "Que espere todo el mundo.", explanation: "No." }] },
    ],
  },
  "dining-room-service": {
    label: "Módulo 6 · Servicio de comidas",
    objective:
      "Entender cómo ayudar en comedor: llevar platos con cuidado, respetar el orden de mesa, retirar bien y comunicar dudas.",
    media: {
      hero: "./img/module-6-hero.png",
      brand: { name: "Quiroz", logo: "./img/logo-quiroz.jpeg" },
    },
    introduction:
      "El comedor tiene más ritmo y más detalle. La clave al empezar es no invadir, no improvisar y ayudar en tareas claras.",
    blocks: [
      {
        type: "expectations",
        title: "El comedor exige atención",
        paragraphs: ["En comida, cada mesa tiene tiempos: bebida, platos, retirada, postre y cuenta.", "Aunque seas nuevo, puedes ayudar observando y comunicando."],
        list: ["Mesa que espera.", "Platos listos para salir.", "Platos terminados.", "Clientes que piden algo.", "Zona de paso libre."],
      },
      {
        type: "rule",
        title: "No salgas con dudas",
        highlight: "Antes de llevar un plato, confirma mesa y posición.",
        paragraphs: ["Sacar un plato a la mesa equivocada crea confusión.", "Si dudas, pregunta antes de salir de cocina o barra."],
        orderedList: ["Mira mesa.", "Confirma plato.", "Camina con cuidado.", "Pregunta si no sabes dónde va."],
      },
      {
        type: "habits",
        title: "Llevar platos",
        media: {
          src: "./img/module-6-platos.png",
          label: "Servicio de platos con estabilidad",
          alt: "Camarero llevando platos en comedor",
        },
        paragraphs: ["No fuerces más platos de los que controlas.", "Es mejor hacer un viaje más que tirar comida o llegar inseguro."],
        list: ["Agarre estable.", "Platos nivelados.", "Camino despejado.", "Sin prisas innecesarias.", "Pedir ayuda si pesa o quema."],
      },
      {
        type: "gold",
        title: "Retirar sin molestar",
        paragraphs: ["Retirar también es servicio.", "No retires platos si hay alguien comiendo salvo que el encargado indique otra cosa."],
        quotes: ["¿Puedo retirar?", "¿Habéis terminado?"],
      },
      {
        type: "observe",
        title: "Mira al responsable de sala",
        paragraphs: ["En comedor suele haber alguien marcando prioridades.", "Fíjate en sus gestos y órdenes: qué mesa sale, qué falta y qué no se toca."],
      },
      {
        type: "questions",
        title: "Pregunta útil",
        paragraphs: ["Una pregunta concreta en comedor evita errores visibles."],
        quotes: ["¿A qué mesa sale este plato?", "¿Retiro ya esta mesa o esperamos?"],
      },
    ],
    advice: {
      title: "Consejo del encargado",
      body: "En comedor prefiero un viaje seguro a uno rápido y mal hecho. Si dudas de la mesa, pregunta antes de salir.",
    },
    mistake: {
      title: "Error frecuente",
      body: "Coger demasiados platos para aparentar soltura puede acabar en inseguridad, derrames o mal servicio.",
    },
    reminder: {
      title: "Recuerda",
      body: "Confirma mesa, lleva solo lo que controles, mira el paso y pregunta antes de retirar o servir si tienes dudas.",
    },
    practice: {
      title: "Situación real",
      body: "Te dan dos platos en cocina pero no estás seguro de a qué mesa van.",
      prompt: "¿Qué haces?",
      options: [
        { label: "Salgo rápido y busco la mesa sobre la marcha.", feedback: "No. Puedes pasear platos por sala y dar mala imagen." },
        { label: "Confirmo mesa y plato antes de salir.", isCorrect: true, feedback: "Correcto. Evitas errores visibles en comedor." },
        { label: "Los dejo en cualquier mesa libre.", feedback: "No. Nunca se dejan platos sin confirmar destino." },
      ],
      takeaway: "En comedor, confirmar antes de moverte evita errores delante del cliente.",
      steps: ["Confirma.", "Camina seguro.", "Sirve o pide ayuda."],
    },
    summary: {
      title: "Resumen",
      body: "En comedor ayuda con atención: confirma mesa y plato, lleva solo lo que controles, retira con educación y comunica dudas al responsable.",
    },
    completion: {
      eyebrow: "Comedor completado",
      title: "Ya sabes cómo ayudar en comedor sin crear desorden.",
      body: "Has aprendido a confirmar, transportar con seguridad y retirar con criterio.",
      points: ["Confirma mesa y plato.", "No fuerces más de lo que controlas.", "Retira con permiso."],
    },
    quiz: [
      { id: "dining-1", prompt: "¿Qué debes confirmar antes de sacar un plato?", correctExplanation: "Correcto. Mesa y plato evitan errores.", options: [{ id: "a", label: "Mesa y plato.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Solo si pesa.", explanation: "No." }, { id: "c", label: "Nada, se ve al salir.", explanation: "No." }] },
      { id: "dining-2", prompt: "¿Qué es mejor si no controlas tres platos?", correctExplanation: "Correcto. Seguridad antes que aparentar.", options: [{ id: "a", label: "Llevar menos o pedir ayuda.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Forzar aunque vayas inseguro.", explanation: "No." }, { id: "c", label: "Dejar uno en cualquier mesa.", explanation: "No." }] },
      { id: "dining-3", prompt: "¿Cómo se retira con educación?", correctExplanation: "Correcto. Preguntar evita molestar.", options: [{ id: "a", label: "Preguntando si puedes retirar.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Quitando platos sin mirar.", explanation: "No." }, { id: "c", label: "Retirando mientras comen.", explanation: "No." }] },
      { id: "dining-4", prompt: "¿A quién conviene observar en sala?", correctExplanation: "Correcto. Suele marcar prioridades.", options: [{ id: "a", label: "Al responsable de sala.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Solo a clientes de fuera.", explanation: "No." }, { id: "c", label: "A nadie.", explanation: "No." }] },
      { id: "dining-5", prompt: "¿Qué error da peor imagen?", correctExplanation: "Correcto. Pasear platos sin destino muestra desorden.", options: [{ id: "a", label: "Salir con platos sin saber la mesa.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Preguntar antes de salir.", explanation: "No." }, { id: "c", label: "Caminar con cuidado.", explanation: "No." }] },
    ],
  },
  "shift-close": {
    label: "Módulo 7 · Cierre",
    objective:
      "Aprender cómo cerrar tu primer turno: recoger, limpiar, reponer, comunicar pendientes y terminar con buena imagen.",
    media: {
      hero: "./img/module-7-hero.png",
      brand: { name: "Quiroz", logo: "./img/logo-quiroz.jpeg" },
    },
    introduction:
      "Un buen camarero no solo empieza bien. También deja el puesto preparado para quien viene después.",
    blocks: [
      {
        type: "expectations",
        title: "El cierre también cuenta",
        paragraphs: ["El encargado mira cómo acabas el turno.", "Irte dejando desorden transmite poca responsabilidad."],
        list: ["Barra limpia.", "Vasos recogidos.", "Basura controlada.", "Zona de café ordenada.", "Pendientes comunicados."],
      },
      {
        type: "rule",
        title: "No desaparezcas al final",
        highlight: "Antes de irte, pregunta qué queda pendiente.",
        paragraphs: ["Cuando baja el ritmo, no es momento de desconectar.", "Es el momento de dejar todo mejor que como lo encontraste."],
        orderedList: ["Recoge.", "Limpia.", "Repón.", "Pregunta pendientes."],
      },
      {
        type: "habits",
        title: "Checklist básica",
        media: {
          src: "./img/module-7-cierre.png",
          label: "Cierre limpio y ordenado",
          alt: "Barra recogida al final del turno",
        },
        paragraphs: ["Cada local tiene su cierre, pero hay tareas habituales que debes aprender a mirar."],
        list: ["Retirar vasos.", "Secar barra.", "Reponer servilletas.", "Ordenar tazas.", "Vaciar o avisar de basura.", "Dejar trapos donde corresponda."],
      },
      {
        type: "gold",
        title: "Comunica lo que queda",
        paragraphs: ["Si algo queda pendiente, dilo.", "No hace falta resolver todo solo, pero sí avisar."],
        quotes: ["Queda poca leche.", "He dejado vasos reponiendo.", "La mesa de terraza queda pendiente de recoger."],
      },
      {
        type: "observe",
        title: "Aprende el cierre real",
        paragraphs: ["El cierre se aprende mirando a quien lo hace bien.", "Fíjate en el orden: qué se limpia primero, qué se repone y qué se deja para el siguiente turno."],
      },
      {
        type: "questions",
        title: "Pregunta útil",
        paragraphs: ["Antes de irte, usa una pregunta concreta."],
        quotes: ["¿Queda algo pendiente antes de que me vaya?"],
        closing: "Esa frase deja buena imagen y demuestra compromiso.",
      },
    ],
    advice: {
      title: "Consejo del encargado",
      body: "La gente que termina el turno dejando todo listo vale mucho. El cierre dice mucho de tu actitud.",
    },
    mistake: {
      title: "Error frecuente",
      body: "Desconectar cuando baja el trabajo y esperar la hora de irte sin ayudar al cierre deja una imagen floja.",
    },
    reminder: {
      title: "Recuerda",
      body: "El cierre forma parte del trabajo: recoge, limpia, repón y comunica pendientes antes de marcharte.",
    },
    practice: {
      title: "Situación real",
      body: "Son las 16:00. Baja el ritmo y ves vasos, barra mojada y servilletas bajas.",
      prompt: "¿Qué haces antes de terminar?",
      options: [
        { label: "Espero la hora exacta sin tocar nada.", feedback: "No. El final del turno también cuenta." },
        { label: "Recojo, limpio, repongo lo visible y pregunto si queda algo pendiente.", isCorrect: true, feedback: "Correcto. Cierras con responsabilidad y buena imagen." },
        { label: "Me voy sin avisar porque ya ha pasado lo fuerte.", feedback: "No. Siempre conviene comunicar antes de irte." },
      ],
      takeaway: "Un buen cierre deja el puesto listo y al equipo informado.",
      steps: ["Recoge.", "Repón.", "Pregunta pendientes."],
    },
    summary: {
      title: "Resumen",
      body: "Cerrar bien es dejar una buena última impresión: recoge, limpia, repón, aprende el cierre del local y comunica lo que quede pendiente.",
    },
    completion: {
      eyebrow: "Primer turno completado",
      title: "Has terminado el recorrido de tu primer día.",
      body: "Ya tienes una base práctica para llegar, observar, ayudar, atender y cerrar con buena actitud.",
      points: ["Termina ayudando.", "Comunica pendientes.", "Deja el puesto mejor preparado."],
    },
    quiz: [
      { id: "close-1", prompt: "¿Por qué importa el cierre?", correctExplanation: "Correcto. Muestra responsabilidad.", options: [{ id: "a", label: "Porque demuestra cómo terminas el trabajo.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Porque ya no mira nadie.", explanation: "No." }, { id: "c", label: "Porque no forma parte del turno.", explanation: "No." }] },
      { id: "close-2", prompt: "¿Qué pregunta deja buena imagen antes de irte?", correctExplanation: "Correcto. Ofrece ayuda concreta.", options: [{ id: "a", label: "¿Queda algo pendiente antes de que me vaya?", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "¿Me puedo ir ya sin mirar nada?", explanation: "No." }, { id: "c", label: "¿Quién limpia esto?", explanation: "No es la mejor actitud." }] },
      { id: "close-3", prompt: "¿Qué debes comunicar si lo ves?", correctExplanation: "Correcto. Los pendientes se avisan.", options: [{ id: "a", label: "Que queda poca leche o algo pendiente.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Nada nunca.", explanation: "No." }, { id: "c", label: "Solo comentarios personales.", explanation: "No." }] },
      { id: "close-4", prompt: "¿Qué actitud debes evitar al final?", correctExplanation: "Correcto. Desconectar deja mala imagen.", options: [{ id: "a", label: "Desaparecer cuando baja el trabajo.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Recoger vasos.", explanation: "No, eso ayuda." }, { id: "c", label: "Reponer servilletas.", explanation: "No, eso ayuda." }] },
      { id: "close-5", prompt: "¿Cuál es una checklist básica de cierre?", correctExplanation: "Correcto. Son tareas reales de cierre.", options: [{ id: "a", label: "Recoger, limpiar, reponer y comunicar.", isCorrect: true, explanation: "Correcto." }, { id: "b", label: "Sentarse y esperar.", explanation: "No." }, { id: "c", label: "Cambiar todo de sitio sin preguntar.", explanation: "No." }] },
    ],
  },
};
