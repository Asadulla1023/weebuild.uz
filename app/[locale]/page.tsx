"use client"
import { useTranslations } from 'next-intl';
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/index.module.css";
import Header from "./components/global/Header";
import Designer from "./components/local/Designer";
import Company from "./components/local/Company";
import AboutUs from "./components/local/AboutUs";
import Cost from "./components/local/Cost";
import Design from "./components/local/Design";
import Cooperation from "./components/local/Cooperation";
import Faq from "./components/local/Faq";
import Footer from "./components/global/Footer";
import Contact from "./components/local/Contact";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"
import PopUp from './components/local/PopUp';
export default function Home() {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState<boolean>(false)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(()=> {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen])
  useEffect(()=> {
    setTimeout(()=> {
      setIsOpen(true)
    }, 50000)
  }, [])
  return (
    <>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <main className={styles.main}>
        <Header />
        <Designer />
        <Company />
        <AboutUs />
        <Cost />
        <Design />
        <Cooperation />
        <Faq />
        <Contact />
        <Footer />
        <div className={styles.modalContact}>
          <div style={modal === true ? {
            transform: "translate(0, -10px)",
            opacity: 1,
            zIndex: 100,
            transition: "0.4s",
          } : {
            transform: "translate(0px, 300px)",
            opacity: 0,
            zIndex: -1,
            transition: "0.4s",
          }} className={styles.subModal}>
            <div onClick={() => {
              window.open("https://t.me/Weebuild", "_blank")
            }} className={styles.circle} style={modal === false ? {
              transform: "translate(0, 50px)",
              opacity: 0,
              zIndex: -1,
              transition: "0.4s",
            } : {
              transform: "translate(0, -10px)",
              opacity: 1,
              zIndex: 100,
              transition: "0.4s",
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32" fill="none">
                <path d="M34.5026 0.210407L1.72767 13.2438C-0.50908 14.1702 -0.49614 15.457 1.31729 16.0308L9.73192 18.7377L29.2009 6.07038C30.1215 5.49277 30.9626 5.80349 30.2712 6.43639L14.4975 21.1168H14.4938L14.4975 21.1187L13.917 30.0631C14.7674 30.0631 15.1426 29.6608 15.6196 29.1862L19.7067 25.0876L28.2082 31.5633C29.7758 32.4536 30.9016 31.9961 31.2916 30.0669L36.8724 2.94404C37.4436 0.582136 35.998 -0.487299 34.5026 0.210407V0.210407Z" fill="white" />
              </svg>
            </div>
            <div onClick={() => {
              window.open("https://www.instagram.com/weebuild_official/", "_blank")
            }} style={modal === false ? {
              transform: "translate(0, 50px)",
              opacity: 0,
              zIndex: -1,
              transition: "0.4s",
            } : {
              transform: "translate(0, -10px)",
              opacity: 1,
              zIndex: 100,
              transition: "0.4s",
            }} className={styles.circle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M15.9957 10.6644C13.0578 10.6644 10.6602 13.062 10.6602 16C10.6602 18.938 13.0578 21.3356 15.9957 21.3356C18.9336 21.3356 21.3312 18.938 21.3312 16C21.3312 13.062 18.9336 10.6644 15.9957 10.6644ZM31.9982 16C31.9982 13.7905 32.0182 11.601 31.8941 9.39554C31.7701 6.83381 31.1857 4.56027 29.3125 2.68701C27.4352 0.809737 25.1657 0.229345 22.604 0.105261C20.3946 -0.018823 18.2052 0.00119058 15.9997 0.00119058C13.7902 0.00119058 11.6008 -0.018823 9.39536 0.105261C6.83368 0.229345 4.56019 0.813739 2.68696 2.68701C0.809722 4.56427 0.22934 6.83381 0.105259 9.39554C-0.0188226 11.605 0.00119056 13.7945 0.00119056 16C0.00119056 18.2055 -0.0188226 20.399 0.105259 22.6045C0.22934 25.1662 0.813725 27.4397 2.68696 29.313C4.56419 31.1903 6.83368 31.7707 9.39536 31.8947C11.6048 32.0188 13.7943 31.9988 15.9997 31.9988C18.2092 31.9988 20.3986 32.0188 22.604 31.8947C25.1657 31.7707 27.4392 31.1863 29.3125 29.313C31.1897 27.4357 31.7701 25.1662 31.8941 22.6045C32.0222 20.399 31.9982 18.2095 31.9982 16ZM15.9957 24.2095C11.4527 24.2095 7.78631 20.5431 7.78631 16C7.78631 11.4569 11.4527 7.79045 15.9957 7.79045C20.5387 7.79045 24.2051 11.4569 24.2051 16C24.2051 20.5431 20.5387 24.2095 15.9957 24.2095ZM24.5413 9.37152C23.4806 9.37152 22.6241 8.51494 22.6241 7.45423C22.6241 6.39351 23.4806 5.53693 24.5413 5.53693C25.602 5.53693 26.4586 6.39351 26.4586 7.45423C26.4589 7.7061 26.4095 7.95556 26.3133 8.18832C26.217 8.42108 26.0758 8.63256 25.8977 8.81066C25.7196 8.98876 25.5082 9.12998 25.2754 9.22622C25.0426 9.32246 24.7932 9.37184 24.5413 9.37152Z" fill="white" />
              </svg>
            </div>
            <div onClick={() => {
              window.open("https://www.facebook.com/profile.php?id=100095136643324&mibextid=LQQJ4d", "_blank")
            }} style={modal === false ? {
              transform: "translate(0, 50px)",
              opacity: 1,
              zIndex: -1,
              transition: "0.4s",
            } : {
              transform: "translate(0, -10px)",
              opacity: 1,
              zIndex: 100,
              transition: "0.4s",
            }} className={styles.circle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.0893C0 24.044 5.77733 30.6587 13.3333 32V20.444H9.33333V16H13.3333V12.444C13.3333 8.444 15.9107 6.22267 19.556 6.22267C20.7107 6.22267 21.956 6.4 23.1107 6.57733V10.6667H21.0667C19.1107 10.6667 18.6667 11.644 18.6667 12.8893V16H22.9333L22.2227 20.444H18.6667V32C26.2227 30.6587 32 24.0453 32 16.0893C32 7.24 24.8 0 16 0C7.2 0 0 7.24 0 16.0893Z" fill="white" />
              </svg>
            </div>
          </div>
          <button className={modal === false ? styles.contact : `${styles.contact} ${styles.noneAnimation}`} style={modal === true ? {
            background: "#fff",
            transition: "0.3s"
          } : {
            transition: "0.3s"
          }} onClick={() => {
            setModal(!modal)
          }}>
            {modal === false ? <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.253 4.41015C14.1628 4.41015 7.48799 10.4674 6.51561 18.294C6.82685 18.2861 7.15197 18.2871 7.49295 18.2871H7.84879C8.31367 18.2851 8.8856 18.2831 9.40202 18.4229C10.7699 18.7886 11.8384 19.8572 12.2052 21.226C12.3439 21.7424 12.3419 22.3134 12.341 22.7782V31.6377C12.3419 32.1026 12.3439 32.6735 12.2052 33.1899C11.8384 34.5588 10.7699 35.6273 9.40202 35.993C8.8856 36.1328 8.31367 36.1308 7.84879 36.1288H7.49295C6.48687 36.1298 5.61857 36.1308 4.85336 35.9266C2.80155 35.3765 1.19877 33.7727 0.648648 31.7209C0.443467 30.9567 0.444459 30.0884 0.44545 29.0823V25.3336C0.444459 24.3275 0.443467 23.4592 0.648648 22.695C0.95394 21.5561 1.58336 20.556 2.43381 19.7957C2.68558 9.06586 11.4617 0.445312 22.253 0.445312C33.0433 0.445312 41.8195 9.06586 42.0713 19.7957C42.9227 20.556 43.5512 21.5561 43.8564 22.695C44.0616 23.4592 44.0606 24.3275 44.0596 25.3336V29.0823C44.0606 30.0884 44.0616 30.9567 43.8564 31.7209C43.3063 33.7727 41.7035 35.3765 39.6517 35.9266C39.1254 36.0664 38.5495 36.11 37.9151 36.1239C36.9983 40.6507 32.9978 44.0585 28.2003 44.0585H23.0688C21.5235 44.0585 20.2706 42.8056 20.2706 41.2603V41.0849C20.2706 39.4425 21.6018 38.1113 23.2443 38.1113H25.2267C26.5212 38.1113 27.6224 38.9389 28.0308 40.0937H28.2003C31.0183 40.0937 33.3784 38.1341 33.9919 35.5034C33.1712 34.9781 32.5586 34.1593 32.2999 33.1899C32.1612 32.6735 32.1632 32.1026 32.1641 31.6377L32.1651 31.5029V22.9131L32.1641 22.7782C32.1632 22.3134 32.1612 21.7424 32.2999 21.226C32.6667 19.8572 33.7352 18.7886 35.1041 18.4229C35.6205 18.2831 36.1914 18.2851 36.6563 18.2871H37.0121C37.3531 18.2871 37.6792 18.2861 37.9905 18.294C37.0181 10.4674 30.3423 4.41015 22.253 4.41015ZM7.71498 22.2519C8.04009 22.2519 8.21851 22.2529 8.34737 22.2589L8.36818 22.2598L8.36918 22.2797C8.37512 22.4095 8.37611 22.5879 8.37611 22.9131V31.5029C8.37611 31.828 8.37512 32.0064 8.36918 32.1363L8.36818 32.1561L8.34737 32.1571C8.21851 32.164 8.04009 32.164 7.71498 32.164C6.35801 32.164 6.06858 32.1462 5.88025 32.0966C5.19632 31.9132 4.66205 31.379 4.47769 30.695C4.42813 30.5057 4.41128 30.2163 4.41128 28.8603V25.5556C4.41128 24.1996 4.42813 23.9102 4.47769 23.7209C4.66205 23.037 5.19632 22.5027 5.88025 22.3193C6.06858 22.2698 6.35801 22.2519 7.71498 22.2519ZM36.7901 22.2519C36.465 22.2519 36.2876 22.2529 36.1577 22.2589L36.1369 22.2598L36.1359 22.2797C36.13 22.4095 36.13 22.5879 36.13 22.9131V31.5029C36.13 31.828 36.13 32.0064 36.1359 32.1363L36.1369 32.1561L36.1577 32.1571C36.2876 32.164 36.465 32.164 36.7901 32.164C38.1471 32.164 38.4365 32.1462 38.6258 32.0966C39.3088 31.9132 39.843 31.379 40.0274 30.695C40.077 30.5057 40.0948 30.2163 40.0948 28.8603V25.5556C40.0948 24.1996 40.077 23.9102 40.0274 23.7209C39.843 23.037 39.3088 22.5027 38.6258 22.3193C38.4365 22.2698 38.1471 22.2519 36.7901 22.2519Z" fill="white" />
            </svg> : <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.7223 2.0332L2.0332 24.7223M2.0332 2.0332L24.7223 24.7223" stroke="#E6E6E6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            }
          </button>
        </div>
        {isOpen === true && <PopUp isOpen={isOpen} setIsOpen={setIsOpen}/>}
      </main>
    </>
  )
}
