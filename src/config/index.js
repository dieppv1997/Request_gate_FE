const ENVIRONMENTS = {
  development: "development",
  production: "production",
};

const API_URL = {
  development: "https://dev-api-talents02.hblab.dev/api/v1",
  production: "https://api-talents02.hblab.dev/api/v1",
};

const currentENV = process.env.REACT_APP_ENV || ENVIRONMENTS.development;

export const API_BASE_URL = API_URL[currentENV];
