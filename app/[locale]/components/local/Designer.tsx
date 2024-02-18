import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/designer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSpring, animated } from 'react-spring';
import { delay } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Designer() {
  // const router = useRouter()
  const path = usePathname()
  const t = useTranslations("Designer")
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={styles.designer}
      style={{
        backgroundImage: `url(images/bg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.container}>
        <h1>{t("title")}</h1>
        <p>
          {t("subtitle")}
        </p>
        <Link href={"#company"}>
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
        <Link href={path !== "/uz" ? "/#cost": "/uz#cost"} className={styles.buttonHoverAnimation}>{t("button")}</Link>
      </div>
    </div>
  );
}
