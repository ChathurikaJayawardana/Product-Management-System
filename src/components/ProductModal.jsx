const ProductModal = ({ product, show, onHide, onAddToCart }) => {
  if (!product) return null;

  return (
    <div
      className={`modal fade ${show ? "show d-block" : "d-none"}`}
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1050,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onHide}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid mb-2"
            />
            <p>{product.description}</p>
            <div className="text-warning mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <i
                    key={i}
                    className={`bi bi-star${
                      i < Math.round(product.rating) ? "-fill" : ""
                    }`}
                  ></i>
                ))}
            </div>
            <p className="fw-bold">Price: ${product.price}</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
