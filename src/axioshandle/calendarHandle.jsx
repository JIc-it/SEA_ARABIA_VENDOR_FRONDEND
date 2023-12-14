import axiosInstance from "./authHandle";

export const getServiceAvailablelist = (id) => {
    return axiosInstance
      .get(`service/servicesavailable/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error while fetching service available:", error);
        throw error;
      });
  };