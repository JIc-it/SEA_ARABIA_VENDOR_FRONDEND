import { json } from "react-router-dom";
import axiosInstance from "./authHandle";
const subcategoryidURl = "main/subcategory-list"
const companylisting = "company/company-cms-list"

export const getsServicesavailableFilterList = (data) => {
  return axiosInstance
    .get(`service/availability-retrieve/${data?.date}/${data?.machineId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const subcategoryIdFilter = (id) => {
  return axiosInstance
    .get(`${subcategoryidURl}`, { params: { category: id } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching order request:", error);
      throw error;
    });
};


export const createAvailablityTime = (id) => {
  return axiosInstance
    .put(`service/service_availablitytime_update/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching request:", error);
      throw error;
    });
};


// export const createAvailablity = (data) => {
//   return axiosInstance
//     .patch( `service/update-availability/${data.service}/${data.date}/`, {
//       data,
//       params:{
//         update_type: 'time'  
//       }
//     })
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error while fetching request:", error);
//       throw error;
//     });
// };


export const createAvailablity = async (data) => {
  try {
    if (data) {
      const timeAsString = data.time.toString();
      const jsonData = JSON.stringify({
        time: timeAsString,
        // service: data.service,
        // update_type:'time'
        //   // date: data.date,
        // time: data.time
      })
      const response = await axiosInstance.patch(
        `service/update-availability/${data.service}/${data.date}/${data.update_type}/`,
        jsonData,
        {
          headers: { "Content-Type": "application/json", Accept: "*/*" }
          , params: {

            // update_type:'time',
            // time: data.time,
          }
        }
      );

      return response.data;
    }
  } catch (error) {
    console.error("Error while updating availability:", error);
    throw error;
  }
};


export const getCategoryist = () => {
  return axiosInstance
    .get("main/category-list")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getSubCategoryist = (id) => {
  return axiosInstance
    .get("main/subcategory-list", { params: { category: id } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getServiceFilterList = (data) => {
  return axiosInstance
    .get("service/service-filter-list-cms", { params: { search: data.search, category: data?.categoryid, sub_category: data?.subcategoryid } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getServiceReviewFilter = (rating) => {
  return axiosInstance
    .get(`service/service-review-list`, { params: { rating: rating } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getServiceReviewFilter2 = (id, rating) => {
  return axiosInstance
    .get(`service/service-review-list`, { params: { service_id: id, rating: rating } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getCompanyListing = () => {
  return axiosInstance
    .get(companylisting, { params: { is_onboard: true } })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getListDataInPagination = (url) => {
  return axiosInstance
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};