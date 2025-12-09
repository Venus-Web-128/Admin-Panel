import { FastField, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import '../../Style/index.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthFormikControl from "../../components/authForm/AuthFormikControl"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


const initialValues = {
  phone: '',
  password: '',
  remember: false
};


const onSubmit = (values, navigate, submitMethods) => {
  axios.post("https://ecomadminapi.azhadev.ir/api/auth/login", {
    phone: values.phone,
    password: values.password,
    remember: values.remember ? 1 : 0
  }, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("loginToken", JSON.stringify(res.data));
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          text: "مشخصات وارد شده صحیح نمی‌باشد",
          confirmButtonText: "متوجه شدم",
        });
      }
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        text: "مشکلی از سمت سرور رخ داده",
        confirmButtonText: "متوجه شدم",
      });
    })
    .finally(() => {
      submitMethods.setSubmitting(false);
    });
};


const validationSchema = yup.object({
  phone: yup
    .string()
    .required("شماره همراه خود را وارد کنید")
    .matches(/^(?:\+98|0)?9\d{9}$/, "شماره باید معتبر و 11 رقم باشد"),
  password: yup
    .string()
    .required("رمز عبور خود را وارد کنید"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])[A-Za-z0-9!@#\$%\^&\*]{8,}$/,
  //   "رمز عبور باید حداقل ۸ کاراکتر انگلیسی شامل یک حرف بزرگ، یک حرف کوچک، عدد و کاراکتر خاص باشد"
  // )
  remember: yup.boolean(),
});

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, setSubmitting) => onSubmit(values, navigate, setSubmitting)}
      validationSchema={validationSchema}
      validateOnMount
    >
      {formik => (
        <div className="bg-linear-to-br from-gray-900 via-blue-900 to-black min-h-screen flex items-center justify-center">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-extrabold text-center text-blue-400 mb-8 focus:none tracking-wide">
              ورود به حساب کاربری
            </h2>

            <Form className="space-y-6">
              {/* شماره همراه */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-blue-200 mb-2"
                >
                  شماره همراه
                </label>
                <FastField
                  type="text"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  placeholder="*********09"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* رمز عبور */}
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-blue-200 mb-2"
                >
                  رمز عبور
                </label>
                <FastField
                  type={showPass ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="********"
                  className="w-full px-4 py-3 pr-10 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute left-2 top-10 text-gray-400 hover:text-blue-400 cursor-pointer"
                >
                  <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <AuthFormikControl
                control="Switch"
                type="checkbox"
                id="siwch"
                name="remember"
                label="مرا به خاطر بسپار"
              />


              {/* دکمه ورود */}
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full py-3 cursor-pointer rounded-lg bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-700"
              >
                {formik.isSubmitting ? (
                  <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  "ورود"
                )}
              </button>



            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login