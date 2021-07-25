import React from "react";
import { withLayout } from "../layout/Layout";

const SearchPage = (): JSX.Element => {
  return (
    <div>
      <label htmlFor="search">Find something</label>
      <input type="text" name="search" id="search" />
    </div>
  );
};

export default withLayout(SearchPage);
