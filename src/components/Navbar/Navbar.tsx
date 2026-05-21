import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import BotaoTraduzir from "../BotaoTraduzir/BotaoTraduzir";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="mb-20 py-8 flex items-center justify-between">
            <h1 className="font-bold bg-gradient-to-r from-[#00ADD8] to-[#007D9C] bg-clip-text text-xl sm:text-4xl tracking-tight text-transparent p-1">
                <Link to="/">
                    Igor Bonfim
                </Link>
            </h1>
            <nav className="m-1 p-2 text-2xl flex justify-center items-center gap-4">
                <a href="https://www.linkedin.com/in/igormbonfim/" target="_blank"><FaLinkedin className="cursor-pointer hover:text-white"></FaLinkedin></a>
                <a href="https://github.com/IgormBonfim" target="_blank"><FaGithub className="cursor-pointer hover:text-white"></FaGithub></a>
                <BotaoTraduzir className="hover:text-white"/>
            </nav>
        </header>
    )
}
