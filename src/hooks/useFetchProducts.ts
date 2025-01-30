import { useState, useEffect } from 'react';
import axios from 'axios';

// Define the product type based on your API response
interface Product  {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

const useFetchProducts = () => {
    const [products, setProducts] = useState<Product[]>([]); // State for products
    const [error, setError] = useState(''); // Error state
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/store/products/');
          setProducts(response.data); // Set products to state
        } catch (error: any) {
          // Ensure we get the error message even if it's not an instance of Error
          setError(error?.message || 'Something went wrong');
        }
      };
  
      fetchProducts(); // Call the fetch function
    }, []); // Empty dependency array, so it runs only once on mount
  
    return { products, error }; // Return state values
  };
  
  export default useFetchProducts;
