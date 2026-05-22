import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface EspecialidadeCardProps {
    titulo: string;
    descricao: string;
    icon: string;
}

function EspecialidadeCard({ titulo, descricao, icon }: EspecialidadeCardProps) {
    return (
        <motion.article
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-[#00ADD8]/40 transition-colors"
        >
            <span className="text-3xl">{icon}</span>
            <h3 className="font-semibold text-lg text-gray-100">{titulo}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{descricao}</p>
        </motion.article>
    );
}

export default function Especialidades() {
    const { t } = useTranslation();

    const cards = [
        {
            icon: "⚡",
            tituloKey: "especialidadesData.distributedSystems.titulo",
            descricaoKey: "especialidadesData.distributedSystems.descricao",
        },
        {
            icon: "🔀",
            tituloKey: "especialidadesData.eventDriven.titulo",
            descricaoKey: "especialidadesData.eventDriven.descricao",
        },
        {
            icon: "🏛️",
            tituloKey: "especialidadesData.cleanArchitecture.titulo",
            descricaoKey: "especialidadesData.cleanArchitecture.descricao",
        },
        {
            icon: "💳",
            tituloKey: "especialidadesData.paymentSystems.titulo",
            descricaoKey: "especialidadesData.paymentSystems.descricao",
        },
    ];

    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-36">
            <h2 className="my-20 text-center text-3xl">{t("especialidades")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {cards.map((card) => (
                    <EspecialidadeCard
                        key={card.tituloKey}
                        titulo={t(card.tituloKey)}
                        descricao={t(card.descricaoKey)}
                        icon={card.icon}
                    />
                ))}
            </div>
        </section>
    );
}
