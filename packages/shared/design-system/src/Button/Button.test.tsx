import * as React from "react";
import * as renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

const ButtonTestID = "ButtonTestID";

describe("<Button />", () => {
  test("WOW! Button displays text!", async () => {
    const { getByTestId } = render(
      <Button data-testid={ButtonTestID}>This is a test!</Button>
    );
    const button = await getByTestId(ButtonTestID);

    await fireEvent.click(button);

    expect(button).toHaveTextContent("This is a test!");
  });
  it("WHOA! Snapshot is nice!", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
