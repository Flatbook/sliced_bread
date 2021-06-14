import React from "react";
import { Page } from "../components/page";

export const Order:React.FC<{id: string}> = ({id}) => {
    return (
        <Page>
            <h1>order id: {id}</h1>
        </Page>
    )
}