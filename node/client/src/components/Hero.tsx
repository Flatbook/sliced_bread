import { useState } from "react";
import "./styles/Hero.css";
import orangeVanilla from "../assets/orangeVanilla.jpg";
import { OrderConfirmation } from "../App";
import Form from "./Form";

type Props = {
  setOrderNumber: (number: number) => void;
  setOrderConfirmationDetails: (order: OrderConfirmation[]) => void;
  orderNumber: number | undefined;
};

export const Hero: React.FC<Props> = ({
  setOrderNumber,
  orderNumber,
  setOrderConfirmationDetails,
}) => {
  const [toggleOrder, setToggleOrder] = useState<boolean>(false);

  return (
    <div className="hero-container">
      <div className="text-wraper">
        <h1>LeSeltzer</h1>

        {toggleOrder ? (
          <Form
            setOrderNumber={setOrderNumber}
            toggleOrder={toggleOrder}
            setToggleOrder={setToggleOrder}
            orderNumber={orderNumber}
            setOrderConfirmationDetails={setOrderConfirmationDetails}
          />
        ) : (
          <>
            <h4>
              A classic seltzer with a twist! Our natural flavours are exciting
              & little bold, with just the right amount of carbonation.
            </h4>
            <h4 className="secondary-text">
              We are 100% family owned, and made in Montréal.
            </h4>
            <button
              className="button"
              onClick={() => setToggleOrder(!toggleOrder)}
            >
              Pre-order today
            </button>
          </>
        )}
      </div>
      <div className="image-wraper">
        <img src={orangeVanilla} />
      </div>
    </div>
  );
};

export default Hero;
