export const categoryAll = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  return res.json();
};

export const productAll = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};
