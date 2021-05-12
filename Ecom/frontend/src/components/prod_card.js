import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} alt='prod_img'/>
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {description.substring(0, 100)}...
        </Card.Text>
        <Button variant="primary">
        <Link to={`/product/${productId}`}>
          Details
        </Link>
        </Button>
    </Card.Body>
    </Card>
  );
};

export default Product;
