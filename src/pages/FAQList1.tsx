import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  "SIM-NIN Linkage",
  "Compliance Monitoring and Enforcement",
  "SIM and NIN Integration",
  "Spectrum Administration",
  "Consumer Affair Bureau",
  "Policy Competition & Economic Analysis",
  "Research & Development"
];

export default function FAQList1() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 w-full flex flex-col items-center flex-1">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-[#1b438b] mb-4">Frequently Asked Questions</h1>
      <p className="text-center text-xs text-gray-800 font-medium mb-10 max-w-3xl leading-relaxed">
        This page addresses many of the Frequently Asked Questions (FAQ) on Telecommunications issues, including General Consumer<br className="hidden md:block"/>
        Enquiries and issues with regard to Licensing, Research & Standards, Tariffs & Charges and others.<br className="hidden md:block"/>
        Please click on the links below to access the FAQs on the following subjects and their answers.
      </p>

      <div className="flex w-full max-w-md mx-auto mb-16 shadow-sm">
        <input 
          type="text" 
          placeholder="Enter Search FAQs Topics" 
          className="flex-1 border border-gray-300 rounded-l px-4 py-2.5 focus:outline-none text-sm placeholder-gray-500"
        />
        <button className="bg-[#1b438b] text-white px-8 py-2.5 rounded-r font-semibold text-sm hover:bg-blue-800">
          Search
        </button>
      </div>

      <div className="w-full max-w-2xl space-y-4 mb-16">
        {categories.map((cat, idx) => (
          <button onClick={() => navigate('/faqs-accordion')} key={idx} className="w-full bg-[#f8f9fb] hover:bg-gray-100 flex items-center justify-between px-6 py-4 rounded group transition-colors shadow-sm">
            <span className="font-bold text-gray-800 text-[13px]">{cat}</span>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-800" />
          </button>
        ))}
      </div>

      <button onClick={() => navigate('/faqs-2')} className="bg-[#1b438b] text-white px-10 py-3 rounded font-semibold text-sm hover:bg-blue-800 shadow-sm">
        Next Page
      </button>
    </div>
  );
}
