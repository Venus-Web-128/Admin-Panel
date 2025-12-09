import axios from "axios";
import onlineApi from "../services/Config.json";

const HttpServices = (url, method, data = null) => {
  const tokenInfo = JSON.parse(localStorage.getItem("loginToken"));

  return axios({
    url: onlineApi.onlineApi + url, // آدرس درست از Config.json
    method,
    data, // اضافه کردن بدنه‌ی درخواست
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...(tokenInfo && { Authorization: `Bearer ${tokenInfo.token}` })
    }
  });
};

export default HttpServices;
