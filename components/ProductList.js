import ProductItem from './ProductItem'
import productStyles from '../styles/Product.module.css'

const ProductList = ({ products }) => {
  return (
    <div className={productStyles.grid}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
