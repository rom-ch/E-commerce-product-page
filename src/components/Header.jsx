import { useRef, useState } from "react";
import { useCart } from "../hooks/useCart";
import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import { Cart } from "./Cart";
import { Nav } from "./Nav";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  const timeOutRef = useRef(null);

  function openCart() {
    clearTimeout(timeOutRef.current);
    setIsCartOpen(true);
  }

  function closeCart() {
    timeOutRef.current = setTimeout(() => {
      setIsCartOpen(false);
    }, 200);
  }

  return (
    <header className="item-center lg:border-secondary-100 flex justify-between lg:border-b-2">
      <div className="flex items-center gap-4 p-6 lg:pl-0">
        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            className="block"
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div>
          <img src={logo} alt="Logo de Sneakers" />
        </div>
      </div>
      <div className="mr-auto hidden lg:flex lg:items-center lg:p-6">
        <Nav />
      </div>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <Nav setIsMenuOpen={setIsMenuOpen} />
        </>
      )}
      <div className="flex items-center gap-6 p-6 lg:gap-8 lg:pr-0">
        <div onMouseEnter={openCart} onMouseLeave={closeCart}>
          <button className="relative cursor-pointer">
            {cart > 0 && (
              <span className="bg-primary-400 text-secondary-100 absolute -top-2 rounded-full px-2 text-xs font-semibold">
                {cart}
              </span>
            )}

            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
          </button>
          {isCartOpen && <Cart />}
        </div>

        <div className="hover:ring-primary-400 w-8 rounded-full hover:ring lg:w-12">
          <img src={avatar} alt="Avatar d'un homme" className="" />
        </div>
      </div>
    </header>
  );
}
