import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

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

const ButtonCartBase = (props: any) => {
  const { classes } = props;

  return (
    <Button className={classes.root} size="large" variant="contained">
      <ShoppingCartOutlined className={classes.shoppingCart} />
      Add to Cart
    </Button>
  );
};

const ButtonCart = withStyles(styles)(ButtonCartBase);

export { ButtonCart };
