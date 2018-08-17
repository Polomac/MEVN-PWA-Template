import axios from 'axios';
import state from '../store/state';

const http = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default {
  getBooks() {
    return http.get('books');
  },
  postBook(params) {
    return http.post('books', params)
      .then(() => {
        state.statusMessage = {
          text: 'Post succesful!',
          status: true,
        };
      })
      .catch((e) => {
        state.statusMessage = {
          text: e.message,
          status: false,
        };
      });
  },
};
