import HttpServices from "./HttpServies";

// سرویس لاگین
export const loginService = (values) => {
  console.log("Sending login values:", values); // بررسی قبل از ارسال
  return HttpServices("auth/login", "post", {
    phone: values.phone,      // مطمئن شو اسم درست باشه
    password: values.password,
    remember: values.remember ? 1 : 0,
  });
};


// سرویس لاگ‌اوت
export const logoutService = () => {
  return HttpServices("auth/logout", "get"); 
};

// سرویس گرفتن اطلاعات کاربر
export const getUserService = () => {
  return HttpServices("auth/user", "get");
};



