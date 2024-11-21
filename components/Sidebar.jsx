import Image from "next/image"
import Icon1 from "../public/assets/icon1.svg"
import Icon2 from "../public/assets/icon2.svg"
import Icon3 from "../public/assets/icon3.svg"


const Sidebar = () => {
  return (
    <div className="min-h-screen w-56  fixed top-32 border-r-2 font-inter">
        <div className="flex flex-col ">
            <ul className="flex flex-col gap-4 p-6 m-2 ">
                <li className="flex my-3 px-3 py-3 font-semibold text-gray-600 hover:border-none hover:bg-slate-200 hover:rounded-2xl hover:text-blue-600 ">
                    <Image
                    src={Icon1}
                    width={20}
                    height={20}
                    alt="icon"
                    className="mr-5 "
                    />
                    Dashboard
                </li>
                <li className="flex my-3 px-3 py-2 font-semibold text-gray-600 hover:border-none hover:bg-slate-200 hover:rounded-2xl hover:text-blue-600 ">
                    <Image
                    src={Icon2}
                    width={20}
                    height={20}
                    alt="icon"
                    className="mr-5"
                    />
                    Skill Test
                </li>
                <li className="flex my-3 px-3 py-2 font-semibold text-gray-600 hover:border-none hover:bg-slate-200 hover:rounded-2xl hover:text-blue-600">
                    <Image
                    src={Icon3}
                    width={20}
                    height={20}
                    alt="icon"
                    className="mr-5"
                    />
                    Internship
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
