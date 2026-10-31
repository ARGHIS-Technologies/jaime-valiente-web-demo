# Lighthouse CI, axe-core y Open Props — revisión 8

31 de octubre de 2026. Integración de las tres referencias solicitadas y corrección de los hallazgos comprobados.

## Resultado y alcance

Se incorpora un control reproducible de rendimiento y accesibilidad antes de publicar. La primera auditoría encontró dos clases de problema que las comprobaciones básicas anteriores no habían detectado. Se corrigen sin cambiar la oferta, las páginas, las fuentes o la paleta. El acabado visual conserva su composición; el movimiento comparte ahora dos curvas seleccionadas de Open Props.

Las herramientas de auditoría se ejecutan sobre una copia aislada de `dist/`, con el subdirectorio real de GitHub Pages. No se incluyen en la web del visitante ni utilizan su navegador, sesiones o datos. No se contacta mediante teléfono, correo o WhatsApp ni se reciben documentos.

## Aplicación de cada referencia

| Recurso | Aplicación concreta |
| --- | --- |
| Lighthouse CI | CLI 0.15.1 con Lighthouse 13.6.0, fijado y probado con Node 24. Inicio, Particulares, Empresas, Contacto y Clientes se miden tres veces en móvil simulado; se utilizan medianas. |
| axe-core | Motor 4.14.0, con reglas WCAG 2 A/AA, 2.1 A/AA, 2.2 AA y buenas prácticas. Once rutas en 390 y 1440 px, más menú abierto y datos profesionales desplegados: 24 estados. |
| Open Props | Dos curvas del repositorio oficial, fijadas al commit `f39ab7c377a0e047f930982e3611bbc95254a260`: `ease-3` para interfaz y `ease-out-3` para entradas. Se guardan como variables locales en `tokens.css`, con licencia MIT incluida. |
| Adaptador de auditoría | Puppeteer Core 25.16.0 conecta el hook de axe con el Chrome aislado de Lighthouse CI. No descarga un navegador ni añade código a las páginas. |

Se evita instalar el catálogo completo de Open Props. No se incorporan sombras, colores, efectos elásticos o escalas tipográficas que alteren la dirección aprobada. Enlaces, botones, desplegable y menú comparten las curvas; las duraciones y la preferencia de movimiento reducido se conservan. El menú existente lee los valores CSS para sus animaciones nativas.

## Hallazgos y correcciones

**Nombre accesible de la marca.** La etiqueta ARIA escrita a mano no coincidía exactamente con el texto visible compuesto en dos líneas. Se retira esa sustitución y se utiliza el contenido nativo del enlace, con «Inicio» como aclaración solo para tecnología de asistencia. Se aplica en cabecera y pie. El nombre profesional visible permanece intacto.

**Aviso de demo fuera de regiones.** La franja superior quedaba fuera de los landmarks. Ahora es una región con el nombre «Demostración de diseño». Se mantiene su posición fuera de la cabecera pegajosa, conservando altura y destinos de navegación.

La [medición inicial](baseline.json) y el [detalle axe anterior](baseline-axe.json) conservan ambas clases de hallazgo. Se realizó después una revisión local de los 24 estados con cero infracciones automáticas: [resumen](local-summary.json) y [detalle](local-axe.json).

**Un resultado incompleto revisado manualmente.** Con el menú abierto, axe no puede deducir el fondo de ocho elementos de Inicio tapados por el panel opaco. Se conserva ese resultado completo. El estado normal pasa la comprobación; se revisaron el menú visible, el texto que cubre y el regreso por Tab, que cierra el panel y conserva el nuevo foco. La excepción se limita exactamente a ese estado, regla y motivo; cualquier incompleto distinto bloquea la publicación para revisión.

Un resultado Lighthouse de accesibilidad 100 no detectaba por sí solo el desacuerdo del nombre accesible. Por eso axe mantiene su propia puerta de calidad independiente de la puntuación.

## Controles antes de publicar

El workflow construye, verifica referencias, movimiento y licencias, y ejecuta las auditorías. Exige:

- Cero infracciones automáticas de axe y ningún resultado incompleto nuevo sin revisar.
- Mediana Lighthouse de rendimiento ≥90, accesibilidad automática 100 y buenas prácticas ≥95.
- LCP ≤2.500 ms, CLS ≤0,1 y TBT ≤200 ms, por mediana de tres mediciones.
- Auditoría npm sin avisos de severidad alta o crítica.

El trabajo de Pages depende de que terminen correctamente estos controles. Los informes completos se guardan como artefacto `quality-reports` de GitHub Actions durante 14 días. No se utiliza un servicio de informes externo ni almacenamiento público temporal de Lighthouse.

SEO se informa sin ocultar sus resultados. La demo conserva deliberadamente `noindex`, comprobado por el verificador del build, por lo que no se exige una puntuación SEO de producción ni se retira esa protección para elevarla.

## Dependencias

La instalación inicial del auditor incorporaba dependencias con avisos conocidos. Se fijan actualizaciones compatibles de Lighthouse, Chrome Launcher, tmp, uuid, basic-ftp, zod y glob; se comprobaron su carga y el recorrido completo de auditoría. El lockfile conserva las resoluciones exactas. La última consulta npm devuelve cero vulnerabilidades comunicadas en todas las dependencias de esta revisión. [Registro](dependencias.json). Esto no equivale a una auditoría de penetración.

Los `overrides` y la combinación de versiones forman parte del mantenimiento: deben revisarse al actualizar el auditor, sin aplicar cambios forzados de versiones automáticamente. Las dependencias de producción de Astro y las fuentes no cambian.

## Comprobación funcional y visual

Astro / TypeScript: 30 archivos, cero errores, advertencias o sugerencias. Build: once páginas. Se conservan las 481 referencias comprobadas y los 217 SVG decorativos, así como idioma, H1, precargas, identificación de demo y ausencia de formularios/Apps Script. Las licencias de Phosphor y Open Props se verifican en la salida. [Build](build.json).

La regresión del menú y el movimiento reducido ejecuta los scripts reales en contexto controlado. Se añade la comprobación de que el menú toma la curva de entrada desde las variables CSS. [Resultado](movimiento.json).

Se revisaron Inicio y Contacto en escritorio, Contacto en móvil y el menú abierto. Inicio se volvió a comprobar en 320, 390, 768, 1024 y 1440 px, sin desbordamientos respecto al ancho disponible. Las curvas efectivas se leyeron en el navegador. [Registro visual y manual](revision-visual.json). Capturas: [Inicio](inicio-1440.png), [Contacto escritorio](contacto-1440.png), [Contacto móvil](contacto-390.png), [menú](menu-390.png).

## Límites de las mediciones

Lighthouse mide un build estático local con red y dispositivo simulados. No son datos de usuarios reales de GitHub Pages ni mediciones de INP de campo. TBT no se presenta como INP. Se realizan tres repeticiones para reducir variación, sin atribuir precisión absoluta a los tiempos.

Axe detecta una parte de los problemas de accesibilidad. La revisión no incluye un lector de pantalla real, Safari o dispositivos físicos. El movimiento reducido se prueba en scripts y CSS, sin atribuir una prueba del ajuste real del sistema operativo. La comprobación manual del menú se conserva con su alcance explícito.

La demo sigue pendiente de aprobación del despacho y de los datos ya documentados para una web definitiva. No se modifican el dominio real, DNS, correo o sistema documental.

## Resultado definitivo en GitHub Actions

Aplicación `66c9497adf1825e5cd28fb727942de994a89d476`. [Actions 41232166276](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41232166276) completó las puertas de calidad y el despliegue. El informe se recuperó del artefacto de esa ejecución y confirma el mismo commit: [procedencia](ci-artifact.json), [resumen completo](ci-summary.json), [axe](ci-axe.json) y [pasos](despliegue.json).

Medianas de **tres ejecuciones por página**, Lighthouse 13.6.0, móvil simulado sobre el build local del runner:

| Página | Rendimiento | Accesibilidad automática | Buenas prácticas | LCP estimado |
| --- | ---: | ---: | ---: | ---: |
| Inicio | 100 | 100 | 100 | 755 ms |
| Particulares | 100 | 100 | 100 | 756 ms |
| Empresas | 100 | 100 | 100 | 755 ms |
| Contacto | 100 | 100 | 100 | 756 ms |
| Clientes | 100 | 100 | 100 | 756 ms |

Las medianas de TBT son 0 ms y las de CLS se sitúan entre 0 y 0,000055. SEO obtiene 63 en las cinco páginas y mantiene el aviso de bloqueo de indexación por `noindex`; es una condición intencional de esta demo y no se oculta ni se presenta como SEO de producción.

Axe-core confirma **24 estados, cero infracciones, un grupo incompleto ya revisado por superposición del menú y cero incompletos inesperados**. Los controles de npm, tipos, build, referencias y movimiento también terminan correctamente.

Los 39 archivos de la publicación devuelven HTTP 200 y coinciden por SHA256 con el build revisado; la ruta inexistente conserva HTTP 404 y la página personalizada. [Verificación pública](publicacion.json).

Se recargó la demo pública para comprobar las curvas de Open Props, el nombre nativo de la marca, la región de demostración, `noindex` y el cierre del menú con Escape y retorno de foco. Sin incidencias nuevas en el registro consultado. [Recorrido público](navegacion-publica.json) y [captura](publico-inicio.png).

El JavaScript integrado pasa de 2.163 a 2.290 bytes por la lectura de las dos variables del menú. No se añade un framework o biblioteca de interfaz en producción. Los commits posteriores que solo guardan documentación no cambian la aplicación identificada arriba.
