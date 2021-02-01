import React from "react";

import { Button, Section } from "@delipack/design-system";

import lock from "./lock.png";

export const AuthenticationPage = () => {
  const handleClick = () => {
    alert("log in");
  };

  return (
    <Section image={lock}>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Button onClick={handleClick}>Authenticate</Button>
      </form>
    </Section>
  );
};
