import { ProductForm } from "./ProductForm";

export function ProductDescription() {
  return (
    <div className="p-6">
      <div className="text-secondary-400 mb-2 text-sm font-semibold tracking-widest uppercase lg:mb-4 lg:text-base">
        sneaker company
      </div>
      <h1 className="text-secondary-900 mb-4 text-3xl font-bold capitalize lg:mb-12 lg:text-5xl">
        sall limited edition sneakers
      </h1>
      <p className="text-secondary-400 max-w-md leading-6.5 lg:max-w-auto lg:text-lg">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="mt-6 flex items-center justify-between lg:mt-10 lg:flex-col lg:items-start lg:gap-2">
        <div className="flex items-center gap-4">
          <span className="text-secondary-900 text-3xl font-bold">$125.00</span>
          <span className="bg-secondary-900 text-secondary-100 rounded-md px-2.5 py-1 font-bold">
            50%
          </span>
        </div>
        <span className="text-secondary-400 font-bold line-through">
          $250.00
        </span>
      </div>
      <ProductForm />
    </div>
  );
}
