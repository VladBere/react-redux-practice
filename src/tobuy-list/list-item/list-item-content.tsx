import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  resetTobuyProducts,
  ShoppingItem,
} from "../../store/slices/productsSlice";

interface ListItemContentProps {
  item: ShoppingItem;
  setIsEditing: (isEditing: boolean) => void;
}

export const ListItemContent: React.FC<ListItemContentProps> = ({
  item,
  setIsEditing,
}) => {
  const products = useSelector((state: RootState) => state.products.value);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const filteredList = products.filter((el) => el.id !== item.id);
    dispatch(resetTobuyProducts(filteredList));
  };

  const handleCheckBoxChange = (isBought: boolean) => {
    const newProducts = products.map((el) =>
        el.id == item.id
          ? {
              id: el.id,
              title: el.title,
              isBought: isBought,
            }
          : el
      );
    dispatch(resetTobuyProducts(newProducts))
  }

  return (
    <div className="flex h-10 items-center">
      <p className="w-[185px]">{item.isBought ? (<s className="text-blue-950/50">{item.title}</s>) : (item.title)}</p>
      <div className="flex items-center justify-center gap-x-[6px]">
        <input
          onChange={(e) => {
            handleCheckBoxChange(e.target.checked);
          }}
          type="checkbox"
          defaultChecked={item.isBought}
          className="size-4"
        />
        <button
          onClick={() => handleDelete()}
          className="size-[30px] p-1 bg-rose-600/80 rounded-[4px]"
        >
          <img src="/src/assets/trash-2.svg" alt="" />
        </button>
        <button
          onClick={() => {
            setIsEditing(true);
          }}
          className="size-[30px] p-1 bg-rose-600/80 rounded-[4px]"
        >
          <img src="/src/assets/pencil.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
