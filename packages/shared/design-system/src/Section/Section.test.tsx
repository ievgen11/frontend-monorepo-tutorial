import * as React from "react";
import * as renderer from "react-test-renderer";

import { Section } from "./Section";

describe("<Section />", () => {
  test("Snapshot is intact", () => {
    const tree = renderer.create(<Section>Test</Section>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
