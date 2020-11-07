
// const esMatrizCuadrada = (matriz) => {
//   for (let i = 0; i < matriz.length; i++) {
//     if (matriz.length !== matriz[i].length) {
//       return false
//     }
//   }
//   return true 
// }

// console.log(esMatrizCuadrada([
//   [4, 5], 
//   [2, 7, 1],
//   [8, 10, 2], 
// ])) // false

// console.log(esMatrizCuadrada([
//   [4, 5, 3],
//   [2, 7, 1],
//   [8, 10],
// ])) // false

// console.log(esMatrizCuadrada([
//   [4, 5, 9],
//   [2, 7, 1],
//   [8, 10, 5],
// ])) // true

// const matriz = []

// for (let i = 0; i < 5; i++) {
//   matriz[i] = []
//   for (let j = 0; j < 5; j++) {
//     // matriz[i][j] = "hola" 
//      matriz[i].push("hola")
//   }
// }

// console.log(matriz)


// const obtenerNumeroAlAzar = (array) => {
//   return Math.floor(Math.random() * array.length)
// }

const arrayAlAzar = (array) => {
  const array2 = []
 
  for (let i = 0; i < array; i++) {
    // NO ESTA TERMINADO array[obtenerNumeroAlAzar(array)]
  }
  return array
}

console.log(arrayAlAzar(["a", "b", "c"]))
