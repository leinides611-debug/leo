/* =====================================================
   CONFIGURACIÓN  → aquí cambias textos, fotos y datos
   sin tocar el resto del código.
   ===================================================== */

/* --- Datos de la empresa (REEMPLAZA los de ejemplo) --- */
const EMPRESA = {
  nombre:    "Mega Repuestos",
  whatsapp:  "59100000000",                 // solo números, con código de país (591 = Bolivia)
  direccion: "Escribe aquí tu dirección",
  email:     "correo@tuempresa.com",
  horario:   "Lun - Vie, 8:00 a 20:00",
  pie:       "© Mega Repuestos. Todos los derechos reservados."
};

/* --- Redes sociales (aparecen en la página de Contacto) ---
   nombre: texto que se ve
   enlace: dirección completa de tu perfil (con https://)
   imagen: ruta o enlace del icono (ej. "imagenes/iconos/facebook.png").
           Si la dejas vacía ("") se usa el emoji de "icono".
   Para quitar una red borra su línea; para agregar otra copia una línea y cámbiala. */
const REDES = [
  { nombre: "Facebook",  enlace: "https://www.facebook.com/tu-pagina",
    imagen: "https://cdn.simpleicons.org/facebook/ffffff",  icono: "📘" },
  { nombre: "Instagram", enlace: "https://www.instagram.com/tu-usuario",
    imagen: "https://cdn.simpleicons.org/instagram/ffffff", icono: "📷" },
  { nombre: "TikTok",    enlace: "https://www.tiktok.com/@tu-usuario",
    imagen: "https://cdn.simpleicons.org/tiktok/ffffff",    icono: "🎵" },
  { nombre: "YouTube",   enlace: "https://www.youtube.com/@tu-canal",
    imagen: "https://cdn.simpleicons.org/youtube/ffffff",   icono: "▶️" }
];

/* --- Logo: pon la ruta de tu archivo (ej. "imagenes/logo.jpg") o deja "" para usar solo el nombre --- */
const LOGO = "";

/* --- Fotos de la portada (se cambian solas cada 6 segundos) ---
   Puedes usar enlaces de internet o rutas de tus archivos ("imagenes/foto1.jpg").
   Fotos de Unsplash: https://unsplash.com/photos/ID/download?force=true&w=1600 */
const FOTOS_PORTADA = [
  "https://unsplash.com/photos/XP8o9_Arwqg/download?force=true&w=1600",
  "imagenes/img7.jpg",
  "imagenes/fondo.PNG",
  "imagenes/img2.jpg",
  "imagenes/img6.jpg",
];

/* --- Foto de la sección "Acerca de" --- */
const FOTO_ACERCA = "https://unsplash.com/photos/XP8o9_Arwqg/download?force=true&w=1200";

/* --- Categorías del catálogo ---
   foto: enlace o ruta de imagen. Si la dejas vacía ("") se muestra el icono.
   items: filas del inventario → [nombre, cantidad, descripción, fecha de adquisición] */
const CATEGORIAS = [
  { id: "motores", nombre: "Motores", icono: "⚙️",
    descripcion: "Motores y componentes internos.",
    foto: "imagenes/motor1.jpg",
    items: [
      ["Motor 1.6L completo", 12, "Motor de gasolina", "01/06/2023"],
      ["Culata", 25, "Culata reacondicionada", "01/06/2023"],
      ["Kit de distribución", 60, "Correa, tensor y poleas", "01/06/2023"]
    ] },
  { id: "aceites", nombre: "Aceites", icono: "🛢️",
    descripcion: "Aceites de motor de las mejores marcas.",
    foto: "imagenes/aceite.jpg",
    items: [
      ["Castrol", 150, "Aceite de motor", "01/06/2023"],
      ["Elf", 150, "Aceite de motor", "01/06/2023"],
      ["Total", 150, "Aceite de motor", "01/06/2023"],
      ["Mobil", 150, "Aceite de motor", "01/06/2023"],
      ["Motul", 150, "Aceite de motor", "01/06/2023"]
    ] },
  { id: "llantas", nombre: "Llantas", icono: "🛞",
    descripcion: "Llantas para auto, camioneta y camión.",
    foto: "https://unsplash.com/photos/6uhzhjdDbto/download?force=true&w=800",
    items: [
      ["Llanta 185/65 R15", 80, "Auto", "01/06/2023"],
      ["Llanta 265/70 R16", 60, "Camioneta 4x4", "01/06/2023"],
      ["Llanta 225/65 R17", 45, "SUV", "01/06/2023"]
    ] },
  { id: "lubricantes", nombre: "Lubricantes", icono: "🧴",
    descripcion: "Grasas, refrigerantes y líquidos de transmisión.",
    foto: "imagenes/lubricante.jpeg",
    items: [
      ["Líquido de frenos DOT 4", 100, "Envase de 500 ml", "01/06/2023"],
      ["Refrigerante", 90, "Envase de 1 galón", "01/06/2023"],
      ["Aceite de transmisión", 70, "Envase de 1 litro", "01/06/2023"]
    ] },
  { id: "escapes", nombre: "Escapes", icono: "💨",
    descripcion: "Silenciadores, tubos y catalizadores.",
    foto: "imagenes/escape.jpeg",
    items: [
      ["Silenciador universal", 40, "Acero inoxidable", "01/06/2023"],
      ["Tubo de escape", 35, "Tramo medio", "01/06/2023"],
      ["Catalizador", 20, "Para gasolina", "01/06/2023"]
    ] },
  { id: "otros", nombre: "Otros", icono: "🔧",
    descripcion: "Frenos, bujías, discos de embrague y más.",
    foto: "imagenes/motor.jpg",
    items: [
      ["Pastillas de freno", 120, "Juego delantero", "01/06/2023"],
      ["Bujías", 200, "Caja de 4 unidades", "01/06/2023"],
      ["Disco de embrague", 50, "Kit completo", "01/06/2023"]
    ] }
];
