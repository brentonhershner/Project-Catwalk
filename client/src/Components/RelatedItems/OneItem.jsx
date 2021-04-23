import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from './Stars';

const ListItem = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: lightgrey;
  border: black solid 0.1em;
  flex: 0 0 225px;
  height: 340px;
  margin: 5px;
`;

const Image = styled.img`
  height: 225px;
  width: 225px;
  border: 0px;
  vertical-align: middle;
`;

const Name = styled.div`
  font-size: 15px;
  max-height: 45px;
  overflow: hidden;
`;

const Price = styled.div`
  font-size: small;
`;

const OneItem = ({ item }) => (
  <ListItem role="listitem">
    <Image src={item.image} alt="carousel-item" />
    <div className="carousel-item-body">
      <div className="item-body-category">
        {item.category}
      </div>
      <Name>{item.product_name}</Name>
      <Price>{`Today: $${item.price}`}</Price>
      <Stars stars={item.stars} />
    </div>
    {/* <Modal description={description} /> */}
  </ListItem>
);

OneItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    product_name: PropTypes.string,
    price: PropTypes.number,
    stars: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default OneItem;
