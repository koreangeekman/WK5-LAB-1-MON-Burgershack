import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";


export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:menuId', this.getBurgersById)
      .post('', this.createBurger)
      .delete('/:menuId', this.removeBurger)
  }

  async getBurgers(req, res, nxt) {
    try {
      const burgers = await burgerService.getBurgers();
      return res.send(burgers)
    } catch (error) {
      nxt(error);
    }
  }

  async getBurgersById(req, res, nxt) {
    try {
      const burger = await burgerService.getBurgersById(req.params.menuId)
      return res.send(burger)
    } catch (error) {
      nxt(error)
    }
  }

  async createBurger(req, res, nxt) {
    try {
      console.log(req.body);
      const burger = await burgerService.createBurger(req.body);
      return res.send(burger)
    } catch (error) {
      nxt(error);
    }
  }

  async removeBurger(req, res, nxt) {
    try {
      const results = await burgerService.removeBurger(req.params.menuId)
      return res.send('burger object deleted')
      // return res.send(results)
    } catch (error) {
      nxt(error)
    }
  }
}