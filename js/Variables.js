import { Medidor_de_Volumen, Medidor_de_Peso} from "./Medidores.js";

export const nombre = prompt('¿Cuál es tu nombre?');

///unidades de volumen
export const mililitros = new Medidor_de_Volumen("mililitros", 1);
export const litros = new Medidor_de_Volumen("litros", 1000);
export const medio_litro = new Medidor_de_Volumen("1/2 litro", 500);

export const tazas = new Medidor_de_Volumen("tazas", 250);
export const tres_cuarto_taza = new Medidor_de_Volumen ("3/4 de taza", 187.5)
export const dos_tercios_taza = new Medidor_de_Volumen ("2/3 de taza", 166.66)
export const media_taza = new Medidor_de_Volumen ("1/2 taza", 125)
export const tercio_taza = new Medidor_de_Volumen ("1/3 de taza", 83.33)
export const cuarto_taza = new Medidor_de_Volumen ("1/4 de taza", 62.5)

export const cucharadas = new Medidor_de_Volumen("cucharadas", 15);
export const media_cucharada = new Medidor_de_Volumen("1/2 cucharada", 7.5);
export const cucharaditas = new Medidor_de_Volumen ("cucharaditas", 5)
export const media_cdita = new Medidor_de_Volumen ("1/2 cucharadita", 2.5)
export const cuarto_cdita = new Medidor_de_Volumen ("1/4 cucharadita", 1.25)

///unidades de peso
export const miligramos = new Medidor_de_Peso ("miligramos", 0.001);
export const gramos = new Medidor_de_Peso ("gramos", 1);
export const kilogramos = new Medidor_de_Peso ("kilogramos", 1000);
export const cuarto_kilo = new Medidor_de_Peso ("1/4 de kilo", 250);
export const medio_kilo = new Medidor_de_Peso ("1/2 kilo", 500);


export const unidades_todas = [miligramos, gramos, kilogramos, cuarto_kilo, medio_kilo, mililitros, litros, medio_litro, tazas, tres_cuarto_taza, dos_tercios_taza, media_taza, tercio_taza, cuarto_taza, cucharadas, media_cucharada, cucharaditas, media_cdita, cuarto_cdita];
