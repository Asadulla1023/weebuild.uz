import React from 'react'
import Image from 'next/image'
import styles from "@/styles/company.module.css"
import Container from '../global/Container'
import { useTranslations } from 'next-intl'

const Company: React.FC = () => {
  const t = useTranslations("Company")
    const children =
        <><div className={styles.content}>
            <h1>{t("title")}</h1>
            <p>{t("description")}</p>
            <Image src="/images/company.png" alt='company' width={1180} height={575} />
        </div></>
    return (
        <Container id='company'>{children}</Container>
    )
}

export default Company