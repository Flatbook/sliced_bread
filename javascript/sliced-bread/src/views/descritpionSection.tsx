import React from "react";
import { Section } from "../components/section";
import { Container, Typography } from "@material-ui/core";

export const DescriptionSection:React.FC<{title: string, des: string}> = ({title,des, children}) => {
    return (
        <Section>
            <Typography variant="h3">{title}</Typography>
            <Container maxWidth="sm">
                <Typography variant={"body1"}>
                    {des}
                </Typography>
            </Container>
        </Section>
    )
}