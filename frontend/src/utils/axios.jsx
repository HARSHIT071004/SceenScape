import axios from "axios";

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjAxOWIzY2U5NGQ0OTllYTcyM2M2NzdhYWFjYzU2MyIsIm5iZiI6MTczMjQyOTE2OC44NzIsInN1YiI6IjY3NDJjNTcwN2I4MjVlNjg1YjRlODAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NjIBwFaXZREHIR9aP3FG3OyaWOZzjZWHcHeLvxlMRuU`,
  },
});

export default instance;
