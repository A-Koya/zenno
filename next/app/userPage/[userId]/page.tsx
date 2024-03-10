'use client'
import { useRouter } from "next/router"

export default function Page() {
    const router = useRouter()
    const name = router.query.name
    return (
        <div>{name}</div>
    )
}