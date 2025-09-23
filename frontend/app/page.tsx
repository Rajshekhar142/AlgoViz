
import { BitCount } from "./ui/font";
import Image from "next/image";

export default function Home() {
  return (
    // Main container: Flex column on mobile, switches to a grid on medium and larger screens
    // Different background colors to visually show breakpoint changes
    <div>
      {/* Header Component */}
      <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center text-2xl font-bold">
        <h1 className={`${BitCount.className} antialiased`}>ALGOVIZ </h1>
      </div>

      {/* Main Content Area: Changes layout based on screen size */}
      <div
        className="
          flex flex-col md:flex-row flex-grow      
          gap-4                                       
          bg-purple-500                            
          p-4 rounded-lg shadow-md
        "
      >
        {/* Main Content */}
        <div className="
            flex-grow bg-white p-4 rounded-lg shadow-inner
            text-center md:text-left text-lg
            order-2 md:order-1                                /* Ord6
          ">
            <div className="p-4 rounded-lg border border-gray-200 shadow-md bg-white">
              <div className="marketAnalysis">
              <h3 className="font-bold p-2 mb-1">Market Analysis</h3>
              <p className="">Stay in Touch with recent market ups and down .</p>
              <div className="flex justify-center items-center">
              <Image
              src="/img/f5e930eded9545ff2e21b203ab503bb6.jpg"
              alt="market Analysis"
              height={375}
              width={230}
              className=""></Image>
              </div>

            </div>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 shadow-md bg-white">
            <div className="backtest">
              <h3 className="font-bold p-2 mb-1">BackTest your Algorithm</h3>
              <p className="mb-3">Test your Algorithm on past data presented by <span className="font-bold text-blue-700">S&P500 , NASDAQ COMPOSITE </span> AND MANY MORE.. </p>
              <div className="flex justify-center items-center">
              <Image
              src="/img/7968740973b0b6dd1b4668fdae827ad7.jpg"
              alt="Backtest"
              height={375}
              width={230}
              className="">
              </Image>
              </div>

            </div>
            </div>

            <div className="p-4 rounded-lg border border-gray-200 shadow-md bg-white">
              <div className="createAlgo">
              <h3 className="font-bold p-2 mb-1">Create Simple Algorithmic Trading Strategies</h3>
              <p className="mb-3">Decide your values and create your Algorithms</p>
              <div className="flex justify-center items-center">
              <Image
              src="/img/ChatGPT Image Jul 28, 2025, 12_36_11 PM.png"
              alt="simple algo trading strategies"
              height={375}
              width={230}
              className="">
              </Image>
              </div>
              
            </div>
            </div>


          <div className="mt-4 text-sm text-gray-600">
        
          </div>
        </div>

        {/* SideBar */}
        {/* <div className="
            w-full md:w-1/4 lg:w-1/5 xl:w-1/6
            bg-gray-700 text-white p-4 rounded-lg shadow-inner
            text-center md:text-left text-lg
            order-1 md:order-2 hidden                            
          ">
          SideBar (e.g., navigation, filters)
          <div className="mt-4 text-sm text-gray-300">
            On smaller screens, this might appear above or below the main content.
            On larger screens, it neatly aligns to the side.
          </div>
        </div> */}
      </div>


      {/* Footer Component */}
      <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md text-center text-sm">
        Footer Component (e.g., copyright, quick links)
      </div>

    </div>
    
  );
}