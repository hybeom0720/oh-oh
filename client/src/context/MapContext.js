import React, { useReducer, createContext, useContext } from "react";

const initialState = {
  center: null,
};

function mapReducer(state, action) {
  switch (action.type) {
    case "SET_CENTER":
      console.log("📍center point 등록");
      return {
        ...state,
        center: {
          latitude: action.latitude,
          longitude: action.longitude,
        },
      };
    default:
      throw new Error("에러났는데용");
  }
}

const MapStateContext = createContext(null);
const MapDispatchContext = createContext(null);

const MapProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, initialState);

  return (
    <MapStateContext.Provider value={state}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapStateContext.Provider>
  );
};

export const useMapState = () => {
  const state = useContext(MapStateContext);

  if (!state) {
    throw new Error("❗️ Map State 불러오기 실패!");
  }
  return state;
};

export const useMapDispatch = () => {
  const dispatch = useContext(MapDispatchContext);

  if (!dispatch) {
    throw new Error("❗️ Map Reducer 불러오기 실패");
  }

  return dispatch;
};

export default MapProvider;
