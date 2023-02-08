import React, { FunctionComponent } from "react";

export const ButtonWrapper: FunctionComponent<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { title: string }
> = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};
