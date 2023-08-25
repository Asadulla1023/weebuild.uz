"use client"
import { NAV_RU } from '@/constant'
import { NAV_UZ } from '@/constant'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import styles from "@/styles/header.module.css"
import { v4 as uuidv4 } from "uuid"
import Image from 'next/image'
interface Open {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}
const Navigation = ({ open, setOpen }: Open) => {
    return (
        <div style={open === true ? {
            transition: "0.2s",
            width: "100%",
        } : {
            opacity: 0,
            width: 0,
            transition: "0.4s",
            zIndex: -10,
            transform: "translate(-300px, 0px)",
        }} className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link href={"/"} className={styles.logo}>
                    <Image src={"/images/logo.png"} alt='wee logo' width={98} height={82} />
                </Link>
                <ul className={styles.navigate}>
                    {NAV_RU.map(({ title, url }) => {
                        return <li key={uuidv4()}>
                            <Link href={url}>{title}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navigation