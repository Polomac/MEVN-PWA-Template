import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default {
  getBooks() {
    return http.get('books');
  },
  postBook(params) {
    return http.post('books', params);
  },
};
