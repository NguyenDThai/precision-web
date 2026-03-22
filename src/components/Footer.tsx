import { Globe, Share2 } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations"],
  Company: ["About Us", "Blog", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
  Support: ["Help Center", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">Precision</h3>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-8">
              The architectural void where high-end editorial design meets technical workflow precision.
            </p>
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                <Globe className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 font-medium">
            © 2024 Precision Startup Editorial. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
            <Globe className="w-4 h-4" />
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
