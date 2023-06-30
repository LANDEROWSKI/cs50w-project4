import React, {useState, useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'

import Product from '../components/Product'
import products from '../products'
import axios from 'axios'


function HomeScreen() {

  /* Declaramos una variable de estado llamada products e inicializarla con un arreglo vacío []. Además, 
  asigna una función setProducts que se utilizará para actualizar el valor de products.*/ 
  const[products, setProducts] = useState([])

  useEffect(() =>{

    async function fetchProducts(){
      const {data} = await axios.get('/api/products/')
      setProducts(data)
    }

    fetchProducts()
    

  }, [])
  return (
    <div>
      <h1>Ultimos productos agregados</h1>
        <Row>
            {products.map(product =>(

                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product = {product} />
                              
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen
