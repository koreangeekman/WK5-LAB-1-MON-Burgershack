import { fakeDB } from "../db/fakeDB.js";
import { Burger } from "../models/Burger.js";
import { BadRequest } from "../utils/Errors.js";


class BurgerService {

  async getBurgers() { // no try-catch?
    const burgers = await fakeDB.burgers
    return burgers
  }

  async getBurgersById(id) {
    const burger = await fakeDB.burgers.find(b => b.menuId == id)
    if (!burger) {
      throw new BadRequest(`Invalid Menu ID: ${id}`)
    }
    return burger
  }

  async createBurger(data) {
    data.menuId = fakeDB.burgers.length + 1; // temp ID assignment, needs to be smarter for unique IDs
    const burgerData = new Burger(data);
    await fakeDB.burgers.push(burgerData)
    return burgerData
  }

  async removeBurger(id) {
    const burgerIndex = fakeDB.burgers.findIndex(b => b.menuId == id);
    if (burgerIndex == -1) {
      throw new BadRequest(`Invalid Menu ID: ${id}`)
    }
    await fakeDB.burgers.splice(burgerIndex, 1);
    return
  }

  async updateBurger(id, body) {
    const burgerIndex = await fakeDB.burgers.findIndex(b => b.menuId == id);
    if (burgerIndex == -1) {
      throw new BadRequest()
    }
    const burger = fakeDB.burgers[burgerIndex];
    // const newBurger = 
    // const result = await fakeDB.burgers.splice(burgerIndex, 1, newBurger);
  }
}

export const burgerService = new BurgerService();