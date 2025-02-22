import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToProducts } from "./redux/reducers/productsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addToProducts([
        {
          id:1,
          image:
            "https://img.youm7.com/ArticleImgs/2022/9/29/69151-%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%AD%D8%A7%D8%AA%D9%8A.jpg",
          name: "1كفتة",
          price: "100.00",
          description: "4 صوابع وطبق رز ",
        },
        {
          id:2,
          image:
            "https://i.ytimg.com/vi/ha06JmZUigQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDgexEXrtshKiDbR6Qil4Mc2N_BgQ",
          name: "2كفتة",
          price: "100.00",
          description: "4 صوابع وطبق رز ",
        },
        {
          id:3,
          image:
            "https://img.youm7.com/ArticleImgs/2022/9/29/69151-%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%AD%D8%A7%D8%AA%D9%8A.jpg",
          name: "3كفتة",
          price: "100.00",
          description: "4 صوابع وطبق رز ",
        },
      ])
    );
  }, []);
  
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
