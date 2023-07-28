// O Spread pode ser utilizado em Arrays e Objetos
// Utilizamos para inserir novos valores em um array ou objeto 
// É um recurso que pode unir dois Arrays, por exemplo

const arr1 = ['a', 'b', 'c']
const arr2 = ['d', 'e', 'f']

const arr3 = [...arr1, ...arr2]

console.log(arr3)

// se nao tivessemos o metodo spread teriamos de digitar muito mais código:

const arr4 = (arr1, arr2) => {
  for ( i of arr2){
    arr1.push(i)
  }
  return arr1
}

console.log(arr4(arr1, arr2))

// também podemos intercalar valores: 
const arr5 = ['z', ...arr3, 'g']
console.log(arr5)


// exemplo com objetos

const carName = {name: 'fusca'}
const carBrand = {brand: 'VW'}
const carPrice = {price: 'R$ 20.000'}
const carKM = {Kilometers: '200.000'}

const car = {...carName, ...carBrand, ...carPrice, ...carKM}
console.log(car)