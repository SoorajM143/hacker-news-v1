import axios from 'axios';

import {
  getStory,
  topStories,
  getStories,
  story,
  getNewStories,
  newStories,
} from '../services/hackerNewsAPI';
import { testStory, storyIds, emptyTestStory } from '../fixtures';

jest.mock('axios');

describe('APIs Hacker News', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getting individual story ', () => {
    it('requests a single story from hacker news API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: testStory }));
      const res = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${story + 1}.json`);
      expect(res).toEqual(testStory);
    });

    it('if API request goes wrong', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: emptyTestStory })
      );
      const res = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${story + 1}.json`);
      expect(res).toEqual(emptyTestStory);
    });
  });

  describe('Get list of story IDs', () => {
    it('gets a list of IDs from hacker news API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));
      const res = await getStories();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(topStories);
      expect(res).toEqual(storyIds);
    });
  });

  describe('Get list of latest story IDs', () => {
    it('gets a list of new story IDs from hacker news API', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));
      const res = await getNewStories();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(newStories);
      expect(res).toEqual(storyIds);
    });
  });
});
