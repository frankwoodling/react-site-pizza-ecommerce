import React from "react";

interface IHomeTextSupersetViewProps {
  textMain: string | number;
  textMainFontSize?: string; // ex: 15px or .8em
  textMainFontFamily?: string;
  textSuper: string | number;
  textSuperFontSize?: string;
  textSuperFontFamily?: string;
}

const HomeTextSupersetView: React.FC<IHomeTextSupersetViewProps> = props => {
  return (
    <div>
      <span
        style={{
          fontSize: props.textMainFontSize,
          fontFamily: props.textMainFontFamily
        }}
      >
        {props.textMain}
      </span>
      <sup
        style={{
          fontSize: props.textSuperFontSize,
          fontFamily: props.textSuperFontFamily
        }}
      >
        {props.textSuper}
      </sup>
    </div>
  );
};

export { HomeTextSupersetView, IHomeTextSupersetViewProps };
