import React, { useEffect } from 'react'
import styles from "@/styles/aboutUs.module.css"
import Image from 'next/image'
import IAdvantages from '@/interfaces/IAdvantages'
import { ADVANTAGES, ADVANTAGES_UZ } from '@/constant'
import { v4 as uuidv4 } from 'uuid';
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
const AboutUs: React.FC = () => {
    const router = useRouter()
    const path = usePathname()
    console.log(path);
    const t = useTranslations("AboutUs")
    return (
        <div id='advantages' className={styles.aboutUs}>
            <div className={styles.container}>
                <h1>{t("title")}</h1>
                <div className={styles.wrapper}>
                    {path === "/uz" ? ADVANTAGES_UZ.map(({ title, desc, image }: IAdvantages) => {
                        return <div key={uuidv4()} className={image === "" ? styles.advantage : styles.advantageImg}>
                            {image !== "" ? <>
                                <div className={styles.left}>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </div>
                                <div className={styles.right}>
                                    <Image src={image} alt={title} width={270} height={240} />
                                </div>
                            </> : <>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </>}
                        </div>
                    }) : ADVANTAGES.map(({ title, desc, image }: IAdvantages) => {
                        return <div key={uuidv4()} className={image === "" ? styles.advantage : styles.advantageImg}>
                            {image !== "" ? <>
                                <div className={styles.left}>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </div>
                                <div className={styles.right}>
                                    <Image src={image} alt={title} width={270} height={240} />
                                </div>
                            </> : <>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </>}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutUs