import React from 'react'

import styles from "@/styles/container.module.css"

interface IContainer {
    id: string
    children: any
}

const Container = ({ id, children }: IContainer) => {
    return (
        <div id={id}  data-aos="fade-up" data-aos-duration="500" className={styles.block}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Container