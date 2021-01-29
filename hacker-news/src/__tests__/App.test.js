import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import { App } from '../App';
import { storyIds, testStory } from '../fixtures';
import { act } from 'react-dom/test-utils';
import { getStories, getStory, getNewStories } from '../services/hackerNewsAPI';
import { useLoadOnScroll } from '../hooks/useLoadOnScroll';
import { LOAD_STORIES } from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/useLoadOnScroll');

jest.mock('../services/hackerNewsAPI', () => ({
  getStories: jest.fn(),
  getStory: jest.fn(),
  getNewStories: jest.fn(),
}));

test('render application', async () => {
  useLoadOnScroll.mockImplementation(() => ({
    count: LOAD_STORIES,
  }));

  getStory.mockImplementation(() => Promise.resolve(testStory));
  getStories.mockImplementation(() => Promise.resolve(storyIds));
  getNewStories.mockImplementation(() => Promise.resolve(storyIds));

  await act(async () => {
    const { getByText, queryByTestId } = render(<App />);
    await waitFor(() => [
      expect(getByText('Testing: The appilcation')).toBeTruthy(),
      expect(queryByTestId('story-author').textContent).toEqual('Sooraj '),
    ]);
  });
});
