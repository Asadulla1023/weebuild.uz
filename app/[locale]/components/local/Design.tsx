"use client"
import React, { Dispatch, SetStateAction } from "react";
import styles from "@/styles/design.module.css";
import ICardProps from "@/interfaces/ICardProps";
import Image from "next/image";
import ICard from "@/interfaces/ICard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CARD_OBJECT_DESIGN, CARD_OBJECT_DESIGN_UZ } from "@/constant";
import { v4 as uuidv4 } from "uuid";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
interface DesignProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
const Design: React.FC<DesignProps> = ({ setIsOpen }) => {
  const t = useTranslations("Design")
  const path = usePathname()
  return (
    <div id="design" className={styles.design}>
      <div className={styles.container}>
        <div className={styles.designSection}>
          <div className={styles.designTitle}>
            <h1>{t("title")}</h1>
            <div className={styles.aboutSection}>
              <div className={styles.sides}>
                <p>
                  {t("description")}
                </p>
                <div className={styles.infos}>
                  <button onClick={()=> {
                    setIsOpen((prev) => !prev)
                  }}>{path === "/uz" ?"Buyurtma" :"Заказать"}</button>
                  <p className={styles.info}>
                    <Image src={"/icons/award.svg"} width={32} height={32} alt="award icon" />
                    {path === "/uz" ? "15 yillik tajribaga ega dizaynerlar" : "Дизайнеров с опытом 15 лет"}
                  </p>
                </div>
              </div>
              <div className={styles.sides}>
                <Image src={"/images/maket.png"} width={500} height={280} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.designTitle}>
            <h1 style={{
              fontSize: 34
            }}>{path === "/uz" ? "Bizning loyihalarimiz" : "Наши проекты"}</h1>
          </div>
          <div className={styles.designCard}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              breakpoints={{
                1250: {
                  width: 1250,
                  slidesPerView: 3,
                },
                976: {
                  width: 976,
                  slidesPerView: 2,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },

                620: {
                  width: 620,
                  slidesPerView: 2,
                },

                380: {
                  width: 380,
                  slidesPerView: 1,
                },
              }}
              pagination={{ clickable: true }}
              style={{ paddingBottom: 70 }}
              className={styles.swiper}
            >
              {path === "/" ? CARD_OBJECT_DESIGN.map((e: ICard, index: number) => {
                const id = uuidv4();
                return (
                  <div key={id}>
                    <SwiperSlide key={index}>
                      <div className={styles.card} key={index}>
                        <div className={styles.image}>
                          <div className={styles.process}>
                            <p>{e.process}</p>
                          </div>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                          >
                            {e.images.map((image: string) => {
                              const id = uuidv4();
                              return (
                                <SwiperSlide key={id}>
                                  <Image
                                    src={image}
                                    width={380}
                                    height={246}
                                    alt="wefwef"
                                  />
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                        </div>
                        <div className={styles.cardSection}>
                          <h1 className={styles.cardTitle}>{e.title}</h1>
                          <div className={styles.global}>
                            {e.props.map((prop: ICardProps) => {
                              const id = uuidv4();
                              return (
                                <div key={id}>
                                  <Image
                                    src={prop.image}
                                    width={41}
                                    height={40}
                                    alt={prop.title}
                                  />
                                  <p>{prop.title}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              }) : CARD_OBJECT_DESIGN_UZ.map((e: ICard, index: number) => {
                const id = uuidv4();
                return (
                  <div key={id}>
                    <SwiperSlide key={index}>
                      <div className={styles.card} key={index}>
                        <div className={styles.image}>
                          <div className={styles.process}>
                            <p>{e.process}</p>
                          </div>
                          <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                          >
                            {e.images.map((image: string) => {
                              const id = uuidv4();
                              return (
                                <SwiperSlide key={id}>
                                  <Image
                                    src={image}
                                    width={380}
                                    height={246}
                                    alt="wefwef"
                                  />
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                        </div>
                        <div className={styles.cardSection}>
                          <h1 className={styles.cardTitle}>{e.title}</h1>
                          <div className={styles.global}>
                            {e.props.map((prop: ICardProps) => {
                              const id = uuidv4();
                              return (
                                <div key={id}>
                                  <Image
                                    src={prop.image}
                                    width={41}
                                    height={40}
                                    alt={prop.title}
                                  />
                                  <p>{prop.title}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
