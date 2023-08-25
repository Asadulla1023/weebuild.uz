import React from "react";
import styles from "@/styles/faq.module.css";
import { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { MODAL, MODAL_UZ } from "@/constant";
import IModal from "@/interfaces/IModal";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
const Faq = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<number | null>(0);
  const [isClose, setIsClose] = useState<boolean>(true)
  const t = useTranslations("Faq")
  const path = usePathname()

  return (
    <div id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faqSection}>
          <div className={styles.faqTitle}>
            <h1>{t("title")}</h1>
          </div>
          <div className={styles.quests}>
            {path === "/" ? MODAL.map(({ques,answ}, index: number) => {
              return <div key={index} onClick={() => {
                setIsOpened(!isOpened)      
                if(isSelected === index) {
                  setIsSelected(null)
                }else{
                  setIsSelected(index)
                }
              }} className={styles.quest}>
                <div className={styles.questTop}>
                  <h3>{ques}</h3>
                  <button onClick={() => {     
                    setIsOpened(!isOpened)
                  }}>
                    <Image style={isSelected !== index ? {
                      transform: "rotate(-180deg)"
                    } : {}} src={"/icons/chevron.svg"} alt='chevron icon' width={10} height={17} />
                  </button>
                </div>
                <p className={isSelected !== index ? styles.dn : styles.just}>{answ}</p>
              </div>
            }): MODAL_UZ.map(({ques,answ}, index: number) => {
              return <div key={index} onClick={() => {
                setIsOpened(!isOpened)      
                if(isSelected === index) {
                  setIsSelected(null)
                }else{
                  setIsSelected(index)
                }
              }} className={styles.quest}>
                <div className={styles.questTop}>
                  <h3>{ques}</h3>
                  <button onClick={() => {     
                    setIsOpened(!isOpened)
                  }}>
                    <Image style={isSelected !== index ? {
                      transform: "rotate(-180deg)"
                    } : {}} src={"/icons/chevron.svg"} alt='chevron icon' width={10} height={17} />
                  </button>
                </div>
                <p className={isSelected !== index ? styles.dn : styles.just}>{answ}</p>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
