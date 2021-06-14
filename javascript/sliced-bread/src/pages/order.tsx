import React from "react";
import { Page } from "../components/page";

export const Order:React.FC<{id: string}> = ({id}) => {
    return (
        <Page title={"order page"}>
            <h1>order id: {id}</h1>
            amazing drink
        </Page>
    )
}