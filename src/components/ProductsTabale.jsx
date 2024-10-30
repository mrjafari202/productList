import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditeProductModal from './EditeProductModal';
import DeleteProductModal from './DeleteProductModal';
import { useProducts } from '../services/queries';

const ProductsTable = ({ page ,search }) => { 
    const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { data, isLoading, error } = useProducts(page);

    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (!data?.data) return <p>محصولی وجود ندارد</p>;
    if (error) return <p>خطا در دریافت داده‌ها</p>;

    const filteredProducts = data?.data.data.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="overflow-x-auto bg-white rounded-3xl">
            <table className="table w-full table-fixed">
                <thead className='bg-gray-300'>
                    <tr className='p-4 border-gray-300'>
                        <th className='body-medium text-matn p-5'>نام کالا</th>
                        <th className='body-medium text-matn p-5'>موجودی</th>
                        <th className='body-medium text-matn p-5'>قیمت</th>
                        <th className='body-medium text-matn p-5'>شناسه کالا</th>
                        <th className='body-medium text-matn p-5'></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product, index) => (
                        <tr key={index} className='border-gray-300'>
                            <td className='py-4 px-5'><p>{product.name}</p></td>
                            <td className='py-4 px-5'><p>{product.quantity}</p></td>
                            <td className='py-4 px-5'><p>{product.price} تومان</p></td>
                            <td className='py-4 px-5'><p>{product.id}</p></td>
                            <td className='py-4 px-5 flex justify-end gap-x-2'>
                                <FiEdit className='size-5 text-lime-500' onClick={() => { setSelectedProduct(product); setIsEditProductModalOpen(true); }} />
                                <RiDeleteBin5Line className='size-5 text-red-500' onClick={() => { setSelectedProduct(product); setIsDeleteModalOpen(true); }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* مدال‌ها */}
            <EditeProductModal isOpen={isEditProductModalOpen} setIsOpen={setIsEditProductModalOpen} product={selectedProduct} />
            <DeleteProductModal isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} product={selectedProduct} />
        </div>
    );
}

export default ProductsTable;
