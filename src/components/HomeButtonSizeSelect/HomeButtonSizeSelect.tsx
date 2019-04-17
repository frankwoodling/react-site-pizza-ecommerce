import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

interface IHomeButtonSizeSelectProps {
  textTop: string | number;
  textTopFontSize?: string; // ex: 15px or .8em
  textTopFontFamily?: string;
  textBottom: string | number;
  textBottomFontSize?: string; // ex: 15px or .8em
  textBottomFontFamily?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: "white",
      background: "#f04a3c",
      borderRadius: "50%",
      textTransform: "none",
      display: "inline-block",
      lineHeight: "14px"
    },
    text: {},
    textTop: {
      fontSize: 14,
      fontWeight: "bold",
      whiteSpace: "normal",
      lineHeight: "0px"
    },
    textBottom: {
      fontSize: 14,
      fontWeight: "lighter"
    }
  });

const HomeButtonSizeSelectBase = (props: any) => {
  const { classes } = props;

  return (
    <Fab className={classes.root} size="medium" color="secondary">
      <span className={classes.textTop}>22</span>
      <br />
      <span className={classes.textBottom}>cm</span>
    </Fab>
  );
};

const HomeButtonSizeSelect = withStyles(styles)(HomeButtonSizeSelectBase);

export { HomeButtonSizeSelect };
