var nombre = prompt("¿Cuál es tu nombre?");
var dinero =  parseInt(prompt("¿Cuánto dinero necesitás?"));
var meses = parseInt(prompt("¿En cuántos meses querés devolverlo?"));
var intereses = parseInt((dinero * 5)/100);

function cuotaPrestamo(prestamo) {
    return prestamo.dinero + " " + prestamo.intereses
}

function prestamo (nombre, dinero, meses, intereses) {
    this.nombre = nombre;
    this.dinero = dinero;
    this.meses = meses;
    this.intereses = intereses;

    this.informacion =  function(){
        return cuotaPrestamo(this)
    };
}

var miPrestamo = new prestamo (nombre, dinero, meses, intereses);


var descuento = 100;
var miCuotaConDescuento;
var cuotaPrestamo = (dinero / meses) + intereses;
var cliente;
while (cliente !== "si" && cliente !== "sí" && cliente !== "no") {
cliente = (prompt("¿sos cliente de nuestro banco?"));
};

function sacarCuotaFinal(){
    
        if (cliente === "si") {
            miCuotaConDescuento = alert("Tu cuota será de" + " " + "$" + (cuotaPrestamo - descuento));
    }   else if (cliente === "no"){
        alert("Tu cuota será de" + " " + "$" + cuotaPrestamo);
    }   else {
        (prompt("¿sos cliente de nuestro banco?"));
    }   return miCuotaConDescuento;

}

sacarCuotaFinal()



