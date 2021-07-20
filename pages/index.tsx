import { useState } from "react";
import { Rating, Tag } from "../components/";
import { withLayout } from "../layout/Layout";

const Home = (): JSX.Element => {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Tag size="s">Small Ghost</Tag>
      <Tag size="s" color="red">
        Small Red
      </Tag>
      <Tag size="s" color="grey">
        Small Grey
      </Tag>
      <Tag color="green">Medium Green</Tag>
      <Tag color="primary">Medium Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default withLayout(Home);
