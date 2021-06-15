import axios from "axios";
import {API_PREFIX, DOMAIN} from "../constants/api.constant";
import qs from "querystring";
import {RequestOrderType} from "../types/requestOrder.type";
import {OrderType} from "../types/order.type";
import {DrinkType} from "../types/drink.type";

const instance = axios.create({
  baseURL: `/${API_PREFIX}`,
  // TODO: add token
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

const generateOrderUrl = (orderId: string) => (`${DOMAIN}/order/${orderId}`)

const server = {
  getBestDrink : async(): Promise<DrinkType> => {
    try {
      const res = await instance.get("/get-best-drink");
      return res.data;
    } catch (e) {
      throw Error("Can not get data from server");
    }
  },
  placeOrder : async (params:RequestOrderType): Promise<string> => {
    try {
      const { data } = await instance.post(`/place-order`, qs.stringify(params));

      const orderId: OrderType["order_id"] = data;

      return generateOrderUrl(orderId);

    } catch (e) {
      throw Error("Can not get data from server");
    }
  },

  getOrder : async (orderId: string): Promise<OrderType> => {
    try {
      const res = await instance.get(`/order/${orderId}`);
      return res?.data;
    } catch (e) {
      throw Error(e);
    }
  },
};

export default server;