import axios from 'axios';

// export const BASE_URL = 'http://localhost:3010/';
export const BASE_URL = 'http://35.193.213.152:3010/';

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
