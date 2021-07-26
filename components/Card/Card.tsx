import cn from "classnames";
import { CardProps } from "./Card.props";

import s from "./Card.module.css";

const Card: React.FC<CardProps> = ({
  color = "white",
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn(s.card, className, {
        [s.white]: color === "white",
        [s.blue]: color === "blue",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
