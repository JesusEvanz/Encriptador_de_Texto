// Función para encriptar texto
function encriptarTexto() {
    const inputTexto = document.getElementById("textoEntrada").value.toLowerCase(); // Obtener texto del área de texto y convertir a minúsculas
    if (inputTexto === "") {
        mostrarMensajeVacio();
        return;
    }

    const textoEncriptado = inputTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
}

// Función para desencriptar texto
function desencriptarTexto() {
    const inputTexto = document.getElementById("textoEntrada").value.toLowerCase(); // Obtener texto del área de texto y convertir a minúsculas
    if (inputTexto === "") {
        mostrarMensajeVacio();
        return;
    }

    const textoDesencriptado = inputTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en el contenedor de salida
function mostrarResultado(texto) {
    const mensajeSalida = document.getElementById("mensajeSalida");
    const copyBtn = document.getElementById("copy-btn");

    // Cambiar el texto del contenedor de salida
    mensajeSalida.textContent = texto;
    
    // Mostrar el botón de copiar y ocultar la imagen y el mensaje de texto inicial
    copyBtn.style.display = "block";
    mensajeSalida.style.display = "block";
    document.querySelector('.encrip__imagen').style.display = 'none'; // Ocultar la imagen
    document.querySelector('.encrip__mensajeencontrado').style.display = 'none'; // Ocultar la imagen
    document.querySelector('.encrip__ingresar').style.display = 'none'; // Ocultar el mensaje inicial
}



// Función para copiar el texto encriptado/desencriptado al portapapeles
document.getElementById("copy-btn").addEventListener("click", function () {
    const textoACopiar = document.getElementById("mensajeSalida").textContent;
    navigator.clipboard.writeText(textoACopiar);
});
