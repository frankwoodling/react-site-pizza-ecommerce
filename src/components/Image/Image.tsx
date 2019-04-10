import * as React from "react";
interface IImageProps {
  height?: number;
  width?: number;
  fitImage?: "width" | "height" | "stretch";
  image: string;
}

const ImageView: React.FC<IImageProps> = props => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        overflow: "hidden"
      }}
    >
      <img
        src={props.image}
        style={{
          width: "100%" // props.width,
          // height: "100%" //props.height,
        }}
      />
    </div>
  );
};

export { ImageView, IImageProps };

// To keep aspect ratio keep only width or height in img element
