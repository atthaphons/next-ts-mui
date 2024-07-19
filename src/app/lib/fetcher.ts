import axios from 'axios';

export const fetcher = (url: string) =>
  axios
    .get(url)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

export const create = (url: string, object: object) =>
  axios.post(url, object)
    .then(response => response.data)
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });


