import PopUp from "../../Common/PopUp";

function WishlistPopUp({ CloseCart, showAddToCart }) {
  return (
    <div>
      <PopUp
        title="Wishlist"
        iconClass="ri-heart-3-line"
        message="Your wishlist is currently empty!"
        description="Save your favorite items and view them here at any time."
        CloseCart={CloseCart}
        showAddToCart={showAddToCart}
      />
    </div>
  );
}

export default WishlistPopUp;
