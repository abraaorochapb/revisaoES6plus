// map também é um metodo de array, percorre todos os items do mesmo
// o map é utilizado para modificar o array de origem
// Filter remove elementos desnecessários, map altera os que precisamos

const products = [
  {name: 'Arroz', price: 5, category: 'food'},
  {name: 'Feijão', price: 10, category: 'food'},
  {name: 'Macarrao', price: 15, category: 'food'},
  {name: 'Whisky', price: 15, category: 'drink'},
  {name: 'Coca Cola', price: 10, category: 'drink'},
]

products.map((product) => {
  if(product.category === 'food'){
    product.onSale = true
  }
})
console.log(products)