// import axios from "axios";
// const KEY = 'AIzaSyBIQt5GTFYoSZWJpXEDj8tVuRdITC1Fxa8';
// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
//   params: {
//     part: 'snippet',
//     maxResult: 10,
//     key: KEY,
//     type: 'video'
//   }
// });

import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
