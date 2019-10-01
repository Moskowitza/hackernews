import axios from "axios";
import selectedFields from "../utils/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`; // note the .json
export const storyUrl = `${baseUrl}item/`;

export const getStory = async storyId => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`) // note the .json
    .then(({ data }) => data && selectedFields(data));
  return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  return result;
};
