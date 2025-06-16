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