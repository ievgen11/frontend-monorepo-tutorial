import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@delipack/design-system";

import cross_confused from "./cross_confused.png";
import styles from "./styles.scss";

export const NotFoundPage = () => {
  const history = useHistory();

  const handleRedirectClick = () => {
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>404: Not Found</h1>
          <p>The page you tried to view does not exist.</p>
          <Button onClick={handleRedirectClick}>Back to safety!</Button>
        </div>
        <img src={cross_confused} className={styles.image} />
      </div>
    </div>
  );
};
