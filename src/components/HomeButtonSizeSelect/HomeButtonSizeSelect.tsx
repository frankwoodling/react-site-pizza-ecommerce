import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      fontSize: 14,
      color: "white",
      background: "#f04a3c",
      borderRadius: "50%",
      textTransform: "none",
      display: "inline-block",
      lineHeight: "14px"
    },
    text: {
      padding: "0px",
      margin: "0px",
      whiteSpace: "normal",
      display: "inline-block",
      lineHeight: "0px"
    }
  });

const HomeButtonSizeSelectBase = (props: any) => {
  const { classes } = props;

  return (
    <Fab className={classes.root} size="medium" color="secondary">
      <span className={classes.text}>22</span>
      <br />
      <span className={classes.text}>cm</span>
    </Fab>
  );
};

const HomeButtonSizeSelect = withStyles(styles)(HomeButtonSizeSelectBase);

export { HomeButtonSizeSelect };
