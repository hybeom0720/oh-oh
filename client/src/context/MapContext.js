import React, { rseReducer, createContext, useContext } from "react";

const initialState = {
  center: {
    latitude: 37.578605,
    longitude: 126.977222,
  },
};

const mapReducer = (state, action) => {
  switch (action.type) {
    case "SET_CENTER":
      return {
        ...state,
        center: {
          ...state.center,
          latitude: action.latitude,
          longitude: action.longitude,
        },
      };
    default:
      throw new Error("에러났는데용");
  }
};

const MapStateContext = createContext(null);
const MapDispatchContext = createContext(null);

const MapProvider = ({ children }) => {
  <MapStateContext.Provider value={initialState}>
    <MapDispatchContext.Provider value={mapReducer}>
      {children}
    </MapDispatchContext.Provider>
  </MapStateContext.Provider>;
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
