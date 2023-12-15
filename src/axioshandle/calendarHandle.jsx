import axiosInstance from "./authHandle";

// export const getBookServiceAvailablelist = (id) => {
//     return axiosInstance
//       .get(`service/service-booking-availability/${id}`)
//       .then((response) => response.data)
//       .catch((error) => {

//         console.error("Error while fetching service available:", error);
//         throw error;
//       });
//   };

// export const getBookServiceFilter = ({ id, selectedDate }) => {
//   return axiosInstance
//     .get(`service/service-booking-availability/${id}`, {
//       params: {
//         date: selectedDate,
//       },
//     })
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error while fetching lead request:", error);
//       throw error;
//     });
// };

  export const getBookServiceFilter = (id,date) => {
    return axiosInstance
      .get(`service/service-booking-availability/${id}/${date}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error while fetching lead request:", error);
        throw error;
      });
  };