import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles/Form.css";
import { FaAngleDoubleLeft } from "react-icons/fa";

type Props = {
  toggleOrder: boolean;
  setToggleOrder: (boolean: boolean) => void;
};

interface FormInput {
  firstName: string;
  lastName: string;
  quantity: number;
  city: string;
  province: string;
  country: string;
}

export const Form: React.FC<Props> = ({ setToggleOrder, toggleOrder }) => {
  const { register, handleSubmit } = useForm<FormInput>();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `order-confirmation`;
    navigate(path);
  };

  const onSubmit: SubmitHandler<FormInput> = ({
    firstName,
    lastName,
    quantity,
    city,
    province,
    country,
  }) => {
    // adding default values
    if (!firstName) {
      firstName = "Galit";
    }
    if (!lastName) {
      lastName = "Gerasimov";
    }
    if (!quantity) {
      quantity = 15;
    }
    routeChange();
    console.log(firstName, lastName, quantity, city, province, country);
  };

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
        </div>
        <div>
          <label htmlFor="state/province">State/Province</label>
          <input
            placeholder="State or Province"
            {...register("province", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            placeholder="Country"
            {...register("country", { required: true })}
          />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
