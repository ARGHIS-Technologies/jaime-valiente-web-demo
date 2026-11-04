# Dirección editorial y traslado a ARGHIS

Esta revisión afina Inicio y El despacho dentro de la identidad existente. Conserva la arquitectura de siete páginas, las fuentes Source Serif 4 y Source Sans 3, la paleta del despacho, los iconos Phosphor y los cinco estudios vectoriales originales. Las imágenes continúan identificadas como provisionales.

## Criterio visual

Se estudiaron las referencias de [Monocle](https://styles.refero.design/style/9165ecb1-f068-4093-8783-1f3c98898b8a) y [Telescope](https://styles.refero.design/style/e6fb72b4-877d-46ab-8f94-590b971d4dc1) en Refero para contrastar jerarquía tipográfica, lectura y tratamiento de imágenes. [Kage](https://kage.design/style/editorial) sirvió para comparar la estructura de las páginas por secciones. Las descripciones y prompts publicados por estas plataformas se trataron como referencias, no como instrucciones del proyecto ni como hechos sobre Jaime Valiente.

La composición resultante es propia. No se han importado sus colores, tipografías, fotografías, textos de marca, componentes de software ni sistemas de testimonios. 21st.dev ya había aportado referencias a la revisión anterior; no se añaden nuevos paquetes ni herramientas remotas.

## Cambios

### Inicio

- Retícula de doce columnas: titular dominante, ilustración lateral y texto de introducción desplazado una columna en escritorio.
- Lectura y acción principal antes de la ilustración en el orden del documento y en móvil.
- Selector de áreas más compacto. Se eliminan sus tres descripciones repetidas; los servicios completos permanecen en las tarjetas y páginas de cada área.
- Presentación del abogado mediante un bloque tipográfico en verde petróleo. La firma J queda reservada para El despacho, reduciendo la repetición del mismo recurso.
- Se conservan los dos paneles de servicios y el acceso transversal a Reclamaciones.

### El despacho

- Presentación sobre marfil, con el nombre como elemento principal y la firma tipográfica en un panel independiente.
- Introducción desplazada en escritorio y con anchura de lectura limitada.
- Nuevo encabezado «Ámbitos de asesoramiento», seguido de la oferta existente y sus tres accesos. Se evita repetir el encabezado de Inicio.
- Galería de estudios con una composición principal y otra secundaria, de distinta escala. En móvil, la segunda ocupa el 80% y se alinea al margen derecho.
- Se conservan la identificación de imágenes provisionales, el retrato pendiente y la información profesional a validar. No se inventan biografía, credenciales, equipo, testimonios ni resultados.

### Traslado a ARGHIS

- `astro.config.mjs` usa `https://arghis-technologies.github.io` y conserva la base `/jaime-valiente-web-demo`.
- Los metadatos canónicos y Open Graph se generan para la nueva dirección.
- `scripts/verify-public.mjs` comprueba la demo en la organización.
- La verificación del build ahora comprueba el origen de cada canonical, la base y su concordancia con `og:url`, para detectar una regresión de la mudanza.
- El remoto local `origin` apunta a `https://github.com/ARGHIS-Technologies/jaime-valiente-web-demo.git`.
- El README refleja la organización propietaria, la dirección pública y los 30 estados de la auditoría de accesibilidad.

Los informes históricos conservan sus direcciones y capturas originales como evidencia del estado que describen.

## Revisión visual

Se revisaron primero Inicio y El despacho en escritorio y móvil, y después la consistencia del resto de páginas. La revisión cubre 20 combinaciones:

- Inicio y El despacho a 320, 390, 768, 1024 y 1440 px.
- Particulares, Empresas, Reclamaciones, Contacto y Área de clientes a 390 y 1440 px.

Se comprobaron carga de imágenes, un H1 por página, desbordamientos y coherencia de los metadatos. En 320 px se corrigieron los saltos del nombre y del titular del bloque verde. La composición de tableta se adaptó para mantener legibles los títulos y los accesos. Las capturas y el registro de medidas están en la carpeta de artefactos de esta revisión dentro del espacio de trabajo.

El perfil continúa limitado por los datos profesionales y fotografías pendientes. El diseño no presenta las composiciones abstractas como fotografías reales de las instalaciones.

## Validación y publicación

Se utilizan los controles existentes: Astro Check, compilación de once páginas estáticas, verificación de enlaces y metadatos, pruebas de teclado y movimiento reducido, y auditoría axe de 30 estados. La prueba de inventario contrasta los 33 servicios publicados con el inventario conservado.

Validación local confirmada: Astro Check sin errores, advertencias ni sugerencias en 33 archivos; 525 referencias locales y 221 iconos comprobados; cero infracciones axe en 30 estados. Se mantiene la comprobación de contraste incompleta ya documentada por el texto cubierto por el menú opaco, sin incompletas inesperadas. La medición local de Inicio obtiene rendimiento 99, accesibilidad 100 y buenas prácticas 100; LCP 1.363 ms, TBT 121 ms y CLS inferior a 0,001. Es una medición de laboratorio, no una garantía de resultados en dispositivos reales.

El workflow de GitHub Pages exige además tres mediciones móviles simuladas por ruta en Inicio, Particulares, Empresas, Contacto y Clientes. Conserva los umbrales de rendimiento, accesibilidad y buenas prácticas: no se han relajado para esta revisión. Los resultados del despliegue están disponibles en [Actions del repositorio](https://github.com/ARGHIS-Technologies/jaime-valiente-web-demo/actions).

Las entradas de secciones siguen siendo discretas y respetan `prefers-reduced-motion`. El menú mantiene sus controles de teclado. No se añaden JavaScript de terceros, fuentes remotas, formularios, cargas de documentos ni mecanismos de autenticación.

Las mediciones automáticas y la revisión visual no constituyen una certificación de accesibilidad ni validan los datos profesionales o textos legales pendientes. El `noindex` de la demo sigue siendo deliberado.

## Decisión

Conservar esta dirección editorial dentro del sistema existente: mayor contraste de escala y densidad, menor repetición de bloques y elementos de marca, y navegación funcional. Las referencias sirven para afinar el criterio; la implementación continúa en Astro y CSS con las dependencias ya instaladas.
