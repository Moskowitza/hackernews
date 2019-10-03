/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import Story from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();
  useEffect(() => {
    getStoryIds().then(data => data && setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(id => (
          <Story key={id} storyId={id} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
export default StoriesContainer;
