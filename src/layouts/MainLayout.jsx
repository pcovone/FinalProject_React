// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div className="appContainer">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
