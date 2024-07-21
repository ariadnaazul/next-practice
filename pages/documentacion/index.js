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
                </div>
            </main >
        </>
    )

}