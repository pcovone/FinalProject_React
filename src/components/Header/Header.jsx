import "./Header.css";

// eslint-disable-next-line react/prop-types
const Header = ({ title, title2 = null }) => {
  return (
    <div className="container container-style" style={{ width: "100vw" }}>
      <h1 className="principal-title"> {title}</h1>
      <h3 className="second-title">{title2}</h3>
    </div>
  );
};

export default Header;
