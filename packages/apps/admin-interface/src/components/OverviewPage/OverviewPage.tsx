import React from "react";

import { Section } from "@delipack/design-system";

import thumbs_up from "./thumbs_up.png";

export const OverviewPage = () => (
  <Section image={thumbs_up}>
    <h1>Overview Page</h1>
    <p>If you see this, it means that you are logged in!</p>
  </Section>
);
