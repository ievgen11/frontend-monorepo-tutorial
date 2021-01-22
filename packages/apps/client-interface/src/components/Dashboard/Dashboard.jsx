import React from "react";

import box_magnifying_glass from "./box_magnifying_glass.png";
import styles from "./styles.scss";

export const Dashboard = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Track package</h1>
        <p>Find out the latest status of your package</p>
        <input type="text"></input>
        <button>Track</button>
      </div>
      <img src={box_magnifying_glass} className={styles.image} />
    </div>
  </div>
);