import * as Vari from "./Variables.js"
import { guardarLocal, capitalizarPrimeraLetra } from "./Funciones.js"; 

guardarLocal("nombre", Vari.nombre)
export let nombre_JSON = localStorage.getItem("nombre");

nombre_JSON = capitalizarPrimeraLetra(nombre_JSON);
$("#saludo").prepend(`<p>Hola ${nombre_JSON} </p>`);
console.log(nombre_JSON)

for (let unidad of Vari.unidades_todas) {
guardarLocal(unidad.obtener_nombre_medida, JSON.stringify(Vari.unidades_todas));
}

export let unidades_todas_enJSON = JSON.stringify(Vari.unidades_todas);

guardarLocal("Unidades_enJSON", unidades_todas_enJSON)

export let unidades_todas_parseJSON = JSON.parse(localStorage.getItem("Unidades_enJSON"));

export function unidad_parseada (){
    for (let unidad in unidades_todas_parseJSON){
        console.log(unidades_todas_parseJSON[unidad].nombre_medida);
    }
}