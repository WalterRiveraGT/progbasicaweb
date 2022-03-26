var g_tierra = 9.8;
var g_marte = 3.7;
var peso_final;
var nombre_planeta;
var g_jupiter = 24.8;
var peso = parseFloat(prompt("ingresa tu peso "));
var peso_entero = parseFloat(peso);
var planeta = parseInt(prompt("seleccione el planeta para calcular el peso,\n 1 para Marte, 2 para Jupiter"));
if (planeta == 1) {
    peso_final = parseFloat((peso_entero * g_marte) / g_tierra);
    var nombre = "Marte";
} else if (planeta == 2) {
    peso_final = parseFloat((peso_entero * g_jupiter) / g_tierra);
    var nombre = "Júpiter";
} else {
    alert("Datos inválidos");
}
document.write("tu peso en " + nombre + " es: <strong> " + peso_final + " kilos</strong>");