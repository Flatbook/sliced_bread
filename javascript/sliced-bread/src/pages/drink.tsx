import React, {useEffect, useState} from "react";
import { Page } from "../components/page";
import {FormSection} from "../views/formSection";
import {DescriptionSection} from "../views/descritpionSection";
import {HeroSection} from "../views/heroSection";
import Server from "../server/server";
import {DrinkType} from "../types/drink.type";

export function Drink(){

    const [drink, setDrink] = useState<DrinkType>(Object.create(null));

    useEffect(  () => {
        Server.getBestDrink<DrinkType>().then((res)=> {
            setDrink(res);
        });
    },[])

    return (
        <Page>
            <HeroSection />
            <DescriptionSection title={drink.name} des={drink.description} />
            <FormSection />
        </Page>
    )
}