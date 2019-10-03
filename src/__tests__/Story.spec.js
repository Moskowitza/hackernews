import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import Story from "../components/Story";
import { singularStory } from "../fixtures";
import { getStory } from "../services/hnApi";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock("../services/hnApi", () => ({
  getStory: jest.fn()
}));

test("renders the Story component", async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory));

  const { getByText, queryByTestId } = render(<Story storyid="1" />);
  await waitForElement(() => [
    expect(queryByTestId("story")).toBeTruthy(),
    expect(getByText("Tarnished: Google Responds")).toBeTruthy(),
    expect(queryByTestId("story-by").textContent).toEqual("By: Karl Hadwen")
  ]);
});
