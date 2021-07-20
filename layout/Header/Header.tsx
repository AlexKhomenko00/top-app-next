import { DetailedHTMLProps, HTMLAttributes } from "react";

const Header = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => {
  return <div {...props}>Header</div>;
};

export default Header;
