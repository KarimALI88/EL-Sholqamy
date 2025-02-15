import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";

function App() {
  return (
    <div className="bigcontainer">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
      <CartButton />
    </div>
  );
}

export default App;
