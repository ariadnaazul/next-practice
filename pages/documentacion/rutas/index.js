import Linker from "@/components/Linker";
import NavBar from "@/components/NavBar";
import Volver from "@/components/Volver";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function () {
    return (
        <>
            <main className={`${inter.className} main`}>
                <NavBar></NavBar>
                <Volver href={"/documentacion"}></Volver>
                <h1 className='title'>Rutas</h1>
                <p>Para crear rutas en Next.js utilizaremos la ubicación <i>pages</i>.</p> 
                <p>Dentro de <i>pages</i> debemos crear carpetas que reciban el nombre de la ruta de destino.</p> 
                <p>Y dentro de cada una de estas carpetas un archivo <i>index.js</i> con el contenido de la página.</p>
                <p>Los redireccionamientos externos en Next.js se hacen utilizando {'<a>'} (ancor).</p>
                <p>Pero si utilizamos {'<a>'} (ancor) para redireccionar a rutas internas, podemos ver como nuestra aplicación deja de comportarse como una SPA.</p>
                <p>Para que nuestra app se comporte como SPA debemos utilizar el componente {'<Link>'} (link)</p> de la siguiente manera:
                <p></p>
                <pre>
                    <code>{'<Link href="/">Ir hacia..</Link>'}</code>
                </pre>
                <p></p>
                <p>/ siempre hará referencia al <i>index.js</i> dentro de <i>pages</i></p>
                <p>El resto de las rutas de establecen en base al anidamiento de carpetas dentro de pages.</p>
                <h2 className="subtitle">Escalabilidad y Buenas Prácticas</h2>
                <p>Para no depender de los componentes de Next.js en toda nuestra página, una buena práctica sería crear un componente propio que sirva de enrutador, y utilicé las funciones de Next.js que están activas en este momento, pero que nos permita actualizar o modificar ese componente de forma sencilla, sin tener que revisar toda la aplicación en caso de que en algún momento el componente de Next.js que estamos utilizando cambie o quede deprecado.</p>
                <div className="d-flex">
                    <p>En este ejemplo el enlace que redirecciona a</p>
                    <Linker customClass={"inlineLink"} href={"/documentacion/buenas-practicas"} content="Buenas Prácticas"></Linker>
                    <p>está utilizando un componente propio llamado <i>Linker</i> que utiliza la funcionalidad de Link de Next en un único archivo y recibe como parámetros: la url de destino, las clases y el texto del enlace.</p>
                </div>
                <p>Esto no sólo se limita a rutas, sino a todas las funcionalidades de Next.js que utilicemos. Lo mejor siempre será tener el mayor control posible sobre nuestros componentes.</p>
            </main>
            <style jsx global>{`
                .d-flex{
                    display:flex;
                    gap: 5px;
                    flex-wrap:wrap;
                    text-wrap:wrap;
                }

            `}</style>
        </>
    )
}