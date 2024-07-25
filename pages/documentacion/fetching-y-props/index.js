import Link from 'next/link'
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import NavBar from '@/components/NavBar';
import Volver from '@/components/Volver';
const inter = Inter({ subsets: ["latin"] });


export default function FetchingProps (){
    return (
        <>
            <main className={`${styles.main} ${inter.className}`} >
                <NavBar></NavBar>
                <Volver href={"/documentacion"}></Volver>
                <h1 className={`${styles.title}`}>Fetching y Props</h1>
                <div className={styles.grid}>
                    <Link href="/documentacion/fetching-y-props/get-initial-props" className={styles.card}>
                        <h2>
                            Get Initial Props <span>-&gt;</span>
                        </h2>
                        <p>
                            CSS global con AppLayout component.
                        </p>
                    </Link>
                    
                </div>
            </main >
            
        </>

    )    
}