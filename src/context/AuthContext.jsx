import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export const AuthContext  = createContext()


const url  = import.meta.env.VITE_API_URL
export const AuthProvider = ({children}) => {
    const navigate = useNavigate()

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
            setTimeout(() => {
                navigate('/')
            }, 300);
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
        <AuthContext.Provider value={{register, toast,login}}> 
            <ToastContainer />
            {children}
        </AuthContext.Provider>
    )
}