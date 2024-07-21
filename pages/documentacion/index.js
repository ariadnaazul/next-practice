import Link from 'next/link'
import styles from "@/styles/Home.module.css";


import { Inter } from "next/font/google";
import NavBar from '@/components/NavBar';
import Volver from '@/components/Volver';
const inter = Inter({ subsets: ["latin"] });

export default function Documentacion() {
    return (
        <>
            <main className={`${styles.main} ${inter.className}`} >
                <NavBar></NavBar>
                <Volver href={"/"}></Volver>

                <h1 className={`${styles.title}`}>Documentación</h1>


                <div className={styles.grid}>
                    <Link href="/documentacion/estilos-css" className={styles.card}>
                        <h2>
                            Estilos CSS <span>-&gt;</span>
                        </h2>
                        <p>
                            CSS Local, Global, AppLayout & module.css.
                        </p>
                    </Link>
                    <Link href="/documentacion/rutas" className={styles.card}>
                        <h2>
                            Rutas <span>-&gt;</span>
                        </h2>
                        <p>
                            Rutas en Next.js, paginación
                        </p>
                    </Link>
                    <Link href="/documentacion/fetching-y-props" className={styles.card}>
                        <h2>
                            Fetching y Props <span>-&gt;</span>
                        </h2>
                        <p>
                            métodos, fetching, apis.
                        </p>
                    </Link>
                    <Link href="/documentacion/buenas-practicas" className={styles.card}>
                        <h2>
                            Buenas Prácticas <span>-&gt;</span>
                        </h2>
                        <p>
                            Buenas prácticas en Next.js, escalabilidad y sustentabilidad.
                        </p>
                    </Link>
                </div>
            </main >
        </>
    )

}