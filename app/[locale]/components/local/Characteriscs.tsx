"use client"
import styles from "@/styles/charact.module.css"
import { usePathname } from 'next/navigation'
interface IOrderProps {
    title: string | undefined,
    price: number | undefined,
    orderOpen: boolean,
    setOrderOpen: React.Dispatch<React.SetStateAction<boolean>>
    roomType: number
    addService: string
    repStyle: string
    design: boolean
    totalArea: string
    totalPrice: number
    props: {
        putty: string;
        rodbend: string;
        tileGlue: string;
        dryWall: string;
        cement: string;
        waterproofing: string;
        thickness: string;
        wood: string;
        cafel: string;
        pol: string;
        traction: string;
        color: string;
        plint: string
        wallpaper: string
        santex: string
        unitaz: string
        smesit: string
        registr: string
        teplyPol: string
        eInstallation: string
        wiring: string
    }
    setProp: React.Dispatch<React.SetStateAction<string>>
}

import { props_uz as PROPS_UZ } from "@/constant/index"
import { props_ru as PROPS_RU } from "@/constant/index"
import { useEffect, useState } from "react"

const Characteriscs = ({ title, price, orderOpen, setOrderOpen, roomType, addService, design, repStyle, totalArea, totalPrice, props, setProp }: IOrderProps) => {
    const path = usePathname()
    return (
        <div style={orderOpen === true ? {
            transition: "0.4s",
            opacity: 1,
            zIndex: 1000,
            transform: "translate(0, 0, 100px)"
        } : {
            opacity: 0,
            zIndex: -100,
            transition: "0.4s"
        }} className={styles.orderModal}>
            <div className={styles.container} style={orderOpen === true ? {
                transition: "0.4s",
                opacity: 1,
            } : {
                opacity: 0,
                zIndex: -100,
                transition: "0.4s"
            }}>
                <h3>{title}</h3>
                <div className={styles.info}>
                    {props && <div className={styles.properties}>
                        <h2>{path === "/uz" ? "Xususiyatlari" : "Характеристики"}</h2>
                        <div className={styles.value}>
                            <h3>Шпаклевка</h3>
                            <p>{props.putty}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Родбэнд</h3>
                            <p>{props.rodbend}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Кафельный клей</h3>
                            <p>{props.tileGlue}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Гипсокартон</h3>
                            <p>{props.dryWall}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Цемент</h3>
                            <p>{props.cement}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Гидроизаляция</h3>
                            <p>{props.waterproofing}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Профиль толщина</h3>
                            <p>{props.thickness}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Рейки</h3>
                            <p>{props.wood}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Кафель</h3>
                            <p>{props.cafel}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Пол</h3>
                            <p>{props.pol}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Тяги</h3>
                            <p>{props.traction}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Краска</h3>
                            <p>{props.color}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Плинтус</h3>
                            <p>{props.plint}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Обои</h3>
                            <p>{props.wallpaper}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Сантехника</h3>
                            <p>{props.santex}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Унитаз</h3>
                            <p>{props.unitaz}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Смеситель</h3>
                            <p>{props.smesit}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Регистр</h3>
                            <p>{props.registr}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Теплый пол</h3>
                            <p>{props.teplyPol}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Электроустановочные изделия</h3>
                            <p>{props.eInstallation}</p>
                        </div>
                        <div className={styles.value}>
                            <h3>Электропроводка</h3>
                            <p>{props.wiring}</p>
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div style={orderOpen === true ? {
                transition: "0.4s",
                opacity: 1,
            } : {
                opacity: 0,
                zIndex: -100,
                transition: "0.4s"
            }} className={styles.bg} onClick={() => {
                setProp("")
                setOrderOpen(!orderOpen)
            }} />
        </div>
    )
}

export default Characteriscs