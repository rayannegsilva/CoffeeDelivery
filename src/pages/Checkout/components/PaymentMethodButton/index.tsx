import { CreditCard } from "phosphor-react";
import { ReactNode } from "react";
import { PaymentMethodButtonContainer } from "./styles";

interface PaymentMethodButtonProps {
  paymentType: string;
  icon: ReactNode;
}

export function PaymentMethodButton({ icon, paymentType} : PaymentMethodButtonProps){
  return(
    <PaymentMethodButtonContainer>
      {icon}
      {paymentType}
    </PaymentMethodButtonContainer>
  );
}