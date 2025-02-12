import { Button } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import MainHeader from "./components/MainHeader";


function App() {
  return (
    <div className="bigcontainer">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
