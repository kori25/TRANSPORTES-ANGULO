(function() {
  var modal = document.getElementById("modal");
  var modalText = document.getElementById("modal-text");
  var cerrarBtn = document.querySelector(".cerrar");
  var datos = document.querySelectorAll(".datos");

var textos = {
  "bogotá": "Estamos en Bogotá y llegamos a cada rincón de la ciudad. No solo movemos objetos: acompañamos a las familias en momentos importantes, siempre con cercanía y cuidado.",

  "experiencia": "Con más de 13 años en mudanzas, sabemos que cada caja guarda recuerdos e historias. Por eso cuidamos cada detalle para que tus pertenencias lleguen seguras.",

  "seguridad": "Tu seguridad y la de tus pertenencias es lo primero. Tratamos cada objeto como si fuera nuestro, porque sabemos que detrás de una mudanza hay un hogar y sueños que proteger."
};


  // Agregar eventos a cada bloque
  for (var i = 0; i < datos.length; i++) {
    (function(item) {
      item.addEventListener("click", function(event) {
        event.stopPropagation(); // evita que cierre al hacer clic en la caja
        var h3 = item.querySelector("h3");
        var titulo = h3 ? h3.textContent.trim().toLowerCase() : "";
        var texto = textos[titulo] || "Información no disponible.";

        modalText.textContent = texto;

        // 📍 Posicionar el modal de forma adaptable
var rect = item.getBoundingClientRect();

// Detectar si la pantalla es pequeña
if (window.innerWidth <= 768) {
  // En móviles: centrar sobre el elemento
  modal.style.top = (window.scrollY + rect.top - rect.height / 2) + "px";
  modal.style.left = "50%";
  modal.style.transform = "translateX(-50%)"; // centrado horizontal
  modal.style.width = "80%";
  modal.style.height = "auto";
} else {
  // En pantallas grandes: mostrar al lado derecho como antes
  modal.style.top = (window.scrollY + rect.top) + "px";
  modal.style.left = (window.scrollX + rect.right + 10) + "px";
  modal.style.transform = "none";
  modal.style.width = "200px";
  modal.style.height = rect.height + "px";
}


        // Mostrar con animación
        modal.classList.add("show");
      });
    })(datos[i]);
  }

  // Cerrar con la X
  if (cerrarBtn) {
    cerrarBtn.addEventListener("click", function(event) {
      event.stopPropagation(); 
      modal.classList.remove("show");
    });
  }

  // 👉 Cerrar si se hace clic fuera
  window.addEventListener("click", function(e) {
    if (!modal.contains(e.target) && !e.target.closest(".datos")) {
      modal.classList.remove("show");
    }
  });
})();
/* 🔹 MENÚ HAMBURGUESA RESPONSIVE 🔹 */
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    // 👉 Alternar visibilidad al hacer clic en las tres rayas
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // evita que el click se propague al documento
      navLinks.classList.toggle('show');
    });

    // 👉 Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });

    // 👉 Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('show') &&
          !navLinks.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        navLinks.classList.remove('show');
      }
    });
  }
});

