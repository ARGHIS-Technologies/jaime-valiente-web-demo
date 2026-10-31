# Lectura y navegación por áreas — revisión 9

31 de octubre de 2026. Cambios autorizados sobre la demo personal de mmlab-dev.

## Resultado

Se suprimen seis introducciones que repetían los servicios ya enumerados en Particulares y Empresas. Se acortan las cabeceras y los textos de Reclamaciones, manteniendo sus cuatro ámbitos, los procedimientos monitorios y las condiciones de valoración. Las 15 entradas de Particulares y las 18 de Empresas conservan literalmente su denominación. No cambia la arquitectura de siete páginas ni se añaden servicios o credenciales.

En móvil, Particulares y Empresas incorporan un índice plegable que permanece bajo la cabecera mientras se recorren sus servicios. La superficie verde y las líneas reutilizan la identidad existente; el chevron pertenece a la selección local de Phosphor. En escritorio se conserva el índice lateral.

## Interacción y accesibilidad

- HTML nativo `details` y `summary`, sin dependencias nuevas. Con JavaScript desactivado, el índice sigue siendo plegable y los enlaces funcionan; permanece en el flujo normal para no tapar el destino.
- Con la mejora activa, el índice se cierra antes del salto nativo y el destino recibe foco. Una separación única de 154 px deja visibles el título y el foco bajo la cabecera y el índice compacto.
- Escape cierra y devuelve foco al control. La apertura del menú principal cierra el índice. No se introduce bloqueo de teclado.
- Giro del chevron de 150 ms con la curva existente; transición eliminada con `prefers-reduced-motion`.
- Los avisos de primer contacto, la ausencia de garantía y la identificación de demo se conservan. Sin formularios, recepción documental ni conexión al envío por Google Apps Script.

## Revisión visual y pruebas ejecutadas

Inicio y Empresas revisados en escritorio y móvil. Las tres páginas interiores modificadas se recorrieron en 320, 390, 768, 1024 y 1440 px, sin desbordamiento horizontal. Se inspeccionaron las capturas completas de Particulares, Empresas y Reclamaciones y la lectura estrecha de Particulares. Las listas sustituyen las explicaciones duplicadas y conservan el ritmo de separadores y las medidas de lectura.

Los seis destinos móviles se comprobaron en el navegador: índice cerrado, foco en la sección y título visible. También se verificaron entrada por URL con fragmento, Enter/Tab, convivencia con el menú principal y acceso a Contacto con el índice abierto. Evidencias: [adaptación](revision-responsive.json), [destinos](navegacion-verificada.json), [contenido anterior](contenido-anterior.json).

TypeScript/Astro: cero errores, advertencias o sugerencias. Build: once páginas; 487 referencias internas y 219 SVG decorativos verificados. Las pruebas existentes de movimiento y teclado siguen pasando. El control de CI comprueba además la conservación de los 33 servicios.

La auditoría local con axe-core revisa 28 estados de once rutas, incluidos los dos índices abiertos y sus destinos. Cero infracciones y cero incompletos inesperados. Persiste el incompleto conocido del contraste de texto cubierto por el menú opaco de Inicio, documentado y revisado en la revisión 8. Se añaden comprobaciones del foco, posición del destino, Escape, movimiento reducido emulado y navegación sin JavaScript. [Resultado local](local-summary.json) · [evidencia axe local](local-axe.json).

La prueba de movimiento reducido de este índice sí utiliza emulación en el navegador aislado de auditoría; las pruebas anteriores del menú y entrada de secciones siguen usando su contexto de ejecución controlado. No se atribuyen pruebas con la preferencia física del sistema, Safari, Firefox ni dispositivos físicos.

## Capturas

- [Empresas, escritorio](empresas-escritorio.png) y [móvil](empresas-movil.png).
- [Particulares: destino móvil con índice compacto](particulares-movil-destino.png), [índice abierto durante la lectura](particulares-movil-indice.png) y [320 px, página completa](particulares-320.png).
- Páginas completas: [Particulares](particulares-completa.png), [Empresas](empresas-completa.png), [Reclamaciones](reclamaciones-completa.png).
- [Inicio, escritorio](inicio-escritorio.png), [Inicio, móvil](inicio-movil.png) y [Reclamaciones, móvil](reclamaciones-movil.png).

## Alcance pendiente

No se han realizado pruebas con usuarios reales. Evaluar con particulares, empresas y clientes existentes sigue siendo un paso posterior; las comprobaciones internas no demuestran una mejora de conversión. Continúan las validaciones profesionales, legales y operativas ya registradas en [PENDIENTES](../PENDIENTES.md), antes de sustituir la web real.

## Publicación y mediciones finales

Aplicación `2685c51e8ff395940eac4bf8141232c7974eb89e`, publicada con éxito por [Actions 41234155673](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41234155673). [Resumen CI](ci-summary.json) · [axe CI](ci-axe.json) · [identificación del artefacto](ci-artifact.json). No se cambió la configuración de las puertas de calidad ni se ampliaron las excepciones de accesibilidad.

| Página | Ejecuciones | Rendimiento | Accesibilidad automática | Buenas prácticas | LCP mediana | TBT mediana | CLS mediana |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Inicio | 3 | 100 | 100 | 100 | 754 ms | 0 ms | 0.000054 |
| Particulares | 3 | 100 | 100 | 100 | 753 ms | 0 ms | 0.000032 |
| Empresas | 3 | 100 | 100 | 100 | 754 ms | 0 ms | 0.000064 |
| Contacto | 3 | 100 | 100 | 100 | 753 ms | 0 ms | 0.000000 |
| Clientes | 3 | 100 | 100 | 100 | 755 ms | 0 ms | 0.000028 |

Son mediciones de laboratorio con móvil simulado; no son datos de usuarios reales ni una certificación WCAG. SEO 63 en las cinco páginas por el bloqueo de indexación intencional de la demo. Axe: 28 estados, cero infracciones, un incompleto conocido revisado y cero nuevos incompletos.

Los 39 archivos públicos devuelven HTTP 200 y coinciden por SHA256 con el build. La ruta inexistente devuelve la 404 personalizada. [Verificación pública](publicacion.json). En la URL publicada se comprobaron la nueva introducción, la apertura del índice y los destinos Familia y Contable/fiscal con foco correcto. [Índice público](publico-indice-movil.png) · [destino público](publico-destino-movil.png).
