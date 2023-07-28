class product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount)/100)
  }
}

const pants = new product('Pants', 50)
console.log(pants)
console.log(pants.productWithDiscount(10))
console.log(pants.productWithDiscount(20))