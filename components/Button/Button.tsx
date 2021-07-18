import React from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";

import s from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(s.button, className, {
        [s.primary]: appearance === "primary",
        [s.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span className={cn(s.arrow, { [s.down]: arrow === "down" })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
