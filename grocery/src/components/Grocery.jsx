import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";

export const Grocery = () => {
  const [list, setList] = useState([]);

  const getData = (data) => {
    const payload = {
      title: data,
      status: false,
      id: nanoid(8),
    };
    setList([...list, payload]);
  };

  const removeData = (id) => {
    setList(list.filter((el) => el.id != id));
  };

  return (
    <>
      <GroceryInput sendData={getData} />
      {list.map((el) => (
        <GroceryList key={el.id} {...el} removeData={removeData} />
      ))}
    </>
  );
};
