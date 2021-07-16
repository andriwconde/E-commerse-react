import React,{ useEffect,useState } from "react";
import Product from "../components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../components/NavBar';
import firebase from "../Config/firebase";


function DetailProduct(props){
    const id = props.match.params.id
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    //componentDidMount
    useEffect(
        ()=>{
            async function request(){
                try{
                    console.log('hola')
                    const document = await firebase.db.doc("products/"+id)
                    .get()
                    setLoading(false);
                    setProduct(document.data());
                }catch(e){
                    console.log("Error",e)
                }
            }
            request();
            
            
            
            
            // getById(id)
            // .then(response=>{
            //     console.log("data",response)
            //     setLoading(false);
            //     setProduct(response.data[0])
            // })
        },
         []
    )
    if(loading){
        return(
            <div>
                Loading...
            </div>
        )
    }else{
        return(
            <div>
                <NavBar/>
                <Product data={product} verDetalle={false}></Product>
                
            </div>
        )

    }
}
export default DetailProduct;