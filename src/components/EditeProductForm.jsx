
import SearchIcon from "./ui/icons/SearchIcon";



export default function EditeProductForm() {



    return (
        <form>
            <div className="p-6 grow space-y-3">

                <label className="flex flex-col gap-y-1 ">
                    <span className="body-medium">
                        نام کالا
                    </span>
                    <input
                        type="text"
                        placeholder="نام کالا"
                        className="w-full input input-bordered text-label-small"
                    />
                </label>
                <label className="flex flex-col gap-y-1">
                    <span className="body-medium">
                        تعداد موجودی
                    </span>
                    <input
                        type="text"
                        placeholder="تعداد"
                        className="w-full input input-bordered text-label-small"
                    />
                </label>
                <label className="flex flex-col gap-y-1">
                    <span className="body-medium">
                        قیمت
                    </span>
                    <input
                        type="text"
                        placeholder="قیمت"
                        className="w-full input input-bordered text-label-small"
                    />
                </label>


            </div>
            <div className="sticky bottom-0 left-0 px-6 py-4 flex justify-center items-center gap-x-3">
                <button className="btn grow bg-btnCreate border-none ">
                    <p className="text-white body-normal">
                    ثبت اطلاعات جدید
                    </p>
                </button>
                <button className="btn grow bg-matn/20 border-none ">
                    <p className="text-matn body-normal">
                    انصراف
                    </p>
                </button>
            </div>
        </form>
    );
}