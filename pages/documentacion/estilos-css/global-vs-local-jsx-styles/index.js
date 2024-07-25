import NavBar from "@/components/NavBar";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Volver from "@/components/Volver";
import Link from "next/link";
import Linker from "@/components/Linker";


export default function GlobalVsLocalJSXStyles() {
    const codeString = `
        export default function PageName() {

            return (

                <>
                    <main>

                       /*contenido HTML*/

                    </main>

                    <style jsx>

                        {\`

                            /* Tus estilos locales aquí */
                        
                        \`}

                    </style>

                    <style jsx global>

                        {\`

                            /* Tus estilos globales aquí */
                        
                        \`}

                    </style>
                    

                </>

            );

        }
    `;
    return (
        <>
            <main className={`${styles.main} ${inter.className}`} >
                <NavBar></NavBar>
                <Volver href={"/documentacion/estilos-css"}></Volver>
                <h1 className="title">Global vs Local JSX Styles</h1>
                <p>En Next se puede utilizar CSS dentro de un archivo js con el formato jsx</p>
                <h2 className="subtitle">Local CSS</h2>
                <p>Los estilos declarados en local solo afectan al html de ese archivo</p>
                <h2 className="subtitle">Global</h2>
                <p>Los estilos declarados en global afectan a toda la aplicación, sin embargo, en tanto el archivo que contiene los estilos se desmonte, el navegador ya no podrá leerlos.</p>
                <p>Para solucionar esto y usar estilos globales en formato jsx se puede utlizar un <b><Link className={`${styles.inlineLink}`} href="//documentacion/estilos-css/app-layout">AppLayout</Link></b></p>
                <pre>
                    <code dangerouslySetInnerHTML={{ __html: codeString.replace(/</g, '&lt;').replace(/>/g, '&gt;') }} />
                </pre>
                <h2 className="subtitle">Recursos</h2>
                <p>Para poder visualizar el código CSS en formato JSX con la marcación de colores y utilizar también el texto predictivo es necesario instalar la extensión <i>Styled JSX</i></p>
                <Linker customClass={'inlineLink'} href={'/documentacion/buenas-practicas#modularizar-estilos'} content={'Ver como modularizar estilos en Buenas prácticas'}></Linker>

            </main>
        </>
    )
}