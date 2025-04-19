// place files you want to import through the `$lib` alias in this folder.
export function copytext(texts: string){
    navigator.clipboard.writeText(texts)
}