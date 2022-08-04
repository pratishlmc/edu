import Link from "next/link";
import Marquee from "react-fast-marquee";
import { AiOutlineNotification } from "react-icons/ai"
import { DATA } from "../../constants/noticesDB";

function SlideNews() {
    return (
        <>
            <div className="flex items-center h-14 bg-gray-100">
                <div className="flex gap-1 items-center text-center bg-blue-800 h-full w-fit px-5 text-white shadow-lg">
                    <span>NOTICES</span>
                    <AiOutlineNotification size={20} />
                </div>
                <Marquee gradient={false} speed={60} className="h-full bg-blue-700" pauseOnHover={true}>
                    {DATA.map((item) =>
                        <Link key={item.id} href={"/notices/" + item.id}>
                            <div className="mr-16">
                                <li className="f-inter text-white hover:underline hover:text-orange-300 cursor-pointer">{item.title}</li>
                            </div>
                        </Link>
                    )}
                </Marquee>
            </div>
        </>
    )
}

export default SlideNews