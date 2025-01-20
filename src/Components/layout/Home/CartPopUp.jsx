import PopUp from "../../Common/PopUp";

function CartPopUp({ CloseCart,showAddToCart }) {
  return (
    <div>
      <PopUp
        title="Shopping cart"
        iconClass="ri-shopping-cart-2-line"
        message="Your shopping cart is currently empty!"
        description="Explore our wide range of products and add items to your cart to proceed with your purchase."
        CloseCart={CloseCart}
        showAddToCart={showAddToCart}
      />
    </div>
  );
}

export default CartPopUp;
