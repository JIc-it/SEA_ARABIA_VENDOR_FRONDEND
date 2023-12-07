import axios from "axios";


const REFRESH_URL = "api/token/refresh/";
const VERIFY_URL = "api/token/verify/";
const GENERATE_URL = "api/token/";
const LOGOUT_URL = "api/token/blacklist/";
const FORGOTPASSWORD_URL = 'account/request-otp/'
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

export const forgotPassword = (data) => {
  return axiosInstance
    .post(FORGOTPASSWORD_URL, data)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while forgot Password:", error);
      throw error;
    });
};

// if (localStorage.getItem("refresh_token")) {
//   const refreshAccessToken = async () => {
//     const refreshToken = localStorage.getItem("refresh_token");
//     const response = await axiosInstance.post("/api/token/refresh/", {
//       refresh: refreshToken,
//     });
//     if (response.data && response.data.access) {
//       const newAccessToken = response.data.access;
//       localStorage.setItem("access_token", newAccessToken);
//       isRefreshing = false;
//       return newAccessToken;
//     }
//   };

//   axiosInstance.interceptors.request.use(async (config) => {
//     if (
//       config.url !== "/account/token/" &&
//       localStorage.getItem("access_token")
//     ) {
//       const accessToken = localStorage.getItem("access_token");
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return config;
//   }, undefined);

//   axiosInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       if (error.response && error.response.status === 401) {
//         if (!isRefreshing) {
//           isRefreshing = true;
//           const accessToken = await refreshAccessToken();

//           if (accessToken) {
//             localStorage.setItem("access_token", accessToken);
//             error.config.headers["Authorization"] = `Bearer ${accessToken}`;
//             return axiosInstance(error.config);
//           }
//         }
//       }
//       return Promise.reject(error);
//     }
//   );
// }

export default axiosInstance;
