import React, { useCallback, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styles from "@/styles/contact.module.css";

const containerStyle = {
  width: "680px",
  height: "339px",
};

const Maps = () => {

  return  (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d187.3925713652575!2d69.24778466195166!3d41.28098536322159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8cc0b4d257%3A0x2ec0c697f05ae9fc!2zNTgg0YPQu9C40YbQsCDQo9GB0LzQsNC90LAg0J3QsNGB0YvRgNCwLCDQotCw0YjQutC10L3Rgiwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sus!4v1692427601407!5m2!1sru!2sus"
        width="100%"
        height="339"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  )
};

export default Maps;
