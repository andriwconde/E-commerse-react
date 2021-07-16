import {Link} from "react-router-dom"
import '../css/NavBar.css';
import EcommerceContext from "../Context/EcommerceContext"


function NavBar() {
    return (
      <div>
        <EcommerceContext.Consumer>
          { contex =>
        <nav className="navbar navbar-dark bg-dark pad-mar">
          <div className="container-fluid pad-mar">
            <ul className="d-flex m-0 pl-3">
                <li className="container-fluid pad-mar"><Link className="nav-btn" to="/">Inicio</Link></li>
               
                {
                  !contex.userLogin &&
                  <>
                  <li className="container-fluid pad-mar"><Link className="nav-btn" to="/Registro">Registro</Link></li>
                  <li className="container-fluid pad-mar"><Link className="nav-btn" to="/Login">Login</Link></li>
                  </>
                }
                
                {
                  contex.userLogin &&
                <>
                <li className="container-fluid pad-mar"><Link className="nav-btn" to="/catalogo">Catálogo</Link></li>
                </>
                }
                </ul>
          </div>
        </nav>
        }
        </EcommerceContext.Consumer>
      </div>
    );
  }
  
  export default NavBar;
  