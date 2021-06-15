import React, {useEffect, useState} from "react";
import { Page } from "../components/page";
import {FormSection} from "../views/formSection";
import {DescriptionSection} from "../views/descritpionSection";
import {HeroSection} from "../views/heroSection";
import Server from "../server/server";
import {DrinkType} from "../types/drink.type";
import {SubmitHandler} from "react-hook-form";
import {RequestOrderType} from "../types/requestOrder.type";
import {SuccessSection} from "../views/successSection";

export function Drink(){
    const [drink, setDrink] = useState<DrinkType>(Object.create(null));
    const [orderUrl, setOrderUrl] = useState<string>("");

    useEffect(  () => {
        Server.getBestDrink().then((res)=> {
            setDrink(res);
        });
    },[])


    const onSubmitPlaceOrder: SubmitHandler<RequestOrderType> = async data => {
        const generatedOrderUrl = await Server.placeOrder(data);
        setOrderUrl(generatedOrderUrl);
    };

    return (
        <Page>
            <HeroSection />
            <DescriptionSection title={drink.name} des={drink.description} />
            <FormSection onSubmit={onSubmitPlaceOrder}/>
            { !!orderUrl && <SuccessSection orderUrl={orderUrl} /> }
        </Page>
    )
}