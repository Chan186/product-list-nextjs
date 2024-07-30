
import Link from 'next/link'
import axios from 'axios';


const product = ({ product }) => {
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${context.params.id}`);
  const product = res.data;

  return {
    props: {
      product,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  const products = res.data;

  const ids = products.map((product) => product.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default product
