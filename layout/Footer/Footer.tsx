import { DetailedHTMLProps, HTMLAttributes } from "react";

const Footer = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => {
  return <div {...props}>Footer</div>;
};

export default Footer;
