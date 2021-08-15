import React from "react";
import cn from "classnames";

import { InputProps } from "./Input.props";

import s from "./Input.module.css";

const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={cn(s.input, className)} {...props}></input>;
};

export default Input;
