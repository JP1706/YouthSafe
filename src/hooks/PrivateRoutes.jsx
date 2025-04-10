import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const useAuth = () => {
    const [authState, setauthState] = useState({isLoggedin : false, role : ""})
    const [isLoading, setisLoading] = useState(true)

    useEffect( ()=> {
        const id = localStorage.getItem("id")
        const role = localStorage.getItem("role")

        if(id) {
            setauthState({isLoggedin : true, role : role})
        }
        setisLoading(false)
    }, [])
    return {...authState, isLoading}
}

const PrivateRoutes = ({ role }) => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!auth.isLoggedin) {
    return <Navigate to="/login" />;
  }

  // Role-based protection
  if (role && auth.role !== role) {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes