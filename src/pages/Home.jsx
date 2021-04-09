import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";

export default function Home({ items }) {
  const categoriesItem = [
    "Всі",
    "Мясні",
    "Вегетеріанська",
    "Гриль",
    "Острі",
    "Закриті",
  ];
  const poputItem = ["популярності", "ціні", "алфавіту"];

  return (
    <div className="container">
      <div className="content__top">
        <Categories arr={categoriesItem} />
        <SortPopup items={poputItem} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {items.map((item) => {
          return <PizzaBlock key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
