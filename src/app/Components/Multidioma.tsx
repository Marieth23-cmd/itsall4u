"use client";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

const languages = [
  { code: "pt", label: "PT", flag: "https://flagcdn.com/w40/pt.png" },
  { code: "en", label: "EN", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "fr", label: "FR", flag: "https://flagcdn.com/w40/fr.png" },
];

export default function Multidioma() {
  const serverLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [selected, setSelected] = useState(
    languages.find((l) => l.code === serverLocale) ?? languages[0]
  );

  // Sincroniza com o locale do servidor
  useEffect(() => {
    const found = languages.find((l) => l.code === serverLocale);
    if (found) setSelected(found);
  }, [serverLocale]);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".language-select-container")) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClick);
    }
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  const handleLanguageChange = (lang: (typeof languages)[0]) => {
    setIsOpen(false);
    setSelected(lang);

    startTransition(() => {
      router.replace(pathname, { locale: lang.code });
    });
  };

  return (
    <div className="relative inline-block text-left language-select-container">
      <button
        disabled={isPending}
        aria-label={`Idioma: ${selected.label}`}
        className="flex items-center gap-2 bg-black/5 text-white px-3 py-2 rounded-md hover:bg-black/10 transition-colors disabled:opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={selected.flag}
          alt={selected.label}
          width={36}
          height={24}
          className="rounded w-full h-auto"
        />
        <span className="text-sm hidden sm:inline text-[#0F172A]">
          {selected.label}
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-auto bg-white rounded-md shadow-lg z-50 border border-black/5">
          {languages.map((l) => (
            <button
              key={l.code}
              disabled={isPending}
              className="flex items-center gap-1 w-full px-6 py-2 hover:bg-black/10 first:rounded-t-md last:rounded-b-md transition-colors disabled:opacity-50"
              onClick={() => handleLanguageChange(l)}
            >
              <Image
                src={l.flag}
                alt={l.label}
                width={32}
                height={24}
                className="rounded"
              />
              <span className="text-sm text-[#0F172A]">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}