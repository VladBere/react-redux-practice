import { useSelector } from "react-redux";
import {  ShoppingItem } from "../store/slices/productsSlice";
import { ListItem } from "./list-item/list-item";
import { RootState } from "../store";

export const List = () => {
  const products = useSelector((state: RootState) => state.products.value);

  return (
    <ul className="bg-rose-200/50 rounded-lg text-blue-950 font-bold overflow-hidden">
      {products.map((item: ShoppingItem) => (
        <li key={item.id}>
          <ListItem item={item} />
        </li>
      ))}
    </ul>
  );
};
