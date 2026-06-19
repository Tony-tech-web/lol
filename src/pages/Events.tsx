export default function Events() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 w-full flex flex-col flex-1">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-[#1b438b] mb-6">Consumer Affairs Events</h1>
      <p className="text-center text-xs md:text-sm text-gray-800 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id massa mi. Aliquam id vulputate eros. Pellentesque sit amet sapien fringilla, mollis ligula consectetur, ultrices mauris. Maecenas commodo lobortis tortor mattis quis imperdiet augue. Vestibulum auctor ornare leo, sed suscipit magna bibendum eu. Curabitur pellentesque nibh diam, at maximus urna fermentum sit amet. Pellentesque commodo ipsum et sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis urna arcu, eget semper orci facilisis id. Praesent lorem orci, mollis nec efficitur id, ultrices sed nisl.
      </p>

      <div className="max-w-3xl mx-auto w-full">
        {/* Calendar Header */}
        <div className="flex w-full" style={{ height: '48px' }}>
            <div className="bg-[#111827] text-white flex-1 flex items-center justify-between px-6">
            <button className="text-gray-400 hover:text-white pb-1 text-xl">&lt;</button>
            <span className="font-semibold text-sm">December 2023</span>
            <button className="text-gray-400 hover:text-white pb-1 text-xl">&gt;</button>
            </div>
            <div className="w-[180px] bg-[#1b438b] border-l border-gray-800 text-white flex flex-col justify-center items-center font-semibold text-sm">
                Events This Month
            </div>
        </div>
        
        {/* Calendar Grid */}
        <div className="border border-gray-200">
          <div className="grid grid-cols-7 bg-[#fbfcfd] border-b border-gray-200 text-center text-[11px] uppercase font-bold text-gray-500">
            <div className="py-3 border-r border-gray-200">Mon</div>
            <div className="py-3 border-r border-gray-200">Tue</div>
            <div className="py-3 border-r border-gray-200">Wed</div>
            <div className="py-3 border-r border-gray-200">Thu</div>
            <div className="py-3 border-r border-gray-200">Fri</div>
            <div className="py-3 border-r border-gray-200">Sat</div>
            <div className="py-3">Sun</div>
          </div>
          
          <div className="grid grid-cols-7 text-center text-sm font-medium bg-[#fcfdfd]">
            {/* Row 1 */}
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-400">1</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-400">2</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-400">3</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-blue-600 bg-[#3b82f6] text-white font-bold relative">
                4
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-l-[8px] border-t-white border-l-transparent opacity-80"></div>
            </div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">5</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">6</div>
            <div className="aspect-square flex items-center justify-center border-b border-gray-200 text-gray-800">7</div>
            
            {/* Row 2 */}
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">8</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">9</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">10</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">11</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">12</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">13</div>
            <div className="aspect-square flex items-center justify-center border-b border-gray-200 text-gray-800">14</div>

            {/* Row 3 */}
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">15</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">16</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">17</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">18</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">19</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">20</div>
            <div className="aspect-square flex items-center justify-center border-b border-gray-200 text-gray-800">21</div>

            {/* Row 4 */}
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">22</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">23</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">24</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">25</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">26</div>
            <div className="aspect-square flex items-center justify-center border-b border-r border-gray-200 text-gray-800">27</div>
            <div className="aspect-square flex items-center justify-center border-b border-gray-200 text-gray-800">28</div>

            {/* Row 5 */}
            <div className="aspect-square flex items-center justify-center border-r border-gray-200 text-gray-800">29</div>
            <div className="aspect-square flex items-center justify-center border-r border-gray-200 text-gray-800">30</div>
            <div className="aspect-square flex items-center justify-center border-r border-gray-200 text-gray-800">31</div>
            <div className="aspect-square flex items-center justify-center border-r border-gray-200 text-gray-400">1</div>
            <div className="aspect-square flex items-center justify-center border-r border-gray-200 text-gray-400">2</div>
            <div className="aspect-square flex items-center justify-center border-r border-gray-200 text-gray-400">3</div>
            <div className="aspect-square flex items-center justify-center text-gray-400">4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
