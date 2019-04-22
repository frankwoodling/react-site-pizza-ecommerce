import React from "react";
import Button from "@material-ui/core/Button";

enum FontWeight {
  NORMAL = "normal",
  BOLD = "bold",
  BOLDER = "bolder",
  LIGHTER = "lighter"
}

interface IHomeButtonSizeSelectProps {
  buttonSize: string; // Sets height, width, min height, min width to ensure a circle is created
  backgroundColor: string;
  lineHeight: string; // Should be roughly the same as the font size
  textTop: string | number;
  textTopColor?: string;
  textTopFontSize?: string; // ex: 15px or .8em
  textTopFontFamily?: string;
  textTopFontWeight?: FontWeight;
  textBottom: string | number;
  textBottomColor?: string;
  textBottomFontSize?: string;
  textBottomFontFamily?: string;
  textBottomFontWeight?: FontWeight;
  onClick?: () => void;
}

const HomeButtonSizeSelect: React.FC<IHomeButtonSizeSelectProps> = props => {
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
      onClick={props.onClick}
    >
      <span
        style={{
          color: props.textTopColor,
          fontSize: props.textTopFontSize,
          fontWeight: props.textTopFontWeight
        }}
      >
        {props.textTop}
      </span>
      <br />
      <span
        style={{
          color: props.textBottomColor,
          fontSize: props.textBottomFontSize,
          fontWeight: props.textBottomFontWeight
        }}
      >
        {props.textBottom}
      </span>
    </Button>
  );
};
/*
HomeButtonSizeSelect.defaultProps = {
  textTopColor: "black",
  textTopFontSize: "14px",
  textTopFontFamily: "Yanone Kaffeesatz",
  textTopFontWeight: FontWeight.BOLDER,
  textBottomColor: "black",
  textBottomFontSize: "14px",
  textBottomFontFamily: "Yanone Kaffeesatz",
  textBottomFontWeight: FontWeight.NORMAL
};
*/
export { HomeButtonSizeSelect };
