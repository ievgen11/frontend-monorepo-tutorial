import * as React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { SearchButton } from "./index";

export default {
  title: "SearchButton",
  component: SearchButton,
  decorators: [withKnobs],
};

export const Default = () => (
  <SearchButton
    title={text("Title", "Enter Tracking Number")}
    disabled={boolean("Disabled", false)}
    onSubmit={action("onSubmit")}
    onChange={action("onChange")}
    value={text("Tracking Number", "9400 1000 0000 0000 0000 00")}
    placeholder={text("Placeholder", "Enter Tracking Number")}
  />
);
