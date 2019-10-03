import axios from "axios";
import {
  getStoryIds,
  getStory,
  newStoriesUrl,
  storyUrl
} from "../services/hnApi";
import { singularStory, storyIds, emptySingularStory } from "../fixtures";

jest.mock("axios"); // this needs to be up top for axios
describe("HackerNewsApi", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("getStory functionality", () => {
    it("requests and gets a story from hnapi", async () => {
      //   axios.get.mockImplementation(() =>
      //     Promise.resolve({ data: { ...singularStory } })
      //   );
      axios.get.mockResolvedValue({ data: singularStory });
      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(singularStory);
    });
    it("does not retrieve a story but handles gracefully", async () => {
      axios.get.mockResolvedValue({ data: emptySingularStory });
      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(emptySingularStory);
    });
  });
});
