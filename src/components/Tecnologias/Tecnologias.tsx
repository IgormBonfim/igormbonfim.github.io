import { useTranslation } from "react-i18next";
import { SiCsharp, SiDotnet, SiMongodb, SiMysql, SiTypescript, SiPostgresql, SiApachekafka, SiRabbitmq } from "react-icons/si";
import { RiReactjsLine, RiAngularjsLine } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { FaAws, FaDocker, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import Tecnologia from "../Tecnologia/Tecnologia";

function TierLabel({ label }: { label: string }) {
    return (
        <p className="w-full text-center text-xs uppercase tracking-widest text-neutral-500 mb-2 mt-6">
            {label}
        </p>
    );
}

export default function Tecnologias() {
    const { t } = useTranslation();
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-36">
            <h2 className="my-20 text-center text-3xl">{t("tecnologias")}</h2>

            <TierLabel label="Primary" />
            <article className="flex flex-wrap items-center justify-center gap-4 mb-2">
                <Tecnologia tooltipId="golang" tooltipContent="Go" tooltipPlace="top" link="https://go.dev/">
                    <FaGolang className="text-7xl" style={{ color: "#00ADD8" }} />
                </Tecnologia>
                <Tecnologia tooltipId="c#" tooltipContent="C#" tooltipPlace="top" link="https://dotnet.microsoft.com/pt-br/languages/csharp">
                    <SiCsharp className="text-7xl text-violet-500" />
                </Tecnologia>
            </article>

            <TierLabel label="Backend" />
            <article className="flex flex-wrap items-center justify-center gap-4 mb-2">
                <Tecnologia tooltipId=".net" tooltipContent=".NET" tooltipPlace="top" link="https://dotnet.microsoft.com/pt-br/">
                    <SiDotnet className="text-6xl text-violet-400" />
                </Tecnologia>
                <Tecnologia tooltipId="nodejs" tooltipContent="Node.js" tooltipPlace="top" link="https://nodejs.org/">
                    <FaNodeJs className="text-6xl text-green-500" />
                </Tecnologia>
                <Tecnologia tooltipId="typescript" tooltipContent="TypeScript" tooltipPlace="top" link="https://www.typescriptlang.org/">
                    <SiTypescript className="text-6xl text-sky-600" />
                </Tecnologia>
            </article>

            <TierLabel label="Data & Messaging" />
            <article className="flex flex-wrap items-center justify-center gap-4 mb-2">
                <Tecnologia tooltipId="postgresql" tooltipContent="PostgreSQL" tooltipPlace="top" link="https://www.postgresql.org/">
                    <SiPostgresql className="text-6xl text-sky-400" />
                </Tecnologia>
                <Tecnologia tooltipId="mysql" tooltipContent="MySQL" tooltipPlace="top" link="https://www.mysql.com/">
                    <SiMysql className="text-6xl text-cyan-700" />
                </Tecnologia>
                <Tecnologia tooltipId="mongodb" tooltipContent="MongoDB" tooltipPlace="top" link="https://www.mongodb.com/">
                    <SiMongodb className="text-6xl text-green-500" />
                </Tecnologia>
                <Tecnologia tooltipId="redis" tooltipContent="Redis" tooltipPlace="top" link="https://redis.io/">
                    <DiRedis className="text-6xl text-red-500" />
                </Tecnologia>
                <Tecnologia tooltipId="kafka" tooltipContent="Apache Kafka" tooltipPlace="top" link="https://kafka.apache.org/">
                    <SiApachekafka className="text-6xl text-gray-200" />
                </Tecnologia>
                <Tecnologia tooltipId="rabbitmq" tooltipContent="RabbitMQ" tooltipPlace="top" link="https://www.rabbitmq.com/">
                    <SiRabbitmq className="text-6xl text-orange-500" />
                </Tecnologia>
            </article>

            <TierLabel label="Cloud & Infra" />
            <article className="flex flex-wrap items-center justify-center gap-4 mb-2">
                <Tecnologia tooltipId="aws" tooltipContent="AWS" tooltipPlace="top" link="https://aws.amazon.com/">
                    <FaAws className="text-6xl text-gray-100" />
                </Tecnologia>
                <Tecnologia tooltipId="docker" tooltipContent="Docker" tooltipPlace="top" link="https://www.docker.com/">
                    <FaDocker className="text-6xl text-cyan-500" />
                </Tecnologia>
                <Tecnologia tooltipId="git" tooltipContent="Git" tooltipPlace="top" link="https://git-scm.com/">
                    <FaGitAlt className="text-6xl text-orange-600" />
                </Tecnologia>
            </article>

            <TierLabel label="Frontend" />
            <article className="flex flex-wrap items-center justify-center gap-4">
                <Tecnologia tooltipId="react" tooltipContent="React" tooltipPlace="top" link="https://react.dev/">
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                </Tecnologia>
                <Tecnologia tooltipId="nextjs" tooltipContent="Next.js" tooltipPlace="top" link="https://nextjs.org/">
                    <SiNextdotjs className="text-6xl text-gray-100" />
                </Tecnologia>
                <Tecnologia tooltipId="angular" tooltipContent="Angular" tooltipPlace="top" link="https://angular.dev/">
                    <RiAngularjsLine className="text-6xl text-red-500" />
                </Tecnologia>
            </article>
        </section>
    );
}
