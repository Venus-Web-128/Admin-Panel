import axios from "axios";
import { useEffect, useState } from "react";

export const useIsLogin = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const loginToken = JSON.parse(localStorage.getItem("loginToken"));

        if (loginToken) {
            axios.get(".../api/auth/user", {
                headers: {
                    Authorization: `Bearer ${loginToken.token}`,
                },
            })
        .then((res) => {
                setIsLogin(res.status === 200);
                setLoading(false);
            })
        .catch(() => {
            localStorage.removeItem("loginToken");
            setIsLogin(false);
            setLoading(false);
        });
} else {
    setIsLogin(false);
setLoading(false);
    }
  }, []);

return { loading, isLogin };
};
