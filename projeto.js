const precoCombustivel = 5.40;
const KmPorLitro = 21.7;
const distanciaKm = 607; 

const litrosCosumidos = distanciaKm / KmPorLitro; 
const ValorGasto = litrosCosumidos * precoCombustivel;

console.log(ValorGasto.toFixed(2))
