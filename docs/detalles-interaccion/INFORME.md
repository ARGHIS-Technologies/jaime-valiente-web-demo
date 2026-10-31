# Detalles de interacción — revisión 6

31 de octubre de 2026. Acabado de la [composición editorial](../composicion-editorial/INFORME.md).

## Cambios aplicados

- Las seis flechas de la guía de Inicio acompañan al título de la especialidad en escritorio. En móvil permanecen alineadas al extremo de la fila del título. El título y el resumen siguen formando un único enlace; las flechas son decorativas y se excluyen del nombre accesible.
- Entre 768 y 999 px, las acciones de la entrada usan proporciones propias y comparten fila cuando hay espacio. A 768 px, el grupo pasa de aproximadamente 117 a 48 px de alto. El botón principal mide 48 px de alto y el enlace secundario conserva 44 px de zona de interacción. El contenedor admite salto de fila si hace falta.
- La entrada de Inicio distribuye titular, explicación y acciones en una secuencia CSS de 240 ms por elemento, con comienzos a 20, 55 y 90 ms. Termina a los 330 ms. El índice permanece estable. Se aprovecha la clase del observador existente, sin nuevo JavaScript ni dependencias.

El contenido permanece visible antes de ejecutar JavaScript y sin observador. La secuencia solo está habilitada bajo `prefers-reduced-motion: no-preference`; las reglas de movimiento reducido y la limpieza del observador existentes se mantienen. Las animaciones entre documentos siguen desactivadas por la incidencia documentada en revisiones anteriores.

No cambian colores, fuentes, páginas, contenido, destinos de enlaces, contactos ni funcionalidades. Los cambios de aplicación se limitan a `ServiceGuide.astro`, `refinement.css` y `motion.css`.

## Revisión y verificaciones

Se comparó la demo anterior con la nueva versión en tableta y escritorio, y se revisó Inicio a 320, 390, 768, 1024 y 1440 px. Sin desbordamientos. Se guardaron las cinco capturas completas y dos de Particulares como interior representativa. [Medidas responsive y enlaces](responsive.json).

Los estilos efectivos del navegador confirman las duraciones y los tres retrasos. La primera comprobación detectó que una regla abreviada de animación anulaba el escalonado; se corrigió antes de publicar y se repitió la lectura del navegador. [Animación y foco](animacion-y-foco.json).

El enlace de Familia llega a su sección, recibe el foco y deja el título visible bajo la cabecera. Se comprobó también la continuación por Tab desde el acceso a servicios, con foco visible. Sin advertencias o errores nuevos en el registro consultado. [Navegación](navegacion.json).

- Astro / TypeScript: 25 archivos, cero errores, advertencias o sugerencias.
- Construcción: once páginas estáticas.
- Verificación de salida: 481 referencias, rutas, recursos y fragmentos válidos; se conservan español, un H1 por página, `noindex`, identificación de demo, precargas y ausencia de formularios/Apps Script. [Resultado](build.json).
- Regresión de movimiento y menú: superada sobre los scripts reales en contexto JS controlado; reglas CSS revisadas. Sin animaciones ni observador con movimiento reducido. [Resultado y alcance](movimiento.json).

La comprobación visual se realiza en Chromium integrado. No se añade una prueba en Safari, dispositivos físicos, lector de pantalla o emulación visual del ajuste de movimiento del sistema. Se conserva el resultado de contraste de la revisión 5; estos cambios no alteran los colores. No se atribuye una nueva auditoría WCAG completa.

## Capturas

[Tableta: antes y después](comparativa-tableta.jpg). Las imágenes comparativas solo colocan capturas reales con rótulos. Las capturas completas de Inicio son `inicio-320.png`, `inicio-390.png`, `inicio-768.png`, `inicio-1024.png` e `inicio-1440.png`; los recortes de revisión de servicios conservan el contenido de esas capturas.

## Alcance

Demo para aprobación del diseño. Continúan los [datos pendientes](../PENDIENTES.md), la documentación demostrativa y el envío documental deshabilitado. Se publica exclusivamente en el repositorio personal y GitHub Pages de mmlab-dev. La web real, su dominio, DNS, correo y sistema documental quedan fuera de esta revisión.

## Publicación comprobada

Aplicación `1341beb2cb755385f196d2dbc40f697e8456ed2a`. [Actions 41222893257](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41222893257) completó build y deploy con éxito. [Registro de pasos](despliegue.json).

Los 22 archivos públicos devuelven HTTP 200 y coinciden por SHA256 con la salida local; la ruta inexistente conserva HTTP 404 y la página personalizada. [Verificación](publicacion.json).

Se recargó el navegador después del despliegue para descartar su copia anterior. En la versión nueva se verifican el grupo de acciones de 48 px, las seis flechas junto al título y los retrasos efectivos de 20, 55 y 90 ms. El enlace de Familia conserva foco y destino visible. Sin incidencias nuevas en el registro consultado. [Navegación pública](navegacion-publica.json) y [captura pública en tableta](publico-tableta.png).

Los commits posteriores que solo guardan esta documentación no cambian la aplicación identificada arriba.
