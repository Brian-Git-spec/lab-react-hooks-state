import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Milk", category: "Dairy" },
  { id: 3, name: "Banana", category: "Fruits" },
];

function ProductList({ category, addToCart }) {
  const filtered =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter(p => p.category === category);

  if (filtered.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {filtered.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
