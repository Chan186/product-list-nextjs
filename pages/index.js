
import ProductList from '../components/ProductList'
import Timestamp from '../components/Timestamp';
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Home({ products , currentTimestamp}) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <ProductList products={products} />
      {isClient && <Timestamp currentTimestamp={currentTimestamp} />}
    </>
  )
}


export const getStaticProps = async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    const allPosts = res.data;

    const getRandomPosts = (posts, numPosts) => {
      const shuffled = posts.sort(() => 0.5 - Math.random()); // Shuffle array
      return shuffled.slice(0, numPosts); 
    };

    const randomPosts = getRandomPosts(allPosts, 2);
    const currentTimestamp = new Date().toISOString();

    return {
      props: {
        products: randomPosts,
        currentTimestamp, 
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
        currentTimestamp: new Date(),
      },
    };
  }
};
