import { useTranslation } from "react-i18next";
import TecnologiaTag from "../TecnologiaTag/TecnologiaTag";
import { Projeto as ProjetoType } from "../../types/projeto";

const LANG_COLORS: Record<string, string> = {
    Go: "#00ADD8",
    "C#": "#9333ea",
    Java: "#f97316",
    TypeScript: "#3b82f6",
    JavaScript: "#eab308",
};

function SoulPlaceholder() {
    return (
        <div className="rounded-lg w-full aspect-[2/1] flex flex-col items-center justify-center bg-neutral-900 border border-neutral-800 select-none overflow-hidden relative">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    background:
                        "radial-gradient(ellipse at center, #00ADD8 0%, transparent 70%)",
                }}
            />
            <span
                className="font-mono font-bold tracking-widest text-2xl"
                style={{
                    color: "#00ADD8",
                    textShadow: "0 0 16px #00ADD8, 0 0 32px #00ADD8aa",
                }}
            >
                S.O.U.L.
            </span>
            <span className="text-xs text-neutral-500 mt-2 tracking-widest font-mono">
                SYNTHETIC OPERATIVE UNIT LIFELOG
            </span>
        </div>
    );
}

export default function Projeto(projeto: ProjetoType) {
    const { t } = useTranslation();
    const langColor = projeto.primaryLang ? (LANG_COLORS[projeto.primaryLang] ?? "#6b7280") : null;

    const inner = (
        <article className="group max-w-md cursor-pointer">
            <div className="rounded-lg max-w-md overflow-hidden">
                {projeto.imagem ? (
                    <img
                        src={projeto.imagem}
                        alt={t(projeto.titulo)}
                        className="transition duration-200 group-hover:scale-105 w-full"
                    />
                ) : (
                    <SoulPlaceholder />
                )}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-4">
                {langColor && projeto.primaryLang && (
                    <span
                        className="rounded px-2 py-0.5 text-xs font-bold"
                        style={{ color: langColor, border: `1px solid ${langColor}` }}
                    >
                        {projeto.primaryLang}
                    </span>
                )}
                {projeto.tecnologias
                    .filter((t) => t !== projeto.primaryLang)
                    .map((tecnologia, index) => (
                        <TecnologiaTag key={index} {...{ tecnologia }} />
                    ))}
            </div>
            <h4
                className="mt-2 font-bold text-xl transition-colors"
                style={{ color: langColor ?? "#1d4ed8" }}
            >
                {t(projeto.titulo)}
            </h4>
            <p className="my-2 text-neutral-400 text-justify tracking-tighter line-clamp-3">
                {t(projeto.descricao)}
            </p>
        </article>
    );

    if (projeto.isPrivate || !projeto.repo) {
        return <div>{inner}</div>;
    }

    return (
        <a href={projeto.repo} target="_blank">
            {inner}
        </a>
    );
}
