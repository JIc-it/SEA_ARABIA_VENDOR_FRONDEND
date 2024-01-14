import axiosInstance from "./authHandle";


  export const getBookServiceFilter = (id,date) => {
    return axiosInstance
      .get(`service/service-booking-availability/${date}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error while fetching lead request:", error);
        throw error;
      });
  };

