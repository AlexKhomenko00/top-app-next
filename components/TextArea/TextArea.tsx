import React from "react";
import cn from "classnames";

import { TextAreaProps } from "./TextArea.props";

import s from "./TextArea.module.css";

const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
	return <textarea className={cn(s.input, className)} {...props}></textarea>;
};

export default TextArea;
