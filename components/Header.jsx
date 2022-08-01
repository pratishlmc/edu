import Image from "next/image";
import { VscCallIncoming } from "react-icons/vsc";
import { MdOutlinePlace } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

function Header() {
	return (
		<div className="topbar w-full h-36 p-4 px-32">
			<div className="flex justify-between items-center">
				<Image
					className="rounded-sm shadow-md"
					src={require("../assets/images/vector.jpeg")}
					height={50}
					width={200}
					alt="logo"
				/>
				<div className="flex gap-3 text-white backdrop-blur-3xl rounded-lg py-2 px-4">
					<div className="flex gap-2 items-center">
						<VscCallIncoming size={40} color="#fff" />
						<div className="flex flex-col ">
							<span className="text-sm">Call us</span>
							<span className="text-xs">011009933</span>
						</div>
					</div>

					<div className="flex gap-2 items-center">
						<MdOutlinePlace size={45} color="#fff" />
						<div className="flex flex-col ">
							<span className="text-sm">Location</span>
							<span className="text-xs">New Baneshwor, KTM</span>
						</div>
					</div>

					<div className="flex gap-2 items-center">
						<HiOutlineMail size={50} color="#fff" />
						<div className="flex flex-col ">
							<span className="text-sm">E-mail</span>
							<span className="text-xs">noreply@nobel.com</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between uppercase my-3 bg-white shadow-lg rounded-md h-14">
				<div className="flex gap-5 items-center mx-5 text-sm">
					<span className="text-orange-500 hover:text-orange-500 cursor-pointer">
						Home
					</span>
					<span className="text-gray-600 hover:text-orange-500 cursor-pointer">
						Study Programs
					</span>
					<span className="text-gray-600 hover:text-orange-500 cursor-pointer">
						Events
					</span>
					<span className="text-gray-600 hover:text-orange-500 cursor-pointer">
						Album
					</span>
					<span className="text-gray-600 hover:text-orange-500 cursor-pointer">
						Contact
					</span>
				</div>
				<div className="flex"></div>
			</div>
		</div>
	);
}

export default Header;
