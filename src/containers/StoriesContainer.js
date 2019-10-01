import React, { useEffect, useState } from "react";
import { getStoryIds, getStory } from "../services/hnApi";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data));
    getStory(21125908)
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);

  return storyIds.map(id => <div>{id}</div>);
};
export default StoriesContainer;
