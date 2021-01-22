import React from "react";

import { SearchButton } from "@delipack/design-system";

import box_magnifying_glass from "./box_magnifying_glass.png";
import styles from "./styles.scss";

export const Dashboard = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.text}>
        <h1>Track package</h1>
        <p>Find out the latest status of your package</p>
        <SearchButton
          onSubmit={(evt) => {
            evt.preventDefault();
            const { value } = evt.target.children.value;
            window.alert(encodeURIComponent(value));
          }}
          placeholder="Paste Tracking Code Here"
        />
      </div>
      <img src={box_magnifying_glass} className={styles.image} />
    </div>
  </div>
);
