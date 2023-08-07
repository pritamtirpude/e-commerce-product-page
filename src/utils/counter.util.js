export const quantityCount = (cartItems) => {
  const quantityObj = cartItems?.map((item) => item.quantity);
  const count = quantityObj?.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );

  return count;
};
