import { Button, Container , Nav,NavLink,Navbar as NavbarBs } from "react-bootstrap"
import { FiShoppingCart } from "react-icons/fi";
import '../style/stype.css'

import { isAuthenticated } from "../helpers/auth";
import {deleteLocalStorage} from "../helpers/localStorage"
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux'

import { deleteCookie,getCookie } from "../helpers/cookies";
import { SlLogin } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";



const Navbar=()=>{
    const token = getCookie("token")
    const data = useSelector((state)=>state.Cart)
    console.log(data);
    
   
  const navigate = useNavigate()
  const handelLogout = ()=>{
    deleteCookie("token")
    deleteLocalStorage("user")
    navigate("/")
  }
    return(
        <div>
         
            {isAuthenticated() && isAuthenticated().role === "user" && (
            <NavbarBs  style={{backgroundColor:"rgba(141,39,40,0.2)" }}  >
                <Container >
                <Nav  >
              <img src="../../../public/image/Kitabi.png"  style={{ height:"60px",width:"60px" ,borderRadius:"50px"}}/>
              </Nav>
                    <Nav className="me-auto" style={{  width:"300px" , display:"flex", justifyContent:"space-between"}}>
                        <Link to="/useDash"   as={NavLink} style={{textDecoration:"none" , fontSize:"30px", color:"black"}} >accueil </Link>
                       
                        <Link to="/Search" as={NavLink}style={{textDecoration:"none" , fontSize:"30px" , color:"black"}} >Recherche </Link>
                    </Nav> 
                    <Button  
                   
                     style={{background:"rgba(41, 27, 48, 0.9)",border:"none",borderRadius:"10px"}}
                       onClick={()=>handelLogout()}>
                      
                     {token ? <FiLogOut /> :<SlLogin/>}
                        </Button>
                      <div className="icon_cart">
                    <Link  to="/Shopping"
                     style={{ width:"3rem" , height:"3rem" , position:"relative",}}>
                        <FiShoppingCart style={{width:"50px",height:"30px" , color:"black"}}/>  
                        </Link> 
                        <span>{data.cart.length}</span>
                        </div>
                </Container>
            </NavbarBs>
         
             )}
              {isAuthenticated() && isAuthenticated().role === "admin" && (
            <NavbarBs  style={{backgroundColor:"rgba(141,39,40,0.5)" }} >
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="home" as={NavLink}  style={{textDecoration:"none" , fontSize:"30px", color:"black"}}>Accueil</Nav.Link>
                        <Nav.Link to="/Order" as={NavLink}  style={{textDecoration:"none" , fontSize:"30px", color:"black"}}>Order </Nav.Link>
                        <Nav.Link to="/Stock" as={NavLink}  style={{textDecoration:"none" , fontSize:"30px", color:"black"}}>Stock</Nav.Link>
                    </Nav> 
                        <Button  className="rounded-circle"
                     variant="secondary" 
                     onClick={()=>handelLogout()}>{token ? <FiLogOut /> :<SlLogin />}</Button>
                    
                </Container>
            </NavbarBs>
             )}
        </div>
    )
}

export default Navbar