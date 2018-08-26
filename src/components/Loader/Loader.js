import React from 'react';
import styled from 'styled-components';
import GIF from '../../assets/Spinner.gif';

const Loader = () => (
  <LoaderWrappper>
    <Image src={GIF} alt="Loader" />
  </LoaderWrappper>
);

const LoaderWrappper = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 300px;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export default Loader;
