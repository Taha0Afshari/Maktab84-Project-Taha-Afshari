import { RxHeart } from "react-icons/rx";
export const Productcard = (props) => {

    function addToLocal() {
        localStorage.setItem("targetId", props.item.id)
    }
    if (props.item.category === props.category) {
        return (
            <a href="/ProductPage" onClick={addToLocal}>
                <div className="flex flex-col rounded-md w-full max-w-sm m-2 justify-center shadow-sm shadow-black" id="props.item.id">
                    <div className="w-full border-[#777777]">
                        <img className="w-full h-full" src={props.item.img} />
                    </div>
                    <div className="flex flex-col justify-star items-cnter m-2">
                        <div className="flex justify-between text-[#555555]">
                            <span>LC-Man</span>
                            <RxHeart className="text-2xl hover:rounded-full font-semibold hover:text-red-900" />
                        </div>
                        <span className="my-1 text-lg font-bold">کت شلوار دامادی</span>
                        <span className="my-1 text-base font-bold">{props.item.price} تومان</span>
                    </div>
                    <button className="w-full bg-[#333333] hover:bg-black text-white p-2 rounded-b-md text-xl">افزودن به سبد خرید</button>
                </div>
            </a>
        );
    }
}
