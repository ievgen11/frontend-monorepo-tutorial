import React, { useState } from "react";
import { Button, Section, TextInput } from "@delipack/design-system";

import Authentication from "../../services/Authentication";

import styles from "./styles.scss";
import lock from "./lock.png";

export const AuthenticationPage = () => {
  const auth = Authentication.getInstance();
  const [isPending, setIsPending] = useState(false);

  const handleClick = async () => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      auth.setAccessToken("THIS_IS_THE_ACCESS_TOKEN");
      window.location.href = "/overview";
    }, 2000);
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
          <Button disabled={isPending} onClick={handleClick}>
            {isPending ? "Please wait..." : "Authenticate"}
          </Button>
        </div>
      </div>
    </Section>
  );
};
