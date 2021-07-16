import React, {useContext,useState} from "react"
import NavBar from "../components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../Config/firebase";
import EcommerceContext from "../Context/EcommerceContext"

function LoginPage(){
    const context = useContext(EcommerceContext)
    const [form,setForm] = useState({email:'', password:'' }) 
    const [loading,setLoading] = useState(false)
    const HandleSubmit= async (event)=>{
        console.log("HandleSubmit", form)
        setLoading(true)
        event.preventDefault()
        try{
            const responseUser = await firebase.autentication.signInWithEmailAndPassword(form.email,form.password)
            console.log("user",responseUser)
            setLoading(false)
            context.loginUser(true)
            alert("Bienvenido/a")
        }catch(e){
            console.log(e)
            setLoading(false)
                if(e.code=="auth/wrong-password"){
                    alert("Contraseña incorrecta")
                }
                else if(e.code=="auth/too-many-requests"){
                    alert("Contraseña incorrecta tu cuenta ha sido temporalmente desabilitada por superar el limite de intentos en un lapso de tiempo determinado.")
                }
            
            

        }
    }
    const handleChange = (event)=>{
        const value = event.target.value
        const name = event.target.name
        console.log("handleChange",name, value)
        setForm({...form,[name]: value})
    }
    return(
        <div>
            <NavBar/>
            <form onSubmit={HandleSubmit} className="bg-warning">
                <div>
                    <label>E-mail</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange}></input>
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}
export default LoginPage