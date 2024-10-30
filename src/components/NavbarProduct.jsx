import React, { useState } from 'react'
import SearchIcon from './ui/icons/SearchIcon'

const NavbarProduct = ({ onSearch }) => {

    const searchHandler = (event) => {
        onSearch(event.target.value)
    }
    return (
        <div className="flex items-center bg-white py-2 px-4 rounded-xl">

            <div className="grow flex gap-x-2">
                <SearchIcon />
                <input type="text"  onChange={searchHandler} placeholder="جستجو  کالا" className="w-full bg-white border-none outline-none text-matn" />
            </div>

            <div className="divider divider-horizontal"></div>

            <div className='flex gap-x-2'>

                <div className="avatar">
                    <div className="w-11 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

                <div className='text-right'>
                    <p className='label-bold text-matn/80'>میلاد عظمی</p>
                    <p className='label-bold label-small text-matn/80'>مدیر</p>
                </div>

            </div>

        </div>
    )
}

export default NavbarProduct