import React, { useEffect, useState, useContext } from 'react';

import { getStories, getNewStories } from '../services/hackerNewsAPI';
import { Story } from '../components/Story';

import '../css/StoriesContainer.css';
import { useLoadOnScroll } from '../hooks/useLoadOnScroll';

import { AppContext } from '../App';

export const StoryContainer = () => {
  const { state } = useContext(AppContext);
  const { count } = useLoadOnScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    if (state.activeTab === 'Popular')
      getStories().then((stories) => setStoryIds(stories));
    else getNewStories().then((stories) => setStoryIds(stories));
  }, [state]);
  return (
    <div className="stories__container">
      <div className="stories__grid">
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </div>
    </div>
  );
};
