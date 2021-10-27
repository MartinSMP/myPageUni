// RELOJ
// RELOJ
function generateTime() {
    // Capturamos la hora actual mediante la creación de una nueva instancia del objeto Date
    let timeNow = new Date();
    // Queremos que la hora se muestre siempre con 2 dígitos. Para eso, hacemos lo siguiente:
    // Usamos un ternario para saber si el número de digitos es menor que 2
    let hours = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
    let minutes = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
    let seconds = timeNow.getSeconds().toString().length < 2 ? "0" + timeNow.getSeconds() : timeNow.getSeconds();
    var ampm = (hours >= 12) ? "PM" : "AM";
    //  Concatenando variables | Usando ES5 
    // let mainTime = hours + ":" + minutes + ":" + seconds;
     //  Concatenando variables | Usando ES6: Template Strings (Template literals) 
    let mainTime = `Son las ${hours}:${minutes}:${seconds} ${ampm}`
    // Escribo la hora en el elemento h1 con id="time"
    document.getElementById("time").innerHTML = mainTime;



    let fecha = new Date() ;

    let dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];

    let dia = dias[ fecha.getDay()];
    let numero = fecha.getDate();
    let mes = meses[ fecha.getMonth()] ;
    let year = fecha.getFullYear() ;


    let fechaA = `Hoy es ${dia} ${numero} de ${mes} del ${year}`;
    document.getElementById("fecha").innerHTML = fechaA;
    

}

// SEMANA MUNDO

function obtenerNumeroSemana(fecha) {
    if (!(fecha instanceof Date)) {
        fecha = new Date();
    }
  
    let nuevaFecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
  
    nuevaFecha.setUTCDate(nuevaFecha.getUTCDate() + 4 - (nuevaFecha.getUTCDay() || 7));
  
    let primerDiaAgnio = new Date(Date.UTC(nuevaFecha.getUTCFullYear(), 0, 1));
  
    let numeroSemana = Math.ceil((((nuevaFecha - primerDiaAgnio) / 86400000) + 1) / 7);
    let semanautp = numeroSemana - 31;
  

  
  
    let semanaNumber = `Estamos en la semana ${numeroSemana} / 52 del presente año y en <div align=center> los cursos de la UTP, estamos en semana ${semanautp} </div> `;

    return semanaNumber;
  
  }
  
  
  
  window.onload = (function(){(document.getElementById("wek").innerHTML = (obtenerNumeroSemana(new Date())))}); 




//console.log(obtenerNumeroSemana(new Date()));   // 18



// Si quiero que el efecto del reloj se vea correctamente, tengo que usar un setInterval de 1000
// setInterval - ES6 - Javascript Moderno
setInterval(() => {
    generateTime();
}, 1000);