import React, { useEffect, useState } from 'react'
import styles from "@/styles/header.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { NAV_RU } from '@/constant'
import { NAV_UZ } from '@/constant'
import Burger from '../local/Burger'
import { v4 as uuidv4 } from 'uuid';
import Navigation from '../local/Navigation'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

const Header = () => {
    const [hovered, setHovered] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const pathName = usePathname()
    const t = useTranslations("Header")
    const [clicked, setClicked] = useState<boolean>(false)
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            if (currentScrollPosition > lastScrollPosition && isHeaderVisible) {
                setIsHeaderVisible(false);
            } else if (currentScrollPosition < lastScrollPosition && !isHeaderVisible) {
                setIsHeaderVisible(true);
                setOpen(false)
            }
            setLastScrollPosition(currentScrollPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHeaderVisible, lastScrollPosition]);
    return (
        <header onMouseLeave={() => {
            setClicked(false)
        }} onMouseOver={() => {
            setClicked(clicked)
        }} style={isHeaderVisible === true ? {
            transition: "0.3s",
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)"
        } : {
            opacity: 0,
            transform: "translate3d(0px, -113px, 0px)",
            transition: "0.3s"
        }} className={styles.header}>
            <div className={styles.container}>
                <Link href={"/"} className={styles.logo}>
                    <Image src={"/images/logo.png"} alt='wee logo' width={98} height={82} />
                </Link>
                <ul className={styles.navigation}>
                    {pathName === "/" ? NAV_RU.map(({ title, url }) => {
                        return <li onMouseOver={() => {
                            setHovered(title)
                        }} onMouseLeave={() => {
                            setHovered("")
                        }} key={uuidv4()}>
                            <Link href={url}>{title}</Link>
                            <div className={hovered === title ? `${styles.line} ${styles.hovered}` : styles.line} />
                        </li>
                    }) : NAV_UZ.map(({ title, url }) => {
                        return <li onMouseOver={() => {
                            setHovered(title)
                        }} onMouseLeave={() => {
                            setHovered("")
                        }} key={uuidv4()}>
                            <Link href={url}>{title}</Link>
                            <div className={hovered === title ? `${styles.line} ${styles.hovered}` : styles.line} />
                        </li>
                    })}
                </ul>
                <div className={styles.translator}>
                    <button onClick={() => {
                        setClicked(!clicked)
                    }}>{t("lang")}</button>
                    <div style={clicked === false ? {
                        opacity: 0,
                        zIndex: -100,
                        transition: "0.4s"
                    } : {
                        opacity: 1,
                        zIndex: 1000,
                        transition: "0.4s"
                    }} className={styles.selectLanguage}>
                        <Link href={'/ru'}>
                            <Image src={"/icons/ru.svg"} alt='ru flag icon' width={40} height={40} />
                        </Link>
                        <Link href={'/uz'}>
                            <Image src={"/icons/uz.svg"} alt='ru flag icon' width={40} height={40} />
                        </Link>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000
                }} >
                    <Burger setOpen={setOpen} open={open} />
                </div>
                <Navigation clicked={clicked} lang={t("lang")} setClicked={setClicked} setOpen={setOpen} open={open} />
            </div>
        </header>
    )
}

export default Header