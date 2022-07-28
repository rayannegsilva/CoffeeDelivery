import { InputHTMLAttributes } from "react";
import { Input } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function InputForm({...props} : InputProps) {
  return(
    <Input 
      {...props}
    />
  );
}