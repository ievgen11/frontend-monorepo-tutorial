import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import faker from "faker";

import {
  Button,
  Section,
  TrackingHistory,
  TrackingHistoryItem,
} from "@delipack/design-system";

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
      <Section>
        <h1>Fetching data</h1>
        <p> Please wait...</p>
      </Section>
    );
  }

  return (
    <Section>
      <h1>Tracking information:</h1>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <section>
            Tracking number:{" "}
            <span className={styles.tracking_number}>{tracking_number}</span>
          </section>
          <section>
            <TrackingHistory>
              {Array.apply(null, Array(5)).map((item, index) => (
                <TrackingHistoryItem
                  key={index}
                  label={faker.date.weekday()}
                  value={faker.address.streetAddress(true)}
                ></TrackingHistoryItem>
              ))}
            </TrackingHistory>
          </section>
        </div>
        <img src={map} className={styles.map} />
      </div>
      <Button onClick={handleBackClick}>Back to Dashboard</Button>
    </Section>
  );
};
