import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import Timestamp from '../components/Timestamp';
import axios from 'axios';

export default function ClientSideFetching() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        const allPosts = res.data;
        
        const getRandomPosts = (posts, numPosts) => {
        const shuffled = posts.sort(() => 0.5 - Math.random()); // Shuffle array
        return shuffled.slice(0, numPosts); 
        };
  
        const randomPosts = getRandomPosts(allPosts, 2);
        setProducts(randomPosts)
    };
    fetchProducts();
  }, []);

  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const currentTimestamp = new Date().toISOString();
  return (
    <>
      <ProductList products={products} />
      {isClient && <Timestamp currentTimestamp={currentTimestamp} />}
    </>
  )
}
