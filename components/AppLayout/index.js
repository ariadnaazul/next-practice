import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import NavBar from "../NavBar";
const inter = Inter({ subsets: ["latin"] });

export default function AppLayout ({ children }) {
    return (
        <>
            <main className={`${styles.main} ${styles.content}  ${inter.className}`} >
                <NavBar></NavBar>
                {children}
            </main>
            <style jsx global>{`
                .title{
                    position: relative;
                    }
                .title::before{
                    content:"";
                    background: var(--primary-glow);
                    padding: 30px;
                    filter: blur(30px);
                    inset: 1;
                    width: 300px;
                    position:absolute;
                    z-index: -1;
                    margin-left: -80px;
                }
                    
                .title {
                    font-size: 30px;
                    color:white;
                    font-weight: 600;
                    font-style: normal;
                    text-align: center;
                    margin-top: 50px;
                    text-transform: uppercase;
                    font-family: '__Inter_aaf875', '__Inter_Fallback_aaf875';
                    font-style: normal;
                    margin-bottom: 70px;
                    margin-top: 70px;
                }
                .inline-link {
                    color: rgb(69, 69, 205);
                }
                .inline-link:hover {
                    color: rgb(71, 71, 173)
                }
                pre {
                    background: var(--primary-glow);
                    border-radius: 16px;
                    padding: 20px;
                    margin: 15px 0px 
                }
            `}
            </style>
        </>
    )
}