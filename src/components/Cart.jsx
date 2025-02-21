import { useCart } from "../hooks/useCart";

export function Cart() {
  const { cart, emptyCart } = useCart();

  return (
    <div className="divide-secondary-100 absolute inset-x-2 top-22 z-100 flex h-64 flex-col divide-y-2 rounded-xl bg-white shadow-xl sm:inset-auto sm:top-22 sm:right-2 sm:w-[360px]">
      <h2 className="px-6 py-4 text-lg font-semibold">Cart</h2>
      <div className="flex flex-grow items-center justify-center">
        {cart > 0 ? (
          <div className="flex w-full flex-col gap-8 px-6">
            <div className="flex items-center justify-between">
              <img
                className="w-12 rounded-md"
                src="/images/image-product-1-thumbnail.jpg"
                alt="#"
              />
              <div>
                <p className="text-secondary-400">
                  Fall Limited Edition Sneakers
                </p>
                <p className="text-secondary-400">
                  {`$125.00 x ${cart}`}{" "}
                  <span className="text-secondary-900 font-bold">{`$${(125 * cart).toFixed(2)}`}</span>
                </p>
              </div>
              <button className="cursor-pointer" onClick={emptyCart}>
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </button>
            </div>
            <button
              type="submit"
              className="bg-primary-400 hover:bg-primary-400/60 text-secondary-900 w-full cursor-pointer rounded-md p-3 text-lg font-semibold"
            >
              Add to cart
            </button>
          </div>
        ) : (
          <p className="text-secondary-400 text-lg font-semibold">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
}
