import React from 'react'
import Logo from '../assets/images/Union.png'
const RegistrForm = () => {
    return (
        <form className='max-w-96 bg-white space-y-16 px-7 py-14 rounded-custom'>
            <div className='flex flex-col justify-center items-center gap-y-4'>
                <img src={Logo} className='size-16' alt="logo" />
                <p className='headline-medium text-matn'>فرم ثبت نام</p>
            </div>
            <div className='text-matn/50 body-normal space-y-4'>
                <input type="text" placeholder="نام کاربری" className="input input-bordered text-right bg-inputBg w-full" />
                <input type="text" placeholder="رمز عبور " className="input input-bordered text-right bg-inputBg w-full" />
                <input type="text" placeholder="تکرار رمز عبور" className="input input-bordered text-right bg-inputBg w-full" />
                <button className="btn w-full bg-btnCreate">
                    <p className='title-large text-white'>
                        ثبت نام
                    </p>
                </button>
                <div className='flex justify-start'>
                    <p className='text-btnCreate body-normal'>حساب کاربری دارید؟</p>
                </div>
            </div>

        </form>
    )
}

export default RegistrForm