import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface IHomeButtonSizeSelectProps {
  buttonSize: string; // Sets height, width, min height, min width to ensure a circle is created
  backgroundColor: string;
  lineHeight: string; // Should be roughly the same as the font size
  textTop: string | number;
  textTopColor: string;
  textTopFontSize?: string; // ex: 15px or .8em
  textTopFontFamily?: string;
  textBottom: string | number;
  textBottomColor: string;
  textBottomFontSize?: string;
  textBottomFontFamily?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "blue", //"#FFCD00",
      borderRadius: "50%",
      textTransform: "none",
      display: "inline-block",
      lineHeight: "14px",
      height: "50px",
      width: "50px",
      minHeight: "50px",
      minWidth: "50px"
    },
    textTop: {
      color: "black",
      fontSize: 14,
      fontWeight: "bold",
      whiteSpace: "normal",
      lineHeight: "0px"
    },
    textBottom: {
      color: "black",
      fontSize: 14,
      fontWeight: "lighter"
    }
  });

const HomeButtonSizeSelectBase: React.FC<
  IHomeButtonSizeSelectProps
> = props => {
  return (
    <Button
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: "50%",
        textTransform: "none",
        display: "inline-block",
        lineHeight: props.lineHeight,
        height: props.buttonSize,
        width: props.buttonSize,
        minHeight: props.buttonSize,
        minWidth: props.buttonSize
      }}
    >
      <span>22</span>
      <br />
      <span>cm</span>
    </Button>
  );
};

const HomeButtonSizeSelect = withStyles(styles)(HomeButtonSizeSelectBase);

export { HomeButtonSizeSelect, IHomeButtonSizeSelectProps };
