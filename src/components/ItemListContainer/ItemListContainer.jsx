import "./ItemListContainer.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ productsData }) => {
  const products = productsData;
  return (
    <div className="wrap-product container">
      {products.map((product) => (
        <div key={product.id} className="card" style={{ width: "18rem" }}>
          <img
            src={product.url}
            width={280}
            height={280}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <Link to={`/item/${product.id}`} className="btn-details">
              Ver detalles
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
