import axios from "axios";
const KEY = 'AIzaSyBIQt5GTFYoSZWJpXEDj8tVuRdITC1Fxa8';
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
    type: 'video'
  }
});
