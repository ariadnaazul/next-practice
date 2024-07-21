import Link from "next/link"

export default function Linker ( {children, href } ) {
    return (
        <Link href={href}>
            {children}
        </Link>
       
    )
}