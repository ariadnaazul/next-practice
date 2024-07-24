import { colors, fonts } from '@/styles/theme'
import { addOpacityToColor } from '@/styles/utils'

import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import NavBar from '@/components/NavBar';
import Volver from '@/components/Volver';
const inter = Inter({ subsets: ["latin"] });

const bgColor = addOpacityToColor(colors.secondary, 0.5)
console.log(bgColor)

export default function ExportTheme() {
    return (
        <>
            <style jsx>{`
        .text-base {
            font-family: ${fonts.base}
        }  
        .primary-text{
            color: ${colors.primary}
        }  
        .bg-violet{
            background-color: ${bgColor};
            padding:20px;
            border-radius:16px;
            margin-top:20px;
        }
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
        h3{
            margin-bottom: 20px;
            margin-top:30px;
        }
        
    `}</style>
            <div className={`${styles.main} ${styles.content}  ${inter.className}`}>
                <NavBar></NavBar>
                <Volver href={"/documentacion/estilos-css"}></Volver>
                <h1 className='title'>Export Theme y Utilidades</h1>
                <p>Utilizar CSS en formato JSX tiene como ventaja la posibilidad de incorporar varibles de tema declaradas como variables js, además de utilidades, que permiten modificar variables y código css lo cual puede utilizarse para mejorar el alcance del css dinámico, la interacción y las animaciones.</p>
                <h2 className='subtitle'>Variables de tema</h2>
                <p>Las variables de tema se pueden exportar como constantes desde un archivo <i>theme.js</i> ubicado en el directorio <i>styles</i></p>
                <div className='primary-text text-base'>Texto Primario</div>
                <h2 className='subtitle'>Utilidades</h2>
                <p>Las utilidades pueden exportarse como <i>arrow functions</i> desde un archivo llamado <i>utils.js</i> ubicado en el directorio <i>styles</i>.</p>
                <p>Aqué se enumeran las utilidades creadas dentro del proyecto.</p>
                <h3>addOpacityToColor</h3>
                <p>Permite indicar la transparencia de un color declarado en una variables en forma <i>hex</i>, pasando como párametros la variables del color {`(notación de punto)`} y el nivel de opacidad entre 0-1.</p>
                <div className='bg-violet'></div>
            </div>

        </>
    )

}