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
  const popupItem = [
    { name: "популярності", type: "popular" },
    { name: "ціні", type: "price" },
    { name: "алфавіту", type: "alphabet" },
  ];

  return (
    <div className="container">
      <div className="content__top">
        <Categories arr={categoriesItem} />
        <SortPopup items={popupItem} />
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
