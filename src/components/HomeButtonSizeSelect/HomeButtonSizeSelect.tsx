import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: 200,
      height: 45,
      fontSize: 14,
      color: "white",
      background: "#f04a3c",
      boxShadow: "none",
      borderRadius: 50,
      margin: "30px",
      textTransform: "none"
    },
    shoppingCart: {
      paddingRight: "15px"
    }
  });

const HomeButtonSizeSelectBase = (props: any) => {
  const { classes } = props;

  return (
    <Button className={classes.root} size="large" variant="contained">
      test
    </Button>
  );
};

const HomeButtonSizeSelect = withStyles(styles)(HomeButtonSizeSelectBase);

export { HomeButtonSizeSelect };
