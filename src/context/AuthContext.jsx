import { createContext, useState, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export const AuthContext = createContext()


const url = import.meta.env.VITE_API_URL
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const checkCustomer = () => {
            const customerData = localStorage.getItem("customer");
            const now = Date.now();
            const exp = 1000 * 60 * 60 * 2; // 2 giờ

            if (customerData) {
                const parsed = JSON.parse(customerData);

                if (now - parsed.time < exp) {
                    setUser(parsed.user);
                } else {
                    localStorage.removeItem("customer"); // sửa key
                    navigate("/login", { replace: true });
                }
            } else {
                navigate("/login", { replace: true });
            }

            setLoading(false);
        };

        checkCustomer();
    }, [navigate]);

    const register = async (fullname, email, password) => {
        console.log(`fullname là : ${fullname}`);

        try {
            const res = await fetch(`${url}/customers/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Có lỗi xảy ra trong quá trình đăng ký");
                return;
            }

            if (data.success) {
                toast.success(data.message);
                return;
            }

            toast.error(data.message || "Có lỗi xảy ra");
        }
        catch (e) {
            console.log(e.message);
            toast.error("Không thể kết nối server");
        }
    };

    //login
    const login = async (email, password) => {


        try {
            const res = await fetch(`${url}/customers/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Có lỗi xảy ra trong quá trình đăng ký");
                return;
            }

            if (data.success) {
                toast.success(data.message);

                setUser(data.data);

                localStorage.setItem(
                    "customer",
                    JSON.stringify({
                        user: data.customer,
                        time: Date.now(),
                    })
                );

                navigate("/");
                return;
            }


            toast.error(data.message || "Có lỗi xảy ra");
        }
        catch (e) {
            console.log(e.message);
            toast.error("Không thể kết nối server");
        }
    };

    return (
        <AuthContext.Provider value={{ register, toast, login, loading, user }}>
            <ToastContainer />
            {children}
        </AuthContext.Provider>
    )
}