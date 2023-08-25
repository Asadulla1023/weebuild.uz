import React, { useState } from 'react'
import styles from "@/styles/burger.module.css"

interface IOpen {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Burger = ({ open, setOpen }: IOpen) => {
    const [change, setChange] = useState<boolean>(false)
    return (
        <div className={styles.burger}>
            <div  className={change === false ? styles.container : styles.change} onClick={(e) => {
                setChange(!change)
                setOpen(!open)
            }}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
        </div>
    )
}

export default Burger