import { useState } from "react"
import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi"

function Menu({ menu_title, contents }) {
  const [show, setShow] = useState(false)

  const finalUrl = (string) => {
    const str = string
    const inLowerCase = str.toLowerCase();
    const finalString = inLowerCase.replace(/ /g, '_');
    return finalString
  }

  const items_list = contents.map(item =>
    <Link href={finalUrl(menu_title + "/" + item)}>
      <div className="group cursor-pointer hover:bg-gray-200 ease-in-out p-2 rounded-sm">
        <span className="group-hover:text-blue-500 text-gray-800 text-md">
          {item}
        </span>
      </div>
    </Link>
  )

  return (
    <div className="flex flex-col"
      onMouseOver={() => { setShow(true) }}
      onMouseOut={() => { setShow(false) }}
    >
      <span
        className="flex gap-1 items-center text-gray-500 hover:text-orange-500 cursor-pointer">
        {menu_title}
        <HiOutlineChevronDown size={15} />

      </span>
      {
        show &&
        <div className="drawerMenu flex flex-col divide-y bg-white px-2 py-2 h-fit w-52 justify-center mt-5 normal-case rounded-md shadow-md">
          {items_list}
        </div>
      }
    </div>
  )
}

export default Menu