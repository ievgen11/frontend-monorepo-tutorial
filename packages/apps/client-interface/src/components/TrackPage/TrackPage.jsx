import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import faker from "faker";

import { Button } from "@delipack/design-system";

import map from "./map.png";
import styles from "./styles.scss";

export const TrackPage = () => {
  const history = useHistory();
  const { tracking_number } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const handleBackClick = () => {
    history.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Fetching data</h1>
            <div className={styles.wrapper}>
              <div className={styles.wrapper}>
                Please wait...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Tracking information:</h1>
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <section>
                Tracking number:{" "}
                <span className={styles.tracking_number}>
                  {tracking_number}
                </span>
              </section>
              <section>
                <ul className={styles.history}>
                  {Array.apply(null, Array(5)).map((item, index) => (
                    <li className={styles.history_event} key={index}>
                      <span className={styles.history_date}>
                        {faker.date.weekday()}
                      </span>
                      <span className={styles.history_label}>
                        {faker.address.streetAddress(true)}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <img src={map} className={styles.map} />
          </div>
          <Button onClick={handleBackClick}>Back to Dashboard</Button>
        </div>
      </div>
    </div>
  );
};
