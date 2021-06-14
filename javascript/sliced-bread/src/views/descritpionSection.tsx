import React from "react";
import { Section } from "../components/section";

export const DescriptionSection:React.FC<{title: string, des: string}> = ({title,des, children}) => {
    return (
        <Section>
            <h1>{title}</h1>
            {des}
        </Section>
    )
}