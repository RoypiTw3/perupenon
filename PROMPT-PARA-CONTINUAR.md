# Prompt para continuar con otro modelo

Copia y pega esto tal cual (ajusta la parte de "Lo que necesito ahora" según lo que quieras hacer):

---

Voy a continuar un proyecto web que ya está avanzado. Antes de hacer nada, lee estos dos archivos y confirma que entendiste el estado:

- `/Volumes/Tw3/Proyecto Claude/perupenon/CONTEXTO.md` (resumen del proyecto, decisiones tomadas y pendientes)
- `/Volumes/Tw3/Proyecto Claude/perupenon/README.md` (dónde se edita cada cosa)

Contexto rápido: es el rediseño del sitio del restaurante Perú Peñón (comida peruana, barrio El Peñón, Cali, Colombia; sitio original https://xn--perupeon-i3a.com/) usando el sistema visual de https://ballenacabo.com/ pero con toda la información del restaurante. El sitio ya está construido y verificado: cuatro páginas estáticas en HTML/CSS/JS (`index.html`, `quienes-somos.html`, `menu.html`, `contacto.html`), sin framework ni build, en la carpeta `/Volumes/Tw3/Proyecto Claude/perupenon/`.

Reglas para trabajar:

1. Respeta el sistema de diseño que ya existe: colores y tipografía están como variables al inicio de `css/style.css` (crema #F8F2E5, negro #03090D, terracota #C2644F, verde salvia #779580; fuentes Archivo ancha para títulos, DM Sans para texto, Bodoni Moda para el wordmark). No introduzcas otros colores ni fuentes.
2. El header y el footer se repiten en las cuatro páginas. Si cambias algo ahí, cámbialo en las cuatro (o edita `_fuentes/build.py` y ejecuta `python3 build.py` desde `_fuentes/` para regenerarlas).
3. No inventes datos del negocio. Los datos verificados son: WhatsApp +57 310 733 3883, fijo (032) 892 0300, Facebook restauranteperupenon, horarios martes–viernes 12–9 pm, sábados 12–8:30 pm, domingos 12–7 pm, festivos 12–8:30 pm, ubicación "Barrio El Peñón, oeste de Cali" (sin dirección exacta). Si necesitas un dato que no está, pregúntame.
4. Escríbeme en español de Colombia, sin voseo.
5. Después de cada cambio, abre el sitio en un servidor local (`python3 -m http.server 8080` dentro de la carpeta) y revisa que se vea bien en escritorio y en móvil (375 px) antes de darlo por terminado.
6. La carpeta `_fuentes/` es material de trabajo; no la incluyas si publicas el sitio.

Lo que necesito ahora:

[describe aquí el cambio: por ejemplo "agregar la dirección exacta Calle X # Y-Z en el pie y en contacto", "conectar el formulario a mi correo tal@dominio.com", "publicar en Netlify", "agregar una sección de galería con estas fotos", etc.]

---
