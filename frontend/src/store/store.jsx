import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import personReducer from "./reducers/personSlice.jsx";
import tvReducer from './reducers/tvSlice.jsx'

export const store = configureStore({
  reducer: {
    Movie:movieReducer,
    Tv:tvReducer,
    Person:personReducer
  },
})



// In a real-world application, you'd likely have additional slices for other entities like TV shows,
// genres, and similar data. Each slice would have its own reducer and actions.