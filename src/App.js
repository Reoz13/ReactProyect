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
              <Route index element={<ItemListContainer type="sillas" />} />
              <Route
                exact
                path="jardin"
                element={<ItemListContainer type="sillas" subType="jardin" />}
              />
              <Route
                exact
                path="escritorio"
                element={
                  <ItemListContainer type="sillas" subType="escritorio" />
                }
              />
              <Route
                exact
                path="infantiles"
                element={
                  <ItemListContainer type="sillas" subType="infantiles" />
                }
              />
              <Route path=":id" element={<ItemDetailContainer />} />
            </Route>
            {/* Routeo Mesas  */}
            <Route path="mesas">
              <Route index element={<ItemListContainer type="mesas" />} />
              <Route
                exact
                path="industriales"
                element={
                  <ItemListContainer type="mesas" subType="industriales" />
                }
              />
              <Route
                exact
                path="redondas"
                element={<ItemListContainer type="mesas" subType="redondas" />}
              />
              <Route
                exact
                path="escritorios"
                element={
                  <ItemListContainer type="mesas" subType="escritorios" />
                }
              />
              <Route path=":id" element={<ItemDetailContainer />} />
            </Route>
            {/* Routeo Decoracion  */}
            <Route path="mobiliario">
              <Route index element={<ItemListContainer type="mobiliario" />} />
              <Route
                exact
                path="sofas-sillones"
                element={
                  <ItemListContainer
                    type="mobiliario"
                    subType="sofas-sillones"
                  />
                }
              />
              <Route
                exact
                path="auxiliar"
                element={
                  <ItemListContainer type="mobiliario" subType="auxiliar" />
                }
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
