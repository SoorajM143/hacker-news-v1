import React, { useContext } from 'react';

import { HiTrendingUp } from 'react-icons/hi';
import { MdAutorenew } from 'react-icons/md';
import { IoLogoYahoo } from 'react-icons/io';
import { AppContext } from '../App';

import '../css/Sidebar.css';

export const Sidebar = () => {
  const { state, dispatch } = useContext(AppContext);

  const currentTab = (tab) => {
    window.scrollTo(0, 0);
    dispatch({ type: 'ACTIVATE_TAB', data: tab });
  };
  return (
    <nav className="sidebar__wrapper">
      <IoLogoYahoo className="navbar__logo" />
      <ul className="sidebar__menu">
        <li
          className={`sidebar__item ${
            state.activeTab === 'Popular' ? ' active' : ''
          }`}
          onClick={() => currentTab('Popular')}
        >
          <a>
            <HiTrendingUp className="sidebar__popular" />
            <div>Popular</div>
          </a>
        </li>
        <li
          className={`sidebar__item ${
            state.activeTab === 'New' ? 'active' : ''
          }`}
          onClick={() => currentTab('New')}
        >
          <a>
            <MdAutorenew className="sidebar__new" />
            <div>New</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};
