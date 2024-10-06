import { useEffect } from "react";
import { Form } from "./tobuy-list/form";
import { List } from "./tobuy-list/list";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { resetTobuyProducts } from "./store/slices/productsSlice";

export const App = () => {
  const products = useSelector((state: RootState) => state.products.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      dispatch(resetTobuyProducts(JSON.parse(storedProducts)));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <div className="bg-rose-100/60 h-screen flex flex-col justify-start pt-12 items-center">
      <Form />
      <List />
    </div>
  );
};
