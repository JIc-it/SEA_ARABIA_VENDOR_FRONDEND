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
