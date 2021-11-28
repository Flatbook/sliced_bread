import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";

const headers = {
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export const getOrders = async () => {
  return await axiosInstance.get("order/");
};

const sendOrder = async (data) => {
  const response = await axiosInstance.post("order/", data);
  const confirmationOrderLink =
    "http://localhost:3000/" + "order/" + response.data["orderNumber"];
  return { orderNumber: response.data["orderNumber"], confirmationOrderLink };
};

export const getOrderConfirmation = async (confirmationUID) => {
  console.log(baseURL + "order/" + confirmationUID);
  return axiosInstance.get(baseURL + "order/" + confirmationUID);
};

export default sendOrder;
