import Payment from "../Components/layout/PaymentShipping/Payment";
import DeliveringAll from "../Components/layout/PaymentShipping/DeliveringAll";
import OfferingShopper from "../Components/layout/PaymentShipping/OfferingShopper";

function PaymentShipping() {
  return (
    <div>
      <Payment />
      <DeliveringAll />
      <OfferingShopper />
    </div>
  );
}

export default PaymentShipping;
