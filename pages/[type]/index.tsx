import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";

import { firstLevelMenu } from "../../helpers/helpers";

import { MenuItem } from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../interfaces/page.interface";

import { withLayout } from "../../layout/Layout";

const SearchPage = ({ firstCategory }: SearchPageProps): JSX.Element => {
  return <>Type: {TopLevelCategory[firstCategory]}</>;
};

export default withLayout(SearchPage);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => "/" + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory: firstCategoryItem.id,
    }
  );
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface SearchPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
