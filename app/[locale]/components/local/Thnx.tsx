import React, { useEffect } from 'react'
import styles from "@/styles/thnx.module.css"
import { useTranslations } from 'next-intl'

interface IThnx {
    setThnx: React.Dispatch<React.SetStateAction<boolean>>
    thnx: boolean
}

const Thnx = ({ setThnx, thnx }: IThnx) => {
    useEffect(()=> {
        if (thnx === true) {
            document.body.style.overflow = "hidden"
        }
        if (thnx === false) {
            document.body.style.overflow = "auto"
        }
    }, [thnx])
    const t = useTranslations("Thnx")
    return (
        <div style={thnx === false ? {
            opacity : 0,
            zIndex: -100,
            transition: "0.4s"
        } : {
            opacity: 1,
            zIndex: 10000,
            transition: "0.4s"
        }}>
            <div className={styles.block}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{t("title")}</h1>
                    <h3 className={styles.subtitle}>{t("subtitle")}</h3>
                    <button onClick={()=> {
                        setThnx(false)
                    }}>{t("button")}</button>
                </div>
            </div>
            <div style={thnx === false ? {
                width: 0,
                height: 0,
            }: {
                
            }} onClick={() => {
                setThnx(false)
            }} className={styles.bg} />
        </div>
    )
}

export default Thnx