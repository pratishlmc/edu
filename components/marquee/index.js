import Marquee from "react-fast-marquee";
import {AiOutlineNotification} from "react-icons/ai"
import {DATA} from "../../constants/noticesDB";

function SlideNews(){
    return (
        <>
            <div className="flex items-center h-14 bg-gray-100">
                <div className="flex gap-1 items-center text-center bg-blue-700 h-full w-fit px-5 text-white">
                    <span>NOTICES</span>
                    <AiOutlineNotification size={20}/>
                </div>
                <Marquee pauseOnHover={true}>
                    {DATA.map((item)=> <div className="mr-16">
                        <li>{item.title}</li>
                    </div>)}
                </Marquee>
            </div>
        </>
    )
}

export default SlideNews