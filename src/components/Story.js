/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, memo } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";
import mapTime from "../utils/mapTime";

const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);
  const { url, title, by, time } = story;
  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={url}>{title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
          {mapTime(time)} ago
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
});

export default Story;
