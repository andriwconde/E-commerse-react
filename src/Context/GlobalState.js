import React,{useState} from "react"
import EcommerceContext from "./EcommerceContext"

function GlobalState({children}){
    const [userLogin,setUserLogin] = useState(false);
    const loginUser=()=>{
        setUserLogin(true)
    }
    const logoutUser = ()=>{
        setUserLogin(false)
        prueba();
    }
    const prueba = ()=>{

    }
    return(
        <EcommerceContext.Provider
        value={{
            userLogin,
            loginUser,
            logoutUser
        }}
        >
            {children}
        </EcommerceContext.Provider>
    )
    }
export default GlobalState