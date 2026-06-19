export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center flex-1">
      <h1 className="text-[120px] md:text-[160px] leading-none font-black text-[#1b438b] italic tracking-tighter mb-4">404</h1>
      <p className="text-xl md:text-2xl font-bold text-gray-800 mb-10">The page you are looking for doesn't exist</p>
      <button className="bg-[#1b438b] text-white px-8 py-3.5 rounded font-semibold text-sm hover:bg-blue-800 transition-colors shadow-sm">
        GO HOME
      </button>
    </div>
  );
}
