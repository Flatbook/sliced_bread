import { ReactChild, useState } from "react";
import "./styles/Hero.css";
import drinkPhoto from "../assets/drinkPhoto.jpg";
import orangeVanilla from "../assets/orangeVanilla.jpg";
import Form from "./Form";

export const Hero = () => {
  const [toggleOrder, setToggleOrder] = useState<boolean>(false);

  return (
    <div className="hero-container">
      <div className="text-wraper">
        <h1>LeSeltzer</h1>
        <h4>
          A classic seltzer with a twist! Our natural flavours are exciting &
          little bold, with just the right amount of carbonation.
        </h4>
        <h3>We are 100% family owned, and made in Montréal.</h3>

        {toggleOrder ? (
          <Form />
        ) : (
          <button
            className="button"
            onClick={() => setToggleOrder(!toggleOrder)}
          >
            Pre-order today
          </button>
        )}
      </div>
      <div className="image-wraper">
        <img src={orangeVanilla} />
      </div>
    </div>
  );
};

export default Hero;
