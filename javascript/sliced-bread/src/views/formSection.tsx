import React from "react";
import { Section } from "../components/section";
import {Form} from "../components/form";
import {SubmitHandler} from "react-hook-form";
import {RequestOrderType} from "../types/requestOrder.type";
import { Typography } from "@material-ui/core";

export const FormSection:React.FC<{onSubmit: SubmitHandler<RequestOrderType>}> = ({onSubmit}) => {
    return (
        <Section >
            <Typography variant="h3">Enjoy the drink now, pay me later</Typography>
            <Form onSubmit={onSubmit}/>
        </Section>
    )
}