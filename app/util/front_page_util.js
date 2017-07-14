import axios from 'axios';


// export const fetchAllPosts = () => {
//   return fetch('https://reddit.com/.json', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   })
//     .then(res => {
//       debugger;
//       // return res.json();
//       return res;
//     })
//     .catch(error => console.log(error));
// };

export const fetchAllPosts = () => {
  return axios.get(`https://www.reddit.com/.json`);
};
