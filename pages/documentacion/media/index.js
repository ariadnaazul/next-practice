import AppLayout from "@/components/AppLayout";
import Volver from "@/components/Volver";

export default function Media () {
    return(
        <>
            <AppLayout>
                <Volver href={'/documentacion'}></Volver>
                <h1 className="title">Media</h1>
                <section id="imagenes">
                    <h2 className="subtitle">Imágenes</h2>
                    <p>Las imágenes deben ir dentro de la carpeta public y se cargar asi:</p>
                    <pre>
                        <code>{`
    <img src="/next.svg"/>
                         `}</code>
                    </pre>
                </section>
                <section>
                    <h2 className="subtitle">SVG</h2>
                    <p>Los svg se pueden convertir a componentes de react utilizando esta aplicación: <a className="inlineLink" href="https://react-svgr.com/">SVGR</a></p>

                </section>

            </AppLayout>
        </>
    )
}