import cn from "classnames";
import { ParagraphProps } from "./Paragraph.props";

import s from "./Paragraph.module.css";

const Paragraph: React.FC<ParagraphProps> = ({
  size = "m",
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <p
      className={cn(s.paragraph, className, {
        [s.small]: size === "s",
        [s.medium]: size === "m",
        [s.large]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
