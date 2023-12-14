import axiosInstance from "./authHandle";
const bookinglistIdURl="booking/bookings/"

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
    .get("booking/booking-count")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getbookingList = (id) => {
  return axiosInstance
    .get(`${bookinglistIdURl}`,{params:{vendor:id}})
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching Booking List:", error);
      throw error;
    });
};