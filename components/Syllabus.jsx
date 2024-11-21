import React from 'react'

const Syllabus = () => {

    const syllabusData = [
        { title: 'HTML Tools, Forms, History', percentage: 80,color:"#2196f3" },
        { title: 'Tags & References in HTML', percentage: 60, color: '#ff9800' },
        { title: 'Tables & References in HTML', percentage: 24, color: '#f44336' },
        { title: 'Tables & CSS Basics', percentage: 96, color: '#4caf50' },
      ];
  return (
    <div className='font-inter p-5 border-2 rounded-lg  '>
        <h2 className="flex items-start capitalize font-bold text-md mb-10">Syllabus Wise Analysis</h2>

        <div>
        <ul className='flex flex-col '>
        {syllabusData.map((item, index) => (
          <li key={index} className="mb-4 flex flex-col  ">
            <h3 className="text-md mb-1 text-gray-600">{item.title}</h3>
            <div className='flex items-center gap-5'>

            <div className="w-full bg-gray-300 rounded-full h-2 relative  ">
              
              <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
              
              <div
                className={`h-2 rounded-full relative`}
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor:item.color
                }}
              ></div>
            </div>
            <p className="text-sm mt-1 "
            style={{
                 color:item.color
              }}
            >{item.percentage}%</p>
            </div>
            
            
          </li>
        ))}
      </ul>
           
        </div>
      
    </div>
  )
}

export default Syllabus
