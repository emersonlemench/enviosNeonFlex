const botonImprimir = document.getElementById("imprimir")
const cuerpo = document.getElementById("form")

const imprimirVentana = () => { window.print(cuerpo).return }

botonImprimir.addEventListener("click", imprimirVentana);
