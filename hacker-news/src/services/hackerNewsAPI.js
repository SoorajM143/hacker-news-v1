import axios from 'axios';

import { selectedFields } from '../utils/selectedFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';

export const topStories = `${baseUrl}topstories.json`;

export const story = `${baseUrl}item/`;

export const newStories = `${baseUrl}newstories.json`;

export const getStories = async () => {
  const result = await axios.get(topStories).then(({ data }) => data);
  return result;
};

export const getNewStories = async () => {
  const result = await axios.get(newStories).then(({ data }) => data);
  return result;
};

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${story + storyId}.json`)
    .then(({ data }) => data && selectedFields(data));

  return result;
};
