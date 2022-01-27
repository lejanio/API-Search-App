import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ClassComponent from '../ClassComponent';

type ProductCategoryType = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

const Main = () => {
  const [products, setProducts] = useState<ProductCategoryType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductCategoryType[]>([]);
  const [filterValue, setFilterValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios({
      method: 'get',
      baseURL: 'https://fakestoreapi.com',
      url: '/products/category/electronics',
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => { throw new Error(err); })
      .finally(() => setIsLoading(false));
  }, []);

  // jāpieliek timeout, lai sāk izpildīties pēc 1 sekundes

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newProducts = products.filter((product) => product.title.toLowerCase().includes(filterValue.toLowerCase()));

      setFilteredProducts(newProducts);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [filterValue]);

  return (
    <div className="">
      {/* <SearchBar */}
      {/*  getFilterValue={(value) => setFilterValue(value)} */}
      {/* /> */}
      <ClassComponent
        getFilterValue={(value) => {
          setFilterValue(value);
        }}
      />
      {isLoading && (<div>Loading...</div>)}
      {(filteredProducts.length === 0 && filterValue.length > 0)
        && (<div>The search returned no results. Please, try again</div>)}
      {(products.length > 0 || filteredProducts.length > 0)
        && ((filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <div>
              <img src={product.image} alt="" />
            </div>
            <p>{product.description}</p>
            <div>{product.price}</div>
          </div>
        )))}
    </div>
  );
};

export default Main;
