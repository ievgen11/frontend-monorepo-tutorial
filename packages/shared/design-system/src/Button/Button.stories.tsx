import * as React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => (
  <Button
    title={text("Title", "Track Your Package")}
    disabled={boolean("Disabled", false)}
    onClick={action("onClick")}
  >
    {text("Text", "Track Your Package")}
  </Button>
);
