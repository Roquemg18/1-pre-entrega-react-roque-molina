import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from 'react-bootstrap/Nav';


function CartWidget (){
    return(
        <>
            <Nav.Link style={{fontSize:"25px"}} href="#pricing"><FontAwesomeIcon icon={faCartShopping} style={{fontSize:"28px"}} /> </Nav.Link>
            <Nav.Link style={{fontSize:"25px",backgroundColor:"grey",borderRadius:"50%"}}>1</Nav.Link>
        </>
    )
}
export default CartWidget