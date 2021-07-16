import React,{useState} from "react"
import NavBar from "../components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "../Config/firebase";


function RegistroPage(){
    const [form,setForm] = useState({name:'',surname:'', email:'', password:'' }) 

    const handleSubmit= async (event)=>{
        console.log("handleSubmit", form)
        event.preventDefault()
        try{
            const responseUser = await firebase.autentication.createUserWithEmailAndPassword(form.email,form.password)
            console.log("User",responseUser)
            const document = await firebase.db.collection("usuarios")
            .add({
                name: form.name,
                surname: form.surname,
                userId: responseUser.user.uid
            })
            console.log("document",document)
        }catch(e){
            console.log("Error",e)
            if(e.code=="auth/email-already-in-use"){
                alert('Ya hay una cuenta asociada a ese email')
            }
            else if(e.code=="auth/weak-password"){
                alert('la contraseña debe ser mayor a 6 caracteres')
            }

        }
        
    }

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange",name, value)
        setForm({...form,[name]: value})
    }
    return(
        <div>
            <NavBar/>
            <form onSubmit={handleSubmit} className="bg-warning">
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" name="surname" value={form.surname} onChange={handleChange}></input>
                </div>
                <div>
                    <label>E-mail</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange}></input>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default RegistroPage