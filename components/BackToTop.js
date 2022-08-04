import { HiArrowNarrowUp } from "react-icons/hi";
import {useState} from "react";

const BackToTop = () => {
    const [show, setShow] = useState(false);

    if (typeof window !== "undefined"){
        window.onscroll = function() {
            if(document.documentElement.scrollTop > 20){
                setShow(true)
            }else{
                setShow(false)
            }
        }
    }

    if(show === true){
        return (
            <div className="abslute_obj flex justify-end">
                <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-fit mx-7 cursor-pointer bg-white rounded-full p-3 drop-shadow-lg">
                    <HiArrowNarrowUp size={20} color={"#a1a1a1"} />
                </div>
            </div>
        )
    }
    else {
        return null
    }

};

export default BackToTop;
