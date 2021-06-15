import React from "react";
import { Section } from "../components/section";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const SuccessSection:React.FC<{orderUrl: string}> = ({orderUrl}) => {
    return (
        <Section>
            <Typography variant="h2" component="h2">
              Thanks!
            </Typography>
             <Typography variant="body2" component="p">
              You can check your order here:
            </Typography>

            <Link href={orderUrl}>
                {orderUrl}
            </Link>
        </Section>
    )
}