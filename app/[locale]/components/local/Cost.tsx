"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/cost.module.css";
import Container from "../global/Container";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import MultiRangeSlider from "./MultiRangeSlider";
import RoundSlider from "./RoundSlider";
import { CARD_PRICE, CARD_PRICE_UZ, props_ru, props_uz } from "@/constant";
import ICardPrice from "@/interfaces/ICardPrice";
import OrderModal from "./OrderModal";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Characteriscs from "./Characteriscs";
const Cost = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checked1, setChecked1] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [characts, setCharacts] = useState(false);
  const [peregorki, setPeregorki] = useState<boolean>(false);
  const [demontaj, setDemontaj] = useState<boolean>(false);
  const contoller: number[] = [1, 2, 3, 4];
  const [selected, setSelected] = useState<string>("");
  const [selected2, setSelected2] = useState<string>("");
  const [properties, setProperties] = useState();
  const [prop, setProp] = useState("");
  const ads: string[] = ["Новостройка", "Вторичка"];
  const ads_uz: string[] = ["Yangi bino", "Ikkilamchi uy"];
  const ads2: string[] = [
    "Межкомнатные перегородки",
    "Демонтаж старого ремонта",
    "Штукатурка стен",
  ];
  const ads2_uz: string[] = [
    "Ichki qismlar",
    "Eski ishlarini demontaj qilish",
    "Shtukaturka",
  ];
  const ads3: string[] = [
    "Стандарт",
    "Неоклассика",
    "Классика",
    "Хайтек",
    "Минимализм",
  ];
  const ads3_uz: string[] = [
    "Standart",
    "Neoklassik",
    "Klassik",
    "Hitech",
    "Minimalizm",
  ];
  const [counter, setCounter] = useState<number>(1);
  const [val, setVal] = useState<number>(1);
  const [selectedRoom, setSelectedRoom] = useState<number>(1);
  const [selectedFloor, setSelectedFloor] = useState<number>(1);
  const [selectedSanu, setSelectedSanu] = useState<number>(1);
  const [selectedRepair, setSelectedRepair] = useState<string>("");
  const [abled, setAbled] = useState(false);
  const [abled1, setAbled1] = useState(false);
  const [abled2, setAbled2] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [demontajPr, setDemontajPr] = useState<number>(0);
  const [wallTypePr, setWallTypePr] = useState<number>(0);
  const [wallType, setWallType] = useState<boolean>(false);
  const [peregorkiPr, setPeregorkiPr] = useState<number>(0);
  const [props, setProps] = useState<ICardPrice | undefined>();
  const [overed, setOvered] = useState<string>("");
  const [changed, setChanged] = useState(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [addPrice, setAddPrice] = useState<number>(0);
  const [addPrice1, setAddPrice1] = useState<number>(0);
  const [addPrice2, setAddPrice2] = useState<number>(0);
  const [addPrice3, setAddPrice3] = useState<number>(0);
  const [numFl, setNumFl] = useState<number>(0);
  useEffect(() => {
    if (orderOpen === true || characts === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [orderOpen, characts]);
  useEffect(() => {
    if (prop) {
      if (path === "/uz") {
        props_uz.find(
          (i: any) =>
            i.title === prop.split(" ")[0] && setProperties(i.properties)
        );
      } else {
        props_ru.find(
          (i: any) =>
            i.title === prop.split(" ")[0] && setProperties(i.properties)
        );
      }
      setCharacts(true);
      return setProp("");
    }
  }, [prop]);
  useEffect(() => {
    if (selectedRepair === ads3_uz[1] || selectedRepair === ads3_uz[2]) {
      setChanged(
        demontajPr * val + peregorkiPr * val + addPrice2 * val + addPrice * val
      );
      setAddPrice(15);
    }
  }, [selectedRepair]);
  const t = useTranslations("Calculation");
  const path = usePathname();
  useEffect(() => {
    if (abled === true) {
      setAbled1(false);
      setAbled2(false);
    }
    if (abled1 === true) {
      setAbled(false);
      setAbled2(false);
    }
    if (abled2 === true) {
      setAbled(false);
      setAbled1(false);
    }
    if (val < 80) {
      setSelectedFloor(1);
    }
    if (selectedSanu > 3) {
      setNumFl(5);
    }
  }, [abled, abled1, abled2, selectedRoom, val, selectedSanu]);

  const limitHandle = (
    e: {
      currentTarget: {
        value: string;
      };
    },
    n: number,
    setter: Function
  ) => {
    const test = /d/.test(e.currentTarget.value);
    if (0 <= +e.currentTarget.value) {
      setter(+e.currentTarget.value);
      if (+e.currentTarget.value > n) {
        setter(n);
      }
    } else {
      // setSelectedRoom()
      console.log("kot");
    }
  };

  return (
    <Container id="cost">
      {
        <>
          <div className={styles.content}>
            <h1>{t("title")}</h1>
            {counter === 1 ? (
              <>
                <div className={styles.selection}>
                  <div className={styles.container}>
                    <div className={styles.controller}>
                      {contoller.map((e: number) => {
                        return (
                          <div
                            key={uuidv4()}
                            onClick={() => {
                              setCounter(e);
                            }}
                            className={styles.control}
                          >
                            {e > 1 ? (
                              <div className={styles.line}>
                                <svg
                                  width="78"
                                  height="3"
                                  viewBox="0 0 78 3"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <line
                                    y1="1.5"
                                    x2="78"
                                    y2="1.5"
                                    stroke={counter < e ? "#E0E0E0" : "#46247c"}
                                    stroke-width="3"
                                    stroke-dasharray="7 7"
                                  />
                                </svg>
                              </div>
                            ) : null}
                            <div
                              className={styles.circle}
                              style={
                                counter < e
                                  ? {
                                      background: "#F2F2F2",
                                      filter: "none",
                                    }
                                  : {}
                              }
                            >
                              {e}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <h3>{t("subtitle1")}</h3>
                    <div className={styles.checks}>
                      {path === "/"
                        ? ads.map((e: string, index: number) => {
                            return (
                              <div
                                key={e}
                                className={
                                  e === selected
                                    ? `${styles.checkbox} ${styles.boxShadow}`
                                    : styles.checkbox
                                }
                                onClick={() => {
                                  setSelected(e);
                                  setDemontaj(false);
                                  if (e === ads_uz[1] || e === ads[1]) {
                                    setWallTypePr(0);
                                  }
                                }}
                              >
                                <Image
                                  src={`/images/select${index + 1}.png`}
                                  alt="decorate"
                                  width={180}
                                  // style={{
                                  //   borderRadius: 20,
                                  // }}
                                  height={145}
                                />
                                <p>{e}</p>
                              </div>
                            );
                          })
                        : ads_uz.map((e: string, index: number) => {
                            return (
                              <div
                                key={e}
                                className={
                                  e === selected
                                    ? `${styles.checkbox} ${styles.boxShadow}`
                                    : styles.checkbox
                                }
                                onClick={() => {
                                  setSelected(e);
                                  setDemontaj(false);
                                  if (e === ads_uz[1] || e === ads[1]) {
                                    setWallTypePr(0);
                                  }
                                }}
                              >
                                <Image
                                  src={`/images/select${index + 1}.png`}
                                  alt="decorate"
                                  width={180}
                                  height={145}
                                />
                                <p>{e}</p>
                              </div>
                            );
                          })}
                    </div>
                    <h3>{t("subtitle2")}</h3>
                    <div className={styles.checks}>
                      {(path === "/" && selected === "Новостройка") ||
                      (path === "/uz" && selected === "Yangi bino") ? (
                        <>
                          <>
                            <div
                              className={
                                peregorki === true
                                  ? `${styles.checkbox} ${styles.boxShadow}`
                                  : styles.checkbox
                              }
                              onClick={() => {
                                setPeregorkiPr(20);
                                setPeregorki(!peregorki);
                              }}
                            >
                              <Image
                                src={`/images/select3.png`}
                                alt="decorate"
                                width={180}
                                height={145}
                              />
                              <p>
                                {path === "/"
                                  ? "Межкомнатные перегородки"
                                  : ads2_uz[0]}
                              </p>
                            </div>
                            <div
                              className={
                                (wallType === true &&
                                  selected === "Новостройка") ||
                                (selected === "Yangi bino" && wallTypePr === 15)
                                  ? `${styles.checkbox} ${styles.boxShadow}`
                                  : styles.checkbox
                              }
                              onClick={() => {
                                console.log(wallTypePr);
                                if (wallTypePr === 15) {
                                  setWallTypePr(0);
                                } else {
                                  setWallTypePr(15);
                                }
                                wallType === true
                                  ? setWallType(false)
                                  : setWallType(true);
                              }}
                            >
                              <Image
                                src={`/images/select5.png`}
                                alt="decorate"
                                width={180}
                                height={145}
                              />
                              <p>
                                {path === "/" ? "Штукатурка стен" : ads2_uz[2]}
                              </p>
                            </div>
                          </>
                        </>
                      ) : (
                        <>
                          <div
                            className={
                              peregorki === true
                                ? `${styles.checkbox} ${styles.boxShadow}`
                                : styles.checkbox
                            }
                            onClick={() => {
                              setPeregorki(!peregorki);
                              setPeregorkiPr(20);
                            }}
                          >
                            <Image
                              src={`/images/select3.png`}
                              alt="decorate"
                              width={180}
                              height={145}
                            />
                            <p>{path === "/" ? ads2[0] : ads2_uz[0]}</p>
                          </div>
                          <div
                            className={
                              demontaj === true
                                ? `${styles.checkbox} ${styles.boxShadow}`
                                : styles.checkbox
                            }
                            onClick={() => {
                              setDemontajPr(15);
                              demontaj === true
                                ? setDemontaj(false)
                                : setDemontaj(true);
                            }}
                          >
                            <Image
                              src={`/images/select4.png`}
                              alt="decorate"
                              width={180}
                              height={145}
                            />
                            <p>
                              {path === "/"
                                ? "Демонтаж старого ремонта"
                                : ads2_uz[1]}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                    <Link
                      href={path === "/uz" ? "/uz/#cost" : "/ru/#cost"}
                      className={
                        hovered === true ? styles.animate : styles.noneAnimation
                      }
                      onMouseOver={() => {
                        setHovered(true);
                      }}
                      onMouseLeave={() => {
                        setHovered(false);
                      }}
                      onClick={() => {
                        setCounter(counter + 1);
                      }}
                    >
                      {t("button")}
                    </Link>
                  </div>
                </div>
              </>
            ) : counter === 2 ? (
              <>
                <div className={styles.controller}>
                  {contoller.map((e: number) => {
                    const id = uuidv4();
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          setCounter(e);
                        }}
                        className={styles.control}
                      >
                        {e > 1 ? (
                          <div className={styles.line}>
                            <svg
                              width="78"
                              height="3"
                              viewBox="0 0 78 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                y1="1.5"
                                x2="78"
                                y2="1.5"
                                stroke={counter < e ? "#E0E0E0" : "#46247c"}
                                stroke-width="3"
                                stroke-dasharray="7 7"
                              />
                            </svg>
                          </div>
                        ) : null}
                        <div
                          className={styles.circle}
                          style={
                            counter < e
                              ? {
                                  background: "#F2F2F2",
                                  filter: "none",
                                }
                              : {}
                          }
                        >
                          {e}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.selection}>
                  <div className={styles.container}>
                    <div className={styles.sectS}>
                      <div
                        style={{
                          overflow: "hidden",
                        }}
                        className={styles.sect}
                      >
                        <h4>{t("subtitle3")}</h4>
                        <Image
                          src={"/images/maket.png"}
                          alt=" image of livin room"
                          width={780}
                          style={{
                            overflow: "hidden",
                          }}
                          height={587}
                        />
                        <div className={styles.multiRange}>
                          <MultiRangeSlider
                            max={350}
                            min={0}
                            onChange={(num: { min: number; max: number }) => {
                              setVal(num.max);
                            }}
                          />
                        </div>
                        <div className={styles.val}>{val}м²</div>
                      </div>
                    </div>
                    <div className={styles.sectChoose}>
                      <div className={styles.rooms}>
                        <h3>{t("numberRooms")}</h3>
                        <input
                          onChange={(e) => {
                            limitHandle(e, 15, setSelectedRoom);
                          }}
                          className={styles.seletedRooms}
                          value={selectedRoom}
                          maxLength={2}
                          max={50}
                          type="tel"
                        />
                      </div>
                      <div className={styles.rooms}>
                        <h3>
                          {path === "/uz"
                            ? "Sanuzel soni"
                            : "Количество санузлы"}
                        </h3>
                        <input
                          onChange={(e) => {
                            if (val < 81) {
                              setSelectedFloor(1);
                            } else {
                              limitHandle(e, 5, setSelectedFloor);
                            }
                          }}
                          className={styles.seletedRooms}
                          value={selectedFloor}
                          maxLength={2}
                          max={50}
                          type="tel"
                        />
                      </div>
                      <div className={styles.rooms}>
                        <h3>{path === "/uz" ? "Bino qavati" : "Этаж"}</h3>
                        <input
                          onChange={(e) => {
                            limitHandle(e, 50, setSelectedSanu);
                          }}
                          className={styles.seletedRooms}
                          value={selectedSanu}
                          maxLength={2}
                          max={50}
                          type="tel"
                        />
                      </div>
                    </div>
                    <Link
                      href="#cost"
                      className={
                        hovered === true ? styles.animate : styles.noneAnimation
                      }
                      onMouseOver={() => {
                        setHovered(true);
                      }}
                      onMouseLeave={() => {
                        setHovered(false);
                      }}
                      onClick={() => {
                        setCounter(counter + 1);
                      }}
                    >
                      {t("button")}
                    </Link>
                  </div>
                </div>
              </>
            ) : counter === 3 ? (
              <>
                <div className={styles.controller}>
                  {contoller.map((e: number) => {
                    const id = uuidv4();
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          setCounter(e);
                        }}
                        className={styles.control}
                      >
                        {e > 1 ? (
                          <div className={styles.line}>
                            <svg
                              width="78"
                              height="3"
                              viewBox="0 0 78 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                y1="1.5"
                                x2="78"
                                y2="1.5"
                                stroke={counter < e ? "#E0E0E0" : "#46247c"}
                                stroke-width="3"
                                stroke-dasharray="7 7"
                              />
                            </svg>
                          </div>
                        ) : null}
                        <div
                          className={styles.circle}
                          style={
                            counter < e
                              ? {
                                  background: "#F2F2F2",
                                  filter: "none",
                                }
                              : {}
                          }
                        >
                          {e}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.selection}>
                  <div className={styles.container}>
                    <h3>{t("subtitle4")}</h3>
                    <div className={styles.checksRep}>
                      {path === "/"
                        ? ads3.map((e: string, index: number) => {
                            return (
                              <div
                                key={uuidv4()}
                                className={
                                  e === selectedRepair
                                    ? `${styles.checkboxRep} ${styles.boxShadowRep}`
                                    : styles.checkboxRep
                                }
                                onClick={() => {
                                  setSelectedRepair(e);
                                  if (e === "Стандарт") {
                                    setAddPrice1(0);
                                  }
                                  if (e === "Неоклассика") {
                                    setAddPrice1(15);
                                  }
                                  if (e === "Классика") {
                                    setAddPrice1(15);
                                  }
                                  if (e === "Минимализм") {
                                    setAddPrice1(20);
                                  }
                                  if (e === "Под дизайн") {
                                    setAddPrice1(0);
                                    setChecked(true);
                                    setAddPrice2(15);
                                  }
                                }}
                              >
                                <Image
                                  src={`/images/repair${index + 1}.png`}
                                  alt="decorate"
                                  width={244}
                                  height={211}
                                />
                                <p>{e}</p>
                              </div>
                            );
                          })
                        : ads3_uz.map((e: string, index: number) => {
                            return (
                              <div
                                key={uuidv4()}
                                className={
                                  e === selectedRepair
                                    ? `${styles.checkboxRep} ${styles.boxShadowRep}`
                                    : styles.checkboxRep
                                }
                                onClick={() => {
                                  setSelectedRepair(e);
                                  if (e === ads3_uz[0]) {
                                    setAddPrice(0);
                                  }
                                  if (e === ads3_uz[1]) {
                                    setAddPrice(15);
                                  }
                                  if (e === "Minimalizm") {
                                    setAddPrice1(20);
                                    console.log("wefwef");
                                    console.log(addPrice1);
                                  }
                                  if (e === ads3_uz[2]) {
                                    setAddPrice(15);
                                  }
                                }}
                              >
                                <Image
                                  src={`/images/repair${index + 1}.png`}
                                  alt="decorate"
                                  width={244}
                                  height={211}
                                />
                                <p>{e}</p>
                              </div>
                            );
                          })}
                    </div>
                    <Link
                      href="#cost"
                      className={
                        hovered === true ? styles.animate : styles.noneAnimation
                      }
                      onMouseOver={() => {
                        setHovered(true);
                      }}
                      onMouseLeave={() => {
                        setHovered(false);
                      }}
                      onClick={() => {
                        setCounter(counter + 1);
                      }}
                    >
                      {t("button")}
                    </Link>
                  </div>
                </div>
              </>
            ) : counter === 4 ? (
              <>
                <div className={styles.controller}>
                  {contoller.map((e: number) => {
                    return (
                      <div
                        key={uuidv4()}
                        onClick={() => {
                          setCounter(e);
                        }}
                        className={styles.control}
                      >
                        {e > 1 ? (
                          <div className={styles.line}>
                            <svg
                              width="78"
                              height="3"
                              viewBox="0 0 78 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                y1="1.5"
                                x2="78"
                                y2="1.5"
                                stroke={counter < e ? "#E0E0E0" : "#46247c"}
                                stroke-width="3"
                                stroke-dasharray="7 7"
                              />
                            </svg>
                          </div>
                        ) : null}
                        <div
                          className={styles.circle}
                          style={
                            counter < e
                              ? {
                                  background: "#F2F2F2",
                                  filter: "none",
                                }
                              : {}
                          }
                        >
                          {e}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.selection}>
                  <h3>{t("subtitle5")}</h3>
                  <div className={styles.container2}>
                    <div className={styles.roomType}>
                      <div className={styles.type}>
                        <h3>{t("subtitle1")}</h3>
                        {path === "/"
                          ? ads.map((e: string, index: number) => {
                              return (
                                <div
                                  key={uuidv4()}
                                  className={
                                    e === selected
                                      ? styles.checkboxInput
                                      : styles.checkboxInput
                                  }
                                  onClick={() => {
                                    setSelected(e);
                                    if (e === "Новостройка") {
                                      setDemontajPr(0);
                                      setWallTypePr(0);
                                    }
                                    if (
                                      e === "Вторичка" ||
                                      e === "Ikkilamchi uy"
                                    ) {
                                      setWallTypePr(0);
                                    }
                                  }}
                                >
                                  <input
                                    style={
                                      e === selected
                                        ? {
                                            background: "#46247c",
                                          }
                                        : {}
                                    }
                                    type="checkbox"
                                  />
                                  <p>{e}</p>
                                </div>
                              );
                            })
                          : ads_uz.map((e: string, index: number) => {
                              return (
                                <div
                                  key={uuidv4()}
                                  className={
                                    e === selected
                                      ? styles.checkboxInput
                                      : styles.checkboxInput
                                  }
                                  onClick={() => {
                                    setSelected(e);
                                    if (e === "Новостройка") {
                                      setDemontajPr(0);
                                    }
                                    if (e === ads_uz[0]) {
                                      setDemontajPr(0);
                                    }
                                    if (
                                      e === "Вторичка" ||
                                      e === "Ikkilamchi uy"
                                    ) {
                                      setWallTypePr(0);
                                    }
                                  }}
                                >
                                  <input
                                    style={
                                      e === selected
                                        ? {
                                            background: "#46247c",
                                          }
                                        : {}
                                    }
                                    type="checkbox"
                                  />
                                  <p>{e}</p>
                                </div>
                              );
                            })}
                      </div>
                      <div className={styles.type}>
                        <h3>{t("subtitle2")}</h3>
                        {(path === "/" && selected === "Новостройка") ||
                        (path === "/uz" && selected === "Yangi bino") ? (
                          <>
                            <div
                              className={styles.checkboxInput}
                              onClick={() => {
                                if (peregorkiPr === 20) {
                                  setPeregorkiPr(0);
                                }
                                if (peregorkiPr === 0) {
                                  setPeregorkiPr(20);
                                }
                                setPeregorki(!peregorki);
                              }}
                            >
                              <input
                                style={
                                  peregorkiPr === 20
                                    ? {
                                        background: "#46247c",
                                      }
                                    : {}
                                }
                                type="checkbox"
                              />
                              <p>
                                {path === "/"
                                  ? "Межкомнатные перегородки"
                                  : ads2_uz[0]}
                              </p>
                            </div>
                            <div
                              className={styles.checkboxInput}
                              onClick={() => {
                                if (wallTypePr === 15) {
                                  setWallTypePr(0);
                                }
                                if (wallTypePr === 0) {
                                  setWallTypePr(15);
                                }
                                setWallType(!wallType);
                              }}
                            >
                              <input
                                style={
                                  wallTypePr === 15
                                    ? {
                                        background: "#46247c",
                                      }
                                    : {}
                                }
                                type="checkbox"
                              />
                              <p>
                                {path === "/"
                                  ? "Штукатурка стен"
                                  : "Shtukaturka"}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className={styles.checkboxInput}
                              onClick={() => {
                                path === "/"
                                  ? setSelected2(ads2[0])
                                  : setSelected2(ads2_uz[0]);
                              }}
                            >
                              <input
                                onClick={() => {
                                  setPeregorki(!peregorki);
                                  if (peregorkiPr === 20) {
                                    setPeregorkiPr(0);
                                  }
                                  if (peregorkiPr === 0) {
                                    setPeregorkiPr(20);
                                  }
                                }}
                                style={
                                  peregorkiPr === 20
                                    ? {
                                        background: "#46247c",
                                      }
                                    : {
                                        background: "#f2f2f2",
                                      }
                                }
                                type="checkbox"
                              />
                              <p>
                                {path === "/"
                                  ? "Межкомнатные перегородки"
                                  : ads2_uz[0]}
                              </p>
                            </div>
                            <div
                              className={styles.checkboxInput}
                              onClick={() => {
                                if (demontajPr === 15) {
                                  setDemontajPr(0);
                                }
                                if (demontajPr === 0) {
                                  setDemontajPr(15);
                                }
                                setDemontaj(!demontaj);
                              }}
                            >
                              <input
                                style={
                                  demontajPr === 15
                                    ? {
                                        background: "#46247c",
                                      }
                                    : {}
                                }
                                type="checkbox"
                              />
                              <p>
                                {path === "/"
                                  ? "Демонтаж старого ремонта"
                                  : "Eski ishlarini demontaj qilish"}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className={styles.totalArea}>
                      <h3>{t("apartmentTitle")}</h3>
                      {
                        <RoundSlider
                          setVal={setVal}
                          val={val}
                          max={350}
                          min={0}
                        />
                      }
                    </div>
                    <div className={styles.roomCont}>
                      <div className={styles.rooms}>
                        <h3>{t("numberRooms")}</h3>
                        <input
                          onChange={(e) => {
                            limitHandle(e, 15, setSelectedRoom);
                          }}
                          className={styles.seletedRooms}
                          value={selectedRoom}
                          maxLength={2}
                          max={50}
                          type="tel"
                        />
                      </div>
                      <div className={styles.rooms}>
                        <h3>
                          {path === "/uz"
                            ? "Sanuzel soni"
                            : "Количество санузлы"}
                        </h3>
                        <input
                          onChange={(e) => {
                            if (val < 81) {
                              setSelectedFloor(1);
                            } else {
                              limitHandle(e, 5, setSelectedFloor);
                            }
                          }}
                          className={styles.seletedRooms}
                          value={selectedFloor}
                          maxLength={2}
                          max={50}
                          type="tel"
                        />
                      </div>
                      <div className={styles.rooms}>
                        <h3>{path === "/uz" ? "Bino qavati" : "Этаж"}</h3>
                        <input
                          onChange={(e) => {
                            limitHandle(e, 50, setSelectedSanu);
                          }}
                          className={styles.seletedRooms}
                          value={selectedSanu}
                          maxLength={2}
                          max={50}
                          type="tel"
                        />
                      </div>
                    </div>
                    <div className={styles.roomType}>
                      <div className={styles.type}>
                        <h3>{t("subtitle4")}</h3>
                        {path === "/"
                          ? ads3.map((e: string, index: number) => {
                              return (
                                <div
                                  key={uuidv4()}
                                  className={
                                    e === selectedRepair
                                      ? styles.checkboxInput
                                      : styles.checkboxInput
                                  }
                                  onClick={() => {
                                    setSelectedRepair(e);
                                    if (e === "Стандарт") {
                                      setAddPrice1(0);
                                    } else if (e === "Минимализм") {
                                      setAddPrice1(20);
                                    } else {
                                      setAddPrice1(15);
                                    }
                                  }}
                                >
                                  <input
                                    style={
                                      e === selectedRepair
                                        ? {
                                            background: "#46247c",
                                          }
                                        : {}
                                    }
                                    type="checkbox"
                                  />
                                  <p>{e}</p>
                                </div>
                              );
                            })
                          : ads3_uz.map((e: string, index: number) => {
                              return (
                                <div
                                  key={uuidv4()}
                                  className={
                                    e === selectedRepair
                                      ? styles.checkboxInput
                                      : styles.checkboxInput
                                  }
                                  onClick={() => {
                                    setSelectedRepair(e);
                                    if (e === "Standart") {
                                      setAddPrice1(0);
                                    } else {
                                      setAddPrice1(15);
                                    }
                                    if (e === "Minimalizm") {
                                      setAddPrice1(20);
                                    }
                                  }}
                                >
                                  <input
                                    style={
                                      e === selectedRepair
                                        ? {
                                            background: "#46247c",
                                          }
                                        : {}
                                    }
                                    type="checkbox"
                                  />
                                  <p>{e}</p>
                                </div>
                              );
                            })}
                      </div>
                      <div className={styles.type}>
                        <h3>{path === "/" ? "Дизайн" : "Dizayn"}</h3>
                        <div
                          className={
                            checked
                              ? styles.checkboxInput
                              : styles.checkboxInput
                          }
                          onClick={() => {
                            checked === true
                              ? setChecked(false)
                              : setChecked(true);
                            checked === true
                              ? setAddPrice2(30)
                              : setAddPrice2(0);
                          }}
                        >
                          <input
                            style={
                              addPrice2 === 30
                                ? {
                                    background: "#46247c",
                                  }
                                : {}
                            }
                            type="checkbox"
                          />
                          <p>{path === "/" ? "Под дизайн" : "Dizayn bilan"}</p>
                        </div>
                        <div
                          className={
                            checked1
                              ? styles.checkboxInput
                              : styles.checkboxInput
                          }
                          onClick={() => {
                            checked1 === true
                              ? setChecked1(false)
                              : setChecked1(true);
                            checked1 === true
                              ? setAddPrice3(15)
                              : setAddPrice3(0);
                          }}
                        >
                          <input
                            style={
                              addPrice3 === 15
                                ? {
                                    background: "#46247c",
                                  }
                                : {}
                            }
                            type="checkbox"
                          />
                          <p>{path === "/" ? "С дизайном" : "Dizayn ostida"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardPriceList}>
                  {path === "/"
                    ? CARD_PRICE.map((prop: ICardPrice) => {
                        return (
                          <div key={uuidv4()} className={styles.cardPriceItem}>
                            <Image
                              src={prop.image}
                              style={{
                                borderRadius: 25,
                              }}
                              width={180}
                              height={145}
                              alt={prop.title}
                            />
                            <div className={styles.desc}>
                              <h3>{prop.title}</h3>
                            </div>
                            <button
                              onClick={() => {
                                setProp(prop.title);
                              }}
                              className={styles.materials}
                            >
                              Посмотреть список работ и материалов
                            </button>
                            <button
                              className={
                                overed === prop.title
                                  ? styles.animate
                                  : styles.noneAnimation
                              }
                              onMouseOver={() => {
                                setOvered(prop.title);
                              }}
                              onMouseLeave={() => {
                                setOvered("");
                              }}
                              onClick={() => {
                                setOrderOpen(!orderOpen);
                                setProps(prop);
                                path === "/"
                                  ? setTotalPrice(
                                      prop.price * val +
                                        demontajPr * val +
                                        peregorkiPr * val +
                                        wallTypePr * val +
                                        addPrice2 * val +
                                        addPrice1 * val +
                                        addPrice3 * val +
                                        prop.sanu * (selectedFloor - 1) +
                                        numFl
                                    )
                                  : setTotalPrice(
                                      prop.price * val +
                                        demontajPr * val +
                                        peregorkiPr * val +
                                        wallTypePr * val +
                                        addPrice2 * val +
                                        addPrice1 * val +
                                        prop.sanu * (selectedFloor - 1) +
                                        addPrice3 * val +
                                        numFl
                                    );
                              }}
                            >
                              {path === "/"
                                ? prop.price * val +
                                  demontajPr * val +
                                  wallTypePr * val +
                                  peregorkiPr * val +
                                  addPrice2 * val +
                                  addPrice1 * val +
                                  addPrice3 * val +
                                  prop.sanu * (selectedFloor - 1) +
                                  numFl
                                : prop.price * val +
                                  changed +
                                  prop.sanu * (selectedFloor - 1) +
                                  addPrice3 * val +
                                  numFl}
                              $
                            </button>
                          </div>
                        );
                      })
                    : CARD_PRICE_UZ.map((prop: ICardPrice) => {
                        return (
                          <div key={uuidv4()} className={styles.cardPriceItem}>
                            <Image
                              src={prop.image}
                              width={180}
                              height={145}
                              style={{
                                borderRadius: 20,
                              }}
                              alt={prop.title}
                            />
                            <div className={styles.desc}>
                              <h3>{prop.title}</h3>
                            </div>
                            <button
                              onClick={() => {
                                setProp(prop.title);
                              }}
                              className={styles.materials}
                            >
                              Materiallar ro{"'"}yxati
                            </button>
                            <button
                              className={
                                overed === prop.title
                                  ? styles.animate
                                  : styles.noneAnimation
                              }
                              onMouseOver={() => {
                                setOvered(prop.title);
                              }}
                              onMouseLeave={() => {
                                setOvered("");
                              }}
                              onClick={() => {
                                setOrderOpen(!orderOpen);
                                setProps(prop);
                                setTotalPrice(
                                  prop.price * val +
                                    demontajPr * val +
                                    peregorkiPr * val +
                                    wallTypePr * val +
                                    addPrice2 * val +
                                    addPrice1 * val +
                                    addPrice3 * val +
                                    prop.sanu * (selectedFloor - 1) +
                                    numFl
                                );
                              }}
                            >
                              {prop.price * val +
                                demontajPr * val +
                                peregorkiPr * val +
                                wallTypePr * val +
                                addPrice2 * val +
                                addPrice1 * val +
                                addPrice3 * val +
                                prop.sanu * (selectedFloor - 1) +
                                numFl}
                              $
                            </button>
                          </div>
                        );
                      })}
                </div>
                <OrderModal
                  roomType={selectedRoom}
                  totalPrice={totalPrice}
                  addService={selected2}
                  repStyle={selectedRepair}
                  design={checked}
                  totalArea={`${val}м²`}
                  setOrderOpen={setOrderOpen}
                  price={props?.price}
                  title={props?.title}
                  orderOpen={orderOpen}
                  sanu={selectedFloor}
                  floor={selectedSanu}
                />
                <Characteriscs
                  roomType={selectedRoom}
                  totalPrice={totalPrice}
                  addService={selected2}
                  repStyle={selectedRepair}
                  design={checked}
                  props={properties!}
                  totalArea={`${val}м²`}
                  setOrderOpen={setCharacts}
                  setProp={setProp}
                  price={props?.price}
                  title={props?.title}
                  orderOpen={characts}
                />
              </>
            ) : null}
          </div>
        </>
      }
    </Container>
  );
};

export default Cost;
