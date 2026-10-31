# Plan de diseño y evaluación de referencias

31 de octubre de 2026. Se incorpora la instrucción adicional del usuario antes de publicar la demo.

## Referencias y decisión previa a instalar

| Referencia | Evaluación para este proyecto | Decisión |
| --- | --- | --- |
| [Starwind UI](https://github.com/starwind-ui/starwind-ui) | Sus primitivas accesibles son relevantes para interacciones complejas. El menú de esta demo es una divulgación sencilla, ya probada con teclado, Escape y devolución de foco. No se necesitan diálogos, selectores o formularios complejos. Incorporar un runtime adicional duplicaría ese comportamiento. | No instalar. Reconsiderar solo ante una necesidad funcional o de accesibilidad concreta que el componente resuelva mejor. |
| [Motion](https://motion.dev/) | Adecuado para gestos, física y composiciones que exceden CSS. La demo solo requiere respuestas de enlaces, menú y entradas discretas; no hay arrastre, gestos complejos o animaciones de estado compartido. | No instalar. CSS y APIs nativas cubren los efectos definidos. |
| [Astro Components Kit](https://astrocomponents.dev/) | Referencia de composición, navegación, espaciado y estados. No se adopta la estética glass, neón ni un bloque prefabricado. Las afirmaciones de accesibilidad y rendimiento de una biblioteca no certifican esta demo. | Referencia visual únicamente. No instalar ni copiar una plantilla. |
| [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/) | La guía distingue las transiciones nativas entre documentos de ClientRouter. No se necesita persistencia de estado ni enrutado SPA para esta web estática. | Revisión 3: navegación MPA convencional, sin ClientRouter ni dependencias. La transición nativa entre documentos se probó y se desactivó tras una incidencia observada al entrar en especialidades; se mantienen las entradas y estados con CSS. |

## Dirección propia

Tipografía Source Serif 4 y Source Sans 3; marca nominal; marfil, petróleo y acento bronce; retícula editorial; jerarquía de servicios y localidades. La personalidad surge del tratamiento del nombre, los titulares, las proporciones y el ritmo entre texto y espacio. Sin retratos ficticios, plantillas jurídicas, bento genérico o componentes decorativos sin función.

## Sistema de movimiento

- Botones y enlaces: 160–200 ms, variación contenida de color y flecha de 4 px; respuesta de presión de 1 px.
- Tarjetas: filas editoriales con respuesta de borde y flecha, sin elevar su posición; foco visible independiente del movimiento.
- Menú: apertura de 180 ms y cierre de 150 ms con APIs nativas; estado ARIA, foco, Escape y enlaces conservados. Panel bajo la cabecera sin desplazar el contenido.
- Secciones: desplazamiento de 8 px y opacidad mínima de 0,94 durante 320 ms, una vez al entrar. IntersectionObserver solo dispara una clase CSS; sin observador o JavaScript, el contenido permanece visible.
- Navegación entre páginas: convencional en la revisión 3, tras reproducir una incidencia de estado con una transición nativa. Sin interceptar enlaces ni depender de un router cliente.
- Movimiento reducido: sin desplazamientos, animaciones o desplazamiento suave; no se inicia el observador y el menú cambia de estado inmediatamente.

## Puertas de calidad antes de publicar

1. Inicio y Empresas son las páginas de referencia ya construidas. Reabrir ambas en 1440 y 390 px con el movimiento propuesto; capturar y revisar tipografía, alineación, ritmo, composición y consistencia.
2. Corregir los defectos observados. La revisión previa detectó y corrigió cabecera a 320, portada a 768, título 404 a 320 y contraste del bronce pequeño.
3. Extender el comportamiento aprobado en esta revisión a los componentes compartidos y páginas restantes, conservando toda la oferta.
4. Realizar revisión visual completa, navegación, cinco tamaños, contraste y control del movimiento antes de hacer el primer push que publique la demo.
5. Confirmar build, rutas y recursos del subdirectorio real. Después de desplegar, abrir la URL pública y verificar el resultado.

Las capturas y resultados del informe registran comprobaciones ejecutadas. No se atribuye una aprobación del cliente ni una certificación WCAG completa a la revisión interna.

## Refinamiento posterior

La segunda revisión conserva estas referencias y dependencias. El menú permanece opaco durante la apertura y el cierre. Auditoría, iteraciones, capturas y evidencia actualizada en [refinamiento/INFORME.md](refinamiento/INFORME.md).

## Dirección de arte y contraste — revisión 3

Se da peso al petróleo desde la entrada, se sustituyen los resúmenes repetidos por una guía a especialidades y se refuerzan el nombre y las ubicaciones. Contacto y Clientes comparten superficies funcionales verdes; se conservan los recursos nativos y no se instalan dependencias. Ver [informe vigente](direccion-arte/INFORME.md).

## Auditoría integral — revisión 4

La salida del menú por Tab se cierra inmediatamente y conserva el nuevo foco. Los destinos de enlaces reciben foco nativo y una única separación para la cabecera; los saltos son inmediatos tras reproducir un problema con el desplazamiento suave en Contacto. Se mantienen las entradas discretas y los estados CSS. Se compacta móvil, se incorpora un desplegable HTML nativo para datos pendientes, se limpian estilos y se precargan dos fuentes existentes. Informe actual: [auditoría integral](auditoria-integral/INFORME.md).

## Composición editorial y presencia personal — revisión 5

Inicio y El despacho se revisan primero en escritorio y móvil; tras corregir longitud del titular, alineación de servicios y medida de lectura, se extienden los ajustes a ubicaciones, cabeceras interiores y cierre de contacto. Índice compacto, guía en filas, nombre protagonista y cursiva selectiva. Se conservan oferta, arquitectura, recursos nativos y dependencias. [Informe vigente y comparativas](composicion-editorial/INFORME.md).

## Detalles de interacción — revisión 6

Flechas junto a los títulos de especialidad, acciones compactas en tableta y entrada de Inicio en una secuencia de 330 ms, con CSS y el observador existente. Se conserva movimiento reducido y contenido visible por defecto. [Revisión, capturas y verificaciones](detalles-interaccion/INFORME.md).

## Iconografía Phosphor — revisión 7

Se seleccionan quince SVG oficiales de Phosphor, peso regular, fijados por commit y con licencia MIT incluida. Iconos semánticos para contacto, ubicaciones y documentación; chevrons y flechas coherentes para navegación. SVG locales renderizados por Astro, sin instalar paquetes, fuentes de iconos o JavaScript adicional. [Criterio, procedencia y pruebas](iconografia/INFORME.md).

## Herramientas de calidad y Open Props — revisión 8

Se aplican dos curvas seleccionadas de Open Props, con licencia local, a estilos y menú. Axe revisa 24 estados de once rutas; Lighthouse recoge tres mediciones de cinco páginas representativas. Se corrigen el nombre accesible de la marca y la región del aviso de demo. La publicación queda condicionada a las nuevas puertas de calidad y conserva `noindex`. [Resultados, hallazgos y alcance](auditoria-herramientas/INFORME.md).

## Lectura y navegación por áreas — revisión 9

Se eliminan introducciones que duplicaban las listas de servicios y se acortan cabeceras y Reclamaciones, conservando 33 servicios y cuatro ámbitos de reclamación. Particulares y Empresas incorporan un índice móvil nativo, plegable y fijo bajo la cabecera durante la lectura de servicios. Sin dependencias nuevas, con foco nativo, Escape y movimiento reducido. Ver [evidencia y revisión](navegacion-movil/INFORME.md). Las pruebas con usuarios reales quedan pendientes.
