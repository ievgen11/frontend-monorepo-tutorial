import * as React from "react";
import * as renderer from "react-test-renderer";

import { TrackingHistory, TrackingHistoryItem } from "./TrackingHistory";

describe("<TrackingHistory />", () => {
  test("Snapshot is intact", () => {
    const tree = renderer
      .create(<TrackingHistory>Test</TrackingHistory>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<TrackingHistoryItem />", () => {
  test("Snapshot is intact", () => {
    const tree = renderer
      .create(<TrackingHistoryItem>Test</TrackingHistoryItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
