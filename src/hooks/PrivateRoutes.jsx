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

const PrivateRoutes = () => {
    const auth = useAuth()

    if(auth.isLoading == true) {
        return <h1>Loading.../</h1>
    }
    return auth.isLoggedin == true ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoutes