// import { removetv } from "../reducers/TvSlice";
// import { loadtv } from "../reducers/TvSlice";
// import axios from '../../utils/axios'

// export const asyncloadTv = (id) => async (dispatch, getstate) => {
//   try {
//     const detail = await axios.get(`/tv/${id}`);
//     const externalIds = await axios.get(`/tv/${id}/external_ids`);
//     const recommendations = await axios.get(`/tv/${id}/recommendations`);
//     const similar = await axios.get(`/tv/${id}/similar`);
//     const videos = await axios.get(`/tv/${id}/videos`);
//     const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
//     let ultimatedetails = {
//       detail: detail.data,
//       externalIds: externalIds.data,
//       recommendations: recommendations.data.results,
//       similar: similar.data.results,
//       videos: videos.data.results.find(Tv=>Tv.type=="Trailer"),
//       watchProviders: watchProviders.data.results.IN,
//     };
//     dispatch(loadtv(ultimatedetails));

//   } catch (error) {
//     console.error("Error fetching movie details or related data", error);
//   }
// };







import { removetv } from "../reducers/TvSlice";
import { loadtv } from "../reducers/TvSlice";
import axios from "../../utils/axios";

export const asyncloadTv = (id) => async (dispatch, getState) => {
  try {
    // Loader को activate करो (अगर UI में loader use हो रहा हो)
    dispatch(loadtv({ loading: true }));

    // सभी API कॉल एक साथ fire करें (Performance Optimization)
    const [detail, externalIds, recommendations, similar, videos, watchProviders] = await Promise.all([
      axios.get(`/tv/${id}`),
      axios.get(`/tv/${id}/external_ids`),
      axios.get(`/tv/${id}/recommendations`),
      axios.get(`/tv/${id}/similar`),
      axios.get(`/tv/${id}/videos`),
      axios.get(`/tv/${id}/watch/providers`),
    ]);

    // Data Processing & Validation
    let ultimatedetails = {
      detail: detail?.data || {},
      externalIds: externalIds?.data || {},
      recommendations: recommendations?.data?.results || [],
      similar: similar?.data?.results || [],
      videos: videos?.data?.results?.find((tv) => tv.type === "Trailer") || null,
      watchProviders: watchProviders?.data?.results?.IN || null,
      loading: false,
    };

    // Redux Store में data भेजें
    dispatch(loadtv(ultimatedetails));
  } catch (error) {
    console.error("Error fetching TV show details:", error);

    // Error Handling & Fallback Data
    dispatch(
      loadtv({
        error: "Failed to load TV show details.",
        loading: false,
      })
    );
  }
};
