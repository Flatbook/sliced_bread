import React from "react";
import { Page } from "../components/page";
import {FormSection} from "../views/formSection";
import {DescriptionSection} from "../views/descritpionSection";
import {HeroSection} from "../views/heroSection";

export const Drink:React.FC<{title: string}> = ({title}) => {
    return (
        <Page>
            <HeroSection />
            <DescriptionSection title={title} des="How good is this drink"/>
            <FormSection />
        </Page>
    )
}