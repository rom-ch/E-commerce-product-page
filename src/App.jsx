import { useState } from "react";
import { Carousel } from "./components/Carousel";
import { CustomModal } from "./components/CustomModal";
import { Header } from "./components/Header";
import { ProductDescription } from "./components/ProductDescription";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Header />
      <main className="flex flex-grow flex-col lg:flex-row lg:items-center lg:justify-between lg:p-6">
        <div className="w-full lg:max-w-[500px] lg:space-y-8">
          <Carousel
            isOpenModal={isOpenModal}
            onOpenModal={() => setIsOpenModal(true)}
          />
        </div>
        <div className="w-full lg:max-w-[600px]">
          <ProductDescription />
        </div>
      </main>
      {isOpenModal && (
        <CustomModal onClose={() => setIsOpenModal(false)}>
          <Carousel isOpenModal={isOpenModal} />
        </CustomModal>
      )}
    </>
  );
}

export default App;
