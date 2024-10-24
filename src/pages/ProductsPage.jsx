import ProductsTabale from "../components/ProductsTabale";
import { AiOutlineProduct } from "react-icons/ai";
import NavbarProduct from "../components/NavbarProduct";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import CreateProductModal from "../components/CreateProductModal";

function ProductsPage() {
  const [isCreateCourseModalOpen, setIsCreateCourseModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-y-10">
      <NavbarProduct />

      <div className='flex justify-between items-center'>
        <div className="flex gap-x-2">
          <AiOutlineProduct className="size-6" />
          <p className="headline-medium  text-matn">مدیریت کالا</p>
        </div>
        <button className="btn bg-btnCreate border-none " onClick={() => {
          setIsCreateCourseModalOpen(true);
        }}>
          <p className="text-white body-normal">
            افزودن محصول
          </p>
        </button>
      </div>

      <ProductsTabale />
      <CreateProductModal isOpen={isCreateCourseModalOpen} setIsOpen={setIsCreateCourseModalOpen} />

    </div>
  )
}

export default ProductsPage;
