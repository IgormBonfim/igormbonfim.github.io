import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoIosGlobe } from "react-icons/io";


export default function Navbar() {
    return (
        <header className="mb-20 p-8 flex items-center justify-between">
            <h1 className="font-bold bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-4xl tracking-tight text-transparent p-1">Igor Bonfim</h1>
            <nav className="m-1 p-2 text-2xl flex justify-center items-center gap-4">
                <a href="https://www.linkedin.com/in/igormbonfim/" target="_blank"><FaLinkedin className="cursor-pointer hover:text-white"></FaLinkedin></a>
                <a href="https://github.com/IgormBonfim" target="_blank"><FaGithub className="cursor-pointer hover:text-white"></FaGithub></a>
                <IoIosGlobe className="cursor-pointer hover:text-white"></IoIosGlobe>
            </nav>
        </header>
    )
}