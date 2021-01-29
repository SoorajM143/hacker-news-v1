import React, { useReducer } from 'react';

import MainBody from './containers/MainBody';

import './App.css';

//Creating App context
export const AppContext = React.createContext();

//Initial States
const initialState = {
  activeTab: 'Popular',
};

function reducer(state, action) {
  switch (action.type) {
    case 'ACTIVATE_TAB':
      return {
        activeTab: action.data,
      };

    default:
      return initialState;
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <MainBody />
      </AppContext.Provider>
    </div>
  );
};

export default App;
