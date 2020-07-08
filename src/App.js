import React, { useReducer, useEffect } from "react";
import Header from "./components/Header";
import BreakingBadGrid from "./components/BreakingBadGrid";
import Search from "./components/Search";
import Spinner from "./components/Spinner";

const actions = {
  LOADING: "loading",
  SET_ITEMS: "setItems",
  CHANGE_INPUT: 'changeInput'
};

const initialState = {
  isLoading: true,
  items: [],
  input: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, isLoading: false };
    case actions.SET_ITEMS:
      return {
        ...state,
        items: [...action.items],
      };
    case actions.CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      }
    default:
      return state;
  }
};

function App() {
  

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async (url) => {
      const rawData = await fetch(url);
      const rippenData = rawData.json();
      return rippenData;
    };
    fetchData(
      `https://www.breakingbadapi.com/api/characters?name=${state.input}`
    ).then((res) => {
      dispatch({ type: actions.LOADING });
      dispatch({ type: actions.SET_ITEMS, items: [...res] });
    });
    
  }, [state.input]);

  const changeInput = (value) => {
    dispatch({type: actions.CHANGE_INPUT, input: value})
  }

  return (
    <div className="App">
      <Header />
      <Search changeInput={changeInput} />
      {
        state.isLoading ? 
          <Spinner />:
          <BreakingBadGrid items={state.items} />
      }
      
    </div>
  );
}

export default App;
