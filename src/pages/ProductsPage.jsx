import ProductsTabale from "../components/ProductsTabale";
import { AiOutlineProduct } from "react-icons/ai";
import NavbarProduct from "../components/NavbarProduct";
import { useState } from "react";
import CreateProductModal from "../components/CreateProductModal";

function ProductsPage() {
  const [isCreateProductModalOpen, setIsCreateProductModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-y-10">
      <NavbarProduct />

      <div className='flex justify-between items-center'>
        <div className="flex gap-x-2">
          <AiOutlineProduct className="size-6" />
          <p className="headline-medium  text-matn">مدیریت کالا</p>
        </div>
        <button className="btn bg-btnCreate border-none " onClick={() => {
          setIsCreateProductModalOpen(true);
        }}>
          <p className="text-white body-normal">
            افزودن محصول
          </p>
        </button>
      </div>

      <ProductsTabale page={page} />
      <button onClick={() => setPage(2)}>go to page #2</button>
      <CreateProductModal isOpen={isCreateProductModalOpen} setIsOpen={setIsCreateProductModalOpen} />

    </div>
  )
}

export default ProductsPage;
