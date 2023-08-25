"use client"
import React, { useEffect } from 'react'
import styles from "@/styles/order.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link'
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
                <p>{totalPrice}$</p>
                <form action="#" onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder={path ==="/" ? 'Имя': "Ism"} required />
                    <input maxLength={13} minLength={9} type="text" name='phoneNumber' placeholder={path === "/" ?'Номер телефона': "Telefon raqamingiz"} required />
                    <input type="email" name='email' placeholder={path === "/" ? 'Электрон почта' : "Email"} required />
                    <button>{path === "/" ? "ОТПРАВИТЬ" : "JO'NATISH"}</button>
                </form>
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