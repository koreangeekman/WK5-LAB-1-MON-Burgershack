

export class Burger {
  constructor(data) {
    this.menuId = data.menuId
    this.name = data.name
    this.patties = data.patties || 1
    this.cheese = data.cheese || true
    this.sauce = data.sauce || true
    this.toppings = data.toppings || true
  }

}