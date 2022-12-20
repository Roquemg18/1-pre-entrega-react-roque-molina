import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import productos from './../../data/data.json'


function Cards() {

return (
    <>
        {productos.map(function (producto){
            return(
    <Card style={{ width: "250px" } }>
        
        <Card.Img variant="top" src={producto.logo} />
        <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>{producto.categoria}
            </Card.Text>
            <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
    </Card>
 )
        })}
    </>
)
    }
    


export default Cards;
