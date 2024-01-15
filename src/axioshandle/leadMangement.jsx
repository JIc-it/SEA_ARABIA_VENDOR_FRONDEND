import { jwtDecode } from "jwt-decode";
import axiosInstance from "./authHandle";
const bookingViewURL="booking/bookings"

export const getVendorList = () => {
  return axiosInstance
    .get("crm/vendorforms")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

// export const getTotalBook = () => {
//   return axiosInstance
//     .get("booking/booking-count")
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error while fetching lead request:", error);
//       throw error;
//     });
// };

export const getTotalBook = () => {
  const accessToken = localStorage.getItem("access_token");
  const decoded = jwtDecode(accessToken);

  return axiosInstance
    .get(`booking/vendor-booking-count`,{params:{id:decoded?.user_id}})
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching Booking List:", error);
      throw error;
    });
};


export const getbookingList = () => {
  const accessToken = localStorage.getItem("access_token");
  const decoded = jwtDecode(accessToken);
  return axiosInstance
    .get("booking/bookings/vendor/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching Booking List:", error);
      throw error;
    });
};

export const getBooking = (id) => {
  return axiosInstance
    .get(`${bookingViewURL}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

