import Sobre from "../../components/Sobre/Sobre";
import Tecnologias from "../../components/Tecnologias/Tecnologias";
import Experiencias from "../../components/Experiencias/Experiencias";
import Projetos from "../../components/Projetos/Projetos";

export default function Home() {
    // const { t, i18n: {changeLanguage, language} } = useTranslation();
    // const [currentLanguage, setCurrentLanguage] = useState(language)
  
    // const handleChangeLanguage = () => {
    //   const newLanguage = currentLanguage === "ptBR" ? "enUS" : "ptBR";
    //   setCurrentLanguage(newLanguage);
    //   changeLanguage(newLanguage);
    // }

    return (
        <>
            <Sobre></Sobre>
            <Tecnologias></Tecnologias>
            <Experiencias></Experiencias>
            <Projetos></Projetos>
        </>
    )
}