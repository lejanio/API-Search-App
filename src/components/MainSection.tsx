import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import spinner from '../assets/images/spinner.gif';
import {
  StyledMainSection,
  PaddedContainer,
  GridView,
  GridItemContainer,
  GridItemHeading,
  GridItemImageContainer,
  GridItemImage,
  GridItemDescription,
  GridItemPrice,
} from './styles/MainSection.styles';
import { Image } from './styles/Image.styles';
import { Flex } from './styles/Flex.styled';

type ProductType = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

const MainSection = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newProducts = products.filter((product) => product.title.toLowerCase().includes(filterValue.toLowerCase()));

      setFilteredProducts(newProducts);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [filterValue]);

  return (
    <StyledMainSection>
      <PaddedContainer padding="2em 0" bg="#F5E9E2">
        <Flex>
          <SearchBar
            getFilterValue={(value) => {
              setFilterValue(value);
            }}
          />
        </Flex>
      </PaddedContainer>

      {isLoading && (
      <Flex>
        <Image src={spinner} alt="Loading..." height="150px" />
      </Flex>
      )}
      <PaddedContainer>
        <Flex>
          {(filteredProducts.length === 0 && filterValue.length > 0)
            && (<div>The search returned no specific results. Please, try again</div>)}
        </Flex>
      </PaddedContainer>

      <GridView>
        {(filteredProducts.length > 0 ? filteredProducts : products).map((product) => (
          <GridItemContainer key={product.id}>
            <GridItemHeading>{product.title}</GridItemHeading>
            <GridItemImageContainer>
              <GridItemImage src={product.image} alt="product" />
            </GridItemImageContainer>
            <GridItemDescription>{product.description}</GridItemDescription>
            <GridItemPrice>
              Price: EUR
              {' '}
              {product.price}
            </GridItemPrice>
          </GridItemContainer>
        ))}
      </GridView>
    </StyledMainSection>
  );
};

export default MainSection;
