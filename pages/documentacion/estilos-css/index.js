import Link from 'next/link'
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import NavBar from '@/components/NavBar';
import Volver from '@/components/Volver';
const inter = Inter({ subsets: ["latin"] });


export default function EstilosCSS (){
    return (
        <>
            <main className={`${styles.main} ${inter.className}`} >
                <NavBar></NavBar>
                <Volver href={"/documentacion"}></Volver>
                <h1 className={`${styles.title}`}>Estilos CSS</h1>
                <div className={styles.grid}>
                    <Link href="/documentacion/estilos-css/app-layout" className={styles.card}>
                        <h2>
                            App Layout <span>-&gt;</span>
                        </h2>
                        <p>
                            CSS global con AppLayout component.
                        </p>
                    </Link>
                    <Link href="/documentacion/estilos-css/global-vs-local-jsx-styles" className={styles.card}>
                        <h2>
                            G vs L CSS <span>-&gt;</span>
                        </h2>
                        <p>
                            Global vs Local JSX format styles into java script file.
                        </p>
                    </Link>
                    <Link href="/documentacion/estilos-css/module-css" className={styles.card}>
                        <h2>
                            Module CSS <span>-&gt;</span>
                        </h2>
                        <p>
                            CSS Modules, Global CSS files
                        </p>
                    </Link>
                    <Link href="/documentacion/estilos-css/export-theme" className={styles.card}>
                        <h2>
                            Export Theme <span>-&gt;</span>
                        </h2>
                        <p>
                            Variables de tema, utilidades, concatenación
                        </p>
                    </Link>
                </div>
            </main >
            
        </>

    )    
}