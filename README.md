# Curso Camarero Quiroz

Plataforma web de formación práctica para el primer turno de un camarero en Pamplona/Navarra.

## Ver en local

Ejecuta:

```powershell
"C:\Program Files\nodejs\node.exe" server.mjs
```

Abre:

```text
http://127.0.0.1:5173/
```

Acceso directo preparado:

```text
start-primer-turno.bat
```

## Recorrido actual

- 08:00 · Llegas al bar
- 08:15 · Preparas la barra
- 09:00 · Primer cliente
- 09:30 · Cafés
- 11:00 · Terraza
- 13:30 · Comedor
- 16:00 · Fin del turno

## Funcionalidades actuales

- Línea temporal con módulos bloqueados hasta completar el anterior.
- Cinco preguntas por módulo y feedback de respuestas.
- Examen final de 10 preguntas con nota mínima del 80%.
- Progreso, intentos y perfil guardados en el navegador.
- Certificado con código único e impresión o guardado como PDF desde el navegador.
- Navegación con rutas compartibles e historial del navegador.

La autenticación entre dispositivos y el pago online quedan fuera de esta versión para mantenerla compatible con GitHub Pages sin conectar todavía un backend.
