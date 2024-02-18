import React from "react";
import styles from "@/styles/cooperation.module.css";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import { LOGO } from "@/constant";
import ILogo from "@/interfaces/ILogo";
import { useTranslations } from "next-intl";
import Link from "next/link";
const Cooperation = () => {
  const t = useTranslations("")
  return (
    <div id="coop" className={styles.cooperation}>
      <div className={styles.container}>
        <div className={styles.cooperationSection}>
          <div className={styles.cooperationTitle}>
            <h1>{t("Cooperate.title")}</h1>
          </div>
          <div className={styles.cooperationCard}>
            {LOGO.map((e) => {
              return (
                <Link href={`${e.url}`} key={uuidv4()} className={styles.card}>
                  <Image src={e.image} width={330} height={200} alt="logo"/>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
