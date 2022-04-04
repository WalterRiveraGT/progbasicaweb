var caja = document.getElementById("dibujito");
/*para obtener el área que permite dibujar*/
var lienzo = caja.getContext("2d");
/*arrancar un trazo en el canvas */
lienzo.beginPath();
/*color de la línea del trazo */
lienzo.strokeStyle = "red";
/*mover el lápiz donde iniciará la línea del trazo*/
lienzo.moveTo(100, 100);
/*dibujar la línea*/
lienzo.lineTo(200, 200);
/*dibujar la línea */
lienzo.stroke();
/*cerrar el trazo */
lienzo.closePath();