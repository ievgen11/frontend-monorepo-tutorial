import React from "react";

import { Button, Section, TextInput } from "@delipack/design-system";

import styles from "./styles.scss";

import lock from "./lock.png";

export const AuthenticationPage = () => {
  const handleClick = () => {
    alert("log in");
  };

  return (
    <Section image={lock}>
      <div className={styles.wrapper}>
        <div className={styles.inputContainer}>
          <TextInput type="text" placeholder="Email" />
        </div>
        <div className={styles.inputContainer}>
          <TextInput type="password" placeholder="Password" />
        </div>
        <div className={styles.inputContainer}>
          <Button onClick={handleClick}>Authenticate</Button>
        </div>
      </div>
    </Section>
  );
};
