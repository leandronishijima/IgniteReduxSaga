import apisauce from 'apisauce';

const create = (baseURL = 'https://rocketseat-node.herokuapp.com/api') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });

  const getProducts = () => api.get('/products');

  return {
    getProducts
  };
};

export default {
  create
};
