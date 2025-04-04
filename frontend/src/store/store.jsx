import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import  PersonReducer  from './reducers/personSlice'
import TvReducer  from './reducers/TvSlice'

export const store = configureStore({
  reducer: {
    Movie:movieReducer,
    Tv:TvReducer,
    Person:PersonReducer
  },
})