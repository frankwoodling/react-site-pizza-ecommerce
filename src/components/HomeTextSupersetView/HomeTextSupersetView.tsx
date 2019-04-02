import React from "react";
import PropTypes from "prop-types";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

interface IHomeTextSupersetViewProps {
  textMain: string | number;
  textSuper: string | number;
}

interface IHomeTextSupersetViewFontStyles {
  textMainFontSize: number;
  textSuperFrontSize: number;
}

const textMain = 19,
  textSuper = 95,
  textMainFontSize = 20,
  textSuperFontSize = 15;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      //font: "Yanone Kaffeesatz"
      fontSize: textMainFontSize + "px"
    },
    textSuper: {
      fontSize: textSuperFontSize + "px"
    }
  });

const HomeTextSupersetViewBase = (props: any) => {
  const { classes } = props;

  return (
    <div>
      <span className={classes.root}>{textMain}</span>
      <sup className={classes.textSuper}>{textSuper}</sup>
    </div>
  );
};

/*
<p style="font-family: 'Yanone Kaffeesatz'"><span style="font-size: 35px">12</span>
<sup style="font-size: 20px">95</sup></p>

  <Button className={classes.root} size="large" variant="raised">
    <ShoppingCartOutlined className={classes.shoppingCart} />
    Add to Cart
  </Button>
*/

const HomeTextSupersetView = withStyles(styles)(HomeTextSupersetViewBase);

export { HomeTextSupersetView };
