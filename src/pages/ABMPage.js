import React from "react"
import NavBar from '../components/NavBar';
import {useState, useEffect} from "react";
import firebase from "../Config/firebase";
import Product from '../components/Product'
import Spinner from 'react-bootstrap/Spinner'



function ABMPage(){

    const [loading,setLoading] = useState(true)
    const [productForm,setProductForm] = useState({name:'',price:'', description:''})
    const [products,setProducts] = useState([])
    const [reload,setReload] = useState(false)

    const handleSubmit = async (event)=>{
        event.preventDefault()
        try{
            let document = null
            if(productForm.id===null){
                document = await firebase.db.collection("products")
                .add(productForm)
            }else{
                document = await firebase.db.doc("products/"+ productForm.id)
                .set(productForm)
            }

            setReload(true)
            console.log("Document",document)
        }catch(e){
            console.log("Error",e)
        }
    }

    const getProducts = async ()=>{
        try{
            setLoading(true);
            const querySnapshot = await firebase.db.collection("products")
            .get()
            setProducts(querySnapshot.docs)
            setLoading(false)
            setReload(false)
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
    useEffect(
        ()=>{
            if(reload)
            getProducts()    

        },
        [reload]
    )

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange",name, value)
        setProductForm({...productForm,[name]: value})
    }

    const handleClickModificar = (product)=>{
        setProductForm(product)
        console.log(product)
    }

    const handleClickEliminar = async (product)=>{
        try{
            setLoading(true);
           const document = await firebase.db.doc("products/" + product.id)
           .delete()
           setReload(true)
           setLoading(false);

        }catch(e){
            console.log("Error",e)
        }
    }
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
        <div>
            <NavBar/>
            <div className="d-flex">
                {products.map(product => <Product data={{...product.data(),id:product.id}} modificar={true} clickModificar={handleClickModificar} eliminar={true} clickEliminar={handleClickEliminar}/>)}
            </div>
            <h5>Alta de Producto</h5>  
            <form onSubmit={handleSubmit}>
                <div className="d-flex mt-1">
                    <label>Nombre</label>
                    <input type="text" name="name" value={productForm.name} onChange={handleChange}></input>
                </div>
                <div className="d-flex mt-1">
                    <label>Precio</label>
                        <input type="number" name="price" value={productForm.price} onChange={handleChange}></input><h5>$</h5>
                </div>
                <div className="d-flex mt-1">
                    <label>Descripcion</label>
                    <input type="text" name="description" value={productForm.description} onChange={handleChange}></input>
                </div>
                <input type="submit" value="Guardar"></input>
            </form>
        </div>
      );
  }
    }  



export default ABMPage