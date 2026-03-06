import Image from "next/image";
import { useEffect, useState } from "react";

export default function LanguageSelect() {
    const languages = [
    { code: "pt", label: "PT", flag: "https://flagcdn.com/w40/pt.png" },
    { code: "en", label: "EN", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "fr", label: "FR", flag: "https://flagcdn.com/w40/fr.png" },
  ];

  const [selected, setSelected] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { 
    const handleclick=(event:MouseEvent)=>{
        const target = event.target as HTMLElement 
        if(!target.closest(".language-select-container")){
                setIsOpen(false)
        }
    }
    if(isOpen){
        document.addEventListener("click", handleclick)
    }
    return () => {
        document.removeEventListener("click", handleclick)
    }
  }, [isOpen])


 
  return (
    <div className="relative inline-block text-left language-select-container">
      <button
        className="flex items-center gap-2 bg-black/40 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
          <div className="flex items-center gap-2">
            <Image 
              src={selected.flag} 
              alt={selected.label}
              width={36} 
              height={24} 
              className="rounded w-full h-auto"
            />
            <span className="text-sm hidden sm:inline">{selected.label}</span>
          </div>
       
        
      </button>

     
      {isOpen &&(<div className="absolute  mt-2 w-auto  bg-black/60 rounded-md shadow-lg z-50 border border-gray-700 ">
         
            {languages.map((l) => (
            <button
              key={l.code}
              className={`flex items-center gap-1 w-full px-6 py-2 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md transition-colors disabled:opacity-50`}
              onClick={() => {
                setSelected(l);
                setIsOpen(false);
              }}
            >
              <Image 
                src={l.flag}
                alt={l.label}
                width={32} 
                height={24} 
                className="rounded"
              />
              <span className="text-sm text-white">{l.label}</span>
            </button>
            ))}
       </div>)}  
 
    </div>
  );
}