# Plan de diseño y evaluación de referencias

31 de octubre de 2026. Se incorpora la instrucción adicional del usuario antes de publicar la demo.

## Referencias y decisión previa a instalar

| Referencia | Evaluación para este proyecto | Decisión |
| --- | --- | --- |
| [Starwind UI](https://github.com/starwind-ui/starwind-ui) | Sus primitivas accesibles son relevantes para interacciones complejas. El menú de esta demo es una divulgación sencilla, ya probada con teclado, Escape y devolución de foco. No se necesitan diálogos, selectores o formularios complejos. Incorporar un runtime adicional duplicaría ese comportamiento. | No instalar. Reconsiderar solo ante una necesidad funcional o de accesibilidad concreta que el componente resuelva mejor. |
| [Motion](https://motion.dev/) | Adecuado para gestos, física y composiciones que exceden CSS. La demo solo requiere respuestas de enlaces, menú y entradas discretas; no hay arrastre, gestos complejos o animaciones de estado compartido. | No instalar. CSS y APIs nativas cubren los efectos definidos. |
| [Astro Components Kit](https://astrocomponents.dev/) | Referencia de composición, navegación, espaciado y estados. No se adopta la estética glass, neón ni un bloque prefabricado. Las afirmaciones de accesibilidad y rendimiento de una biblioteca no certifican esta demo. | Referencia visual únicamente. No instalar ni copiar una plantilla. |
| [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/) | La guía distingue las transiciones nativas entre documentos de ClientRouter. No se necesita persistencia de estado ni enrutado SPA para esta web estática. | Transiciones CSS nativas MPA con mejora progresiva; no añadir ClientRouter ni dependencias. Navegación ordinaria cuando no exista soporte. |

## Dirección propia

Tipografía Source Serif 4 y Source Sans 3; marca nominal; marfil, petróleo y acento bronce; retícula editorial; jerarquía de servicios y localidades. La personalidad surge del tratamiento del nombre, los titulares, las proporciones y el ritmo entre texto y espacio. Sin retratos ficticios, plantillas jurídicas, bento genérico o componentes decorativos sin función.

## Sistema de movimiento

- Botones y enlaces: 160–200 ms, variación contenida de color y flecha de 4 px; respuesta de presión de 1 px.
- Tarjetas: filas editoriales con respuesta de borde y flecha, sin elevar su posición; foco visible independiente del movimiento.
- Menú: apertura de 180 ms y cierre de 150 ms con APIs nativas; estado ARIA, foco, Escape y enlaces conservados. Panel bajo la cabecera sin desplazar el contenido.
- Secciones: desplazamiento de 8 px y opacidad mínima de 0,94 durante 320 ms, una vez al entrar. IntersectionObserver solo dispara una clase CSS; sin observador o JavaScript, el contenido permanece visible.
- Navegación entre páginas: transición nativa de 160 ms si el navegador la admite. Sin interceptar enlaces ni depender de un router cliente.
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
