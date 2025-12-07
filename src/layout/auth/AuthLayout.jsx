import { Routes, Route, Navigate } from "react-router-dom";
import { useIsLogin } from "../../hooks/authHook";
import Login from "../../pages/auth/Login";

const AuthLayout = () => {
  const { loading, isLogin } = useIsLogin();

  return (
    <div className="limiter">
      <div className="container-login100">
        {loading ? (
          <h1 className="text-center waiting_center">لطفا صبر کنید...</h1>
        ) : !isLogin ? (
          <div className="container-login100">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/auth/login" element={<Login />} />
            </Routes>
          </div>
        ) : (
          <Navigate to="/" />
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
