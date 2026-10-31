# Jaime Valiente Alemán — Demo de diseño

**Revisión vigente:** [Lighthouse CI, axe-core y Open Props](docs/auditoria-herramientas/INFORME.md), con hallazgos corregidos, mediciones y publicación verificada.

Dirección visual: [composición editorial y presencia personal](docs/composicion-editorial/INFORME.md).

Iconos: selección local de Phosphor Icons, peso regular, renderizada por Astro. [Procedencia y hashes](src/assets/icons/phosphor/provenance.json) · [Licencia MIT incluida en la publicación](public/licenses/phosphor-icons.txt).

Demo navegable para revisión del despacho. No sustituye ni modifica `jaimevalienteabogado.es`.

- Propietario personal: **mmlab-dev**.
- Repositorio: https://github.com/mmlab-dev/jaime-valiente-web-demo
- URL de publicación: https://mmlab-dev.github.io/jaime-valiente-web-demo/
- Siete páginas: Inicio, Particulares, Empresas, Reclamaciones, El despacho, Contacto y Área de clientes.
- Soporte: aviso legal, privacidad y cookies demostrativos, y 404 personalizada.

## Instalar y ejecutar

Requiere Node.js **22.23.4 o superior**, con una versión par compatible. Desarrollo y CI verificados con Node 24. Dependencias fijadas en `package-lock.json`.

```sh
npm ci
npm run dev
```

Abrir la URL que imprime Astro, incluyendo `/jaime-valiente-web-demo/`. No abrir `index.html` con `file://`.

```sh
npm run check
npm run build
npm run verify
npm run verify:motion
npm run preview
```

`check` comprueba TypeScript y componentes Astro. `build` genera `dist/`. `verify` comprueba rutas, recursos, enlaces internos, anclas, base, idioma, H1, identificación de demo y ausencia de formularios/Apps Script/analítica en el HTML generado. No sustituye una auditoría integral.

## Stack y dependencias directas

| Paquete | Versión |
| --- | --- |
| Astro | 7.4.4 |
| Tailwind CSS | 4.3.3 |
| Integración Vite de Tailwind | 4.3.3 |
| TypeScript | 6.0.3 |
| Astro Check | 0.9.12 |
| Source Serif 4 y Source Sans 3 mediante Fontsource | 5.3.1 |

HTML estático y scripts pequeños integrados para el menú y la entrada de secciones. Sin framework de interfaz, backend, base de datos, autenticación, servicios de pago, formularios o cargas de archivos. Las fuentes se sirven desde el propio sitio; licencias en `docs/licencias/`. No se usan fotografías ni retratos ficticios.

## Organización

```text
src/
  components/     Cabecera, pie, presentación, servicios, oficinas y acciones
  data/site.ts    Navegación, contactos, direcciones y constructor de rutas
  layouts/       Documento HTML, metadatos y marco compartido
  pages/         Siete pantallas, rutas legales y 404
  styles/        Identidad, retícula, estados y adaptación responsive
public/          Favicon, robots y .nojekyll
scripts/         Verificación del build estático
docs/            Informe, pendientes, desviaciones, pruebas y capturas
.github/workflows/deploy.yml
```

## Auditoría con Lighthouse CI y axe-core

Las herramientas de auditoría son dependencias de desarrollo; no se incorporan a las páginas publicadas. Se necesita Chrome instalado y Node 24 para reproducir el entorno comprobado. En PowerShell:

```powershell
$env:CHROME_PATH='C:/Program Files/Google/Chrome/Application/chrome.exe'
npm run build
npm run audit:quality
```

El comando comprueba 24 estados con axe-core (once rutas en móvil/escritorio, menú abierto y datos profesionales desplegados) y recoge tres mediciones móviles simuladas de Lighthouse en Inicio, Particulares, Empresas, Contacto y Clientes. Los resultados completos están en `.quality/` y `.lighthouseci/`, ignorados por Git. `npm run audit:a11y` conserva todos los estados axe y reduce la medición Lighthouse a Inicio para revisar accesibilidad durante desarrollo.

La publicación exige cero infracciones automáticas de axe y medianas de rendimiento ≥90, accesibilidad automática 100, buenas prácticas ≥95, LCP ≤2.500 ms, CLS ≤0,1 y TBT ≤200 ms. Un resultado incompleto nuevo también bloquea para revisión manual. Se conserva una excepción documentada de contraste del texto de Inicio tapado por el menú opaco; el estado normal y el menú se revisaron por separado. SEO se informa completo y conserva el `noindex` deliberado de la demo. Estas mediciones de laboratorio no representan datos de usuarios reales ni una certificación WCAG.

Las versiones de las herramientas y las correcciones transitivas están fijadas en `package.json` y el lockfile. Los `overrides` actualizan Lighthouse/Chrome Launcher y dependencias con avisos conocidos; se validan con el comando completo y `npm audit`. No usar `npm audit fix --force` para cambiar versiones sin comprobar compatibilidad. GitHub Actions guarda los informes durante 14 días y bloquea Pages si falla una puerta de calidad. No se suben a servicios de informes externos.

Open Props aporta únicamente dos curvas de movimiento seleccionadas en `src/styles/tokens.css`, con licencia incluida. Los estilos y el menú nativo comparten esos valores; permanecen el diseño y el movimiento reducido.

## Publicar en GitHub Pages

La configuración real de Astro es `site: https://mmlab-dev.github.io` y `base: /jaime-valiente-web-demo`. Todos los enlaces internos, scripts, estilos y fuentes respetan ese subdirectorio. No hay archivo CNAME ni dominio personalizado.

En el repositorio personal, seleccionar **Settings → Pages → Source → GitHub Actions**. El workflow de `main` instala con `npm ci`, comprueba, construye, verifica y ejecuta las puertas Lighthouse/axe antes de desplegar `dist/` con las acciones oficiales de GitHub. La auditoría completa requiere varios minutos. Los cambios exclusivos de documentación no provocan un nuevo despliegue. Las acciones están fijadas por SHA y sus etiquetas de versión están documentadas en el workflow. La publicación usa OIDC y permisos por trabajo; no requiere secretos en el repositorio.

Para publicar un cambio ya revisado:

```sh
git add <archivos revisados>
git commit -m "Describe el cambio"
git push origin main
```

El workflow también se puede ejecutar manualmente desde Actions. Esperar a que termine y comprobar la URL pública, las rutas directas y los recursos. Para revertir, revertir el commit correspondiente y desplegar de nuevo. No modificar DNS ni la web real.

## Contenido y límites

Fuentes de requisitos: `Especificacion_Redisenio_Jaime_Valiente_v1_0.docx` y `auditoria-jaime-valiente-2026-10-31.md`, revisadas localmente. No se publican estos documentos ni otros archivos del espacio de trabajo en este repositorio. Se conserva toda la oferta inventariada, sin atribuir credenciales, experiencia, equipo, casos o resultados no acreditados.

La demo utiliza `noindex, follow` en todas las páginas. No se generan datos estructurados que atribuyan credenciales o condiciones pendientes. El Área de clientes no integra Google Apps Script ni el SaaS documental. Los enlaces de teléfono/correo/WhatsApp abren los canales publicados; no se han enviado mensajes ni comprobado su recepción. Las páginas legales son información demostrativa, no documentos jurídicos definitivos.

Ver [informe y pruebas](docs/INFORME.md), [pendientes](docs/PENDIENTES.md), [desviaciones](docs/DESVIACIONES.md) [plan de diseño y evaluación de referencias](docs/PLAN-DISENO.md) y [capturas reales](docs/capturas/).

## Referencias técnicas

- [Astro y GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Astro requisitos de instalación](https://docs.astro.build/en/install-and-setup/)
- [API GitHub Pages](https://docs.github.com/en/rest/pages/pages)

Publicar esta demo no autoriza a sustituir la web del despacho. Una versión definitiva requiere validación editorial, operativa y jurídica y autorización expresa de publicación en el dominio real.

Para contrastar una publicación con el build local, ejecutar `node scripts/verify-public.mjs docs/pruebas-publicacion.json`. Compara páginas y recursos por SHA256 y comprueba la 404 pública.
