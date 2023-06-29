import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            {/* IMAGEN DEL PRODUCTO */}
            <Card.Img src={product.image}>

            </Card.Img>
             
        </a>
{/* NOMBRE DEL PRODUCTO */}
        <Card.Body>
            <a href={'/product/${product._id}'}>
                <Card.Title as="div">
                     <strong>{product.name}</strong>
                </Card.Title>
            </a>
{/* PROMEDIO Y NUMERO DE RESENIAS */}
            <Card.Text as="div">
                <div className='my-3'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#FF4200'}/>
                </div>
                
            </Card.Text>
{/* PRECIO DEL PRODUCTO */}
            <Card.Text as="h3">
                C${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
