import styles from "@/styles/Home.module.css";
import Link from 'next/link'
export default function NavBar() {
  return (
    <nav className={`${styles.nav}`}>
      <ul>
        <li>
          <Link href="/">Next.js + Vercel Home</Link>
        </li>
        <li className={`${styles.dropDown}`}>
          <Link className={`${styles.dropDownBtn}`} href="/documentacion">Documentación
            <div className={`${styles.icon}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-short icon" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
              </svg>
            </div>
          </Link>
          <ul className={`${styles.dropDownContent}`}>
            <li>
              <Link href="/documentacion/estilos-css">Estilos CSS</Link>
            </li>
            <li>
              <Link href="/documentacion/rutas">Rutas</Link>
            </li>
            <li>
              <Link href="/documentacion/fetching-y-props">Fetching y Props</Link>
            </li>
            <li>
              <Link href="/documentacion/buenas-practicas">Buenas Prácticas</Link>
            </li>
            <li>
              <Link href="/documentacion/media">Media</Link>
            </li>
          </ul>
        </li>
      </ul>

    </nav>
  )
} 