import axios from "axios";
import Swal from "sweetalert2";
import onlineApi from "../services/Config.json";

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    // گرفتن کد خطا
    const statusCode = error.response ? error.response.status : "خطای ناشناخته";

    Swal.fire({
      icon: "error",
      title: `کد خطا: ${statusCode}`, // کد خطا در عنوان
      text: error.response?.data?.message || "مشکلی رخ داده است", // متن خطا پایین
      confirmButtonText: "متوجه شدم",
    });

    return Promise.reject(error);
  }
);

const HttpServices = (url, method, data = null) => {
  const tokenInfo = JSON.parse(localStorage.getItem("loginToken"));

  return axios({
    url: onlineApi.onlineApi + url,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...(tokenInfo?.token && { Authorization: `Bearer ${tokenInfo.token}` }),
    },
  });
};

export default HttpServices;
