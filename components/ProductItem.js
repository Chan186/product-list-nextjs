import Link from 'next/link'
import productStyles from '../styles/Product.module.css'

const ProductItem = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className={productStyles.card}>
    <h3>{product.title} &rarr;</h3>
    <p>{product.description}</p>
    </Link>
  
  )
}

export default ProductItem
