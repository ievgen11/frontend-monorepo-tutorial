import React from "react";
import { useHistory } from "react-router-dom";

import { Button, Section } from "@delipack/design-system";

import cross_confused from "./cross_confused.png";

export const NotFoundPage = () => {
  const history = useHistory();

  const handleRedirectClick = () => {
    history.push("/");
  };

  return (
    <Section image={cross_confused}>
      <h1>404: Not Found</h1>
      <p>The page you tried to view does not exist.</p>
      <Button onClick={handleRedirectClick}>Back to safety!</Button>
    </Section>
  );
};
