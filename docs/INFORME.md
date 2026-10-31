# Informe de entrega y pruebas de la demo

Fecha de revisión: 31 de octubre de 2026, Europe/Madrid.

## Funcionalidades implementadas

Siete páginas navegables con todo el inventario de servicios; cabecera, menú responsive, navegación contextual, acceso secundario a clientes, pie común, tres páginas legales demostrativas y 404. Botones de llamada, correo y WhatsApp con los datos publicados. Tipografía local, diseño editorial, estados de interacción y respeto al movimiento reducido. Sin formularios, analítica, recepción de documentos, backend o autenticación. Etiqueta visible de demo y noindex en todas las páginas.

La portada usa una composición tipográfica; no hay fotografías ni retratos ficticios. El contenido pendiente no se presenta como acreditado. La web y los DNS reales no se modifican.

## Pruebas ejecutadas antes de publicar

| Prueba | Resultado y alcance |
| --- | --- |
| Comprobación Astro y TypeScript | 23 archivos, cero errores, advertencias o sugerencias en la última ejecución. |
| Build de producción | Correcto; 11 documentos HTML estáticos, incluida 404. |
| Verificación del build | 428 referencias internas comprobadas; rutas, recursos y anclas resueltos bajo `/jaime-valiente-web-demo/`; un H1 e idioma español; noindex y aviso demo presentes; sin formularios o integración Apps Script. |
| Responsive | 11 rutas × 5 anchos = 55 observaciones en el navegador integrado Chromium: 320, 390, 768, 1024 y 1440 px. Sin desbordamientos finales. Datos en `pruebas-responsive.json`. |
| Correcciones observadas | Se corrigieron cabecera estrecha a 320, portada a 768 y título 404 a 320; se repitieron las observaciones afectadas. |
| Teclado del menú | Enter abre; Tab llega al primer enlace con foco visible; Escape cierra y devuelve foco al botón. Navegación a Empresas ejecutada mediante teclado. |
| Contraste de texto | Comprobación DOM de 652 nodos de texto visibles en las 11 rutas a 390 px; mínimo final 5,44:1, sin fallos del umbral aplicado. Se corrigió el bronce pequeño. Datos en `pruebas-contraste.json`. |
| Encabezados y etiquetas | Revisión de las páginas y árbol accesible; H1 único, jerarquía de áreas, regiones y controles con nombre. |
| Contactos | Destinos revisados como enlaces `tel:`, `mailto:` y `https://wa.me/34692203087`. No se enviaron mensajes, correos o documentos ni se hicieron llamadas. |
| Consola | Sin advertencias o errores en el registro consultado durante el recorrido local. |
| Revisión visual | Capturas reales de las siete pantallas a 390 y 1440 px, más portada en los cinco anchos y menú móvil; revisión visual y corrección de incidencias. |

Los JSON reflejan el estado final de las observaciones afectadas tras corregir incidencias. Las capturas se guardan en `capturas/`.

## Peso y rendimiento

Salida estática sin imágenes de contenido. CSS global aproximadamente 31,5 KB y fuentes WOFF2 locales 71,5 KB en total, sin comprimir. HTML de las 11 páginas aproximadamente 126,7 KB en total; cada página incluye el pequeño script del menú integrado en su HTML. La cifra de JS externo del verificador es cero porque no se emite un archivo JS separado; no significa ausencia absoluta de JavaScript.

No se ha ejecutado Lighthouse ni medido Core Web Vitals de campo. Los tamaños y la arquitectura ligera son comprobaciones realizadas, no una puntuación de rendimiento certificada.

## Límites y revisión pendiente

Pruebas realizadas en el navegador integrado Chromium con cambio de viewport; no equivalen a dispositivos físicos iOS/Android o Safari/Firefox. No se ha hecho una auditoría WCAG completa, prueba con lector de pantalla, revisión jurídica o verificación de la recepción de los canales. El cálculo de contraste es una revisión básica de texto sobre los fondos sólidos resueltos en el DOM, no de todos los estados gráficos, ampliaciones y combinaciones posibles.

Los datos pendientes de Jaime se detallan en `PENDIENTES.md`; las diferencias frente a la especificación, en `DESVIACIONES.md`. Ninguna de estas pruebas valida el sistema documental actual.

## Publicación

La publicación y sus comprobaciones públicas constan en `PUBLICACION.md`. El repositorio se limita al proyecto de la demo; no incluye credenciales, archivos de clientes, documentos del espacio de trabajo ni referencias de autenticación.

## Revisión adicional del sistema de movimiento

Se evaluaron Starwind, Motion, Astro Components Kit y las transiciones de Astro antes de instalar. No se añadieron paquetes. Inicio y Empresas se reabrieron y capturaron en 1440 y 390 px como páginas piloto. Se comprobó en el DOM la entrada de 360 ms y la ausencia de desbordamiento; después se extendió a las páginas restantes. Se mantienen el menú y las animaciones en APIs nativas, con reglas y lógica para `prefers-reduced-motion`. La preferencia del sistema no se forzó con una herramienta de emulación; la rama de movimiento reducido se revisa en el código, sin atribuirle una prueba de dispositivo no realizada.

Evaluación crítica de los pilotos: jerarquía tipográfica editorial legible, alineación de contenido y cabecera consistente, acciones claras y panel de marca sin retrato ficticio. Se conservó la adaptación específica de tableta que había corregido el panel estrecho. El contraste del bronce textual se mantuvo corregido. El movimiento no oculta el contenido ni retrasa su disponibilidad.

Ver [plan y referencias](PLAN-DISENO.md).

La revisión pública inicial verificó 23 archivos con HTTP 200 y coincidencia SHA256 con el build, además de una ruta inexistente con HTTP 404 y página personalizada. La navegación pública de escritorio y móvil se ejecutó sin errores de consola. El aviso de clientes se expresa en lenguaje de uso, sin nombrar las herramientas que no se integran.
