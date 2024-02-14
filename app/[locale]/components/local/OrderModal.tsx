"use client"
import styles from "@/styles/order.module.css"
import axios from 'axios'
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
}

import { props_uz as PROPS_UZ } from "@/constant/index"
import { props_ru as PROPS_RU } from "@/constant/index"
import { useEffect, useState } from "react"

const OrderModal = ({ title, price, orderOpen, setOrderOpen, roomType, addService, design, repStyle, totalArea, totalPrice }: IOrderProps) => {
    const path = usePathname()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any): void => {
        e.preventDefault()
        const data = new FormData(e.target)
        const obj = Object.fromEntries(data.entries())
        const send = `name: ${obj.name}%0Aemail: ${obj.email}%0Aphone-number: ${obj.phoneNumber}%0Aselected-title: ${title}%0Aprice: ${totalPrice}$%0Arooms: ${roomType}%0Aadditional-service: ${addService}%0Adesign: ${design === true ? "necessary" : "unnecessary"}%0Arepair-style: ${repStyle}%0Atotal-area: ${totalArea}`
        axios({
            method: "post",
            url: `https://api.telegram.org/bot6683010545:AAGhQEETPuBY-IVHwppSt3zc2CBEvg4j5o4/sendMessage?chat_id=-968558065&text=${send}`
        }).then(res => console.log(res.data)).catch(err => console.log(err))
        setOrderOpen(!orderOpen)
    }
    const [props, setProps] = useState<{
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
    }>()
    useEffect(() => {
        if (path === "/uz") {
            PROPS_UZ.find((prop) => prop.title === title?.split(" ")[0] && setProps(prop.properties))
        } else {
            PROPS_RU.find((prop) => prop.title === title?.split(" ")[0] && setProps(prop.properties))
        }
    })
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
                    <form action="#" onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder={path === "/" ? 'Имя' : "Ism"} required />
                        <input maxLength={13} minLength={9} type="text" name='phoneNumber' placeholder={path === "/" ? 'Номер телефона' : "Telefon raqamingiz"} required />
                        <input type="email" name='email' placeholder={path === "/" ? 'Электрон почта' : "Email"} required />
                        <button>{path === "/" ? "ОТПРАВИТЬ" : "JO'NATISH"}</button>
                    </form>
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
                setOrderOpen(!orderOpen)
            }} />
        </div>
    )
}

export default OrderModal