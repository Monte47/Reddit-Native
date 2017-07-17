import axios from 'axios';

export const fetchAllPosts = () => {
  return axios.get(`https://www.reddit.com/.json`);
};
