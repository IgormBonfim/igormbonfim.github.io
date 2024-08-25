import { useTranslation } from "react-i18next"
import { Experiencia as ExperienciaType } from "../../types/experienca";
import TecnologiaTag from "../TecnologiaTag/TecnologiaTag";

interface ExperienciaProps {
    index: number
    experiencia: ExperienciaType,
}

export default function Experiencia({index, experiencia}: ExperienciaProps) {

    const { t } = useTranslation();
    return (
        <section key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{t(experiencia.ano)}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-1 font-semibold"> {t(experiencia.cargo)}
                </h6>
                    <span className="text-sm font-bold text-blue-800">
                        {t(experiencia.empresa)}
                    </span>
                <p className="mb-4 text-neutral-400 text-justify"> {t(experiencia.descricao)} </p>
                {experiencia.tecnologias.map((tecnologia, index) => (<TecnologiaTag {...{index, tecnologia}} ></TecnologiaTag>))}
            </div>
        </section>
    )
}