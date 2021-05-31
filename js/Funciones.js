import * as Vari from "./Variables.js"

export function captura_y_proceso_de_datos(){

    let boton = $('#btnConvertir');    
    boton.click('click', function(){
        let medida_ini = $("#medida_ini").val();        
        let medida_fin = $("#medida_fin").val();
        let valor = $("#input").val();
        let unidades_todas = Vari.unidades_todas  
        medida_ini = comparar(medida_ini, unidades_todas)
        medida_fin = comparar(medida_fin, unidades_todas) 
        

        // compara la medida seleccionada(string) con cada medida del array (objeto) 
        function comparar(medida_html, unidades_de_medida){ 
            for (let unidad in unidades_de_medida){
                if (unidades_de_medida[unidad].nombre_medida == medida_html) {                    
                    medida_html = unidades_de_medida[unidad];
                    return medida_html;
                }
            }          
        }        

        // creacion de variable con los datos a mostrar
        let convertido =  (valor + " " + medida_ini.obtener_nombre_medida + " equivale(n) a " + medida_ini.convertir_a(medida_fin, valor) + " " + medida_fin.obtener_nombre_medida);  
        
        //pinta en el DOM el resultado del cálculo
        $('#resultado').empty().prepend(`<h3> ${convertido}</h3>`).hide().fadeIn(2000);
        
    })   
        
}    

export function guardarLocal(clave, valor) { localStorage.setItem(clave, valor) };

export function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function animacion(){

    $("#listas").hide()

    $("#titulo").prepend("<h1>Conversor de Medidas para Pociones</h1><h3>Convierte  medidas para preparar fácilmente tus pociones, y consigue que queden perfectas!!!</h3>");

    $("h1, h2.container d-none d-md-block ").hide().fadeIn(1000,function(){ 
        $("#listas").show().animate({left: '1%'}, "fast");
    });
}