import "./App.css";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CartPage from "./components/Pages/CartPage/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* Routeo Sillas  */}
            <Route path="sillas">
              <Route index element={<ItemListContainer />} />
              <Route
                exact
                path="jardin"
                element={<ItemListContainer type="jardin" />}
              />
              <Route
                exact
                path="escritorio"
                element={<ItemListContainer type="escritorio" />}
              />
              <Route
                exact
                path="infantiles"
                element={<ItemListContainer type="infantiles" />}
              />
              <Route path=":id" element={<ItemDetailContainer />} />
            </Route>
            {/* Routeo Mesas  */}
            <Route path="mesas">
              <Route index element={<ItemListContainer />} />
              <Route
                exact
                path="industriales"
                element={<ItemListContainer type="industriales" />}
              />
              <Route
                exact
                path="redondas"
                element={<ItemListContainer type="redondas" />}
              />
              <Route
                exact
                path="escritorios"
                element={<ItemListContainer type="escritorio" />}
              />
              <Route path=":id" element={<ItemDetailContainer />} />
            </Route>
            {/* Routeo Decoracion  */}
            <Route path="decoraciones">
              <Route index element={<ItemListContainer />} />
              <Route
                exact
                path="lamparas"
                element={<ItemListContainer type="lamparas" />}
              />
              <Route
                exact
                path="tocadores-espejos"
                element={<ItemListContainer type="tocadores-espejos" />}
              />
              <Route
                exact
                path="plantas-maceteros"
                element={<ItemListContainer type="plantas-maceteros" />}
              />
              <Route path=":id" element={<ItemDetailContainer />} />
            </Route>
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
