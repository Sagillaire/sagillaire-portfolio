import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { navLinks } from "@/Data/Data";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { menuVariants, navLinksVariants } from "@/Data/MotionNavbar";
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

export default function Navbar() {
    // Hooks
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [navScroll, setNavScroll] = useState<boolean>(false)
    const pathname = usePathname()

    // Handlers
    const handleMenu = () => setShowMenu(prev => !prev)
    const isActive = (path: string) => pathname === path ? "text-Orange" : "text-WhiteGray"

    // Constants
    const socialClassNames = `text-3xl cursor-pointer text-White`

    // Effects
    useEffect(() => {
        const scrollActive = () => setNavScroll(window.scrollY > 20)
        window.addEventListener('scroll', scrollActive)

        return () => window.removeEventListener('scroll', scrollActive)
    }, [])

    return (
        <header className={`fixed w-full top-0 left-0 z-20 ${navScroll ? 'bg-Glass backdrop-blur-sm' : ''}`}>
            <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${showMenu ? 'hidden' : ''}`}>
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-3xl text-WhiteGray">Sagillaire</Link>
                    <div className="hidden md:flex items-center justify-center space-x-4">
                        {navLinks.map(navLink => (
                            <Link href={navLink.path} key={navLink.path}
                                className={`text-lg uppercase font-medium ${isActive(navLink.path)} TextShadow`}
                            >
                                {navLink.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex md:hidden items-center">
                        <HiOutlineMenuAlt4
                            onClick={handleMenu}
                            className="text-White cursor-pointer w-6 h-6"
                        />
                    </div>
                </div>
            </nav>
            <motion.div variants={menuVariants} initial="hidden" animate={showMenu ? "visible" : "hidden"} className="bg-Black fixed top-0 right-0 w-16 h-16 rounded-full"></motion.div>
            <motion.nav variants={navLinksVariants} animate={showMenu ? "visible" : "hidden"} className="min-h-screen md:hidden flex flex-col justify-center">
                {navLinks.map(navLink => (
                    <Link key={navLink.path} href={navLink.path} className={`block px-3 py-2 text-5xl font-medium ${isActive(navLink.path)}`} onClick={handleMenu}>
                        {navLink.label}
                    </Link>
                ))}
                <div className="fixed bottom-4 left-6 flex items-center flex-col gap-4">
                    <Link href="https://github.com/Sagillaire">
                        <AiFillGithub className={socialClassNames} />
                    </Link>
                    <Link href="https://www.instagram.com/sagillaire/">
                        <AiFillInstagram className={socialClassNames} />
                    </Link>
                    <Link href="#">
                        <AiFillTwitterCircle className={socialClassNames} />
                    </Link>
                </div>
                <HiX className="absolute text-White top-20 right-8 w-6 h-6 cursor-pointer" onClick={handleMenu} />
            </motion.nav>
        </header>
    )
}
