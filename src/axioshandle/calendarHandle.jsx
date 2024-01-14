import axiosInstance from "./authHandle";


  export const getBookServiceFilter = (id,date) => {
    const [year,month,day] = date.split('-');

  // Create the reversed date string
  const reversedDate = `${day}-${month}-${year}`;

    return axiosInstance
      .get(`service/availability-retrieve/${reversedDate}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error while fetching lead request:", error);
        throw error;
      });
  };

