import axiosInstance from "./authHandle";

export const loginRequest = (data) => {
    return axiosInstance
        .post("api/token/", data)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Error while login:", error);
            throw error;
        });
};

export const getProfileData = () => {
    return axiosInstance
      .get(`account/users-profile/`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error while fetching lead request:", error);
        throw error;
      });
  };