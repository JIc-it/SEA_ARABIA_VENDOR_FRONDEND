import { jwtDecode } from "jwt-decode";
import axiosInstance from "./authHandle";
// const bookinglistIdURl="booking/vendor-booking-count"

export const getVendorList = () => {
  return axiosInstance
    .get("crm/vendorforms")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getTotalBook = () => {
  return axiosInstance
    .get("booking/vendor/count")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};



export const getbookingList = () => {
  const accessToken = localStorage.getItem("access_token");
  const decoded = jwtDecode(accessToken);
  console.log(decoded)
  return axiosInstance
    // .get(`${bookinglistIdURl}`,{params:{vendor:decoded?.user_id}})
    .get("booking/bookings/vendor/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching Booking List:", error);
      throw error;
    });
};


export const createAvailablity = (data) => {
  return axiosInstance
      .post("service/availability-create/", data)
      .then((response) => response.data)
      .catch((error) => {
          console.error("Error while login:", error);
          throw error;
      });
};