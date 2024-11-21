import Image from "next/image"
import HTML from '../public/assets/htmlLogo.svg'

const UpdateTab = () => {
  return (
    <div className="border-2 p-5 flex rounded-lg  ">
          <Image
           src={HTML}
           width={50}
           height={50}
           alt="html logo"
           className="mr-5"
          />
          <div className="flex flex-col">
          <h2 className="flex items-start capitalize font-bold text-md ">hyper text markup language</h2>
          <span className=" text-md font-normal text-gray-500 leading-1">Questions: 08 | Duration: 15mins | Submitted on 5 June 2021 </span>
          </div>
          <button className="border-black border-2 bg-blue-700 text-sm text-white font-semibold px-7 h-10 mx-3 ml-7 rounded-lg ">
            Update
          </button>
        </div>
  )
}

export default UpdateTab
