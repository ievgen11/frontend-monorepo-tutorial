import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { TrackingHistory, TrackingHistoryItem } from "./index";

export default {
  title: "TrackingHistory",
  component: TrackingHistory,
  decorators: [withKnobs],
};

export const Default = () => (
  <TrackingHistory>
    <TrackingHistoryItem
      label={text("Date", "Monday")}
      value={text("Value", "Delivered")}
    />
  </TrackingHistory>
);

export const Example = () => (
  <TrackingHistory>
    <TrackingHistoryItem
      label={text("Date1", "Monday")}
      value={text("Value1", "Delivered")}
    />
    <TrackingHistoryItem
      label={text("Date2", "Saturday")}
      value={text("Value2", "Sorted at depot")}
    />
    <TrackingHistoryItem
      label={text("Date3", "Friday")}
      value={text("Value3", "Picked up")}
    />
  </TrackingHistory>
);
