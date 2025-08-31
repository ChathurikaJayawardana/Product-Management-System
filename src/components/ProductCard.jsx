const ProductCard = ({ product, onClick }) => (
  <div className="card h-100" onClick={() => onClick(product)} style={{ cursor: 'pointer' }}>
    <img src={product.thumbnail} className="card-img-top" alt={product.title} />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">${product.price}</p>
      <small className="text-muted">{product.category}</small>
    </div>
  </div>
);
export default ProductCard;