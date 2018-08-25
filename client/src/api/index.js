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
  deleteBook(id) {
    return http.delete(`books/${id}`)
      .then(() => {
        state.statusMessage = {
          text: 'Delete succesful!',
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
  updateBook(params) {
    console.log(params);
    // eslint-disable-next-line
    return http.put(`books/${params._id}`, {
      params,
    })
      .then(() => {
        state.statusMessage = {
          text: 'Update succesful!',
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
