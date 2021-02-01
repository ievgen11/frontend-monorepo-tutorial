import * as React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { TextInput } from "./index";

export default {
  title: "TextInput",
  component: TextInput,
  decorators: [withKnobs],
};

export const Default = () => (
  <TextInput
    disabled={boolean("Disabled", false)}
    onChange={action("onChange")}
    value={text("Tracking Number", "9400 1000 0000 0000 0000 00")}
    placeholder={text("Placeholder", "Enter Tracking Number")}
  />
);
