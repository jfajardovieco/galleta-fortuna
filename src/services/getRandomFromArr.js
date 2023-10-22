const getRandomFromArr = arr =>{
const indexRandom = Math.floor((Math.random() * arr.length)) //Se calcula alateoramente un indice de un arreglo

return arr[indexRandom]

}

export default getRandomFromArr