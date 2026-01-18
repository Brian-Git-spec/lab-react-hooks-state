import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className={`${styles.card}`}>
      <h3>{product.name}</h3>

      <button
        data-testid={'product-' + product.id}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
