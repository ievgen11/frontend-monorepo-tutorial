import * as React from "react";
import * as renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import { TextInput } from "./TextInput";

const TestID = "TextInputTestID";

describe("<TextInput />", () => {
  const testValues = {
    value: "1234-5678-90",
    onChange: jest.fn(),
  };

  test("Submit works", async () => {
    const { getByTestId } = render(
      <TextInput data-testid={TestID} {...testValues} />
    );

    const input = await getByTestId(TestID);

    fireEvent.change(input, { target: { value: testValues.value } });

    expect((input as HTMLInputElement).value).toBe(testValues.value);
  });

  test("Snapshot is intact", () => {
    const tree = renderer.create(<TextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
