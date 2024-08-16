import styles from "@/styles/popUp.module.css";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useState } from "react";
const PopUp = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) => {
  const [name, setName] = useState("");
  const [phNum, setPhNum] = useState("");
  const [message, setMessage] = useState("");
  const Post = (e: React.FormEvent<HTMLFormElement> | any): void => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data.entries());
    const send = `email: ${obj.name}%0Anumber: ${obj.phoneNumber}%0Amessage: ${obj.message}`;
    if (name !== "" && phNum !== "" && message !== "") {
      setName("");
      setPhNum("");
      setMessage("");
    }
    axios({
        method: "post",
        url: `https://api.telegram.org/bot6683010545:AAGhQEETPuBY-IVHwppSt3zc2CBEvg4j5o4/sendMessage?chat_id=-4285083557&text=${send}`
    })
  };
  const t = useTranslations("Contact");
  return (
    <>
      <div
        style={
          isOpen === true
            ? {
                transition: "0.4s",
                opacity: 1,
                zIndex: 1000,
                transform: "translate(0, 0, 100px)",
              }
            : {
                opacity: 0,
                zIndex: -100,
                transition: "0.4s",
              }
        }
        className={styles.popUp}
      >
        <div className={styles.container}>
          <form onSubmit={Post} className={styles.form}>
            <h1>{t("inputTitle")}</h1>
            <div className={styles.inputForm}>
              <p>{t("inputName")}</p>
              <input
                name="name"
                value={name}
                onChange={(p) => {
                  setName(p.target.value);
                }}
                required
                type="text"
              />
            </div>
            <div style={{ marginTop: 10 }} className={styles.inputForm}>
              <p>{t("inputPhone")}</p>
              <input
                name="phoneNumber"
                onChange={(p) => {
                  setPhNum(p.target.value);
                }}
                value={phNum}
                minLength={9}
                maxLength={13}
                type="text"
                required
              />
            </div>
            <div style={{ marginTop: 10 }} className={styles.inputForm}>
              <p>{t("inputMess")}</p>
            </div>
            <textarea
              name="message"
              onChange={(p) => {
                setMessage(p.target.value);
              }}
              value={message}
              minLength={1}
              maxLength={2500}
              required
              className={styles.textarea}
            />
            <button className={styles.button}>{t("button")}</button>
          </form>
        </div>
        <div className={styles.bg} onClick={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default PopUp;
