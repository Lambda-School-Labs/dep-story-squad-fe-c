import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

// gets associated accounts for logged in user
const getAccounts = bearer => {
  return axios
    .get(`${apiUrl}/auth/login`, {
      headers: { Authorization: `Bearer ${bearer}` },
    })
    .then(res => {
      console.log(`${apiUrl}/auth/login`);
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

const getParentDash = (token, id) => {
  return axios
    .get(`${apiUrl}/parent/${id}/dashboard`, {
      // Will need to be changed to JWT taken from the parent login
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => {
      return res.data.childData;
    })
    .catch(err => {
      return err;
    });
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  getAccounts,
  getParentDash,
};
