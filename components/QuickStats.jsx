import Image from 'next/image'
import Icon1 from '../public/assets/trophy.svg'
import Icon2 from '../public/assets/notepad.svg'
import Icon3 from '../public/assets/correct.svg'

const QuickStats = () => {
  return (
    <div className="border-2 p-3 flex rounded-lg flex-col">
          <h2 className="flex items-start capitalize font-bold text-md">Quick Statistics</h2>
          <div className="flex  m-4">
            <ul className="flex mx-2">
              <li className="flex gap-3 border-r-2 px-5 py-3 ">
                <Image
                src={Icon1}
                width={50}
                height={50}
                alt="icons"
                className="bg-gray-300 rounded-full p-1"
                />
                <div>
                <h1 className="flex items-center text-lg font-bold">1</h1>
                <span className="text-gray-500 uppercase text-sm">Your Rank</span>
                </div>
               
              </li>
              <li className="flex gap-3 border-r-2 px-5 py-3  ">
                <Image
                src={Icon2}
                width={50}
                height={50}
                alt="icons"
                className="bg-gray-300 rounded-full p-1"
                />
                <div>
                <h1 className="flex items-center text-lg font-bold">30%</h1>
                <span className="text-gray-500 uppercase text-sm">Percentile</span>
                </div>
               
              </li>
              <li className="flex gap-3 px-5 py-3 ">
                <Image
                src={Icon3}
                width={50}
                height={50}
                alt="icons"
                className="bg-gray-300 rounded-full p-1"
                />
                <div>
                <h1 className="flex items-center text-lg font-bold">10/15</h1>
                <span className="text-gray-500 uppercase text-sm">Correct Answers</span>
                </div>
               
              </li>
            </ul>
          </div>
        </div>
  )
}

export default QuickStats
