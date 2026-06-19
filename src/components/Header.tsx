import { Link } from 'react-router-dom';
import { Search, Lock, Twitter, Youtube } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-[#f8f9fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-end text-xs text-gray-600 gap-6">
          <Link to="#" className="hover:text-blue-700 font-medium">Consumer Handbook</Link>
          <Link to="#" className="hover:text-blue-700 font-medium">NCC Website</Link>
          <Link to="/faqs" className="hover:text-blue-700 font-medium">FAQ</Link>
          <div className="flex items-center gap-3 ml-2 text-gray-800">
            <Lock className="w-3.5 h-3.5" />
            <Youtube className="w-3.5 h-3.5" />
            <Twitter className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
      
      {/* Main Nav */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-4xl font-extrabold text-[#1b438b] tracking-tighter">NCC</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-bold text-gray-800">
            <Link to="#" className="hover:text-[#1b438b]">About Us</Link>
            <Link to="/articles" className="hover:text-[#1b438b]">Articles</Link>
            <Link to="/faqs" className="hover:text-[#1b438b]">Consumer Advocacy</Link>
            <Link to="#" className="hover:text-[#1b438b]">Contact Us</Link>
            <Link to="/statistics" className="hover:text-[#1b438b]">Consumer Statistics</Link>
            <Link to="/complaint" className="hover:text-[#1b438b]">Lodge a Complaint</Link>
            <button className="text-gray-800 hover:text-black">
              <Search className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </div>

      {/* Blue Wave Banner */}
      <div className="h-[60px] w-full bg-[#1b438b] relative overflow-hidden flex items-center">
        {/* Abstract pattern mock */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30C120 10 240 50 360 30C480 10 600 50 720 30C840 10 960 50 1080 30C1200 10 1320 50 1440 30V60H0V30Z" fill="currentColor" className="text-blue-300"/>
            <path d="M0 10C120 -10 240 30 360 10C480 -10 600 30 720 10C840 -10 960 30 1080 10C1200 -10 1320 30 1440 10V60H0V10Z" fill="currentColor" className="text-blue-400" fillOpacity="0.5"/>
            <path d="M0 50C120 30 240 70 360 50C480 30 600 70 720 50C840 30 960 70 1080 50C1200 30 1320 70 1440 50V60H0V50Z" fill="currentColor" className="text-blue-200" fillOpacity="0.5"/>
          </svg>
        </div>
      </div>
    </header>
  );
}
