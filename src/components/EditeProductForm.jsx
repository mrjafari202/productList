import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateProduct } from '../services/mutation';

export default function EditeProductForm({ product, setIsOpen }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        if (product) {
            reset({
                name: product.name,
                quantity: product.quantity,
                price: product.price
            });
        }
    }, [product, reset]); 

    const { mutate, isLoading } = useUpdateProduct();

    const onSubmit = (data) => {
        mutate({ id: product.id, ...data }, { 
            onSuccess: () => {
                console.log('Product updated successfully');
                reset(); 
                setIsOpen(false);
            },
            onError: (error) => {
                console.error('Error updating product:', error);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 grow space-y-3">
           
            <label className="flex flex-col gap-y-1">
                <span className="body-medium">نام کالا</span>
                <input
                    type="text"
                    placeholder="نام کالا"
                    className={`w-full input input-bordered text-label-small ${errors.name ? 'input-error' : ''}`}
                    {...register('name', { required: 'نام کالا الزامی است' })}
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </label>
            <label className="flex flex-col gap-y-1">
                <span className="body-medium">تعداد موجودی</span>
                <input
                    type="number"
                    placeholder="تعداد"
                    className={`w-full input input-bordered text-label-small ${errors.quantity ? 'input-error' : ''}`}
                    {...register('quantity', { required: 'تعداد موجودی الزامی است', min: { value: 1, message: 'حداقل یک عدد لازم است' } })}
                />
                {errors.quantity && <span className="text-red-500">{errors.quantity.message}</span>}
            </label>
            <label className="flex flex-col gap-y-1">
                <span className="body-medium">قیمت</span>
                <input
                    type="number"
                    placeholder="قیمت"
                    className={`w-full input input-bordered text-label-small ${errors.price ? 'input-error' : ''}`}
                    {...register('price', { required: 'قیمت الزامی است', min: { value: 0, message: 'قیمت نمی‌تواند منفی باشد' } })}
                />
                {errors.price && <span className="text-red-500">{errors.price.message}</span>}
            </label>

            <div className="sticky bottom-0 left-0 px-6 py-4 flex justify-center items-center gap-x-3">
                <button
                    type="submit"
                    className="btn grow bg-btnCreate border-none"
                    disabled={isLoading} 
                >
                    <p className="text-white body-normal">ثبت</p>
                </button>
                <button
                    type="button"
                    className="btn grow bg-matn/20 border-none"
                    onClick={() => setIsOpen(false)} 
                >
                    <p className="text-matn body-normal">انصراف</p>
                </button>
            </div>
        </form>
    );
}
