function encriptar(){
   let texto = document.getElementById("texto").value;
   let tituloMensaje = document.getElementById("titulo-mensaje");
   let parrafo = document.getElementById("parrafo");
   let muñeco = document.getElementById("muñeco");
   let textoCifrado = texto
      .replace(/e/gi,"enter")
      .replace(/i/gi,"imes")
      .replace(/a/gi,"ai")
      .replace(/o/gi,"ober")
      .replace(/u/gi,"ufat");

   if (texto){
     document.getElementById("encriptado-resultado").classList.remove("ocultar")
     document.getElementById("encriptado-estado").classList.add("ocultar")
     document.getElementById("mensaje").innerText = textoCifrado;
     document.getElementById("texto").value = "";
     tituloMensaje.textContent = "texto encriptado con exito";
     parrafo.textContent = "";
   } else{
      tituloMensaje.textContent = "Ningun mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
   }  
}

function desencriptar(){
   let texto = document.getElementById("texto").value;
   let tituloMensaje = document.getElementById("titulo-mensaje");
   let parrafo = document.getElementById("parrafo");
   let muñeco = document.getElementById("muñeco");
   let textoCifrado = texto
      .replace(/enter/gi,"e")
      .replace(/imes/gi,"i")
      .replace(/ai/gi,"a")
      .replace(/ober/gi,"o")
      .replace(/ufat/gi,"u");

   if (texto){
     document.getElementById("texto").value = textoCifrado;
     tituloMensaje.textContent = "texto desencriptado con exito";
     parrafo.textContent = "";
   } else{
      tituloMensaje.textContent = "Ningun mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
   }   
}
function copiar (){
   let texto = document.getElementById("mensaje").innerText;
   navigator.clipboard.writeText(texto) 
   document.getElementById("encriptado-resultado").classList.add("ocultar")
   document.getElementById("encriptado-estado").classList.remove("ocultar")
}
