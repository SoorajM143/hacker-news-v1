import React from 'react';

import Navbar from '../components/Navbar';
import { StoryContainer } from './StoriesContainer';
import { MainBodyHeader } from '../components/MainBodyHeader';
import { Sidebar } from '../components/Sidebar';

import '../css/MainBody.css';

const MainBody = () => {
  return (
    <div className="mainBody">
      <Navbar />
      <Sidebar />
      <MainBodyHeader />
      <StoryContainer />
    </div>
  );
};

export default MainBody;
