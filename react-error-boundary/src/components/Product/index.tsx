import { useEffect, useState } from 'react'

import axios from 'axios'
import useErrorBoundary from '../../hooks/useErrorBoundary'

interface ProductProps {
  id: string
}

function Product({ id }: ProductProps) {
  const [product, setProduct] = useState<any>()
  const throwError = useErrorBoundary()

  useEffect(() => {
    ;(async function getProduct() {
      axios
        .get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((error) => throwError(error))
    })()
  }, [id, throwError])

  return (
    <div>
      {product && (
        <>
          <p>{product?.title}</p>
          <p>{product?.price}</p>
          <p>{product?.description}</p>
          <p>
            <img src={product?.images[0]} style={{ width: 300 }} alt='' />
          </p>
        </>
      )}
    </div>
  )
}

export default Product
