import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBRJSON from '.././assets/languages/ptBR.json'
import enUSJSON from '.././assets/languages/enUS.json'

const init = localStorage.getItem("linguagem");

i18n.use(initReactI18next).init({
 resources: {
    ptBR: { ...ptBRJSON },
    enUS: { ...enUSJSON }
 }, // Where we're gonna put translations' files
 lng: init || "enUS",
});