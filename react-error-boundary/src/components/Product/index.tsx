import { useEffect, useState } from 'react'

import axios from 'axios'

interface ProductProps {
  id: string
}

function Product({ id }: ProductProps) {
  const [product, setProduct] = useState<any>()

  useEffect(() => {
    ;(async function getProduct() {
      axios
        .get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((res) => setProduct(res.data))
    })()
  }, [id])

  return (
    <div>
      {product && (
        <>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>
            <img src={product.images[0]} style={{ width: 300 }} alt='' />
          </p>
        </>
      )}
    </div>
  )
}

export default Product
