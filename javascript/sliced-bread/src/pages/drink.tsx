import React from "react";
import { Page } from "../components/page";

export const Drink:React.FC<{title: string}> = ({title}) => {
    return (
        <Page title={title}>
            amazing drink
        </Page>
    )
}