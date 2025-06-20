function mostrarMensaje(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    let contenedorMensaje = document.getElementById("mensajeConfirmacion");
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!nombre || !email || !asunto || !mensaje) {
        contenedorMensaje.textContent = "Por favor, completa todos los campos.";
        return;
    }
    
    if (!regexEmail.test(email)) {
        contenedorMensaje.textContent = "Por favor, ingresa un correo electrónico válido.";
        return;
    }

    let mensajeEnvio = `Hola, ${nombre}! Gracias por tu mensaje, en breve nos estaremos comunicando contigo.`;
    contenedorMensaje.textContent = mensajeEnvio;
  }
  function toggleMenu() {
    const links = document.querySelector('.menu-links');
    links.classList.toggle('show');
  }
  
  function toggleModoSubmenu() {
    const submenu = document.querySelector('.modo-submenu');
    submenu.classList.toggle('show');
  }
  
  // Función para establecer tema
  function setTheme(mode) {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
    // Ocultar submenú después de elegir
    document.querySelector('.modo-submenu').classList.remove('show');
  }
  
  // Aplicar tema guardado al cargar
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });