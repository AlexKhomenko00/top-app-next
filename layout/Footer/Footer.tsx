import { DetailedHTMLProps, HTMLAttributes } from "react";

import s from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

const Footer = ({
  className,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element => {
  return (
    <footer className={cn(className, s.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
