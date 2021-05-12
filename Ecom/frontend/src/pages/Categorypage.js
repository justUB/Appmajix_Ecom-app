import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from '../components/prod_card';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { getProducts as listProducts } from "../actions/product_actions";

const Categorypage = () => {
    const dispatch = useDispatch();

    const getproducts = useSelector((state) => state.getProducts);
    const { products, loading, error} = getproducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return(
        <Container fluid>
        <Row>
            <Col>Filters</Col>
            
            
            {products ? (
                  products.map((product) => (
                      <Product
                        key={product._id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        category={product.category}
                        imageUrl={product.imageUrl}
                        productId={product._id}
                      />
                    ))
                  ) : (
                      <div>
                                     
                    <Col style={{display: 'flex', flexDirection: 'row'}}>
                    <Card style={{ width: '15rem' ,flex: 1}}>
                    <Card.Img variant="top" src="https://cdn2.penguin.com.au/covers/original/9780593073988.jpg" alt='prod_img'/>
                    <Card.Body>
                        <Card.Title>Peace of mind</Card.Title>
                        <Card.Text>
                        Book focusing on attaining relaxed state
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                    </Card>

                    
                    <Card style={{ width: '15rem' ,flex: 1}}>
                    <Card.Img variant="top" src="https://wayofleaf.com/wp-content/uploads/2017/11/diamond-cbd-full-spectrum-mct-oil-1500mg-30ml.jpg" alt='prod_img'/>
                    <Card.Body>
                        <Card.Title>Diamond CBD MCT Oil</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                    </Card>


                    
                    <Card style={{ width: '15rem' ,flex: 1}}>
                    <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/3V1HPzgLb2r-yaVyS5d6LM0ckAQ=/0x0:1229x821/1400x1400/filters:focal(536x451:732x647):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53138431/fidgetcube_1_verge.0.jpg" alt='prod_img'/>
                    <Card.Body>
                        <Card.Title>Fidget cube</Card.Title>
                        <Card.Text>
                        An unusually addicting, high-quality desk toy designed to help you focus. Fidget at work, in class, and at home in style.™      Fidget Cube™ has six sides. Each side features something to fidget with: Click. Glide. Flip. Breathe. Roll. Spin.™Got a Fidget Fever™? The only cure is Fidget Cube™.
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                    </Card>

                    
                    <Card style={{ width: '15rem',flex: 1}}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/03/de/aa/03deaaaccee6e0e32a8311f5a17d8310.jpg" alt='prod_img'/>
                    <Card.Body>
                        <Card.Title>BIORB Terrarium</Card.Title>
                        <Card.Text>
                        A fully-automated terrarium that mimics the ideal climate for growing tropical plants. Replicates the natural conditions of a tropical forest canopy.
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                    </Card>

                    
                    <Card style={{ width: '15rem' ,flex: 1}}>
                    <Card.Img variant="top" src="https://soulprajna.com/wp-content/uploads/2020/07/The-Miracle-Of-Mindfulness-The-Classic-Guide-to-Meditation.jpg" alt='prod_img'/>
                    <Card.Body>
                        <Card.Title>The Miracle of Mindfulness</Card.Title>
                        <Card.Text>
                        In The Miracle Of Mindfulness, master of Zen meditation and one of the world’s most respected Zen Buddhist monks, Thich Nhat Hanh offers practical advice on how to bring mindfulness into your daily life. He explains the benefits of mindfulness and that even your daily activities can be a form of meditation. He combines practical exercises with candid tales to help you find peace within.
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                    </Card></Col>
                    </div>
                  )
                }               
                
                
            
        </Row>
        </Container>
    );
};

export default Categorypage;