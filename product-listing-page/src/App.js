import React from 'react';
import styled from 'styled-components';
import ProductListingPage from './components/ProductListingPage';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  return (
    <PageWrapper>
      <ProductListingPage />
    </PageWrapper>
  );
};

export default App;
