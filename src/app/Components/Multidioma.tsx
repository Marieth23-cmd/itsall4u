
import Image from "next/image";
import { useState } from "react";

export default function LanguageSelect() {
    const languages = [
    { code: "pt", label: "Português", flag: "https://flagcdn.com/w40/pt.png" },
    { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  ];

  const [selected, setSelected] = useState(languages[0]);
 
  return (
    <div className="relative inline-block text-left language-select-container">
      <button
        className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"
        
      >
          <div className="flex items-center gap-2">
            <Image 
              src={selected.flag} 
              alt={selected.label}
              width={32} 
              height={24} 
              className="rounded"
            />
            <span className="text-sm hidden sm:inline">{selected.label}</span>
          </div>
       
          <span>🌐 </span>
      
      </button>

     
        <div className="absolute right-2 mt-2 w-auto p-4 bg-gray-800 rounded-md shadow-lg z-50 border border-gray-700">
         
            {languages.map((l) => (
            <button
              key={l.code}
              className={`flex items-center gap-1 w-full px-6 py-2 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md transition-colors disabled:opacity-50`}
              onClick={() => setSelected(l)}
            >
              <Image 
                src={l.flag}
                alt={l.label}
                width={32} 
                height={24} 
                className="rounded"
              />
              <span className="text-sm">{l.label}</span>
            </button>
            ))}
       </div>
 
    </div>
  );
}