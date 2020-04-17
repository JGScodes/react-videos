import axios from "axios";
//Had to move the params object to app.js because of axios bug w/ v0.19
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
