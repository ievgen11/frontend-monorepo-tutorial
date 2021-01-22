import * as React from "react";
import * as renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import { SearchButton } from "./SearchButton";

const TestID = "SearchButtonTestID";

describe("<SearchButton />", () => {
  const testValues = {
    value: "1234-5678-90",
    onSubmit: jest.fn(),
  };

  test("Submit works", async () => {
    const { getByTestId } = render(
      <SearchButton data-testid={TestID} {...testValues} />
    );

    const form = await getByTestId(TestID);

    await fireEvent.submit(form);

    expect(testValues.onSubmit).toHaveBeenCalledTimes(1);
  });

  test("Snapshot is intact", () => {
    const tree = renderer.create(<SearchButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
