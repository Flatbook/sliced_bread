import axios from "axios";
import {API_PREFIX} from "../constants/api.constant";

const instance = axios.create({
  // TODO: add token
  // headers: {
  //   'Accept':
  //   'X-Token': apiToken
  // },
});

const server = {
  getBestDrink : async<T> (): Promise<T> => {
    try {
      const res = await instance.get(`/${API_PREFIX}/get-best-drink`);
      return res.data;
    } catch (e) {
      throw Error("Can not get data from server");
    }
  },
};

export default server;