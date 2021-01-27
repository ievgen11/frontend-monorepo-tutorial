import * as React from "react";
import * as renderer from "react-test-renderer";

import { Footer } from "./Footer";

describe("<Footer />", () => {
  test("Snapshot is intact", () => {
    const tree = renderer.create(<Footer>Test</Footer>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
