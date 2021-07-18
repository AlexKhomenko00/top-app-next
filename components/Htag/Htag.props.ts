import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadElement
  > {
  tag: "h1" | "h2" | "h3";
}
