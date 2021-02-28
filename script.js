
    var todosLosPrestamos = [
        {
            nombre: "Lucas",
            dinero: 50000, 
            meses: 12, 
            intereses: parseInt((50000 * 5)/100),
        }, {
            nombre: "Daniela",
            dinero: 100000, 
            meses: 10, 
            intereses: parseInt(10000 * 5)/100,
        },
            {
            nombre: "Lisandro",
            dinero: 60000, 
            meses: 12, 
            intereses: parseInt((60000 * 5)/100),
        }
    ]; 

    function prestamo (nombre, dinero, meses, intereses) {

        this.nombre = nombre;
        this.dinero = dinero;
        this.meses = meses;
        this.intereses = intereses;

        this.informacion = function(){
            return infoCuotaPrestamo(this)
        };
    }
    
    function recogerDatos() {

    var nombre = document.getElementById("nombre").value;
    var dinero =  parseInt(document.getElementById("dinero").value);
    var meses = parseInt(document.getElementById("meses").value);


    var cliente = "";
    var clienteSi = document.getElementById("si");
    var clienteNo = document.getElementById("no");

    if (clienteSi.checked){
        cliente = clienteSi.value;
    } else {
        cliente = clienteNo.value;
    }

    var intereses = parseInt((dinero * 5)/100);

    function infoCuotaPrestamo(prestamo) {
        return prestamo.dinero + " " + prestamo.intereses
    }



    var miPrestamo = new prestamo (nombre, dinero, meses, intereses);
    todosLosPrestamos.push(new prestamo(nombre, dinero, meses, intereses));
    sessionStorage.setItem("JSON", JSON.stringify( todosLosPrestamos))

    console.log(todosLosPrestamos)

    var descuento = 1000;
    var cuotaPrestamo = (dinero / meses) + intereses;
    var miCuotaConDescuento= cuotaPrestamo - descuento;
    function sacarCuotaFinal(){
        
            if ( cliente ==="si") {
                return miCuotaConDescuento;
        }   else {
                return cuotaPrestamo;
        }  
    }


    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("Me tenes que dar esto por mes: " + sacarCuotaFinal()); 
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
}

window.addEventListener('load', function () {
    console.log('Hola!');
  })
  

$( document ).ready(function() {
   console.log( "Ya cargo todo" );
});

function myFunction() {
    document.getElementById("caja").reset();
  }



$("#botonGolpeador").click(function(){ 
    $("p.textoGolpeador").fadeIn(); 
  });
  

  $("#botonSi").click(function(){ 
    $("p.textoSi").fadeIn(); 
  });