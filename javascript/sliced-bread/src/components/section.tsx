import React from "react";
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export const Section:React.FC = ({children}) => {
    const classes = useStyles();
    return (
        <section className={classes.section}>
            {children}
        </section>
    )
}