import React from "react";
import MuiAppBar from '@material-ui/core/AppBar';
import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { secondaryColor, primaryColor } from "../constants/style.constants";

const useStyles = makeStyles((theme) => ({
    root: {
        color: secondaryColor,
        background: theme.palette.common.white,
        padding: theme.spacing(2)
    },
    footer: {
        backgroundColor: primaryColor,
        padding: ".8rem",
        fontSize: "1rem",
        color: secondaryColor
    },
    title: {
        fontSize: "1.6rem"
    }
}));

export const Wrapper:React.FC = ({children}) => {
    const classes = useStyles();

    return (
        <>
            <MuiAppBar elevation={0} position="static" className={classes.root}>
              <Link
                variant="h6"
                underline="none"
                color="inherit"
                className={classes.title}
                href="/"
              >
                Welcome
              </Link>
            </MuiAppBar>
            {children}
            <footer className={classes.footer}>
                Made @ 2021
            </footer>
        </>
    )
}