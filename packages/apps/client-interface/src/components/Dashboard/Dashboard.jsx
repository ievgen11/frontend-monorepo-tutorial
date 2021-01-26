import React from "react";
import { useHistory } from "react-router-dom";

import { SearchButton, Section } from "@delipack/design-system";

import box_magnifying_glass from "./box_magnifying_glass.png";

export const Dashboard = () => {
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { value } = evt.target.children.value;
    history.push(`/track/${encodeURIComponent(value)}`);
  };

  return (
    <Section image={box_magnifying_glass}>
      <h1>Track package</h1>
      <p>Find out the latest status of your package</p>
      <SearchButton
        onSubmit={handleSubmit}
        placeholder="Paste Tracking Code Here"
      />
    </Section>
  );
};
