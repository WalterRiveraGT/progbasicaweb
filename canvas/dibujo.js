var caja = document.getElementById("dibujito");
/*para obtener el área que permite dibujar*/
var lienzo = caja.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    /*arrancar un trazo en el canvas */
    lienzo.beginPath();
    /*color de la línea del trazo */
    lienzo.strokeStyle = color;
    /*mover el lápiz donde iniciará la línea del trazo*/
    lienzo.moveTo(xinicial, yinicial);
    /*dibujar la línea*/
    lienzo.lineTo(xfinal, yfinal);
    /*dibujar la línea */
    lienzo.stroke();
    /*cerrar el trazo */
    lienzo.closePath();

}