import React, { useState } from 'react';
import styled from 'styled-components';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Carousel from './Components/RelatedItems/Carousel';
// import RelatedItems from './Components/RelatedItems/RelatedItems';
import ReviewList from './Components/Review/ReviewList';
// import api from './lib/api';
import Modal from './Components/Review/Modal';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Helvetica, sans-serif;
`;

const App = () => {
  const [productId, setProductId] = useState(20100);
  const [selectedStyle, setSelectedStyle] = useState(undefined);

  return (
    <StyledApp data-testid="appComponent">
      <ProductDetail
        productId={productId}
        setProductId={setProductId}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
      />
      <Carousel
        productId={productId}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
      />
      <ReviewList id={productId} />
      <Modal />
    </StyledApp>
  );
};

export default App;
