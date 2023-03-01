import { RxHeart } from "react-icons/rx";
export const Productcard = () => {
    return (

        <div className="flex flex-col rounded-md w-full max-w-sm m-2 justify-center shadow-sm shadow-black">
            <div className="w-full border-[#777777]">
                <img className="w-full h-full" src="https://www.lc-man.com/Content/Media/Product/94170/Pro_8752_570.jpg" />
            </div>
            <div className="flex flex-col justify-star items-cnter m-2">
                <div className="flex justify-between text-[#555555]">
                    <span>LC-Man</span>
                    <RxHeart className="text-2xl hover:rounded-full font-semibold hover:text-red-900" />
                </div>
                <span className="my-1 text-lg font-bold">کت شلوار دامادی</span>
                <span className="my-1 text-base font-bold">3,500,000 تومان</span>
            </div>
            <button className="w-full bg-[#222222] hover:bg-black text-white p-2 rounded-b-md text-xl">افزودن به سبد خرید</button>
        </div>
    );
}
