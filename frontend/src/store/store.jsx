import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import personReducer from "./reducers/personSlice.jsx";
import TvReducer  from './reducers/TvSlice'

export const store = configureStore({
  reducer: {
    Movie:movieReducer,
    Tv:TvReducer,
    Person:personReducer
  },
})