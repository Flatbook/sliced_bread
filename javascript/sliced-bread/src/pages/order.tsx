import React, {useEffect, useState} from "react";
import { Page } from "../components/page";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Server from "../server/server";
import {OrderType} from "../types/order.type";


export const Order:React.FC<{id: string}> = ({id}) => {
    const [order, setOrder] = useState<OrderType>(Object.create(null));

    useEffect(  () => {
        Server.getOrder(id).then((res)=> {
            setOrder(res);
        });
    },[])

    return (
        <Page>
            <Typography variant="h3" component="h3">
              Here's your order information!
            </Typography>

            <List>
                {
                    Object.entries(order).map(([key, value]) => (
                        <ListItem>
                            <ListItemText primary={key} secondary={value} />
                        </ListItem>
                    ))
                }
            </List>

        </Page>
    )
}