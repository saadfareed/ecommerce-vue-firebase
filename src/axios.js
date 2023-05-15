import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },

});

apiClient.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// Get the token from local storage

export default {

//auth endpoints

register(postData) {
  return apiClient.post(`/register`, postData, {
    })
    .then(response => {
      return response.data;
    });
},

ulogin(postData) {
  return apiClient.post(`/login`, postData, {
    })
    .then(response => {
      return response.data;
    });
  
},

//search product endpoint

searching(postdata) {
  return apiClient.post(`find/product`, postdata, {
    })
    .then(response => {
      return response.data;
    });
},








  //user endpoints

 //get featured products
  getfeaturedproducts(id) {

    this.getfamiliarproduct(id);
    // return apiClient.get(`all/products`, {
    //   })
    //   .then(response => {
    //     return response.data;
    //   });
  },

//get product categories
  getcategories() {
    return apiClient.get(`all/category`, {
      })
      .then(response => {
        return response.data;
      });
  },

  //get familiar products 
  getfamiliarproduct(category) {
    return apiClient.post(`category/items?category_id=`+category, {
      })
      .then(response => {
        return response.data;
      });
  },

//   get product info

getproductinfo(id) {
    return apiClient.post(`details/product?prod_id=`+id, {
      })
      .then(response => {
        return response.data;
      });
  },




};