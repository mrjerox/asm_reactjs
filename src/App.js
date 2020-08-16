import React, { useState, useEffect } from "react";
import Router_website from './router';
import axios from 'axios';

const App = () => {
  const [ products,setProducts ] = useState([]); 
  const [ categories,setCategories ] = useState([]); 
  const [ cartAdmin,setCartAdmin ] = useState([]); 

  useEffect(() => {
    const getCategories = async() => {
      try {
        const response = await axios.get('http://localhost:3001/categories');
        setCategories(response.data);
        localStorage.setItem('categories', JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    }
    getCategories();
    
    const getProducts = async() => {
      try {
        const response = await axios.get('http://localhost:3001/products?_sort=id&_order=desc');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();

    const getCartAdmin = async() => {
      try {
        const response = await axios.get('http://localhost:3001/cart?_sort=id&_order=desc');
        setCartAdmin(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCartAdmin();
  }, []);

  const onHandleRemove = (id) => {
    const newArr = products.filter(product => product.id != id);
    setProducts(newArr);
  }

  const onHandleRemoveCategory = (id) => {
    const newArr = categories.filter(cate => cate.id != id);
    setCategories(newArr);
  }
  return (
    <Router_website data={products} onRemove={onHandleRemove} categories={categories} onRemoveCategory={onHandleRemoveCategory} cartAdmin={cartAdmin}/>
  );
}

export default App