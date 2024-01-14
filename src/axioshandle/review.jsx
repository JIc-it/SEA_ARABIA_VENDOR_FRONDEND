import axiosInstance from "./authHandle";
const subcategoryidURl="main/subcategory-list"

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

export const createAvailablity = (data) => {
  return axiosInstance
      .post("service/availability-create/", data)
      .then((response) => response.data)
      .catch((error) => {
          console.error("Error while login:", error);
          throw error;
      });
};

// New Api collection 

// export const getCompanyList = () => {
//   return axiosInstance
//     .get("company/companycms-list")
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error while fetching lead request:", error);
//       throw error;
//     });
// };
// export const getCategoryist = () => {
//   return axiosInstance
//     .get("main/category-list")
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error while fetching lead request:", error);
//       throw error;
//     });
// };
// export const getSubCategoryist = (id) => {
//   return axiosInstance
//     .get("main/subcategory-list",{params:{category:id}})
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error while fetching lead request:", error);
//       throw error;
//     });
// };
// export const getServiceFilterList = (data) => {
//   return axiosInstance
//     .get("service/service-filter-list-cms",{params:{search:data.search,category:data?.categoryid,sub_category:data?.subcategoryid}})
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error while fetching lead request:", error);
//       throw error;
//     });
// };
// export const getServiceReviewFilter = (id,rating) => {
//   return axiosInstance
//     .get(`service/service-review-list/${id}`,{params:{rating:rating}})
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error while fetching lead request:", error);
//       throw error;
//     });
// };


// import axiosInstance from "./authHandle";

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
    .get("main/subcategory-list",{params:{category:id}})
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getServiceFilterList = (data) => {
  return axiosInstance
    .get("service/service-filter-list-cms",{params:{search:data.search,category:data?.categoryid,sub_category:data?.subcategoryid}})
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getServiceReviewFilter = (rating) => {
  return axiosInstance
    .get(`service/service-review-list`,{params:{rating:rating}})
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
export const getServiceReviewFilter2 = (id,rating) => {
  return axiosInstance
    .get(`service/service-review-list`,{params:{service_id:id,rating:rating}})
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error while fetching lead request:", error);
      throw error;
    });
};
