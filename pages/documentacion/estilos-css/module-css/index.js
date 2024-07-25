import NavBar from "@/components/NavBar";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Volver from "@/components/Volver";

export default function () {
    const codeString = `
        import styles from "@/styles/Home.module.css";
        
        export default function PageName() {


            return (

                <>
                    <main>

                       <h1 className={\`\${"styles.title"}\`}>Titulo</h1>

                    </main>
                    

                </>

            );

        }
    `;
    return (
        <>
            <main className={`${styles.main} ${inter.className}`} >
                <NavBar></NavBar>
                <Volver href={"/documentacion/estilos-css"}></Volver>
                <h1 className="title">Module CSS</h1>
                <p>Las páginas y componentes de Next sólo permiten importar <b>Module CSS</b>. En el unico lugar en el que podemos importar CSS tradicional es en nuestra <i>_app.js</i></p>
                <p>La forma de importar <b>Module CSS</b> es crear un archivo <i>Nombre.module.css</i>, importarlo en una página o componente de Next y usar las clases utilizando interpolación de cadenas y composición de clases:</p>
                <pre>
                    <code dangerouslySetInnerHTML={{ __html: codeString.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\${/g, '${') }} />
                </pre>
                <p>La forma de importar estilos globales en _app.js es:</p>
                <pre>
                    <code>
                    <p></p>
                    <p>import "@/styles/globals.css";</p>
                    <p></p>
                    </code>
                </pre>
                <p></p>
                <a className={`${styles.inlineLink}`} href="https://nextjs.org/docs/messages/css-global">Read more...</a>
            </main>
        </>
    )
}