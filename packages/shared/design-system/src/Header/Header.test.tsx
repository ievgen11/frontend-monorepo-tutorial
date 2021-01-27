import * as React from "react";
import * as renderer from "react-test-renderer";

import { Header } from "./Header";

describe("<Header />", () => {
  test("Snapshot is intact", () => {
    const tree = renderer.create(<Header>Test</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
