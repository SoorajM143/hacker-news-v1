/*
Loading fixed number of stories on scroll
*/

import { useEffect, useState } from 'react';

import { MAX_STORIES, LOAD_STORIES } from '../constants';
import { debounceScroll } from '../utils/debounceScroll';

export const useLoadOnScroll = () => {
  const [loadStories, setLoadStories] = useState(false);

  const [count, setCount] = useState(LOAD_STORIES);

  const handleScroll = debounceScroll(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loadStories
    ) {
      return false;
    }

    setLoadStories(true);
  }, 200);

  useEffect(() => {
    if (!loadStories) return;

    if (count + LOAD_STORIES >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + LOAD_STORIES);
    }

    setLoadStories(false);
  }, [loadStories]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return { count };
};
