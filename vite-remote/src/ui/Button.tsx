import { Button as MuiButton, ButtonProps } from "@mui/material";

export const Button = (props: ButtonProps) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};

export default Button as typeof MuiButton;
