
import { BitCount } from "./ui/font";
export default function Home() {
  return (
    // Main container: Flex column on mobile, switches to a grid on medium and larger screens
    // Different background colors to visually show breakpoint changes
    <div
      className="
        flex flex-col min-h-screen p-4 space-y-4
        bg-blue-200           /* Default bg for mobile (sm and smaller) */
        sm:bg-green-200       /* Bg for small screens and up (>=640px) */
        md:bg-purple-200      /* Bg for medium screens and up (>=768px) */
        lg:bg-yellow-200      /* Bg for large screens and up (>=1024px) */
        xl:bg-red-200     /* Bg for extra-large screens and up (>=1280px) */" 
    >
      {/* Header Component */}
      <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center text-2xl font-bold">
        <h1 className={`${BitCount.className} antialiased`}>Header Component</h1>
      </div>

      {/* Main Content Area: Changes layout based on screen size */}
      <div
        className="
          flex flex-col md:flex-row flex-grow                 /* Flex column on mobile, row on md+ */
          gap-4                                               /* Gap between main content and sidebar */
          bg-pink-300                                         /* Unique bg for main content area */
          p-4 rounded-lg shadow-md
        "
      >
        {/* Main Content */}
        <div className="
            flex-grow bg-white p-4 rounded-lg shadow-inner
            text-center md:text-left text-lg
            order-2 md:order-1                                /* Order changed for visual flow on mobile vs desktop */
          ">
          Main Content Area (e.g., charts, data display)
          <div className="mt-4 text-sm text-gray-600">
            This section will contain your core AlgoViz functionality like performance graphs, backtesting results, etc.
            It takes up available space and will sit next to the sidebar on larger screens.
          </div>
        </div>

        {/* SideBar */}
        <div className="
            w-full md:w-1/4 lg:w-1/5 xl:w-1/6               /* Responsive width for sidebar */
            bg-gray-700 text-white p-4 rounded-lg shadow-inner
            text-center md:text-left text-lg
            order-1 md:order-2                                /* Order changed for visual flow on mobile vs desktop */
          ">
          SideBar (e.g., navigation, filters)
          <div className="mt-4 text-sm text-gray-300">
            On smaller screens, this might appear above or below the main content.
            On larger screens, it neatly aligns to the side.
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <div className="bg-emerald-600 text-white p-4 rounded-lg shadow-md text-center text-sm">
        Footer Component (e.g., copyright, quick links)
      </div>
    </div>
  );
}