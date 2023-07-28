// Filter é um metodo de array para filtrar dados , o filtro é determinado por nós, por meio de uma função
// Resultado em um Array com apenas is ekenebtis que precisamos 

const arr = [1,2,3,4,5,6,7,8,9,10]
const bigNumbers = arr.filter((i) => {
  if (i >=5) {
    return i
  }
})
console.log(bigNumbers)

const users = [
  {name: 'Ana', avaiable: true},
  {name: 'Bia', avaiable: true},
  {name: 'Carlos', avaiable: false},
  {name: 'Daniel', avaiable: true},
  {name: 'Eduardo', avaiable: false},
  {name: 'Fernanda', avaiable: false}
]
const avaiableUsers = users.filter((user) => {
  return user.avaiable
})
console.log(avaiableUsers)