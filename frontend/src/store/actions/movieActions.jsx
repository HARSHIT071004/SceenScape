// import axios from "../../utils/axios";
// import {loadmovie} from "../reducers/movieSlice"; 
// export {removemovie} from "/src/store/reducers/movieSlice";

// export const asyncloadmovie = (id)=> async (dispatch,getstate)=>{
//     try{


// const detail = await axios.get(`/movie/${id}`)
// const externalid= await axios.get(`/movie/${id}/external_ids`)
// const recommendations = await axios.get(`/movie/${id}/recommendations`)
// const similar = await axios.get(`/movie/${id}/similar`)
// const translations= await axios.get(`/movie/${id}/translations`)
// const videos= await axios.get(`/movie/${id}/videos`)
// const watchproviders = await axios.get(`/movie/${id}/watch/providers`)
// let theultimatedetails ={
//     detail:detail.data,
//     externalid: externalid.data,
//     recommandations: recommendations.data.results,
//     similar:similar.data.results,
//     translatons: translations.data.translations.map((t)=>t.name),
//     videos:videos.data.results.find((m)=> m.type === "Trailer"),
//     watchproviders: watchproviders.data.results.IN,

// };
// dispatch(loadmovie(theultimatedetails));
// }catch(error){
//     console.log("Error:",error);
// }}





import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";
export { removemovie } from "/src/store/reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    // Loader स्टार्ट करें (अगर loader state हो तो)
    dispatch(loadmovie({ loading: true }));

    // सारे API कॉल एक साथ fire करें (Performance Optimization)
    const [
      detail,
      externalid,
      recommendations,
      similar,
      translations,
      videos,
      watchproviders,
    ] = await Promise.all([
      axios.get(`/movie/${id}`),
      axios.get(`/movie/${id}/external_ids`),
      axios.get(`/movie/${id}/recommendations`),
      axios.get(`/movie/${id}/similar`),
      axios.get(`/movie/${id}/translations`),
      axios.get(`/movie/${id}/videos`),
      axios.get(`/movie/${id}/watch/providers`),
    ]);

    // Data Processing & Validation
    let theultimatedetails = {
      detail: detail?.data || {},
      externalid: externalid?.data || {},
      recommandations: recommendations?.data?.results || [],
      similar: similar?.data?.results || [],
      translatons: translations?.data?.translations?.map((t) => t.name) || [],
      videos:
        videos?.data?.results?.find((m) => m.type === "Trailer") || null,
      watchproviders: watchproviders?.data?.results?.IN || null,
      loading: false,
    };

    // Redux Store में डेटा भेजें
    dispatch(loadmovie(theultimatedetails));
  } catch (error) {
    console.error("Error fetching movie data:", error);

    // Error Handling & Fallback Data
    dispatch(
      loadmovie({
        error: "Failed to load movie data.",
        loading: false,
      })
    );
  }
};
