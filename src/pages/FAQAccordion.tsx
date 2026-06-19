import { Plus } from 'lucide-react';

const sections = [
  {
    title: "SIM-NIN \nLinkage",
    questions: [
      "What is NIN?",
      "Why do I need to enroll for NIN?",
      "How do I enroll for NIN?",
      "What are the requirements for obtaining NIN?"
    ]
  },
  {
    title: "Compliance Monitoring\nand Enforcement",
    questions: [
      "What is NIN?",
      "Why do I need to enroll for NIN?",
      "How do I enroll for NIN?",
      "What are the requirements for obtaining NIN?"
    ]
  },
  {
    title: "Spectrum\nAdministration",
    questions: [
      "What is NIN?",
      "Why do I need to enroll for NIN?",
      "How do I enroll for NIN?",
      "What are the requirements for obtaining NIN?"
    ]
  },
  {
    title: "Licensing",
    questions: [
      "What is NIN?",
      "Why do I need to enroll for NIN?",
      "How do I enroll for NIN?",
      "What are the requirements for obtaining NIN?"
    ]
  }
];

export default function FAQAccordion() {
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
          className="flex-1 border border-gray-300 rounded-l px-4 py-2.5 text-sm focus:outline-none placeholder-gray-500"
        />
        <button className="bg-[#1b438b] text-white px-8 py-2.5 rounded-r font-semibold text-sm hover:bg-blue-800">
          Search
        </button>
      </div>

      <div className="w-full max-w-3xl space-y-6 mb-16">
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start shadow-sm">
            <h2 className="text-[17px] font-bold text-gray-900 w-full md:w-[35%] leading-snug whitespace-pre-line">{section.title}</h2>
            
            <div className="w-full md:w-[65%] space-y-3">
              {section.questions.map((q, qIdx) => (
                <button key={qIdx} className="w-full bg-[#f8f9fb] hover:bg-gray-100 flex items-center justify-between px-5 py-3 rounded-md text-left transition-colors">
                  <span className="text-[13px] font-bold text-gray-800">{q}</span>
                  <Plus className="w-4 h-4 text-gray-500 shrink-0" />
                </button>
              ))}
              <div className="pt-3 text-center">
                <a href="#" className="text-blue-600 font-bold text-xs hover:underline">See more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
