import { useDispatch, useSelector } from "react-redux";
import { isClickCart } from "../../Redux Toolkit/PopUpSlice";
import { removecart } from "../../Redux Toolkit/ProductSlice";
import { increasecount, decreasecount } from "../../Redux Toolkit/ProductSlice";
import { selectTotalPrice } from "../../Redux Toolkit/ProductSlice";

function CartPopUp() {
  let clickCart = useSelector((state) => state.popup.cartpopup);
  let addtocartdata = useSelector((state) => state.products.addtocartdata);
  const totalPrice = useSelector(selectTotalPrice);
  let dispatch = useDispatch();

  return (
    <div className="h-[100vh] w-[100%] bg-pink-00 fixed z-40 top-0 left-0 bottom-0 right-0 flex">
      <div
        className={`w-[100%] h-full bg-black/75 ${
          clickCart ? "animate-slide-left" : "animate-slide-left-reverse"
        }`}
        onClick={() => dispatch(isClickCart())}
      ></div>

      <div
        className={`w-[30%] h-full bg-white p-[27px] absolute right-[0] ${
          clickCart ? "animate-slide-right" : "animate-slide-right-reverse"
        }`}
      >
        <div className="flexbox">
          <h2 className="text-[24px] text-myblue font-medium">Shopping cart</h2>
          <i
            className="ri-close-large-line text-[19px] font-medium pointer text-myblue"
            onClick={() => dispatch(isClickCart())}
          ></i>
        </div>

        {addtocartdata == 0 ? (
          <>
            <div className="flex items-center flex-col gap-[16px] mt-[20px]">
              <i
                className={`text-[70px] font-thin text-myblack1 bi bi-cart-plus`}
              ></i>
              <h4 className="text-[16px] text-myblack2">
                Your shopping cart is currently empty!
              </h4>
              <h5 className="text-myblack text-[14px] text-center">
                Explore our wide range of products and add items to your cart to
                proceed with your purchase.
              </h5>
              <button className="button">Continue Shopping</button>
            </div>
          </>
        ) : (
          <>
            <div class="flex flex-col items-center mt-[28px] gap-7 h-[75%] w-full overflow-y-auto">
              {addtocartdata.map((data, index) => {
                return (
                  <div
                    class="flex items-center justify-between w-full gap-[10px] h-[110px]"
                    key={index}
                  >
                    <div class="w-1/4 h-full flex items-center justify-center cursor-pointer">
                      <img
                        src={data.images[0]}
                        class="w-[130px] object-cover"
                      ></img>
                    </div>
                    <div class="w-3/4 h-full">
                      <h5 class="text-sm font-medium text-myblack1 my-2 cursor-pointer">
                        {data.name}
                      </h5>
                      <h4 class="text-base text-[#181d25] mb-4">
                        {data.newPrice}
                      </h4>
                      <div class="w-[98px] h-[34px] border border-myblue rounded-full flex items-center justify-between overflow-hidden">
                        <i
                          class="ri-subtract-line w-8 h-8 flex items-center justify-center cursor-pointer text-myblue text-xs font-semibold hover:bg-gray-200"
                          onClick={() =>
                            dispatch(decreasecount({ productid: data.id }))
                          }
                        ></i>
                        <span class="text-gray-600 text-sm">{data.count}</span>
                        <i
                          class="ri-add-line w-8 h-8 flex items-center justify-center cursor-pointer text-myblue text-xs font-semibold hover:bg-gray-200"
                          onClick={() =>
                            dispatch(increasecount({ productid: data.id }))
                          }
                        ></i>
                      </div>
                    </div>
                    <div class="mt-5">
                      <i
                        class="ri-close-large-line text-myblue cursor-pointer text-lg font-medium"
                        onClick={() => dispatch(removecart(index))}
                      ></i>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full h-[20%] mt-5">
              <div className="w-full flex items-center justify-between mb-10">
                <h3 className="text-lg font-medium text-myblack1">Subtotal:</h3>
                <h3 id="subtotal" className="text-base text-[#181d25]">
                  {`Rs: ${totalPrice}`}
                </h3>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button className="px-16 py-3 rounded-full text-lg font-medium text-[#333d4c] bg-[#eef1f6] whitespace-nowrap hover:bg-[#e0e5eb]">
                  View cart
                </button>
                <button className="px-16 py-3 rounded-full text-lg text-white bg-myblue whitespace-nowrap">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPopUp;
