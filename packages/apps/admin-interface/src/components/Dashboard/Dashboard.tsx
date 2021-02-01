import React from "react";

import { Section } from "@delipack/design-system";

import robot from "./robot.png";

export const Dashboard = () => (
  <Section image={robot}>
    <h1>Admin Interface</h1>
    <p>Employee resources, benchmarking and analytics.</p>
  </Section>
);
