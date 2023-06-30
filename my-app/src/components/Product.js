import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
            {/* IMAGEN DEL PRODUCTO */}
            <Card.Img src={product.image} style={{objectFit: 'cover', width: '250px', height: '260px', margin: '0 auto', display:'block'}}>

            </Card.Img>
             
        </Link>
{/* NOMBRE DEL PRODUCTO */}
        <Card.Body style={{ textAlign: 'center' }}>
            <Link href={'/product/${product._id}'}>
                <Card.Title as="div">
                     <strong>{product.name}</strong>
                </Card.Title>
            </Link>
{/* PROMEDIO Y NUMERO DE RESENIAS */}
            <Card.Text as="div" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='my-3'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#FF4200'}/>
                </div>
                
            </Card.Text>
{/* PRECIO DEL PRODUCTO */}
            <Card.Text as="h3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                C${product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
