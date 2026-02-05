declare module "lord-icon-element" {
  import React from "react";

  interface LordIconProps extends React.HTMLAttributes<HTMLElement> {
    src?: string;
    trigger?: string;
    colors?: string;
  }

  export class LordIconElement extends HTMLElement {}
}
