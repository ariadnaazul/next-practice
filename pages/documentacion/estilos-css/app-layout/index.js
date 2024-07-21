import AppLayout from "@/components/AppLayout";
import Volver from "@/components/Volver";
import Link from 'next/link'

export default function AppLayoutPage() {
    const codeString = `
        export default function AppLayout({ children }) {

            return (

                <>
                    <main>

                        {children}

                    </main>

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
            <AppLayout>
                <Volver href={"/documentacion/estilos-css"}></Volver>
                <h1 className="title">App Layout</h1>
                <p>Cuando declaramos <b><Link className="inline-link" href="/documentacion/estilos-css/global-vs-local-jsx-styles">estilos globales</Link></b> en una página estos se comportan de manera global pero solo pueden ser leidos si el archivo que los contiene está <b>montado</b>.</p>
                <p>Cuando una página se desmonta porque cambia la url, estos estilos se "desactivan" o ya no son accesibles para el navegador.</p>
                <p>Por esto, otra forma de tener estilos globales que se puedan reutilizar en varias páginas es crear un componente <b>AppLayout</b> que luego recibirá como <b>children</b> el contenido html sobre el que se quieran extender los estilos globales.</p>
                <pre>
                    <code dangerouslySetInnerHTML={{ __html: codeString.replace(/</g, '&lt;').replace(/>/g, '&gt;') }} />
                </pre>


            </AppLayout>
        </>
    )
}