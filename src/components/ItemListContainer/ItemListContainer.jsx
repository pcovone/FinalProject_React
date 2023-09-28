import "./ItemListContainer.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ productsData }) => {
  const navigate = useNavigate();
  const products = productsData;
  return (
    <div className="wrap-product container" style={{ width: "100vw" }}>
      {products.map((product) => (
        <div key={product.id} className="card" style={{ width: "18rem" }}>
          <img
            src={product.url}
            width={280}
            height={280}
            className="card-img-top"
            alt={product.name}
          />
          <div
            className="card-body"
            style={{
              height: "180px",
            }}
          >
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <button
              className="btn-details"
              onClick={() => navigate(`/item/${product.id}`)}
            >
              Ver detalles
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
