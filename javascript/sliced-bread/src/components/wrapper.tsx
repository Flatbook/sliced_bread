import React from "react";
import MuiAppBar from '@material-ui/core/AppBar';
import {makeStyles} from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.common.white,
        background: theme.palette.primary.main
    },
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: ".8rem",
        fontSize: "1rem",
        color: "#f7f7f7f7"
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
            <div>
                {children}
            </div>
            <footer className={classes.footer}>
                Made @ 2021
            </footer>
        </>
    )
}