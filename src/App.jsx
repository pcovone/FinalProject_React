import "./App.css";
import MainLayout from "./layouts/MainLayout";
import MainRouter from "./routes/MainRouter";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <MainLayout>
      <MainRouter />
    </MainLayout>
  );
}

export default App;
