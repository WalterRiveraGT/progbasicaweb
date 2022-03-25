var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso = prompt("ingresa tu peso ");
peso_marte = (peso * g_marte) / g_tierra;
document.write("tu peso en marte es: " + peso_marte);