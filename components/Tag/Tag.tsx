import cn from "classnames";
import { TagProps } from "./Tag.props";

import s from "./Tag.module.css";

const Tag: React.FC<TagProps> = ({
  size = "m",
  color = "ghost",
  href,
  className,
  children,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn(s.tag, className, {
        [s.small]: size === "s",
        [s.medium]: size === "m",
        [s.ghost]: color === "ghost",
        [s.primary]: color === "primary",
        [s.green]: color === "green",
        [s.grey]: color === "grey",
        [s.red]: color === "red",
      })}
      {...props}
    >
      {href ? <a href={href}> {children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
