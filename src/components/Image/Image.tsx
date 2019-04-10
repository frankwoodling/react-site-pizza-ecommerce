import * as React from "react";
interface IImageProps {
  height?: number;
  width?: number;
  backgroundColor?: string;
  stretch?: boolean;
  image: string;
}

const ImageView: React.FC<IImageProps> = props => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        overflow: "hidden",
        backgroundColor: props.backgroundColor
      }}
    >
      <img
        src={props.image}
        style={{
          height: props.stretch ? "100%" : undefined,
          width: props.stretch ? "100%" : undefined
        }}
      />
    </div>
  );
};

export { ImageView, IImageProps };
