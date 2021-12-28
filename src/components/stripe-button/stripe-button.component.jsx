import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KBM0gBPZOsXSlyJNA1QBUH2nkjuW214wJZoOpq0oBAKl93PJ3wkLQPEPZhwIbE272gp1Eaxokvt2KGg3KkVqZGM00CC8QJAfM";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
