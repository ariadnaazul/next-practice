import AppLayout from "@/components/AppLayout";
import Volver from "@/components/Volver";
import Link from 'next/link'

export default function BuenasPracticas () {
    const codeString = `
        import css from 'styled-jsx/css'

        export const globalStyles = css.global\`
            /*Estilos globales*/
        \`

        export default css\`
            /*Estilos Locales*/
        \`
    `;
    return (
        <>
            <AppLayout>
                <Volver href="/documentacion"></Volver>
                <h1 className="title">Buenas Práctica</h1>
                <section id="modularizar-estilos">
                    <h2 className="subtitle">Modularizar estilos</h2>
                    <p>Una buena práctica tanto para reutilizar estilos como para no declarar los estilos dentro del js de la página, ni importar las dependencias relacionadas con los estilos, es utilizar un archivo <i>styles.js</i> como el siguiente y luego importar los estilos en las páginas:</p>
                    <pre>
                        <code>{codeString}</code>
                    </pre>
                </section>
            </AppLayout>
        </>
    )
}