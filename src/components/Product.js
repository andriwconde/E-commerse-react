import React,{useState} from "react"
import {Link} from "react-router-dom"
import '../css/Product.css';
import {Card,Button} from 'react-bootstrap/'
import EcommerceContext from "../Context/EcommerceContext"


function Product(props){
    const {data}= props
    console.log(data)
    const {id,name,price,description} = data
    const verDetalle=(props.verDetalle!==false?true:false)
    const modificar=(props.modificar===true?true:false)
    const eliminar=(props.eliminar===true?true:false)
   
    function handleClick(Lg){
       if(lg){
           alert("Gracias Por Su Compra")
       }else{
        alert("Debe Iniciar Sesion Para Poder Comprar")
       }

    }

        return(
            <div>
              <EcommerceContext.Consumer>
              { contex =>
                <Card bg={'warning'} style={{ width: '18rem',
                                              margin: '1vh',
                                            }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body className="">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <div className="d-flex bd-highlight">

                        <div className="pad d-flex align-items-center">
                            <h5>
                            {price}$
                            </h5>
                        </div>

                        <div className="d-flex justify-content-end container-fluid">
                            <div className="d-flex flex-column pad ">
                                <div>
                                    {{userLogin}}
                                </div>
                                <Button onClick={handleClick({userLogin})} className="btn btn-info ">Comprar</Button>
                                {
                                verDetalle &&
                                <Link to={"/product/"+id}><Button className="btn btn-info mt-2">Ver Detalle</Button></Link>
                                }
                                {
                                modificar &&
                                <Button onClick={(e)=>props.clickModificar(data)} className="btn btn-info mt-2">Modificar</Button>
                                }
                                {
                                eliminar &&
                                <Button onClick={(e)=>props.clickEliminar(data)} className="btn btn-info mt-2">Eliminar</Button>
                                }

                            </div>
                        </div>
                    </div>
                </Card.Body>
                </Card>
                }
              </EcommerceContext.Consumer>
            </div>
        )
    }

export default Product

