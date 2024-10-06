import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setTobuyProducts, ShoppingItem } from "../store/slices/productsSlice";

type Product = {
  title: string;
};

export const Form = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>();
  const onSubmit: SubmitHandler<Product> = (data) => {
    const newProduct: ShoppingItem = {
      id: Math.floor(Math.random() * 10000),
      title: data.title,
      isBought: false,
    };

    dispatch(setTobuyProducts(newProduct));
    reset();
  };

  return (
    <>
      <form className=" flex" onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="overflow-hidden rounded-lg border border-solid border-blue-950/60">
          <input
            type="text"
            placeholder="Something you want to buy..."
            className="w-[250px] py-2 transition-colors px-3 font-bold text-blue-950 bg-rose-200"
            {...register("title", { required: "Input product title!" })}
          />
          <button className="text-blue-950 font-bold bg-rose-500/85 h-full px-3">
            Add
          </button>
        </div>
      </form>
      <span className="mb-4 text-sm text-rose-800 ">
        {errors.title?.message}
      </span>
    </>
  );
};
