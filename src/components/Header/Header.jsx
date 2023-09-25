import "./Header.css";

// eslint-disable-next-line react/prop-types
const Header = ({ title, title2 = null }) => {
  return (
    <div className="container container-style">
      <h1 className="principal-title"> {title}</h1>
      <h3>{title2}</h3>
    </div>
  );
};

export default Header;
