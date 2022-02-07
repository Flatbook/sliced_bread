import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { OrderConfirmation } from "../App";

import axios from "axios";
import sjcl from "sjcl";
import "./styles/Form.css";
import { FaAngleDoubleLeft } from "react-icons/fa";

type Props = {
  toggleOrder: boolean;
  setToggleOrder: (boolean: boolean) => void;
  setOrderNumber: (number: number) => void;
  orderNumber: number | undefined;
  setOrderConfirmationDetails: (order: OrderConfirmation[]) => void;
};

interface FormInput {
  firstName: string;
  lastName: string;
  quantity: number;
  city: string;
  province: string;
  country: string;
}

interface OrderDetails {
  id: number;
  name: any;
  quantity: number;
  city: string;
  province: string;
  country: string;
}

export const Form: React.FC<Props> = ({
  setToggleOrder,
  toggleOrder,
  setOrderNumber,
  orderNumber,
  setOrderConfirmationDetails,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const [orderDetails, setOrderDetails] = useState<OrderDetails[]>([]);

  //logic for navigating to order confirmation page once order submited
  let navigate = useNavigate();
  const routeChange = (orderNumber: number) => {
    let path = `order-confirmation/order%number/${orderNumber}`;
    navigate(path);
  };

  // logic for posting form to backend
  const postOrder = () => {
    if (orderDetails.length !== 0) {
      axios
        .post(
          `http://localhost:5002/order/${orderDetails[0].id}`,
          orderDetails[0]
        )
        .then((res) => {
          console.log("RES", res.data);
          setOrderConfirmationDetails([res.data]);
          // setOrderNumber(res.data);
          routeChange(res.data.order_id);
        })
        .catch((err) => console.log(err));
    }
  };

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    // adding default values
    if (!data.firstName) {
      data.firstName = "Galit";
    }
    if (!data.lastName) {
      data.lastName = "Gerasimov";
    }
    if (!data.quantity) {
      data.quantity = 12;
    }
    // adding encryption of customer first and last name to protect user information
    let password: string = "encryptData71&$";
    let name: string = `${data.firstName} ${data.lastName}`;
    var parameters: any = { iter: 1000 };
    var rp: any = {};
    var cipherTextJson: any = {};

    sjcl.misc.cachedPbkdf2(password, parameters);
    cipherTextJson = sjcl.encrypt(password, name, parameters, rp);

    //creating an unique order id for each order
    let id: number = Math.floor(Math.random() * 100000);

    const { quantity, city, province, country } = data;
    setOrderDetails([
      { id, name: cipherTextJson, quantity, city, province, country },
    ]);
  };

  useEffect(() => {
    postOrder();
  }, [orderDetails]);

  return (
    <div>
      <FaAngleDoubleLeft
        style={{ fontSize: "20px" }}
        onClick={() => setToggleOrder(!toggleOrder)}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input placeholder="First Name" {...register("firstName")} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input placeholder="Last Name" {...register("lastName")} />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input placeholder="Quantity" {...register("quantity")} />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input placeholder="City" {...register("city", { required: true })} />
          {errors.city?.type === "required" && "City is Required"}
        </div>
        <div>
          <label htmlFor="province">State/Province</label>
          <input
            placeholder="State or Province"
            {...register("province", { required: true })}
          />
          {errors.province?.type === "required" && "Province is Required"}
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            placeholder="Country"
            {...register("country", { required: true })}
          />
          {errors.country?.type === "required" && "Country is Required"}
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
