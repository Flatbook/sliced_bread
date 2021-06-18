import React from "react";
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export const Section:React.FC<{customClassName?:string}> = ({ customClassName, children}) => {
    const classes = useStyles();
    return (
        <section className={`${classes.section} ${customClassName}`}>
            {children}
        </section>
    )
}