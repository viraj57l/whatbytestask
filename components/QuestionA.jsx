"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';
import Icon from '../public/assets/dart.svg'

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionA = () => {

    const data = {
        labels: ['Completed', 'Remaining'], // Labels for segments
        datasets: [
          {
            data: [70, 30], // The values for the segments
            backgroundColor: ['#1D4ED8', '#93C5FD'], // Colors for segments
            borderWidth: 0, // No border for the segments
          },
        ],
      };
    
      const options = {
        plugins: {
          tooltip: {
            enabled: false, // Disable tooltip
          },
          legend:{
            display:false,
          },
        },
        responsive: false,
        cutout: '70%', 
      };

  return (
    <div className='font-inter p-5 border-2 rounded-lg '>
        <div className='flex w-full justify-between'>
        <h2 className="flex items-start capitalize font-bold text-md mb-10">Question Analysis</h2>
        <h2 className='text-blue-700 font-semibold flex flex-end'>12/15</h2>
        </div>
        <p className='text-md text-gray-500'><span className='text-gray-800 font-bold'>You scored 12 questions out of 15. </span>However it still needs improvement</p>

        <div className='relative flex justify-center items-center '>
        <Doughnut data={data} options={options} className="w-10 h-10" />
        <div className="absolute text-4xl text-gray-700">
        <Image
        src={Icon}
        width={40}
        height={40}
        alt='dart'
        className=''
        /> {/* You can replace this with any icon */}
      </div>
        </div>
      
    </div>
  )
}

export default QuestionA
