import { ShoppingItem } from "../../store/slices/productsSlice";
import { useState } from "react";
import { ListItemEdit } from "./list-item-edit";
import { ListItemContent } from "./list-item-content";

interface ItemProps {
  item: ShoppingItem;
}

export const ListItem: React.FC<ItemProps> = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-[310px] flex items-center justify-between py-3 px-5">
      {!isEditing ? (
        <ListItemContent item={item} setIsEditing={setIsEditing} />
      ) : (
        <ListItemEdit item={item} setIsEditing={setIsEditing} />
      )}
    </div>
  );
};
