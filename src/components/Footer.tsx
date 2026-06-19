import { Building2, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#eef6ff] py-16 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div className="max-w-md">
          <h3 className="font-bold text-gray-900 mb-1 lg:text-lg">Consumer Affairs Bureau,</h3>
          <p className="text-sm border-b border-gray-300 pb-4 mb-4 text-gray-700">Nigerian Communications Commission</p>
          
          <div className="space-y-4 text-sm text-gray-700 font-medium tracking-tight">
            <div className="flex items-start gap-4">
              <Building2 className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Head Office Annex,<br />
                Plot 1253 Cadastral Zone, Jabi - Airport Road,<br />
                Mbora District, Abuja, FCT 900108,<br />
                Federal Republic of Nigeria.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gray-500 shrink-0" />
              <p>+234-209-461-7000</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gray-500 shrink-0" />
              <p>+234-209-461-7514</p>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <Mail className="w-5 h-5 text-gray-500 shrink-0" />
              <p>consumer@ncc.gov.ng</p>
            </div>
          </div>
        </div>

        <div className="md:ml-auto md:w-3/4">
          <h3 className="font-bold text-gray-900 mb-6 lg:text-lg">Useful Links</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-green-200 bg-white shadow-sm flex items-center justify-center shrink-0">
                <div className="w-6 h-6 rounded-full bg-green-500 opacity-20"></div>
              </div>
              <p className="text-[13px] font-semibold text-gray-800 leading-tight">
                The Federal Ministry<br/>
                Of Communications,<br/>
                Innovations and<br/>
                Digital Economy
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 rounded-sm">
                <span className="text-[#1b438b] font-black text-xs tracking-tighter">NCC</span>
              </div>
              <p className="text-[13px] font-semibold text-gray-800 leading-tight">
                Nigerian<br/>
                Communications<br/>
                Commission
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-blue-200 bg-white shadow-sm flex items-center justify-center shrink-0">
                <div className="w-6 h-6 rounded-full bg-blue-500 opacity-20"></div>
              </div>
              <p className="text-[13px] font-semibold text-gray-800 leading-tight">
                Universal Service<br/>
                Provision Fund
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
