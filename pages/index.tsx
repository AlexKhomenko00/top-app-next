import { GetStaticProps } from "next";
import { useState } from "react";
import axios from "axios";

import { Rating, Tag } from "../components/";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";

const Home = ({ menu, firstCategory }: HomeProps): JSX.Element => {
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

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
