import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hackerNewsAPI';
import { convertTime } from '../utils/convertTime';
import { BiLike } from 'react-icons/bi';
import '../css/Story.css';

export const Story = ({ storyId }) => {
  let unmounted = false;
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => {
      if (!unmounted) {
        data && data.url && setStory(data);
      }
    });
    return () => {
      unmounted = true;
    };
  }, []);

  return story && story.url ? (
    <div>
      <div className="story__card">
        <a
          href={story.url}
          target="_blank"
          rel="noreferrer"
          className="story_row"
          id="story_row"
        >
          <header>
            <div className="story__row-details">
              <span className="story__row-title">{story.title}</span>
              <span data-testid="story-author">{story.by} </span>
            </div>
          </header>

          <footer className="story__footer">
            <div className="story__row-upvote">
              <BiLike className="upvote__button" />
              <span>{story.score}</span>
            </div>
            <div className="story__row-author">
              <span>{`${convertTime(story.time)} ago`}</span>
            </div>
          </footer>
        </a>
      </div>
    </div>
  ) : null;
};
