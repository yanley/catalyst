const axios = require('axios');

// JobAdder API credentials
const clientId = 'xwty4k3dmq7ulf2vokpzu7uz7y';
const clientSecret = 'ipbgdq2vbiae7n7gtuhupckhgyr5vcltsxtpuulpghduizet4ppy';
const scope = 'read write offline_access';
const redirectUri = 'https://dev.team30.com.au/jobs';

const getAccessToken = async () => {
  const url = 'https://id.jobadder.com/connect/authorize';
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');
  data.append('client_id', clientId);
  data.append('client_secret', clientSecret);
  data.append('scope', scope);

  try {
    const response = await axios.post(url, data);
    const accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.log('the oauth request failed');
    console.error(error);
  }
};

// JobAdder API endpoint
const apiUrl = 'https://api.jobadder.com/v2';

// Access token and its expiration time
let accessToken = '';
let tokenExpirationTime = 0;

// Authenticate and obtain the access token
function authenticate() {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  params.append('redirect_uri', redirectUri);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  return axios.post('https://id.jobadder.com/connect/token', params, config)
    .then(response => {
      accessToken = response.data.access_token;
      tokenExpirationTime = Date.now() + response.data.expires_in * 1000;
    });
}

// Make a request to the JobAdder API
function makeApiRequest(endpoint, method = 'get', data = null) {
  // Refresh the access token if it has expired
  if (Date.now() >= tokenExpirationTime) {
    return authenticate()
      .then(() => {
        return sendApiRequest(endpoint, method, data);
      });
  } else {
    return sendApiRequest(endpoint, method, data);
  }
}

// Send a request to the JobAdder API using the access token
function sendApiRequest(endpoint, method, data) {
  const config = {
    method: method,
    url: `${apiUrl}${endpoint}`,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  };

  if (method === 'post' || method === 'put') {
    config.data = data;
  } else {
    config.params = data;
  }

  return axios(config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

