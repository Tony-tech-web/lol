const articles = [
  {
    title: "Why Type Approval Matters in Nigeria's Telecom Sector",
    excerpt: "Type Approval of devices is a mandatory regulatory requirement established by the Nigerian Communications Act (NCA 2003), in particular, Part I of the chapter which deals with Consumer Protection and Quality of Service."
  },
  {
    title: "A-Z Tips on How to Stay Safe Online",
    excerpt: "Type Approval of devices is a mandatory regulatory requirement established by the Nigerian Communications Act (NCA 2003), in particular, Part I of the chapter which deals with Consumer Protection."
  },
  {
    title: "Understanding Fibre Cuts and Their Impact on Network Quality",
    excerpt: "Type Approval of devices is a mandatory regulatory requirement established by the Nigerian Communications Act (NCA 2003), in particular, Part I of the chapter which deals with Consumer Protection."
  },
  {
    title: "Why Type Approval Matters in Nigeria's Telecom Sector",
    excerpt: "Type Approval of devices is a mandatory regulatory requirement established by the Nigerian Communications Act (NCA 2003), in particular, Part I of the chapter which deals with Consumer Protection."
  },
  {
    title: "A-Z Tips on How to Stay Safe Online",
    excerpt: "Type Approval of devices is a mandatory regulatory requirement established by the Nigerian Communications Act (NCA 2003), in particular, Part I of the chapter which deals with Consumer Protection."
  },
  {
    title: "Understanding Fibre Cuts and Their Impact on Network Quality",
    excerpt: "Type Approval of devices is a mandatory regulatory requirement established by the Nigerian Communications Act (NCA 2003), in particular, Part I of the chapter which deals with Consumer Protection."
  }
];

export default function Articles() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 w-full flex flex-col flex-1">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-[#1b438b] mb-6">Consumer Information Center</h1>
      <p className="text-center text-xs md:text-sm text-gray-800 font-medium mb-12 max-w-4xl mx-auto leading-relaxed">
        The Consumer Affairs Bureau is one of the key departments of the Nigerian Communications Commission. It was created in September 2001 by the Commission through the provision of Chapter VII of Nigerian Communications Act (NCA 2003), in particular, Part I of the chapter which deals with Consumer Protection and Quality of Service.
      </p>

      <div className="flex w-full max-w-md mb-12 self-start shadow-sm">
        <input 
          type="text" 
          placeholder="Enter Search Word" 
          className="flex-1 border border-gray-300 rounded-l px-4 py-2.5 text-sm focus:outline-none placeholder-gray-500"
        />
        <button className="bg-[#1b438b] text-white px-8 py-2.5 rounded-r font-semibold text-sm hover:bg-blue-800">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
        {articles.map((art, idx) => (
          <div key={idx} className="flex flex-col group cursor-pointer">
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:-translate-y-1">
              <span className="text-white font-black text-4xl tracking-tight drop-shadow-md">Image</span>
            </div>
            <h3 className="font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#1b438b] transition-colors">{art.title}</h3>
            <p className="text-[11px] font-medium text-gray-600 mb-6 leading-relaxed line-clamp-3">{art.excerpt}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-bold">November 13, 2023</span>
              <span className="text-[11px] font-bold text-gray-900 group-hover:text-blue-700">Read Now &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-auto">
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 text-xs font-bold bg-white hover:bg-gray-50">&laquo;</button>
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 text-sm font-bold bg-white hover:bg-gray-50">&lsaquo;</button>
        <button className="w-8 h-8 flex items-center justify-center border border-transparent rounded text-white text-xs font-bold bg-[#1b438b] hover:bg-blue-800">1</button>
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 text-xs font-bold bg-white hover:bg-gray-50">2</button>
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 text-xs font-bold bg-white hover:bg-gray-50">3</button>
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 text-xs font-bold bg-white hover:bg-gray-50">4</button>
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 text-sm font-bold bg-white hover:bg-gray-50">&rsaquo;</button>
        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-600 text-xs font-bold bg-white hover:bg-gray-50">&raquo;</button>
      </div>
    </div>
  );
}
