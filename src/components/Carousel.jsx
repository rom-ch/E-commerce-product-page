import { useState } from "react";

const productImg = [
  {
    id: 1,
    thumbnail: "/images/image-product-1-thumbnail.jpg",
    img: "/images/image-product-1.jpg",
  },
  {
    id: 2,
    thumbnail: "/images/image-product-2-thumbnail.jpg",
    img: "/images/image-product-2.jpg",
  },
  {
    id: 3,
    thumbnail: "/images/image-product-3-thumbnail.jpg",
    img: "/images/image-product-3.jpg",
  },
  {
    id: 4,
    thumbnail: "/images/image-product-4-thumbnail.jpg",
    img: "/images/image-product-4.jpg",
  },
];

export function Carousel({ onOpenModal, isOpenModal }) {
  const [imageIndex, setImageIndex] = useState(0);

  function handlePreviousimage() {
    const isFirstIndex = imageIndex === 0;
    const newIndex = isFirstIndex ? productImg.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  }

  function handleNextImage() {
    const isLastIndex = imageIndex === productImg.length - 1;
    const newIndex = isLastIndex ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  }

  return (
    <div className="w-full lg:max-w-[600px] lg:space-y-8">
      <div className="relative aspect-square h-76 w-full lg:h-auto">
        <img
          src={productImg.at(imageIndex).img}
          alt="#"
          className="h-full w-full object-cover object-top lg:rounded-2xl"
          onClick={onOpenModal}
        />
        <button
          onClick={handlePreviousimage}
          className={`bg-secondary-100 group absolute top-1/2 left-2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full lg:-left-6 lg:size-14 ${!isOpenModal ? "lg:hidden" : "lg:flex"}`}
        >
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              className="group-hover:stroke-primary-400"
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handleNextImage}
          className={`bg-secondary-100 group absolute top-1/2 right-2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full lg:-right-6 lg:size-14 ${!isOpenModal ? "lg:hidden" : "lg:flex"}`}
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              className="group-hover:stroke-primary-400"
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-4">
        {productImg.map((img, index) => (
          <div
            onClick={() => setImageIndex(index)}
            key={img.id}
            className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl ${index === imageIndex ? "ring-primary-400 ring-2" : ""}`}
          >
            <div
              className={`absolute inset-0 ${index !== imageIndex ? "group-hover:bg-white/40" : ""} ${index === imageIndex ? "bg-white/70" : ""}`}
            ></div>
            <img src={img.thumbnail} alt="#" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
