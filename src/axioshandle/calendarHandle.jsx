import axiosInstance from "./authHandle";


  export const getBookServiceFilter = (id,date) => {
    return axiosInstance
      .get(`service/service-booking-availability/${id}/${date}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error while fetching lead request:", error);
        throw error;
      });
  };

