import { createNavigation } from "next-intl/navigation";

const languages = ["en", "pt", "fr"];

export const locales = languages

export const {Link , redirect, usePathname , useRouter} = createNavigation({
    locales , 
});