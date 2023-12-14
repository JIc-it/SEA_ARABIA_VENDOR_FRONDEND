import axios from "axios";

const API_BASE_URL = "https://seaarabia.jicitsolution.com/";

const REFRESH_URL = "api/token/refresh/";
const VERIFY_URL = "api/token/verify/";
const GENERATE_URL = "api/token/";
const LOGOUT_URL = "api/token/blacklist/";
const getOTPFromEmailUrl = "account/request-otp/";
const verifyOTPUrl = "/account/verify-otp/";
const resetPasswordUrl = "/account/reset-passwordnew/";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    redirectToLogin();
  }

  try {
    const response = await axios.post(REFRESH_URL, { refresh: refreshToken });

    if (response.data && response.data.access) {
      const newAccessToken = response.data.access;
      return newAccessToken;
    }
  } catch (error) {
    console.error("Error refreshing access token:", error);
    redirectToLogin();
  }
};

export const verifyAccessToken = async () => {
  try {
    const response = await axiosInstance.post(VERIFY_URL);
    return response.status === 200;
  } catch (error) {
    console.error("Error verifying access token:", error);
    return false;
  }
};

const redirectToLogin = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.location.replace("/login");
};

let isRefreshing = false;

axiosInstance.interceptors.request.use(async (config) => {
  if (config.url !== GENERATE_URL && localStorage.getItem("access_token")) {
    const accessToken = localStorage.getItem("access_token");
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
}, undefined);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // skip if login
      if (error.config.url && !error.config.url.endsWith(GENERATE_URL)) {
        const isTokenVerifyRequest =
          error.config.url && error.config.url.endsWith(VERIFY_URL);

        if (!isTokenVerifyRequest) {
          const isAccessTokenValid = await verifyAccessToken();

          if (!isAccessTokenValid) {
            const newAccessToken = await refreshAccessToken();

            if (newAccessToken) {
              localStorage.setItem("access_token", newAccessToken);
              error.config.headers[
                "Authorization"
              ] = `Bearer ${newAccessToken}`;
              return axiosInstance(error.config);
            }
          }
        }
      }
    }
    return Promise.reject(error);
  }
);

export const loginRequest = (data) => {
  return axiosInstance
    .post(GENERATE_URL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while login:", error);
      throw error;
    });
};

export const logoutRequest = (data) => {
  let refreshToken = localStorage.getItem("refresh_token");
  return axiosInstance
    .post(LOGOUT_URL, { refresh: refreshToken })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while logout:", error);
      throw error;
    });
};

export const getOTPFromEmail = (email) => {
  return axiosInstance
    .post(getOTPFromEmailUrl, { email: email })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while OTP from Email:", error);
      throw error;
    });
};

export const verifyOTP = (data) => {
  return axiosInstance
    .post(verifyOTPUrl, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while Verify OTP:", error);
      throw error;
    });
};

export const loginResetPassword = (data) => {
  return axiosInstance
    .post(resetPasswordUrl, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while Reset Password:", error);
      throw error;
    });
};

export default axiosInstance;
