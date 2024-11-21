"use client";
import Image from "next/image";
import Icon4 from "../public/assets/graph.svg";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

const Compare = () => {
  const chartRef = useRef(null); // Reference to the canvas element
  const chartInstanceRef = useRef(null); // Reference to the Chart.js instance
  const userPercentileValue=30;

  useEffect(() => {
    // Get the canvas element
    const ctx = chartRef.current.getContext("2d");

    
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
        type: 'line', 
        data: {
          labels: new Array(24).fill(''), 
          datasets: [
            {
              label: 'Percentiles of Engineers',
              data: [30, 35, 40, 43, 47, 50, 54, 57, 58, 60, 66, 70, 90, 60, 40, 32, 24, 22, 21, 18, 15, 12, 12, 8],
              fill: false, 
              borderColor: 'rgba(75, 192, 192, 1)', 
              backgroundColor: 'rgba(75, 192, 192, 0.2)', 
              borderWidth: 2,
              tension: 0.4, 
              pointRadius: 3, 
              pointHoverRadius: 5, 
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
              text: 'Percentile Trends of Engineers',
            },
            annotation: {
              annotations: {
                userPointer: {
                  type: 'line',
                  xMin: 50 ,
                  xMax: 30,
                  borderColor: 'red',
                  borderWidth: 2,
                  label: {
                    content: `Your Percentile: ${userPercentileValue}`,
                    enabled: true,
                    position: 'top',
                    color: 'red',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  },
                },
              },
            },
          },
          scales: {
            x: {
              ticks: {
                display: false, 
              },
              grid: {
                display: false, 
              },
            },
            y: {
              ticks: {
                display: false, 
              },
              grid: {
                display: false, 
              },
            },
          },
        },
      });
  
      // Cleanup function
      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
      };
    }, []);
  
 
       

  return (
    <div className="border-2 p-3 flex rounded-lg flex-col  ">
      <h2 className="flex items-start capitalize font-bold text-md mb-6 ">
        Comparison Graph{" "}
      </h2>
      <div className="  flex mb-10">
        <p className=" text-md text-gray-700">
          {" "}
          <span className="font-bold">You scored 30% percentile</span> which is
          lower than the
          <br /> average percentile 72% of all the engineers who took this
          assesment.
        </p>

        <Image
          src={Icon4}
          width={50}
          height={50}
          alt="icons"
          className="flex p-2 ml-20 bg-gray-300 rounded-full items-end self-end  "
        />
      </div>

      <div className=" mx-auto mb-10 ">
      <canvas  ref={chartRef}> </canvas>
      </div>
     
    </div>
  );
};

export default Compare;
