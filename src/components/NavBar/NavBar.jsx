import { Link } from "react-router-dom";
import useCollection from "../../hooks/useCollection";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const { products, loading } = useCollection("categories");

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        width: "100vw",
      }}
    >
      <div className="container">
        <Link className="navbar-brand navbar-brand--style" to="/">
          GreenTechInnovations
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {loading ? null : (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {products[0].categories.map((category, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className="dropdown-item"
                          to={`/category/${category}`}
                        >
                          {category}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            )}
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
