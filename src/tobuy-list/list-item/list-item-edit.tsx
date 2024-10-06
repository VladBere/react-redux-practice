import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  resetTobuyProducts,
  ShoppingItem,
} from "../../store/slices/productsSlice";

type Product = {
  title: string;
};

interface listItemEditProps {
  item: ShoppingItem;
  setIsEditing: (isEditing: boolean) => void;
}

export const ListItemEdit: React.FC<listItemEditProps> = ({
  item,
  setIsEditing,
}) => {
  const products = useSelector((state: RootState) => state.products.value);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<Product>();
  const onSubmit: SubmitHandler<Product> = (data) => {
    const editedProducts = products.map((el) =>
      el.id == item.id
        ? {
            id: el.id,
            title: data.title,
            isBought: el.isBought,
          }
        : el
    );

    dispatch(resetTobuyProducts(editedProducts));

    setIsEditing(false);
  };

  return (
    <>
      <form
        className=" flex justify-center"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div className="overflow-hidden rounded-lg">
          <input
            defaultValue={item.title}
            type="text"
            placeholder="New title"
            className="w-[183px] py-2 transition-colors px-3 font-bold text-blue-950 bg-rose-200"
            {...register("title", { required: "Input product title!" })}
          />
          <button className="text-blue-950 font-bold bg-rose-500/85 h-full px-3">
            Edit
          </button>
        </div>
      </form>
      <button
        onClick={() => {
          setIsEditing(false);
        }}
        className="size-[30px] "
      >
        <img src="/src/assets/x.svg" alt="" />
      </button>
    </>
  );
};
