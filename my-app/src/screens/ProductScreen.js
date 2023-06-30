import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { Row,Col,Image,ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen({ match }) {
    const product_id = useParams()
    const product = products.find((p) => p._id === product_id.id);
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Regresar</Link>
      <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} style={{width:'400px', height:'450px', margin: '0 auto', display:'block', objectFit: 'cover'}}/>
        </Col>

        <Col md={3}>
            <ListGroup variant='flush'>
                {/* VISUALIZAR IMAGEN DEL PRODUCTO */}
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                {/* VISUALIZAR LOS RATING */}
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} resenias`} color={'#FF4200'} />
                </ListGroup.Item>
                {/* VISUALIZAR EL PRECIO DEL PRODUCTO */}

                <ListGroup.Item>
                    Precio: C${product.price}
                </ListGroup.Item>
                {/* VISUALIZAR DESCIPCION DEL ARTICULO */}

                <ListGroup.Item>
                    Descripción: {product.description}
                </ListGroup.Item>
            </ListGroup>
        
        </Col>

        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Precio
                            </Col>
                            <Col>
                            <strong>C${product.price}</strong>

                            </Col>
                        </Row>
                    </ListGroup.Item>

                    {/* ESTADO DEL PRODUCTO DISPONIBLE O AGOTADO */}

                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Estado
                            </Col>
                            <Col>
                            <strong>{product.countInStock > 0 ? 'Disponible' : 'Agotado'}</strong>

                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Button className='btn-block'type='button' disabled={product.countInStock == 0}>Añadir al Carrito</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>

        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
