var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso = prompt("ingresa tu peso ");
var peso_entero = parseFloat(peso);
var peso_marte = parseFloat((peso_entero * g_marte) / g_tierra);
document.write("tu peso en marte es: <strong> " + peso_marte + " kilos</strong>");