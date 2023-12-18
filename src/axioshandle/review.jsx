import axiosInstance from "./authHandle";
const subcategoryidURl="main/subcategory-list"


export const getCategoryist = () => {
  return axiosInstance
    .get("main/category-list")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getSubCategoryist = () => {
  return axiosInstance
    .get("main/subcategory-list")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const getServiceFilterList = (data) => {
  return axiosInstance
    .get("service/service-filter-list",{params:{search:data.search,category:data?.categoryid,subcategory:data?.subcategoryid}})
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getsServicesavailableFilterList = (data) => {
  return axiosInstance
    .get(`service/servicesavailable/${data?.date}/${data?.machineId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getServiceReviewFilter = (id) => {
  return axiosInstance
    .get(`service/service-review-list/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};

export const subcategoryIdFilter = (id) => {
  return axiosInstance
    .get(`${subcategoryidURl}`,{params:{category:id}})
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
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};