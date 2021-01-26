import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import image from "./image.png";
import { Section } from "./index";

export default {
  title: "Section",
  component: Section,
  decorators: [withKnobs],
};

export const Default = () => (
  <Section image={image} >
    <h1>This is an example section</h1>
    <p>Notice the nice image on the right!</p>
  </Section>
);
