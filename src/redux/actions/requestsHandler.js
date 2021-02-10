import axios from 'axios';

export const BASE_URL = 'http://localhost:8080/';

const https = require('https');

export const GET = async (url) => {
  const response = await axios({
    url,
    method: 'GET',
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  return response;
};

export const POST = async (url, data) => {
  const response = await axios({
    url,
    method: 'POST',
    data,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  return response;
};

export const PUT = async (url, data) => {
  const response = await axios({
    url,
    method: 'PUT',
    data,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  return response;
};
