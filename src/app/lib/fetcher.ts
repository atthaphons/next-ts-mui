import axios from 'axios';

// export const fetcher = (url: string) => axios.get(url).then(res => res.data);


export const fetcher = (url: string) =>
  axios
    .get(url)
    .then(function (response) {
      // handle success
      //   console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

export const fetcherAdd = (url: string, object: object) =>
  axios.post(url, object)
    .then(response => response.data)
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

// axios
//   .put(url)
//   .then(function (response) {

//     // handle success
//     console.log(response);
//     return response;
//   })

//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

