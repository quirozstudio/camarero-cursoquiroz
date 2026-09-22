export const finalExamTemplates = [
  {
    id: "waiter-pamplona-final",
    courseId: "waiter-pamplona-basics",
    regionId: "pamplona-navarra",
    minScore: 80,
    questionPool: [
      {
        id: "final-1",
        prompt: "Llegas al local y el equipo está ocupado. ¿Cuál es la mejor primera actitud?",
        correctExplanation: "Observar, detectar una tarea sencilla y preguntar demuestra iniciativa con criterio.",
        options: [
          { id: "a", label: "Esperar quieto hasta recibir una orden.", explanation: "Transmite pasividad." },
          { id: "b", label: "Observar, ayudar en algo sencillo y preguntar.", isCorrect: true, explanation: "Correcto." },
          { id: "c", label: "Cambiar la organización de la barra sin avisar.", explanation: "La iniciativa también necesita criterio." },
        ],
      },
      {
        id: "final-2",
        prompt: "¿Qué conviene hacer antes de mover material importante?",
        correctExplanation: "Primero observa cómo trabaja el local y pregunta antes de cambiar una organización establecida.",
        options: [
          { id: "a", label: "Preguntar y entender cómo se trabaja allí.", isCorrect: true, explanation: "Correcto." },
          { id: "b", label: "Colocarlo todo a tu manera.", explanation: "Puedes romper el flujo del equipo." },
          { id: "c", label: "No tocar nada nunca.", explanation: "Sí puedes ayudar en tareas sencillas." },
        ],
      },
      {
        id: "final-3",
        prompt: "Un cliente te pide algo que no has entendido bien. ¿Qué haces?",
        correctExplanation: "Pedir que lo repita y confirmar evita errores y transmite seguridad.",
        options: [
          { id: "a", label: "Preparar lo que crees que ha pedido.", explanation: "Puede provocar una devolución." },
          { id: "b", label: "Pedir que lo repita y confirmarlo.", isCorrect: true, explanation: "Correcto." },
          { id: "c", label: "Ignorarlo hasta que vuelva a llamar.", explanation: "El cliente debe sentirse atendido." },
        ],
      },
      {
        id: "final-4",
        prompt: "¿Qué ayuda realmente antes del servicio de cafés?",
        correctExplanation: "Preparar tazas, cucharillas, azúcar y una zona limpia facilita el trabajo del equipo.",
        options: [
          { id: "a", label: "Tazas, cucharillas, azúcar y zona limpia.", isCorrect: true, explanation: "Correcto." },
          { id: "b", label: "Esperar a que empiecen los pedidos.", explanation: "Puedes anticipar tareas sencillas." },
          { id: "c", label: "Cambiar la configuración de la máquina.", explanation: "Eso debe hacerlo quien conoce el equipo." },
        ],
      },
      {
        id: "final-5",
        prompt: "¿Qué significa evitar viajes vacíos en terraza?",
        correctExplanation: "Aprovechar cada trayecto para llevar o recoger algo reduce pasos y mejora el ritmo.",
        options: [
          { id: "a", label: "Correr siempre que cruces la sala.", explanation: "La velocidad no sustituye al orden." },
          { id: "b", label: "Intentar llevar o recoger algo en cada trayecto.", isCorrect: true, explanation: "Correcto." },
          { id: "c", label: "No salir a terraza hasta que te llamen.", explanation: "Hay que observar y comunicar." },
        ],
      },
      {
        id: "final-6",
        prompt: "Ves una mesa nueva en terraza. ¿Qué respuesta ayuda al equipo?",
        correctExplanation: "Saludar o avisar al compañero evita que una mesa quede invisible.",
        options: [
          { id: "a", label: "Ignorarla hasta que llame.", explanation: "Puede sentirse desatendida." },
          { id: "b", label: "Saludar o avisar al compañero.", isCorrect: true, explanation: "Correcto." },
          { id: "c", label: "Recoger otra mesa sin decir nada.", explanation: "La comunicación es importante." },
        ],
      },
      {
        id: "final-7",
        prompt: "¿Qué debes confirmar antes de sacar un plato al comedor?",
        correctExplanation: "Confirmar mesa y plato evita errores visibles en sala.",
        options: [
          { id: "a", label: "Mesa y plato.", isCorrect: true, explanation: "Correcto." },
          { id: "b", label: "Nada, ya lo mirarás al llegar.", explanation: "Eso genera inseguridad y errores." },
          { id: "c", label: "Solo si el plato pesa mucho.", explanation: "Siempre hay que conocer el destino." },
        ],
      },
      {
        id: "final-8",
        prompt: "Si no controlas tres platos, ¿qué decisión es más profesional?",
        correctExplanation: "La seguridad y pedir ayuda importan más que aparentar experiencia.",
        options: [
          { id: "a", label: "Forzar aunque vayas inseguro.", explanation: "Puedes provocar una caída." },
          { id: "b", label: "Llevar menos o pedir ayuda.", isCorrect: true, explanation: "Correcto." },
          { id: "c", label: "Dejar un plato en cualquier mesa.", explanation: "Nunca se hace eso." },
        ],
      },
      {
        id: "final-9",
        prompt: "¿Qué pregunta deja buena imagen al terminar el turno?",
        correctExplanation: "Ofrecer ayuda concreta antes de irte demuestra responsabilidad.",
        options: [
          { id: "a", label: "¿Me puedo ir ya sin mirar nada?", explanation: "Desconecta demasiado pronto." },
          { id: "b", label: "¿Queda algo pendiente antes de que me vaya?", isCorrect: true, explanation: "Correcto." },
          { id: "c", label: "¿Quién limpia esto?", explanation: "No es la mejor forma de ofrecer ayuda." },
        ],
      },
      {
        id: "final-10",
        prompt: "¿Cuál es un cierre básico y responsable?",
        correctExplanation: "Recoger, limpiar, reponer y comunicar pendientes resume un buen cierre.",
        options: [
          { id: "a", label: "Recoger, limpiar, reponer y comunicar.", isCorrect: true, explanation: "Correcto." },
          { id: "b", label: "Sentarse cuando baja el trabajo.", explanation: "El final del turno también cuenta." },
          { id: "c", label: "Cambiarlo todo de sitio sin preguntar.", explanation: "Puede desorganizar al equipo." },
        ],
      },
    ],
    certificateTemplate: "professional-regional-v1",
    verification: {
      enabled: false,
      futurePublicUrlPattern: "/certificados/verificar/{code}",
    },
  },
];
