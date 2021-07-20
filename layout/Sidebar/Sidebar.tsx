import { DetailedHTMLProps, HTMLAttributes } from "react";

const Sidebar = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
