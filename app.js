/* =====================================================
   LÓGICA DE LA PÁGINA — no necesitas cambiar nada aquí.
   Los datos se editan en config.js
   ===================================================== */

/* Crea una imagen. Si el enlace falla, se quita y se ve el fondo de color. */
function crearImagen(url, alt) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt || "";
  img.loading = "lazy";
  img.onerror = () => img.remove();
  return img;
}
const $ = (id) => document.getElementById(id);

/* --- Cabecera y pie (todas las páginas) --- */
$("nombre-empresa").textContent = EMPRESA.nombre;
if (LOGO) $("logo-caja").appendChild(crearImagen(LOGO, "Logo de " + EMPRESA.nombre));
$("pie-texto").textContent = EMPRESA.pie;

/* --- Inicio: portada con fotos que cambian --- */
if ($("portada-fondo")) {
  const fondo = $("portada-fondo");
  FOTOS_PORTADA.forEach((url, i) => {
    const img = crearImagen(url, "");
    img.loading = "eager";
    if (i === 0) img.classList.add("activa");
    fondo.appendChild(img);
  });
  let actual = 0;
  if (FOTOS_PORTADA.length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => {
      const fotos = fondo.querySelectorAll("img");
      if (fotos.length < 2) return;
      fotos[actual % fotos.length].classList.remove("activa");
      actual = (actual + 1) % fotos.length;
      fotos[actual].classList.add("activa");
    }, 6000);
  }
}

/* --- Inicio y Catálogo: tarjetas de categorías (enlazan a inventario.html) --- */
if ($("lista-categorias")) {
  CATEGORIAS.forEach(cat => {
    const tarjeta = document.createElement("a");
    tarjeta.className = "categoria";
    tarjeta.href = "inventario.html?cat=" + cat.id;
    tarjeta.innerHTML = `<div class="foto"><span aria-hidden="true">${cat.icono}</span></div>
      <div class="texto"><h3>${cat.nombre}</h3><p>${cat.descripcion}</p></div>`;
    if (cat.foto) tarjeta.querySelector(".foto").appendChild(crearImagen(cat.foto, cat.nombre));
    $("lista-categorias").appendChild(tarjeta);
  });
}

/* --- Inventario: pestañas + tabla (lee ?cat=... de la dirección) --- */
if ($("pestanas")) {
  CATEGORIAS.forEach(cat => {
    const b = document.createElement("button");
    b.className = "pestana";
    b.role = "tab";
    b.id = "tab-" + cat.id;
    b.textContent = cat.nombre;
    b.onclick = () => mostrarInventario(cat.id);
    $("pestanas").appendChild(b);
  });
  const pedida = new URLSearchParams(location.search).get("cat");
  mostrarInventario(CATEGORIAS.some(c => c.id === pedida) ? pedida : CATEGORIAS[0].id);
}
function mostrarInventario(id) {
  const cat = CATEGORIAS.find(c => c.id === id);
  CATEGORIAS.forEach(c => $("tab-" + c.id).setAttribute("aria-selected", c.id === id));
  const filas = cat.items.map((f, i) =>
    `<tr><td>${i + 1}</td><td>${f[0]}</td><td>${f[1]}</td><td>${f[2]}</td><td>${f[3]}</td></tr>`).join("");
  $("tabla-caja").innerHTML = `<table>
    <caption>Lista de ${cat.nombre.toLowerCase()} en inventario</caption>
    <thead><tr><th>N°</th><th>Producto</th><th>Cantidad</th><th>Descripción</th><th>Fecha de adquisición</th></tr></thead>
    <tbody>${filas}</tbody>
    <tfoot><tr><td colspan="5">Todos los productos son de libre distribución.</td></tr></tfoot>
  </table>`;
}

/* --- Acerca de --- */
if ($("foto-acerca") && FOTO_ACERCA) $("foto-acerca").appendChild(crearImagen(FOTO_ACERCA, "Taller mecánico"));

/* --- Contacto: datos y formulario (abre WhatsApp de la empresa) --- */
if ($("datos-contacto")) {
  $("datos-contacto").innerHTML = `
    <li>📍 ${EMPRESA.direccion}</li>
    <li>✉️ <a href="mailto:${EMPRESA.email}">${EMPRESA.email}</a></li>
    <li>🕒 ${EMPRESA.horario}</li>
    <li>💬 <a href="https://wa.me/${EMPRESA.whatsapp}" target="_blank" rel="noopener">WhatsApp: +${EMPRESA.whatsapp}</a></li>`
    + REDES.map(r => `<li><span class="icono-red">${r.imagen ? `<img src="${r.imagen}" alt="" onerror="this.replaceWith('${r.icono}')">` : r.icono}</span> <a href="${r.enlace}" target="_blank" rel="noopener">${r.nombre}</a></li>`).join("");
}
function enviarFormulario(evento) {
  evento.preventDefault();
  const texto = `Hola, soy ${$("nombre").value} (${$("email").value}).\n${$("mensaje").value}`;
  window.open(`https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  $("alerta-exito").style.display = "block";
  setTimeout(() => $("alerta-exito").style.display = "none", 5000);
}
function borrarCampos() { $("miFormulario").reset(); }
