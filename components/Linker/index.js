import Link from "next/link"

export default function Linker ( { href ,content, customClass} ) {
    return (
        <div>
            <Link className={customClass} href={href}>{content}</Link>
        </div>
       
    )
}

