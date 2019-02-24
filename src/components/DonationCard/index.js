import React from 'react';

import {
  Card,
  Button,
  PaymentWrapper,
  CardFooter,
  FooterTitle,
  CardBodyImage,
  PaymentBodyWrapper,
  BtnPaymentWrapper,
  CloseButton,
  SelectAmount,
  FooterButtonWrapper,
  commonStyles,
}
  from './style';

const DonationCard = ( props ) => {

  const {
    image,
    name,
    id,
    payments,
    handlePayment,
    closePayment,
    showPayment,
    keyOf,
    selectedAmount,
    transitPayment,
    currency,
  } = props;

  return (

    <Card key={keyOf}>
      <CardBodyImage src={ image } />
      <CardFooter>
        <FooterTitle>{name}</FooterTitle>
        <FooterButtonWrapper>
          <Button onClick={() => transitPayment(id)}> Donate </Button>
        </FooterButtonWrapper>
      </CardFooter>
      <PaymentWrapper style={showPayment === id ? commonStyles.show : commonStyles.hide}>
        <PaymentBodyWrapper>
          <SelectAmount> Select the amount to donate(USD) </SelectAmount>
          {payments}
          <BtnPaymentWrapper>
            <Button
              onClick={() => handlePayment(id, selectedAmount, currency)}
              type="payment"
            >Pay
            </Button>
          </BtnPaymentWrapper>
        </PaymentBodyWrapper>
        <CloseButton onClick={() => closePayment()} />
      </PaymentWrapper>
    </Card>
  );

};
export default DonationCard;
