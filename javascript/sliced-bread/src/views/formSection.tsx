import React from "react";
import { Section } from "../components/section";
import {Form} from "../components/form";
import {SubmitHandler} from "react-hook-form";
import {RequestOrderType} from "../types/requestOrder.type";

export const FormSection:React.FC<{onSubmit: SubmitHandler<RequestOrderType>}> = ({onSubmit}) => {
    return (
        <Section>
            <Form onSubmit={onSubmit}/>
        </Section>
    )
}