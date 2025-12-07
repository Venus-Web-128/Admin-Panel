import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Logout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem("loginToken");
        if (stored) {
            const loginToken = JSON.parse(stored); // کل آبجکت
            axios.get("https://ecomadminapi.azhadev.ir/api/auth/logout", {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${loginToken.token}` // فقط فیلد token
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        localStorage.removeItem("loginToken"); // پاک کردن کل آبجکت
                        setLoading(false);
                    }
                })
                .catch(() => {
                    localStorage.removeItem("loginToken"); // حتی اگر خطا داد، پاک کن
                    setLoading(false);
                    Swal.fire({
                        icon: "error",
                        text: "مشکلی از سمت سرور رخ داده",
                        confirmButtonText: "متوجه شدم"
                    });
                });
        }
    }, []);

    return (
        <div>
            {loading ? (
                <h2 className="text-2xl text-black text-center">صبر کنید...</h2>
            ) : (
                <Navigate to="/auth/login" />
            )}
        </div>
    );
};

export default Logout;
