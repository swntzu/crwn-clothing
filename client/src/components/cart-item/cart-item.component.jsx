import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  CartItemText,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <CartItemText>{name}</CartItemText>
      <CartItemText>
        {quantity} x ${price}
      </CartItemText>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
