export default function Complaint() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 w-full flex flex-col flex-1">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Complaint Form</h1>
      
      <form className="space-y-6 max-w-[400px] w-full mx-auto">
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your full name" 
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1.5">Message</label>
          <textarea 
            placeholder="Type your message..." 
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400 resize-none text-sm"
          />
        </div>
      </form>
    </div>
  );
}
