import { Projeto } from "../types/projeto";
import quasar from '../assets/Images/Quasar.png'
import aluraflix from '../assets/Images/Aluraflix.png'
import shortUrl from '../assets/Images/shorturl.png'
import picpaychallenge from '../assets/Images/PicPayChallenge.png'
import ChallengeBackendFinancas from '../assets/Images/ChallengeBackendFinancas.png'
import gerenciamentoFuncionarios from '../assets/Images/GerenciamentoFuncionarios.gif'
import pokedex from '../assets/Images/pokedex.gif'
import botJoshue from '../assets/Images/BotJoshue.png'

const projetoSoul: Projeto = {
    titulo: "projetos.soul.titulo",
    descricao: "projetos.soul.descricao",
    tecnologias: ["Go", "Wails", "React", "Whisper", "SQLite", "RAG"],
    primaryLang: "Go",
    isPrivate: true,
};

const projetoShortUrl: Projeto = {
    titulo: "projetos.ShortUrl.titulo",
    imagem: shortUrl,
    descricao: "projetos.ShortUrl.descricao",
    tecnologias: ["Go", "Next.js", "TypeScript", "MySQL", "Nginx", "Docker"],
    primaryLang: "Go",
    repo: "https://www.goshort.tech"
};

const projetoPicPay: Projeto = {
    titulo: "projetos.PicPayChallenge.titulo",
    imagem: picpaychallenge,
    descricao: "projetos.PicPayChallenge.descricao",
    tecnologias: ["C#", ".Net", "React", "Next.js", "MySQL", "Kafka"],
    primaryLang: "C#",
    repo: "https://github.com/IgormBonfim/PicPayChallenge.Payment"
};

const projetoQuasar: Projeto = {
    titulo: "projetos.quasar.titulo",
    imagem: quasar,
    descricao: "projetos.quasar.descricao",
    tecnologias: ["C#", ".Net", "Angular", "MySQL"],
    primaryLang: "C#",
    repo: "https://github.com/IgormBonfim/quasar-ecommerce"
};

const projetoAluralfix: Projeto = {
    titulo: "projetos.Aluraflix.titulo",
    imagem: aluraflix,
    descricao: "projetos.Aluraflix.descricao",
    tecnologias: ["C#", ".Net", "MySQL", "Angular", "HTML", "CSS"],
    primaryLang: "C#",
    repo: "https://github.com/IgormBonfim/Challenge_Backend_AluraFlix"
};

export const PROJETOS_EM_DESTAQUE: Projeto[] = [
    projetoSoul,
    projetoShortUrl,
    projetoPicPay,
];

export const PROJETOS: Projeto[] = [
    ...PROJETOS_EM_DESTAQUE,
    projetoQuasar,
    projetoAluralfix,
    {
        titulo: "projetos.challengeBackendFinancas.titulo",
        imagem: ChallengeBackendFinancas,
        descricao: "projetos.challengeBackendFinancas.descricao",
        tecnologias: ["C#", ".Net", "MySQL"],
        primaryLang: "C#",
        repo: "https://github.com/IgormBonfim/Challenge_Backend_Financas"
    },
    {
        titulo: "projetos.gerenciamentoFuncionarios.titulo",
        imagem: gerenciamentoFuncionarios,
        descricao: "projetos.gerenciamentoFuncionarios.descricao",
        tecnologias: ["Java", "Spring", "MySQL", "Angular", "TypeScript"],
        primaryLang: "Java",
        repo: "https://github.com/IgormBonfim/Projeto-CRUD-Gerenciamento-de-Funcionarios"
    },
    {
        titulo: "projetos.pokedex.titulo",
        imagem: pokedex,
        descricao: "projetos.pokedex.descricao",
        tecnologias: ["Angular", "TypeScript", "HTML", "CSS", "RxJs"],
        primaryLang: "TypeScript",
        repo: "https://github.com/IgormBonfim/Angular-Pokedex"
    },
    {
        titulo: "projetos.botJoshue.titulo",
        imagem: botJoshue,
        descricao: "projetos.botJoshue.descricao",
        tecnologias: ["Node.js", "JavaScript", "Discord.js", "YouTube API"],
        primaryLang: "JavaScript",
        repo: "https://github.com/IgormBonfim/BotJoshue"
    },
];
