import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditeProductModal from './EditeProductModal';
import DeleteProductModal from './DeleteProductModal';

const ProductsTable = () => {
    const [isCreateCourseModalOpen, setIsCreateCourseModalOpen] = useState(false);
    const [isDeleeModalOpen, setIsDeleteModalOpen] = useState(false);

    return (
        <div className="overflow-x-auto bg-white rounded-3xl ">
            <table className="table w-full table-fixed ">
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
                    <tr className='border-gray-300'>
                        <td className='py-4 px-5'> {/* اضافه کردن padding */}
                            <p>تیشرت طرح انگولار</p>
                        </td>
                        <td className='py-4 px-5'> {/* اضافه کردن padding */}
                            <p>۲۹۳</p>
                        </td>
                        <td className='py-4 px-5'> {/* اضافه کردن padding */}
                            <p>90 هزار تومان</p>
                        </td>
                        <td className='py-4 px-5'> {/* اضافه کردن padding */}
                            <p>90uf9g9h7895467g974</p>
                        </td>
                        <td className='py-4 px-5 flex justify-end gap-x-2'> {/* اضافه کردن padding */}
                            <FiEdit className='size-5 text-lime-500' onClick={() => {
                                setIsCreateCourseModalOpen(true);
                            }} />
                            <RiDeleteBin5Line className='size-5 text-red-500' onClick={() => {
                                setIsDeleteModalOpen(true);
                            }} />
                        </td>
                    </tr>

                    {/* تکرار ردیف‌ها */}
                    {Array(3).fill().map((_, index) => (
                        <tr key={index} className='border-gray-300'>
                            <td className='py-4 px-5'>
                                <p>تیشرت طرح انگولار</p>
                            </td>
                            <td className='py-4 px-5'>
                                <p>۲۹۳</p>
                            </td>
                            <td className='py-4 px-5'>
                                <p>90 هزار تومان</p>
                            </td>
                            <td className='py-4 px-5'>
                                <p>90uf9g9h7895467g974</p>
                            </td>
                            <td className='py-4 px-5 flex justify-end gap-x-2'>
                                <FiEdit className='size-5 text-lime-500' />
                                <RiDeleteBin5Line className='size-5 text-red-500' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditeProductModal isOpen={isCreateCourseModalOpen} setIsOpen={setIsCreateCourseModalOpen} />
            <DeleteProductModal isOpen={isDeleeModalOpen} setIsOpen={setIsDeleteModalOpen} />

        </div>
    );
}

export default ProductsTable;