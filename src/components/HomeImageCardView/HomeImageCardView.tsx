import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

interface IHomeImageCardViewProps {}

// const HomeImageCardView: React.FC<IHomeImageCardViewProps> = props => {
const HomeImageCardView: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/360x320/"
        />
      </CardContent>
    </Card>
  );
};

export { HomeImageCardView, IHomeImageCardViewProps };
