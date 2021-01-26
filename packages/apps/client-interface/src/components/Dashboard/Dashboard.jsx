import React from "react";
import { useHistory } from "react-router-dom";

import { SearchButton } from "@delipack/design-system";

import box_magnifying_glass from "./box_magnifying_glass.png";
import styles from "./styles.scss";

export const Dashboard = () => {
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { value } = evt.target.children.value;
    history.push(`/track/${encodeURIComponent(value)}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Track package</h1>
          <p>Find out the latest status of your package</p>
          <SearchButton
            onSubmit={handleSubmit}
            placeholder="Paste Tracking Code Here"
          />
        </div>
        <img src={box_magnifying_glass} className={styles.image} />
      </div>
    </div>
  );
};
