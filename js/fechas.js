function actualizarFechaHora(){
  const ahora = new Date();
  document.getElementById("fecha-actual").textContent = ahora.toLocaleDateString();
  document.getElementById("hora-actual").textContent = ahora.toLocaleTimeString();
}
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();


function calcularDiasRestantes(){
  const hoy = new Date();
  let navidad = new Date(hoy.getFullYear(), 11, 25); 
  if(hoy > navidad){
    
    navidad = new Date(hoy.getFullYear() + 1, 11, 25);
  }
  const diff = navidad - hoy;
  const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
  document.getElementById("contador").textContent = `${dias} días`;
}
calcularDiasRestantes();
