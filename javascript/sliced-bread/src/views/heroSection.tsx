import React from "react";
import {makeStyles} from "@material-ui/core";
import {Section} from "../components/section";
const useStyles = makeStyles((theme) => ({
  sectionIntro: {
      backgroundSize: "cover",
      backgroundBlendMode: "lighten",
      height: "70vh",
      backgroundImage: "linear-gradient(90deg, #c19898 0%, rgba(193, 152, 152, 0.9) 30%, transparent 100%), url(/images/holiday.jpeg)",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center"
  },
  sectionTitle: {
    color: "#4a4a48",
    marginBottom: theme.spacing(8),
    letterSpacing: theme.spacing(0.5),
  }
}));

export const HeroSection:React.FC = () => {
    const classes = useStyles();
    return (
        <Section customClassName={classes.sectionIntro}>
            <div>
                <h1 className={classes.sectionTitle}>Experience the most refreshing, travel and  holiday vibe of the beverage!</h1>
            </div>
        </Section>
    )
}