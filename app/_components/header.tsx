import { LogoutAction } from "@/actions/logout"
import { ModeToggle } from "@/components/theme-toggler"
import { Button } from "@/components/ui/button"
import { validateRequest } from "@/lib/auth"
import Link from "next/link"

export default async function Header() {
    const user = await validateRequest()
    return (
        <header className="flex items-center justify-between px-6 py-3 bg-background border-b shadow fixed w-full">
            <Link href={"/"} className="text-2xl font-bold">Auth 🔐</Link>
            <div className="flex items-center gap-4">
                <ModeToggle />
                {user?.user ? <form action={LogoutAction}><Button type="submit">Logout</Button></form> : <Button><Link href={"/auth/login"}>Login</Link></Button>}
            </div>
        </header>
    )
}