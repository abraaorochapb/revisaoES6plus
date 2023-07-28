// Herança é um recurso que da possibilidade de uma classe herdar métodos e propriedades de outra
// A palavra 'extends' determina qual classe será herdada
// Para enviar os propriedades para a classe pai usamos o 'super'

class product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
  productWithDiscount(discount) {
    return this.price * ((100 - discount)/100)
  }
}

class productWithAttributes extends product {
  constructor(name, price, colors) {
    super(name, price)
    this.colors = colors
  }

  showColors() {
    console.log(`As cores são:`)
    this.colors.forEach((color) => {
      console.log(color)
    })
  }
}

const Mouse = new productWithAttributes('Mouse', 50, ['Preto', 'Branco', 'Azul'])
console.log(Mouse)
Mouse.showColors()