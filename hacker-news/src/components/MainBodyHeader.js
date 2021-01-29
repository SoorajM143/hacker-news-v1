import React, { useContext } from 'react';

import '../css/MainBodyHeader.css';
import { AppContext } from '../App';

export const MainBodyHeader = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="mainBody__header-div">
      <header className="mainBody__header">
        <div className="mainBody__header--h1">
          <h4>{`${state.activeTab} Posts`}</h4>
        </div>
      </header>
    </div>
  );
};
