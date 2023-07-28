// Destructuring desestrutura dados complexos em várias variáveis 
// Podemos utilizar em arrays e objetos 

const fruits = [ 'banana', 'maçã', 'uva' ]
const [f1, f2, f3] = fruits
console.log(f1, f2, f3)

const productDetails = {
  name: 'Mouse',
  price: 50,
  category : 'Electronics',
  color : 'white'
}
const {name: productName, price, category, color} = productDetails
console.log(`O nome do produto é ${productName} e o preco é R$${price}, categoria ${category},cor ${color}`)