import React from "react";
import {Drink} from "./drink";
import {FormSection} from "../views/formSection";
import {DescriptionSection} from "../views/descritpionSection";
import {HeroSection} from "../views/heroSection";
import {shallow} from "../setupTest";


describe("<Drink />", () => {
  test("should render page sections", () => {
	const drink = shallow(<Drink/>);
	const testDrink = {
	  title: "drink title",
      des: "drink description"
    }
	expect(drink.containsAnyMatchingElements([
      <HeroSection />,
      <DescriptionSection title={testDrink.title} des={testDrink.des} />,
      <FormSection onSubmit={() => {}} />
    ])).toBeTruthy();
  });
});