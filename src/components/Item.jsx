import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({product})=>( 
    <Card key= {product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.Foto} />
        <Card.Body>
          <Card.Title>{product.Nombre}</Card.Title>
          <Card.Text>
           {product.Categoria}
          </Card.Text>
          <Card.Text>
           {product.Stock}
          </Card.Text>
          <Card.Text>
           ${product.Precio}
          </Card.Text>
          <Link to={`/item/${product.id} `}>
            

          <Button variant="primary">Detalles</Button>
          </Link>
        </Card.Body>
      </Card>
)    
    
