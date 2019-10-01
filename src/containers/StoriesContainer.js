/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import Story from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data));
  }, []);

  return (
    <GlobalStyle>
      <h1>News for N3RDS</h1>
      {storyIds.map(id => (
        <Story key={id} storyId={id} />
      ))}
    </GlobalStyle>
  );
};
export default StoriesContainer;
