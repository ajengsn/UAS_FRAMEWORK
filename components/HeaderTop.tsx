import React from "react"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top_icon_wrapper">
                            <BsFacebook/>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsTwitter/>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsInstagram/>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <BsLinkedin/>
                        </div>
                    </div>
<div className="text-gray-500 text-[12px]">
    <b>FREE SHOPPING</b> THIS WEEK ORDER OVER 100K
</div>
<div className="flex gap-4">
    <select
    className="text-gray-500 text-[12px] w-[70px]"
    name="currency"
    id="currency"
    >
        <option value="IDR">Rupiah (IDR)</option>
        <option value="USD">Dollar Amerika (USD)</option>


    </select>
    <select
        className="text-gray-500 text-[12px] w-[80px]"
        name="language"
        id="language"
        >
            <option value="en">English</option>
            <option value="id">Indonesia</option>

    </select>
</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;