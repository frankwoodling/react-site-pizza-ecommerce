import * as React from "react";

interface IHomeTextSupersetViewProps {
  textMain: string | number;
  textMainFontSize?: string; // ex: 15px or .8em
  textMainFontFamily?: string;
  textMainColor?: string;
  textSuper: string | number;
  textSuperFontSize?: string;
  textSuperFontFamily?: string;
  textSuperColor?: string;
}

const HomeTextSupersetView: React.FC<IHomeTextSupersetViewProps> = props => {
  return (
    <div>
      <span
        style={{
          fontSize: props.textMainFontSize,
          fontFamily: props.textMainFontFamily,
          color: props.textMainColor
        }}
      >
        {props.textMain}
      </span>
      <sup
        style={{
          fontSize: props.textSuperFontSize,
          fontFamily: props.textSuperFontFamily,
          color: props.textSuperColor
        }}
      >
        {props.textSuper}
      </sup>
    </div>
  );
};

export { HomeTextSupersetView, IHomeTextSupersetViewProps };
