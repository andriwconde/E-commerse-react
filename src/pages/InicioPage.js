import NavBar from '../components/NavBar';
import Product from '../components/Product'
import React,{ useEffect,useState } from "react";
import firebase from "../Config/firebase";
import Spinner from 'react-bootstrap/Spinner'


function InicioPage(){

    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])
    // console.log("Database",firebase.db)

    const getProducts = async ()=>{
        try{
            setLoading(true);
            const querySnapshot = await firebase.db.collection("products")
            .get()
            setProducts(querySnapshot.docs)
            setLoading(false)
        }catch(e){
            console.log("error",e)
        }
    }

    useEffect(
        ()=>{
            getProducts()
 
        },
        []
    )
    if(loading){
        return(
            <div>
                <NavBar/>
               <Spinner animation="border" role="status">
                </Spinner>
            </div>
        )
    }else{
      return (
        <div >
          <NavBar/>
            <div className="d-flex">
                {products.map(product=><Product data={{...product.data(),id:product.id}}/>)}
            </div>
        </div>
      );
  }
    }  



export default InicioPage