import axios from "axios";

const key = "37fc5f0a15d44a07a523744e6703f02a";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get('/genres?key='+key);
export default{
    getGenreList
}