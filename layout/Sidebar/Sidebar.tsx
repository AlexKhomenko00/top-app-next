import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";

import Menu from "../Menu/Menu";

import Logo from "../Logo.svg";

import s from "./Sidebar.module.css";

const Sidebar = ({
  className,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element => {
  return (
    <div className={cn(className, s.sidebar)} {...props}>
      <Logo className={s.logo} />
      <Menu />
    </div>
  );
};

export default Sidebar;
