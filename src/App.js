import './css/App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import InicioPage from "./pages/InicioPage"
import RegistroPage from "./pages/RegistroPage"
import LoginPage from "./pages/LoginPage"
import DetailProduct from "./pages/DetailProductPage"
import ABMPage from "./pages/ABMPage"
import GlobalState from "./Context/GlobalState"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Route path="/" exact component={InicioPage}/>
        <Route path="/Registro" exact component={RegistroPage}/>
        <Route path="/Login" exact component={LoginPage}/>
        <Route path="/product/:id" exact component={DetailProduct}/>
        <Route path="/catalogo" exact component={ABMPage}/>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
