//alert('¡Bienvenido al Clan Caimán! Juntos somos más fuertes');
const mensajes = [
    "¡Eres capaz de lograr todo lo que te propongas!",
    "¡El código es tu superpoder! ",
    "Cada error es una oportunidad para aprender.",
    "El Clan Caimán te respalda, ¡sigue adelante!",
    "No estás solo, estamos juntos en esto. ",
    "El conocimiento se comparte, no se guarda. "
  ];

function mostrarMensaje() {
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    document.getElementById("mensajeMotivador").innerText = mensaje;
  }