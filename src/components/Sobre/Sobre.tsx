import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Sobre() {
  const IMG_URL = "https://github.com/igormbonfim.png";
  const URL_WHATSAPP = "https://api.whatsapp.com/send?phone=5527992523204";

  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const { t } = useTranslation();
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-col items-center gap-4">
        <motion.img
          src={IMG_URL}
          alt="Igor Bonfim - Software Engineer"
          className="rounded-full max-w-64"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        />
        <motion.div
          variants={container(0.4)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3"
        >
          <h2 className="text-3xl">{t("cargo")}</h2>
          <span className="rounded-md border border-[#00ADD8] px-2 py-0.5 text-sm font-semibold text-[#00ADD8]">
            Go
          </span>
        </motion.div>
        <motion.p
          variants={container(0.7)}
          initial="hidden"
          animate="visible"
          className="text-neutral-400 text-sm italic"
        >
          {t("tagline")}
        </motion.p>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-4 font-light text-justify"
        >
          {t("sobre")}
        </motion.p>
        <motion.div
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-4 text-lg"
        >
          <a
            href={URL_WHATSAPP}
            target="_blank"
            className="rounded-xl bg-[#00ADD8] hover:bg-[#5DC9E2] p-4 text-neutral-950 font-semibold transition-colors"
          >
            {t("btn.contato")}
          </a>
          <a
            href={t("linkCurriculo")}
            target="_blank"
            className="rounded-xl border border-[#00ADD8] text-[#00ADD8] hover:text-neutral-950 hover:bg-[#00ADD8] p-4 transition-colors"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
