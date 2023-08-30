
function convertir() {
    var valor = parseFloat(document.getElementById("valorInput").value);
    var unidadOrigen = document.getElementById("unidadOrigen").value;
    var unidadDestino = document.getElementById("unidadDestino").value;
    var resultado = 0;
    
    if (!isNaN(valor)) {
         if (unidadOrigen === "centimetros" && unidadDestino === "metros") {
            resultado = valor / 100;
        }
        else if (unidadOrigen === "centimetros" && unidadDestino === "kilometros") {
            resultado = valor / 100000;
        }
        else if(unidadOrigen === "centimetros" && unidadDestino === "millas"){
            resultado = valor / 160934;
        }
        else if (unidadOrigen === "metros" && unidadDestino === "centimetros") {
            resultado = valor * 100;
        } 
        else if (unidadOrigen === "metros" && unidadDestino === "kilometros") {
            resultado = valor / 1000;
        }
        else if(unidadOrigen === "metros" && unidadDestino === "millas"){
            resultado = valor / 1609.34;
        }
        else if (unidadOrigen === "kilometros" && unidadDestino === "metros") {
            resultado = valor * 1000;
        }
        else if (unidadOrigen === "kilometros" && unidadDestino === "centimetros") {
            resultado = valor * 100000;
        }
        else if(unidadOrigen === "kilometros" && unidadDestino === "millas"){
            resultado = valor / 1.60934;
        }
        else if(unidadOrigen === "millas" && unidadDestino === "kilometros"){
            resultado = valor / 0.62137119;
        }
        else if(unidadOrigen === "millas" && unidadDestino === "metros"){
            resultado = valor / 0.00062137;
        }
        else if(unidadOrigen === "millas" && unidadDestino === "centimetros"){
            resultado = valor / 0.00000621;
        }
        else {
            resultado = valor;
        }
        
        document.getElementById("resultadoInput").value = resultado;
    } else {
        document.getElementById("resultadoInput").value = "Ingresa un valor válido.";
    }
}
