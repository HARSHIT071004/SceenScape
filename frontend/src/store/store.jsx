import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import personSlice from "./reducers/personSlice";
import TvReducer  from './reducers/TvSlice'

export const store = configureStore({
  reducer: {
    Movie:movieReducer,
    Tv:TvReducer,
    Person:personSlice
  },
})