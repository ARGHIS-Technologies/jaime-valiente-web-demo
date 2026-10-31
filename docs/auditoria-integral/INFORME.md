# Auditoría integral y correcciones — revisión 4

31 de octubre de 2026. Jaime Valiente Alemán · Abogado.

[Demo](https://mmlab-dev.github.io/jaime-valiente-web-demo/) · [Repositorio personal](https://github.com/mmlab-dev/jaime-valiente-web-demo)

## Dictamen

La dirección visual de la revisión 3 era aprovechable. Su informe acreditaba construcción, contraste y recorridos básicos, pero no comprobaba toda la salida del menú con teclado, la posición y el foco de los destinos de navegación, ni la densidad real de Inicio en móvil. La nueva auditoría encontró fallos en esos puntos y los corrigió, manteniendo las siete páginas, la paleta y la oferta.

El resultado se entrega como **demo para aprobación del diseño**. La publicación definitiva sigue dependiendo de los datos profesionales, las condiciones de atención y los textos legales que debe ratificar el despacho. No se atribuye una certificación integral de accesibilidad o seguridad.

## Qué se ha contrastado

Se revisaron el informe de dirección de arte, el plan de referencias y los pendientes; se recorrió la demo pública anterior; se examinó el código; se midieron posiciones, foco y dimensiones; se comprobaron dependencias de producción y se comparó el inventario antes/después.

La solicitud de lectura de la web original `jaimevalienteabogado.es` no pudo completarse con las herramientas disponibles. Esto no demuestra que la web esté caída. Se conserva la base de contenido del proyecto y no se ratifica su vigencia u operatividad. [Registro](fuente-publica.json).

## Hallazgos y resolución

| Prioridad | Hallazgo comprobado | Corrección y estado |
| --- | --- | --- |
| Alta | Al pulsar Tab desde el último enlace del menú, el foco pasaba a «Solicitar consulta» detrás del panel, que seguía abierto. | El menú cierra inmediatamente cuando el foco sale de la cabecera y conserva el nuevo foco. **Cerrado**, probado en navegador y en la regresión automatizada. |
| Media | Se sumaban el espacio de desplazamiento del documento y el del destino: Familia quedaba a unos 210 px, con una cabecera de 79 px. El destino no recibía foco. | Una sola separación para la cabecera y destinos con foco nativo y nombre. Familia queda aproximadamente a 102 px y recibe el foco. **Cerrado**. |
| Alta | En una prueba de Contacto, el foco llegaba al grupo de canales, pero el desplazamiento suave podía conservar en pantalla la dirección desde la que se activaba el enlace. | Los saltos a contenido usan desplazamiento inmediato. Se repitieron Cádiz, Arcos, Servicios y Familia: foco y destino visibles. **Cerrado**. Se mantienen las entradas de sección y las microinteracciones. |
| Media | Inicio dedicaba unos 1.746 px a la guía de servicios en 390; su titular ocupaba cuatro líneas y se repetían resúmenes en el bloque de acceso. | Tipografía móvil más contenida, accesos principales compactos y resúmenes breves. La guía ocupa unos 1.428 px; la entrada pasa de unos 863 a 710 px. **Cerrado**. |
| Media | El despacho mezclaba presentación pública con una lista extensa de instrucciones de validación. | Copy de presentación más directo y un desplegable HTML nativo con el rótulo visible «Demo · Información profesional pendiente». Los datos pendientes siguen disponibles. **Cerrado**, apertura y cierre comprobados con teclado. |
| Baja | Los refinamientos conservaban selectores de elementos eliminados y declaraciones ya sustituidas. | Retirados 69 selectores obsoletos y 166 declaraciones redundantes, respetando orden y condiciones de los estilos. Revisión de las once páginas. **Cerrado**. |
| Baja | Las fuentes esenciales se descubrían mediante el CSS y las llamadas genéricas alternaban «cita» y «consulta». | Dos precargas WOFF2 de las fuentes normales ya utilizadas y acción genérica «Solicitar consulta». Se conservan las acciones específicas de cada asunto. **Cerrado**. |

Evidencia de posiciones, foco y dimensiones: [antes](hallazgos-antes.json), [después](hallazgos-despues.json), [saltos finales](anclas-finales.json). Las capturas están en [antes/](antes/) y [despues/](despues/).

## Contenido e identidad

Se conserva la identidad nominal autorizada, Source Serif 4 y Source Sans 3, marfil, petróleo, carbón y bronce discreto. La mejora de móvil reduce repetición y espacio sin cambiar el número de páginas o las especialidades.

El inventario de la demo publicada se registró antes de editar y se comparó con el resultado: **15 servicios listados de Particulares, 18 de Empresas y los cuatro ámbitos de Reclamaciones conservan títulos, introducciones y elementos**. La comparación verifica que no se han perdido servicios respecto a esa base; la vigencia de la oferta debe confirmarla Jaime. [Comparación completa](inventario-verificado.json).

No se han añadido credenciales, trayectoria, testimonios, resultados o servicios. Los resúmenes y el copy editorial revisados son propuestas para aprobación. Se mantiene la composición tipográfica al no disponer de un retrato auténtico autorizado.

El bloque de información profesional pendiente permanece identificado y accesible. El Área de clientes continúa sin autenticación, archivos o expedientes. Los canales de contacto mantienen sus destinos publicados. No se hicieron llamadas ni se enviaron mensajes, correos o documentos. La web real y su sistema documental no se modifican.

## Diseño y navegación

La portada mantiene el contraste de la revisión anterior. En móvil se ven antes las tres rutas principales, seguidas de una guía de especialidades más breve. En El despacho, la presentación gana peso frente al contenido de validación, que puede desplegarse de forma nativa.

El menú se adapta a la altura disponible, con recorrido por sus siete enlaces en 844 × 390 y salida por Tab sin foco oculto. Se mantienen Escape, devolución del foco al botón y cierre exterior. La navegación a fragmentos funciona sin un router cliente ni interceptar enlaces.

La precarga de fuentes y la limpieza de estilos son mejoras de entrega y mantenimiento. No se presentan como una puntuación de rendimiento o una medición de Core Web Vitals.

## Verificaciones ejecutadas

| Comprobación | Resultado y alcance |
| --- | --- |
| Astro / TypeScript | 25 archivos; cero errores, advertencias o sugerencias. |
| Build | Once páginas estáticas, correcto. |
| Recursos y enlaces | 480 referencias comprobadas. Se añaden los fragmentos dentro de la misma página y la comprobación de dos precargas de fuentes. H1, español, noindex, etiqueta demo y ausencia de formularios/Apps Script conservados. [build.json](build.json). |
| Responsive | Once rutas por 320, 390, 768, 1024 y 1440: **55 observaciones**, sin desbordamientos. Capturas de las once páginas en escritorio y móvil. [responsive.json](responsive.json). |
| Pantallas bajas | Comprobaciones adicionales en 390 × 480 y 844 × 390; último enlace visible dentro del menú y salida correcta con Tab. [Hallazgos finales](hallazgos-despues.json). |
| Teclado y foco | Menú completo, salida por Tab, Escape, enlace de salto al contenido, destinos Servicios/Familia/Contacto y desplegable de información profesional. Foco y contenido visible contrastados. |
| Inventario | Comparación de los diez bloques de áreas y los 33 elementos listados, sin diferencias en su contenido de servicios. [inventario-verificado.json](inventario-verificado.json). |
| Contraste | **649 nodos con texto** en las once páginas a 390; mínimo **5,20:1**, sin fallos de los umbrales aplicados de 4,5:1 para texto normal y 3:1 para grande. Fondos CSS y transparencias compuestos; estado normal, desplegable cerrado. [contraste.json](contraste.json). |
| Movimiento y regresión | Scripts reales ejecutados en contexto JS controlado: sin animaciones ni observador con movimiento reducido. Prueba añadida de salida del menú, conservación del foco y ajuste a la altura con movimiento normal y reducido. [movimiento-y-menu.json](movimiento-y-menu.json). |
| Dependencias | `npm audit --omit=dev --json`: cero vulnerabilidades comunicadas para las dependencias de producción en esta ejecución. No equivale a una auditoría de penetración. Sin paquetes nuevos ni cambios en el lockfile. |
| Revisión visual | Inicio y El despacho comprobados antes/después; revisión posterior de las interiores, Contacto, Clientes, legales y 404. Se conserva la dirección visual sin reconstruir el proyecto. |

La revisión se ejecuta en el navegador integrado basado en Chromium. No incluye Safari, dispositivos físicos, un lector de pantalla real, emulación visual de la preferencia del sistema operativo o Lighthouse. Los controles de movimiento reducido se verifican en los scripts y reglas CSS, con ese límite explícito.

## Peso y mantenimiento

| Recurso | Revisión 3 | Revisión 4 |
| --- | ---: | ---: |
| CSS sin comprimir | 49.159 bytes | 41.993 bytes |
| CSS con gzip local | 10.461 bytes | 9.366 bytes |
| JS integrado en Inicio | 1.809 bytes | 2.163 bytes |
| Fuentes WOFF2 | 71.544 bytes | 71.544 bytes |

El CSS baja aproximadamente un **14,6 %** sin comprimir. El pequeño incremento de JavaScript resuelve la salida del menú y su adaptación a la altura. Se mantienen los archivos de fuentes existentes y se precargan dos. No hay imágenes de contenido ni nuevas bibliotecas. [Medidas](peso.json) y [limpieza de estilos](limpieza-css.json).

Las pruebas de regresión del menú y la verificación de salida se ejecutan también en el workflow de publicación. Las capturas viven en documentación y no se incluyen en `dist/`.

## Evidencia visual

[Inicio en móvil: antes/después](comparativa-inicio-movil.jpg) · [El despacho: antes/después](comparativa-despacho.jpg)

## Pendientes que no pueden resolverse con diseño

La titularidad legal, los datos fiscales y de colegiación, la biografía, el retrato autorizado, la vigencia de contactos y direcciones, las condiciones de atención, el copy definitivo y los textos legales siguen sujetos a validación del despacho. Tampoco se presupone que el envío documental actual funcione o esté averiado. [Pendientes](../PENDIENTES.md).

La recomendación es aprobar esta dirección sobre la arquitectura existente y completar esos datos antes de sustituir la web real. La demo conserva su identificación y `noindex`.

## Publicación

Aplicación publicada: `ee1d4ebc7e794ec14a0095393667056b99dffb65`.

[Actions 41214508787](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41214508787) completó build y deploy con éxito, incluyendo tipos, construcción, verificación de salida y regresión de movimiento/menú. [Registro](despliegue.json).

Los 22 archivos públicos coinciden por SHA256 con la salida local y devuelven HTTP 200. Una ruta de prueba inexistente devuelve HTTP 404 con la página personalizada. [Comprobación pública](publicacion.json).

En el navegador público se comprobaron las dos precargas de fuentes y su carga completa; el desplegable de información profesional con teclado; la salida del menú por Tab; Escape y devolución de foco; y el enlace desde Cádiz a los canales de Contacto, con foco y destino visibles bajo la cabecera. Sin nuevas incidencias en el registro consultado durante ese recorrido. [Navegación pública](navegacion-publica.json) y capturas `publico-*.jpg`.

Solo se ha actualizado el repositorio personal de mmlab-dev. Los commits posteriores de documentación no cambian la aplicación identificada arriba. La web real, sus DNS y su canal documental no se modifican.
