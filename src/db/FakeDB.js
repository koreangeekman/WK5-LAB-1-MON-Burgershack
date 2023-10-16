import { Burger } from "../models/Burger.js";

class FakeDB {
  constructor() {
    this.burgers = [
      new Burger({ name: 'basic', menuId: 1 }),
      new Burger({ name: 'double', menuId: 2, patties: 2 }),
      new Burger({ name: 'triple', menuId: 3, patties: 3 })
    ]
  }
}

export const fakeDB = new FakeDB();