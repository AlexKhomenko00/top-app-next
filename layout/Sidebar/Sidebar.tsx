import { DetailedHTMLProps, HTMLAttributes } from "react";
import Menu from "../Menu/Menu";

const Sidebar = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
