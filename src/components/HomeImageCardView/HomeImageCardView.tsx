import * as React from "react";
interface IHomeImageCardViewProps {
  height?: number;
  width?: number;
  image: string;
}

const HomeImageCardView: React.FC<IHomeImageCardViewProps> = props => {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        overflow: "hidden"
      }}
    >
      <img src={props.image} />
    </div>
  );
};

export { HomeImageCardView, IHomeImageCardViewProps };
