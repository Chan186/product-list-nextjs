import ProductList from '../components/ProductList';
import Timestamp from '../components/Timestamp';
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function AnotherPage({ products }) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div>
      <ProductList products={products} />
      {isClient && <Timestamp />}
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  const allPosts = res.data;

  const getRandomPosts = (posts, numPosts) => {
    const shuffled = posts.sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, numPosts); 
  };

  const randomPosts = getRandomPosts(allPosts, 2);

  return {
    props: {
      products: randomPosts, 
    },
  };
};