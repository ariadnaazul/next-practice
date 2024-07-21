import NavBar from "@/components/NavBar"
import Volver from "@/components/Volver"
import styles from '@/styles/Home.module.css'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function GetInitialProps ( {userName} ) {
    return (
        <>
        <main className={`${styles.main} ${inter.className}`}>
            <NavBar></NavBar>
            <Volver href="/documentacion/fetching-y-props"></Volver>
            <h1 className="title">Get Initial Props</h1>
            <p><i>getInitialProps</i> es un método exclusivo de Next.js, no disponible en React.</p>
            <p><i>getInitialProps</i> es el método más clásico. Nos ofrce una forma de obtener los datos que requiere una página desde el servidor.</p>
            <p>Este método sólo es detectado en páginas de Next.js, no se puede utilizar en componentes.</p>
            <p>Por ejemplo, podriamos hacer un fetching con datos de usuario.</p>
            <p></p>
            <h3>This is the page of {userName}</h3>
            <p></p>
            <pre>
                <code>
                    {`

                        GetInitialProps.getInitialProps = () => {
                            return { userName: '@dev' }
                        }

                    `}
                </code>
            </pre>
            <p>Al cargar una nueva url, Next reconoce el archivo, revisa si el componente tiene un método getInitialProps y lo ejecuta antes de renderizar. O sea recupera primero los datos de forma asincrona. Y una vez tiene los datos renderiza la página.</p>
            <p>Además los datos recuperados los envía en HTML. Esto es por la <b>hidratación</b>. Pasamos algo estático, un html, y lo hidratamos en el cliente, lo hacemos dinámico, para lo cual necesitados saber con qué datos se ha iniciado en el servidor.</p>
            <p>También podriamos estar consumiendo APIs externas.</p>
            <p>En este caso es una API interna, porque está dentro del mismo proyecto, pero podria ser una URL externa.</p>
            <pre>
                <code>
                    {`
                        
                        GetInitialProps.getInitialProps = () => {
                            return fetch('http://localhost:3000/api/hello')
                                .then(res => res.json())
                                .then(response => {
                                    const { userName } = response
                                    return{ userName }
                                })
                        }

                    `}
                </code>
            </pre>
            <p>Este método se ejecuta del lado del servidor en la carga inical.</p>
            <p>Pero cuando naveguemos a otra ruta el getInitialProps se va a ejecutar en el cliente porque esa información sigue siendo necesaria, pero la navegación debe seguir siendo SPA.</p>
        </main>
        </>
    )
}

GetInitialProps.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then(response => {
            const { userName } = response
            return{ userName }
        })
}

