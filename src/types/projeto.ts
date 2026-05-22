export type Projeto = {
    titulo: string,
    imagem?: string,
    descricao: string,
    tecnologias: string[],
    repo?: string,
    primaryLang?: string,
    isPrivate?: boolean,
}