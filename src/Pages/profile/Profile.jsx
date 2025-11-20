import {  useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const url = import.meta.env.VITE_API_URL;

export default function Profile() {
  const { id } = useParams(); 
  const { user, toast, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    


  // Nếu params.id không tồn tại, dùng user.id
  const profileId = id || user?.maKH;

  useEffect(() => {
  if (!profileId) {
    setError("Không có user hợp lệ để hiển thị profile");
    setLoading(false);
    return;
  }
  setLoading(false)


}, [profileId]);


  if (loading) return <p>Đang tải...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
<>

pro</>
  );
}
