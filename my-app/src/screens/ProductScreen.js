import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useParams, useNavigate} from 'react-router-dom'
import { Row,Col,Image,ListGroup, Button, Card, Form,  } from 'react-bootstrap'
import Rating from '../components/Rating'

import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'
import  axios  from 'axios'



function ProductScreen({ match, history }) {
    const[quantity, setQty] = useState(1)

    const dispatch = useDispatch()
    

    const productDetails = useSelector(state => state.productDetails)

    const[product, setProduct] = useState([])

    const { id } = useParams()
    let navigate = useNavigate();

  useEffect(() =>{

    async function fetchProduct(){
      const {data} = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }

    fetchProduct()
    

  }, [])

  const addToCartHandler = () =>{
    // console.log('Añadir al Carrito: ', product_id.id)
    navigate(`/carrito/${id}?quantity=${quantity}`)
  }


  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Regresar</Link>

        <div>
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
                                Estado: 
                                </Col>
                                <Col>
                                <strong>{product.countInStock > 0 ? 'Disponible' : 'Agotado'}</strong>
    
                                </Col>
                            </Row>
                        </ListGroup.Item>
    
    
                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col xs='auto' className='my-1'>
                                    Cantidad
                                    </Col>
                                    <Col>
                                    <Form.Control
                                    as="select"
                                    value={quantity}
                                    onChange={(e) => setQty(e.target.value)}>
                                        {
                                            [...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))
                                        }
    
                                    </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}
    
                        <ListGroup.Item>
                            
                            <Button 
                            onClick={addToCartHandler}
                            className='btn-block'
                            type='button' 
                            disabled={product.countInStock == 0}>Añadir al Carrito
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
    
            </Col>
            </Row>
        </div>

            


    </div>
  )
}

export default ProductScreen
